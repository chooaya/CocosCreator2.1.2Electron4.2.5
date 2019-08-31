require('adapter/mi-builtin.js');
require('adapter/engine/Platform.js');
require('adapter/mi-downloader.js');
require('src/settings.js');
var settings = window._CCSettings;
require('boot.js');
require(settings.debug ? 'cocos2d-js.js' : 'cocos2d-js-min.js');

cc.macro.ENABLE_WEBGL_ANTIALIAS = true;

require('adapter/engine/index.js');

// Adjust devicePixelRatio
cc.view._maxPixelRatio = 3;

miDownloader.REMOTE_SERVER_ROOT = "";
miDownloader.SUBCONTEXT_ROOT = "";
var pipeBeforeDownloader = cc.loader.subPackPipe || cc.loader.md5Pipe || cc.loader.assetLoader;
cc.loader.insertPipeAfter(pipeBeforeDownloader, miDownloader);

// Release Image objects after uploaded gl texture
cc.macro.CLEANUP_IMAGE_CACHE = true;

miDownloader.init();
window.boot();