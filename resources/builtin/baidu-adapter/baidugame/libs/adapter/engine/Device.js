// check in CCSys.js
const BAIDU_GAME = 107;
const BROWSER_TYPE_BAIDU_GAME_SUB = 'baidugamesub';
const BROWSER_TYPE_BAIDU_GAME = 'baidugame';
const OS_ANDROID = 'Android';
const OS_IOS = 'iOS';
const systemInfo = {};

function initSystemInfo () {
    systemInfo.platform = BAIDU_GAME;
    // baiduGame subDomain
    if (!swan.getSystemInfoSync) {
        systemInfo.browserType = BROWSER_TYPE_BAIDU_GAME_SUB;
        // todo: adapt subDomain
    }
    else {
        let env = swan.getSystemInfoSync();
        systemInfo.browserType = BROWSER_TYPE_BAIDU_GAME;
        systemInfo.isMobile = true;
        systemInfo.language = env.language.substr(0, 2);
        let system = env.system.toLowerCase();
        if (env.platform === "android") {
            systemInfo.os = OS_ANDROID;
        }
        else if (env.platform === "ios") {
            systemInfo.os = OS_IOS;
        }
        else if (env.platform === 'devtools') {
            systemInfo.isMobile = false;
            if (system.indexOf('android') > -1) {
                systemInfo.os = OS_ANDROID;
            }
            else if (system.indexOf('ios') > -1) {
                systemInfo.os = OS_IOS;
            }
        }
        // Adaptation to Android P
        if (system === 'android p') {
            system = 'android p 9.0';
        }
    
        let version = /[\d\.]+/.exec(system);
        systemInfo.osVersion = version ? version[0] : system;
        systemInfo.osMainVersion = parseInt(systemInfo.osVersion);
        systemInfo.browserVersion = env.version;
    
        let w = env.windowWidth;
        let h = env.windowHeight;
        let ratio = env.pixelRatio || 1;
        systemInfo.windowPixelResolution = {
            width: ratio * w,
            height: ratio * h
        };
    }

    systemInfo.localStorage = window.localStorage;

    systemInfo.capabilities = {
        "canvas": true,
        "opengl": (systemInfo.browserType !== BROWSER_TYPE_BAIDU_GAME_SUB),
        "webp": false
    };
    systemInfo.audioSupport = {
        ONLY_ONE: false,
        WEB_AUDIO: false,
        DELAY_CREATE_CTX: false,
        format: ['.mp3']
    };
}

window.__device = {
    init (cb) {
        initSystemInfo();
        // send main context info to subDomain
        if (swan.getOpenDataContext) {
            swan.getOpenDataContext().postMessage({
                fromAdapter: true,
                event: 'main-context-info',
                sysInfo: JSON.stringify(systemInfo),
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio,
            });
            cb && cb();
        }
        else {
            swan.onMessage(function (data) {
                if (data.fromAdapter) {
                    if (data.event === 'main-context-info') {
                        let info = JSON.parse(data.sysInfo);
                        // info addon systemInfo
                        Object.assign(info, systemInfo);
                        Object.assign(systemInfo, info);

                        Object.defineProperty(window, 'innerWidth', {
                            enumerable: true,
                            get () {
                                return data.innerWidth;
                            },
                        });
                        Object.defineProperty(window, 'innerHeight', {
                            enumerable: true,
                            get () {
                                return data.innerHeight;
                            },
                        });
                        Object.defineProperty(window, 'devicePixelRatio', {
                            enumerable: true,
                            get () {
                                return data.devicePixelRatio;
                            },
                        });
                        
                        cb && cb();
                    }
                }
            });
        }
    },
    getSystemInfo () {
        return systemInfo;
    },
};