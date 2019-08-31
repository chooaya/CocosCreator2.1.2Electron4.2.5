'use strict';

const {
    dialog,
    BrowserWindow,
    globalShortcut
} = require('electron');

const FS = require("fire-fs");
const Path = require("fire-path");
// const MainLib = require('./app/dist/main');
const os = require('os');

const external_js = Path.join(os.homedir(), '.sdkbox', 'creator', 'app', 'dist', 'mainext.js');
let main_interface = null;
if (FS.existsSync(external_js)) {
    main_interface = require(external_js);
}

global.SDKBOX_CHANEL = 'creator';
let importPrompted = true;
let showLoading = true;
let SDKBoxWin;


function tryRequireMainExt() {
    if (null == main_interface) {
        if (FS.existsSync(external_js)) {
            main_interface = require(external_js);
        }
    }

    return main_interface;
}

module.exports = {

    load: function() {
        globalShortcut.register('f12', () => {
            let win = BrowserWindow.getFocusedWindow();
            if (!win) return;
            win.webContents.toggleDevTools();
        });
        tryRequireMainExt();
        if (main_interface) {
            main_interface.load();
        }
        if (SDKBoxWin) {
            SDKBoxWin.close();
            SDKBoxWin = null;
        }
    },

    unload: function() {
        tryRequireMainExt();
        if (main_interface) {
            main_interface.unload();
        }
    },

    messages: {
        'loadingfinish': function() {
            main_interface = null;
            tryRequireMainExt();
        },
        'launch': function() {
            tryRequireMainExt();
            if (showLoading) {
                if (null != main_interface) {
                    showLoading = main_interface.needUpdate();
                }
            }

            if (showLoading) {
                if (SDKBoxWin) {
                    SDKBoxWin.show();
                } else {
                    const win = new BrowserWindow({
                        width: 960,
                        height: 600,
                        minWidth: 960,
                        minHeight: 600
                    });

                    win.loadURL(`file://${Path.join(__dirname, 'app', 'pages')}/loading.html`);
                }
            } else {
                main_interface.launch();
            }
        },
        'import-query': function(event, target) {
            if ('android' != target.platform && 'ios' != target.platform) {
                return;
            }
            let code = Editor.Dialog.messageBox({
                type: 'info',
                buttons: [Editor.T('MESSAGE.cancel'), Editor.T('MESSAGE.yes')],
                title: 'SDKBox',
                message: ('zh' == Editor.lang ? '安装 SDKBox 插件?' : 'Install SDKBox Plugin?')
            });
            if (1 === code) {
                Editor.Ipc.sendToMain('sdkbox:launch');
            }
        },
        'editor:build-start': function(event, target) {
            try {
                if (main_interface) {
                    if (typeof main_interface.handleEvent === "function") {
                        main_interface.handleEvent('SDKBox:build-start', event, target);
                    }
                }
            } catch (error) {
                Editor.log(error);
            }
        },
        'editor:build-finished': function(event, target) {
            try {
                if (main_interface) {
                    if (typeof main_interface.handleEvent === "function") {
                        main_interface.handleEvent('SDKBox:build-finish', event, target);
                    }
                }
            } catch (error) {
                Editor.log(error);
            }
        },
    },
};
