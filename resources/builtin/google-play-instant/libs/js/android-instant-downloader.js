/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
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

const ANDROID_INSTANT_DOWNLOAD_PIPE = 'AndroidInstantDownloader';
const MAX_DOWNLOAD_TASK = 32;
const TIME_SECONDS = 20;
const FILE_NAME_SUFFIX = 'game';

let INSTANT_REMOTE_SERVER = '';

let textDownloader = new jsb.Downloader({
    countOfMaxProcessingTasks: MAX_DOWNLOAD_TASK,
    timeoutInSeconds: TIME_SECONDS,
    tempFileNameSuffix: FILE_NAME_SUFFIX
});
let downloaderCbMap = {};

textDownloader.setOnTaskError((function (task, errCode, errorCodeInternal, errorStr) {
    cc.log("download fail ", task.requestURL);
    let cb = downloaderCbMap[task.requestURL];
    cb && cb({
        errorCode: errCode
    });
    delete downloaderCbMap[task.requestURL];
}));

textDownloader.setOnFileTaskSuccess((function (task) {
    let cb = downloaderCbMap[task.requestURL];
    cb && cb(null, task);
    delete downloaderCbMap[task.requestURL];
}));

function _resolvePath(url) {
    INSTANT_REMOTE_SERVER = INSTANT_REMOTE_SERVER || "";
    let split = url.split("res/");
    let path = "";
    if (split.length > 1) {
        path = cc.path.join(INSTANT_REMOTE_SERVER, split[1]);
    } else {
        path = cc.path.join(INSTANT_REMOTE_SERVER, url);
    }
    return path;
}

function _createDownloadTask(item, callback) {
    let url = item.url;
    let remoteUrl = url.startsWith('http') ? url : _resolvePath(url);
    let remotePath = jsb.fileUtils.getWritablePath() + url;
    downloaderCbMap[remoteUrl] = callback;
    textDownloader.createDownloadFileTask(remoteUrl, remotePath, item.uuid);
}

let AndroidInstantDownloaderPipe = function () {
    this.id = ANDROID_INSTANT_DOWNLOAD_PIPE;
};

AndroidInstantDownloaderPipe.prototype.handle = function (item, callback) {
    if (jsb.fileUtils.isFileExist(item.url)) {
        return item;
    }

    let remotePath = jsb.fileUtils.getWritablePath() + item.url;
    if (jsb.fileUtils.isFileExist(remotePath)) {
        return item;
    }

    _createDownloadTask(item, (err, data) => {
        do {
            if (err) {
                cc.error("download fail ", err.errorMessage);
                break;
            }
        } while (false);
        callback();
    });
};

jsb.fileUtils.addSearchPath(jsb.fileUtils.getWritablePath());

let instantDownloaderPipe = new AndroidInstantDownloaderPipe();
let idx = cc.loader._pipes.indexOf(cc.loader.downloader) || 1;
cc.loader.insertPipe(instantDownloaderPipe, idx);
cc.loader.instantDownloaderPipe = instantDownloaderPipe;
