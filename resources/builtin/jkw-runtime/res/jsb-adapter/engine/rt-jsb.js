/****************************************************************************
 LICENSING AGREEMENT

 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
'use strict';

var rt = loadRuntime();
var fs = rt.getFileSystemManager();
jsb.fileUtils = {
    isFileExist: function (path) {
        var result = false;
        try {
            fs.accessSync(path);
            result = true;
        } catch (error) { }
        return result;
    },

    getStringFromFile: function (url) {
        var result;
        try {
            result = fs.readFileSync(url, "utf8");
        } catch (error) { }
        return result;
    },

    getDataFromFile: function (url) {
        var result;
        try {
            result = fs.readFileSync(url);
        } catch (error) { }
        return result;
    },

    getWritablePath: function () {
        return `${rt.env.USER_DATA_PATH}/`;
    },

    writeToFile: function (map, url) {
        var str = JSON.stringify(map);
        var result = false;
        try {
            fs.writeFileSync(url, str, "utf8");
            result = true;
        } catch (error) { }
        return result;
    },

    getValueMapFromFile: function (url) {
        var map_object = {};
        var read;
        try {
            read = fs.readFileSync(url, "utf8");
        } catch (error) { }
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
        var savedFilePath = fs.saveFileSync(tempFilePath, filePath);
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

jsb.AudioEngine = rt.AudioEngine;

var _downloaderMap = new WeakMap();
jsb.Downloader = function () {
    _downloaderMap.set(this, {
        _successCb: undefined,
        _errorCb: undefined
    });
}
jsb.Downloader.prototype = {
    constructor: jsb.Downloader,
    setOnFileTaskSuccess: function (cb) {
        _downloaderMap.get(this)["_successCb"] = cb;
    },
    setOnTaskError: function (cb) {
        _downloaderMap.get(this)["_errorCb"] = cb;
    },
    createDownloadFileTask: function (url, storagePath) {
        var _this = this;
        rt.downloadFile({
            url: url,
            filePath: storagePath,
            success: function (res) {
                var cb = _downloaderMap.get(_this)["_successCb"];
                if (typeof cb === "function") {
                    cb({
                        requestURL: url,
                        storagePath: storagePath
                    });
                }
            },
            fail: function (res) {
                var cb = _downloaderMap.get(_this)["_errorCb"];
                if (typeof cb === "function") {
                    cb({
                        requestURL: url,
                        storagePath: storagePath
                    }, res.errCode, res.statusCode, res.errMsg);
                }
            },
            complete: function () { }
        })
    }
}