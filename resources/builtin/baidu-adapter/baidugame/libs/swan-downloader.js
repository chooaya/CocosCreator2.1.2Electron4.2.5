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

var ID = 'SwanDownloader';

var non_text_format = [
    'js','png','jpg','bmp','jpeg','gif','ico','tiff','webp','image','pvr','etc','mp3','ogg','wav','m4a','font','eot','ttf','woff','svg','ttc'
];

var binary_format = [
    'bin'
];

const REGEX = /^\w+:\/\/.*/;

// used to control cache
var cacheQueue = {};
var checkNextPeriod = false;
// cache one per cycle
var cachePeriod = 100;

var fs = swan.getFileSystemManager ? swan.getFileSystemManager() : null;

var _newAssets = [];
var SwanDownloader = window.SwanDownloader = function () {
    this.id = ID;
    this.async = true;
    this.pipeline = null;
    this.REMOTE_SERVER_ROOT = '';
    this.SUBCONTEXT_ROOT = '';
    _newAssets = [];
};
SwanDownloader.ID = ID;

SwanDownloader.prototype.handle = function (item, callback) {

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

    if (cc.sys.browserType === cc.sys.BROWSER_TYPE_BAIDU_GAME_SUB) {
        if (REGEX.test(item.url)) {
            return null;
        }

        item.url = this.SUBCONTEXT_ROOT + '/' + item.url;

        if (item.type && non_text_format.indexOf(item.type) !== -1) {
            nextPipe(item, callback);
            return;
        }

        // if swan.getFileSystemManager is undefined, need to skip
        if (!fs) {
            return null;
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

SwanDownloader.prototype.cleanOldAssets = function () {
    cleanAllFiles(swan.env.USER_DATA_PATH, _newAssets, function (err) {
        if (err) {
            cc.warn(err);
        }
        else {
            for (var i = 0; i < _newAssets.length; ++i) {
                cc.log('reserve local file: ' + _newAssets[i]);
            }
            cc.log('Clean old Assets successfully!');
        }
    });
};

function cleanAllFiles(path, newAssets, finish) {
    if (!fs) {
        finish('swan.getFileSystemManager is undefined');
        return;
    }
    fs.readdir({
        dirPath: path,
        success: function (res) {
            var files = res.files;
            (function next(idx) {
                if (idx < files.length) {
                    var dirPath = path + '/' + files[idx];
                    var stat = fs.statSync(dirPath);
                    if (stat.isDirectory()) {
                        cleanAllFiles(dirPath, newAssets, function () {
                            next(idx + 1);
                        });
                    }
                    else {
                        // remove old assets
                        if (newAssets && newAssets.indexOf(dirPath) !== -1) {
                            next(idx + 1);
                            return;
                        }
                        fs.unlink({
                            filePath: dirPath,
                            success: function () {
                                cc.log('unlink local file ' + dirPath + ' successfully!');
                            },
                            fail: function (res) {
                                cc.warn('failed to unlink file(' + dirPath + '): ' + res ? res.errMsg : 'unknown error');
                            },
                            complete: function () {
                                next(idx + 1);
                            }
                        });
                    }
                }
                else {
                    finish();
                }

            })(0);
        },
        fail: function (res) {
            finish(res ? res.errMsg : 'unknown error');
        },
    });
}

SwanDownloader.prototype.cleanAllAssets = function () {
    _newAssets = [];
    cleanAllFiles(swan.env.USER_DATA_PATH, null, function (err) {
        if (err) {
            cc.warn(err);
        }
        else {
            cc.log('Clean all Assets successfully!');
        }
    });
};

var swanDownloader = window.swanDownloader = new SwanDownloader();

function nextPipe(item, callback) {
    var queue = cc.LoadingItems.getQueue(item);
    queue.addListener(item.id, function (item) {
        if (item.error) {
            if (item.url in cacheQueue) {
                delete cacheQueue[item.url];
            }
            else {
                fs && fs.unlink({
                    filePath: item.url,
                    success: function () {
                        cc.log('Load failed, removed local file ' + item.url + ' successfully!');
                    }
                });
            }
        }
    });
    callback(null, null);
}

function readText (item, callback) {
    if (!fs) {
        callback({
            status: 0,
            errorMessage: 'swan.getFileSystemManager is undefined'
        });
        return;
    }
    var url = item.url;
    var encodingFormat = 'utf8';
    for (var i = 0; i < binary_format.length; i++) {
        if (url.endsWith(binary_format[i])) {
            // read as ArrayBuffer
            encodingFormat = '';
            break;
        }
    }

    fs.readFile({
        filePath: url,
        encoding: encodingFormat,
        success: function (res) {
            var queue = cc.LoadingItems.getQueue(item);
            queue.addListener(item.id, function (item) {
                if (item.error) {
                    fs.unlink({
                        filePath: url,
                        success: function () {
                            cc.log('Load failed, removed local file ' + url + ' successfully!');
                        }
                    });
                }
            });
            
            if (res.data) {
                item.states[cc.loader.downloader.id] = cc.Pipeline.ItemState.COMPLETE;
                callback(null, res.data);
            }
            else {
                callback({
                    status: 0,
                    errorMessage: "Empty file: " + url
                });
            }
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

function readFromLocal (item, callback) {
    if (!fs) {
        callback({
            status: 0,
            errorMessage: 'swan.getFileSystemManager is undefined'
        });
        return;
    }

    var localPath = swan.env.USER_DATA_PATH + '/' + item.url;

    // Read from local file cache
    fs.access({
        path: localPath,
        success: function () {

            // cache new asset
            _newAssets.push(localPath);

            item.url = localPath;
            if (item.type && non_text_format.indexOf(item.type) !== -1) {
                nextPipe(item, callback);
            }
            else {
                readText(item, callback);
            }
        },
        fail: function (res) {
            // No remote server indicated, then continue to downloader
            if (!swanDownloader.REMOTE_SERVER_ROOT) {
                callback(null, null);
                return;
            }

            downloadRemoteFile(item, callback);
        }
    });
}

function ensureDirFor (path, callback) {
    if (!fs) {
        callback('swan.getFileSystemManager is undefined');
        return;
    }

    // cc.log('mkdir:' + path);
    var ensureDir = cc.path.dirname(path);
    if (ensureDir === "bdfile://usr" || ensureDir === "http://usr") {
        callback();
        return;
    }
    fs.access({
        path: ensureDir,
        success: callback,
        fail: function (res) {
            ensureDirFor(ensureDir, function () {
                fs.mkdir({
                    dirPath: ensureDir,
                    complete: callback,
                });
            });
        },
    });
}

function cacheAsset (url, localPath) {
    cacheQueue[url] = localPath;

    if (!checkNextPeriod) {
        checkNextPeriod = true;
        function cache () {
            checkNextPeriod = false;
            for (var url in cacheQueue) {
                var localPath = cacheQueue[url];
                ensureDirFor(localPath, function () {
                    // Save to local path
                    fs.copyFile({
                        srcPath: url,
                        destPath: localPath,
                        success: function (res) {
                            cc.log('cache success ' + localPath);
                        }
                    });
                });
                
                delete cacheQueue[url];
                if (!cc.js.isEmptyObject(cacheQueue) && !checkNextPeriod) {
                    checkNextPeriod = true;
                    setTimeout(cache, cachePeriod);
                }
                return;
            }
        };
        setTimeout(cache, cachePeriod);
    }
}

function downloadRemoteFile (item, callback) {
    // Download from remote server
    var relatUrl = item.url;

    // filter protocol url (E.g: https:// or http:// or ftp://)
    if (REGEX.test(relatUrl)) {
        callback(null, null);
        return;
    }

    var remoteUrl = swanDownloader.REMOTE_SERVER_ROOT + '/' + relatUrl;
    item.url = remoteUrl;
    swan.downloadFile({
        url: remoteUrl,
        success: function (res) {
            if (res.statusCode === 200 && res.tempFilePath) {
                // http reading is not cached
                var temp = res.tempFilePath;
                item.url = temp;
                if (item.type && non_text_format.indexOf(item.type) !== -1) {
                    nextPipe(item, callback);
                }
                else {
                    readText(item, callback);
                }
                cacheAsset(temp, swan.env.USER_DATA_PATH + '/' + relatUrl);
                
            }
            else {
                cc.warn("Download file failed: " + remoteUrl);
                callback({
                    status: 0,
                    errorMessage: res && res.errMsg ? res.errMsg : "Download file failed: " + remoteUrl
                });
            }
        },
        fail: function (res) {
            // Continue to try download with downloader, most probably will also fail
            callback({
                status: 0,
                errorMessage: res && res.errMsg ? res.errMsg : "Download file failed: " + remoteUrl
            }, null);
        }
    });
}

// function downloadRemoteTextFile (item, callback) {
//     // Download from remote server
//     var relatUrl = item.url;
//     var remoteUrl = swanDownloader.REMOTE_SERVER_ROOT + '/' + relatUrl;
//     item.url = remoteUrl;
//     swan.request({
//         url: remoteUrl,
//         success: function(res) {
//             if (res.data) {
//                 if (res.statusCode === 200 || res.statusCode === 0) {
//                     var data = res.data;
//                     item.states[cc.loader.downloader.ID] = cc.Pipeline.ItemState.COMPLETE;
//                     if (data) {
//                         if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
//                             // Should we check if item.type is json ? If not, loader behavior could be different
//                             item.states[cc.loader.loader.ID] = cc.Pipeline.ItemState.COMPLETE;
//                             callback(null, data);
//                             data = JSON.stringify(data);
//                         }
//                         else {
//                             callback(null, data);
//                         }
//                     }

//                     // Save to local path
//                     var localPath = swan.env.USER_DATA_PATH + '/' + relatUrl;
//                     // Should recursively mkdir first
//                     fs.writeFile({
//                         filePath: localPath,
//                         data: data,
//                         encoding: 'utf8',
//                         success: function (res) {
//                             cc.log('Write file to ' + res.savedFilePath + ' successfully!');
//                         },
//                         fail: function (res) {
//                             // undone implementation
//                         }
//                     });
//                 } else {
//                     cc.warn("Download text file failed: " + remoteUrl);
//                     callback({
//                         status:0, 
//                         errorMessage: res && res.errMsg ? res.errMsg : "Download text file failed: " + remoteUrl
//                     });
//                 }
//             }
//         },
//         fail: function (res) {
//             // Continue to try download with downloader, most probably will also fail
//             callback(null, null);
//         }
//     });
// }
