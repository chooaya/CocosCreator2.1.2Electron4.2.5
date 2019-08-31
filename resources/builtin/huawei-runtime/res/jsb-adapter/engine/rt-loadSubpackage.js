cc.loader.downloader.loadSubpackage = function (name, completeCallback) {
    if (typeof hbs !== "undefined") {
        hbs.loadSubpackage({
            subpackage: name,
            // forceLoad: true,
            success() {
                if (completeCallback) completeCallback();
            },
            fail() {
                if (completeCallback) completeCallback(new Error(`Failed to load subpackage ${name}`));
            }
        });
        return;
    }
};