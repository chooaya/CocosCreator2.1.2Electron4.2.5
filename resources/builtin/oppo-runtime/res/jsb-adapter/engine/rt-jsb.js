/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var rt = loadRuntime();
jsb.fileUtils = {
    getStringFromFile: function (url) {
        var result;
        try {
            result = rt.getFileSystemManager().readFileSync(url, "utf8");
        } catch (error) {
            cc.error(error);
        }
        return result;
    },

    getDataFromFile: function (url) {
        var result;
        try {
            result = rt.getFileSystemManager().readFileSync(url);
        } catch (error) {
            cc.error(error);
        }
        return result;
    },

    getWritablePath: function () {
        return `${rt.env.USER_DATA_PATH}/`;
    },

    writeToFile: function (map, url) {
        var str = JSON.stringify(map);
        var result = false;
        try {
            rt.getFileSystemManager().writeFileSync(url, str, "utf8");
            result = true;
        } catch (error) {
            cc.error(error);
        }
        return result;
    },

    getValueMapFromFile: function (url) {
        var map_object = {};
        var read;
        try {
            read = rt.getFileSystemManager().readFileSync(url, "utf8");
        } catch (error) {
            cc.error(error);
        }
        if (!read) {
            return map_object;
        }
        map_object = JSON.parse(read);
        return map_object;
    },
};

if (typeof jsb.saveImageData === 'undefined') {
    jsb.saveImageData = function (data, width, height, filePath) {
        var index = filePath.lastIndexOf(".");
        if (index === -1) {
            return false;
        }
        var fileType = filePath.substr(index + 1);
        var tempFilePath = rt.saveImageTempSync({
            'data': data,
            'width': width,
            'height': height,
            'fileType': fileType,
        });
        if (tempFilePath === '') {
            return false;
        }
        var savedFilePath = rt.getFileSystemManager().saveFileSync(tempFilePath, filePath);
        if (savedFilePath === filePath) {
            return true;
        }
        return false;
    }
}

if (typeof jsb.setPreferredFramesPerSecond === 'undefined'
    && typeof rt.setPreferredFramesPerSecond !== 'undefined') {
    jsb.setPreferredFramesPerSecond = rt.setPreferredFramesPerSecond;
} else {
    jsb.setPreferredFramesPerSecond = function () {
        console.error("The jsb.setPreferredFramesPerSecond is not define!");
    }
}

if (jsb.device && !jsb.device.getDeviceMotionValue) {
    let [_tempX, _tempY, _tempZ] = [0, 0, 0];
    let _tempGravitySenceArray = undefined;

    jsb.device.setAccelerometerEnabled = function (enabled) {
        if ((_tempGravitySenceArray !== undefined) === enabled) return;
        if (!enabled) {
            qg.stopAccelerometer();
            _tempX = 0;
            _tempY = 0;
            _tempZ = 0;
            _tempGravitySenceArray = undefined;
            return;
        }
        _tempGravitySenceArray = new Array(6).fill(0);
        qg.onAccelerometerChange(function (obj) {
            _tempGravitySenceArray[3] = 1.25 * obj.x + _tempX;
            _tempGravitySenceArray[4] = 1.25 * obj.y + _tempY;
            _tempGravitySenceArray[5] = 1.25 * obj.z + _tempZ;
            _tempX = 0.8 * _tempX + 0.2 * _tempGravitySenceArray[3];
            _tempY = 0.8 * _tempY + 0.2 * _tempGravitySenceArray[4];
            _tempZ = 0.8 * _tempZ + 0.2 * _tempGravitySenceArray[5];
        })
    }

    jsb.device.getDeviceMotionValue = function () {
        if (_tempGravitySenceArray === undefined) {
            return undefined;
        }
        return _tempGravitySenceArray.slice();
    }
}
