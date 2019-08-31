cc.loader.downloader.loadSubpackage = function (name, completeCallback) {
    swan.loadSubpackage({
        name: name,
        success: function () {
            if (completeCallback) completeCallback();
        },
        fail: function () {
            if (completeCallback) completeCallback(new Error(`Failed to load subpackage ${name}`));
        }
    })
};

function downloadScript (item, callback, isAsync) {
    var url = '../../../' + item.url;
    require(url);
    callback(null, item.url);
}

function loadFont (item) {
    var url = item.url;
    var fontFamily = swan.loadFont(url);
    return fontFamily || 'Arial';
}

function loadImage (item) {
    var loadByDeserializedAsset = (item._owner instanceof cc.Asset);
    if (loadByDeserializedAsset) {
        // already has cc.Asset
        return null;
    }

    var image = item.content;

    // load cc.Texture2D
    var rawUrl = item.rawUrl;
    var tex = item.texture || new cc.Texture2D();
    tex._uuid = item.uuid;
    tex.url = rawUrl;
    tex._setRawAsset(rawUrl, false);
    tex._nativeAsset = image;
    return tex;
}

cc.loader.downloader.addHandlers({
    js : downloadScript,

    pvr: cc.loader.downloader.extMap.png,
    etc: cc.loader.downloader.extMap.png,
});

cc.loader.loader.addHandlers({
    // Images
    png: loadImage,
    jpg: loadImage,
    bmp: loadImage,
    jpeg: loadImage,
    gif: loadImage,
    ico: loadImage,
    tiff: loadImage,
    webp: loadImage,
    image: loadImage,

    pvr: cc.loader.loader.extMap.png,
    etc: cc.loader.loader.extMap.png,

    // Font
    font: loadFont,
    eot: loadFont,
    ttf: loadFont,
    woff: loadFont,
    svg: loadFont,
    ttc: loadFont,
});
