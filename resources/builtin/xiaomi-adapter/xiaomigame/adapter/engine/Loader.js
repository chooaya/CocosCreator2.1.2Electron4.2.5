cc.loader.downloader.loadSubpackage = function (name, completeCallback) {
    qg.loadSubpackage({
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
    var url = '../../' + item.url;
    require(url);
    callback(null, item.url);
}

function loadFont (item) {
    var url = item.url;
    var fontFamily = qg.loadFont(url);
    return fontFamily || 'Arial';
}

cc.loader.downloader.addHandlers({
    js : downloadScript
});

cc.loader.loader.addHandlers({
    // Font
    font: loadFont,
    eot: loadFont,
    ttf: loadFont,
    woff: loadFont,
    svg: loadFont,
    ttc: loadFont,
});
