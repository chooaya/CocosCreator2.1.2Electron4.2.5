require('./libs/adapter/builtin/index.js');
require('./libs/adapter/engine/Device.js');  // provide device related infos
__device.init(function () {
    var Parser = require('./libs/xmldom/dom-parser.js');
    window.DOMParser = Parser.DOMParser;
    require('./libs/swan-downloader.js');
    require('./src/settings.js');
    let settings = window._CCSettings;
    require('main.js');
    require(settings.debug ? 'cocos2d-js.js' : 'cocos2d-js-min.js');
    require('./libs/adapter/engine/index.js');

    swanDownloader.REMOTE_SERVER_ROOT = "";
    swanDownloader.SUBCONTEXT_ROOT = "";
    var pipeBeforeDownloader = cc.loader.subPackPipe || cc.loader.md5Pipe || cc.loader.assetLoader;
    cc.loader.insertPipeAfter(pipeBeforeDownloader, swanDownloader);

    if (cc.sys.browserType === cc.sys.BROWSER_TYPE_BAIDU_GAME_SUB) {
        var _BAIDU_SUBDOMAIN_DATA = require('src/subdomain.json.js');
        cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
            cc.Pipeline.Downloader.PackDownloader._doPreload("BAIDU_SUBDOMAIN", _BAIDU_SUBDOMAIN_DATA);
        });

        require('./libs/sub-context-adapter.js');
    }
    else {
        // Release Image objects after uploaded gl texture
        cc.macro.CLEANUP_IMAGE_CACHE = true;
    }

    window.boot();
});