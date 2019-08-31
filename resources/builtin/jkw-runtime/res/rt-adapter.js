/****************************************************************************
 Copyright (c) 2017 Chukong Technologies Inc.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Chukong Aipu reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var rt = loadRuntime();
var ID = 'RTAdapter';

var non_text_format = [
    'js', 'png', 'jpg', 'bmp', 'jpeg', 'gif', 'ico', 'tiff', 'webp', 'image', 'mp3', 'ogg', 'wav', 'm4a', 'font', 'eot', 'ttf', 'woff', 'svg', 'ttc'
];

const REGEX = /^\w+:\/\/.*/;

// has sub domain
var isSubdomain = !rt.getFileSystemManager;

var fs = isSubdomain ? {} : rt.getFileSystemManager();

var RTAdapter = window.RTAdapter = function () {
    this.id = ID;
    this.async = true;
    this.pipeline = null;
    this.REMOTE_SERVER_ROOT = 'REMOTE_SERVER_ROOT_PLACE_HOLDER';
};
RTAdapter.ID = ID;

RTAdapter.prototype.handle = function (item, callback) {
    if (item.type === 'js') {
        callback(null, null);
        return;
    }
    if (item.type === 'uuid') {
        var result = cc.Pipeline.Downloader.PackDownloader.load(item, callback);
        // handled by PackDownloader
        if (result !== undefined) {
            // null result
            if (!!result) {
                return result;
            }
            else {
                return;
            }
        }
    }

    if (isSubdomain) {
        if (REGEX.test(item.url)) {
            callback(null, null);
            return;
        }

        if (item.type && non_text_format.indexOf(item.type) !== -1) {
            nextPipe(item, callback);
            return;
        }
    }

    var filePath = item.url;
    // Read from package
    fs.access({
        path: filePath,
        success: function () {
            if (item.type && non_text_format.indexOf(item.type) !== -1) {
                nextPipe(item, callback);
            }
            else {
                readText(item, callback);
            }
        },
        fail: function (res) {
            readFromLocal(item, callback);
        }
    });
};

var rtAdapter = window.rtAdapter = new RTAdapter();
cc.loader.insertPipeAfter(cc.loader.assetLoader, rtAdapter);

function nextPipe(item, callback) {
    var queue = cc.LoadingItems.getQueue(item);
    queue.addListener(item.id, function (item) {
        if (item.error) {
            fs.unlink({
                filePath: item.url,
                success: function () {
                    cc.log('Load failed, removed local file ' + item.url + ' successfully!');
                }
            });
        }
    });
    callback(null, null);
}

function getFileEncodeFormat(type) {
    if (type === 'bin' || type === 'binary' || type === 'dbbin') {
        return 'ArrayBuffer';
    }
    return 'utf8';
}

function readText(item, callback) {
    var encodeFormat = getFileEncodeFormat(item.type);
    var url = item.url;
    fs.readFile({
        filePath: url,
        encoding: encodeFormat,
        success: function (res) {
            item.states[cc.loader.downloader.id] = cc.Pipeline.ItemState.COMPLETE;
            callback(null, res.data);
        },
        fail: function (res) {
            cc.warn('Read file failed: ' + url);
            fs.unlink({
                filePath: url,
                success: function () {
                    cc.log('Read file failed, removed local file ' + url + ' successfully!');
                }
            });
            callback({
                status: 0,
                errorMessage: res && res.errMsg ? res.errMsg : "Read text file failed: " + url
            });
        }
    });
}

function readFromLocal(item, callback) {
    var localPath = rt.env.USER_DATA_PATH + '/' + item.url;
    // Read from local file cache
    fs.access({
        path: localPath,
        success: function () {
            item.url = localPath;
            item.rawUrl = localPath;
            if (item.type && non_text_format.indexOf(item.type) !== -1) {
                nextPipe(item, callback);
            }
            else {
                readText(item, callback);
            }
        },
        fail: function (res) {
            // No remote server indicated, then continue to downloader
            if (!rtAdapter.REMOTE_SERVER_ROOT) {
                callback(null, null);
                return;
            }

            downloadRemoteFile(item, callback);
        }
    });
}

function downloadRemoteFile(item, callback) {
    // Download from remote server
    var relatUrl = item.url;
    // filter protocol url (E.g: https:// or http:// or ftp://)
    if (REGEX.test(relatUrl)) {
        callback(null, null);
        return;
    }

    var remoteUrl = rtAdapter.REMOTE_SERVER_ROOT + '/' + relatUrl;
    item.url = remoteUrl;
    rt.downloadFile({
        url: remoteUrl,
        success: function (res) {
            if (res.statusCode === 404) {
                cc.warn("Download file failed: " + remoteUrl);
                callback({
                    status: 0,
                    errorMessage: res && res.errMsg ? res.errMsg : "Download file failed: " + remoteUrl
                });
            }
            else if (res.tempFilePath) {
                // http reading is not cached
                var localPath = rt.env.USER_DATA_PATH + '/' + relatUrl;
                console.log("--->download success temp path : " + localPath);
                // Save to local path
                fs.saveFile({
                    tempFilePath: res.tempFilePath,
                    filePath: localPath,
                    success: function (res) {
                        cc.log('save:' + localPath);
                        item.url = res.savedFilePath;
                        if (item.type && non_text_format.indexOf(item.type) !== -1) {
                            nextPipe(item, callback);
                        }
                        else {
                            readText(item, callback);
                        }
                    },
                    fail: function (res) {
                        // Failed to save file, then just use remote url
                        callback(null, null);
                    }
                });
            }
        },
        fail: function (res) {
            // Continue to try download with downloader, most probably will also fail
            callback(null, null);
        }
    })
}
