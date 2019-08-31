cc.loader.downloader.loadSubpackage = function (name, completeCallback) {
    var rt = loadRuntime();
    rt.loadSubpackage({
        name: name,//fileName,
        success: function () {
            if (completeCallback) completeCallback();
        },
        fail: function () {
            if (completeCallback) completeCallback(new Error(`Failed to load subpackage ${name}`));
        }
    })
};

if (cc.Pipeline.SubPackPipe && cc.Pipeline.SubPackPipe.prototype && cc.Pipeline.SubPackPipe.prototype.transformURL) {
    let _tempTransformUrl = cc.Pipeline.SubPackPipe.prototype.transformURL;
    cc.Pipeline.SubPackPipe.prototype.transformURL = function (url) {
        var url = _tempTransformUrl(url);
        return url.replace("subpackages/", "");
    };
}