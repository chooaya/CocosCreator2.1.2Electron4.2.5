var WEBPACK_NAME = "webpack.config.js";
var MAIN_JS_NAME = "game.js";
var GAME_CONFIG_JSONS_NAME = "manifest.json";
var QGAME_ADAPTER_NAME = "qgame-adapter.js";
var BABELRC_NAME = ".babelrc";

var path = require('path');
var fs = require('fire-fs');
var fixPath = require('fix-path');

var zipRootPath;
let RUNTIME_CONFIG;

var SRC_NAME = "src";
var CONFIG_NAME = "config";
var ENGINE_NAME = "engine";
var SIGN_NAME = "sign";

// 导出的 vivo小游戏 根目录
var dirTarget;
// cp配置的应用图标路径
var iconPath;
// 写入manifest.json的应用图标的路径

var NPM_PATH = '/usr/local/bin/';
var VIVOExternals = {};
var privatePath;
var certificatePath;
var useDebugKey;
var sendStatisticsDebug;
var sendStatisticsSourceMaps;
var isFixPath = false;
var showNpmPath;

// 获取资源文件
function getResPath(name) {
    var resPath = path.join(__dirname, "res");
    return path.join(resPath, name);
}

// 添加不需要编译的js
function handleExternalFile(dir, rootPath) {
    var list = fs.readdirSync(dir);

    list.forEach(function (filePath) {
        var fullPath = path.join(dir, filePath);
        var stat = fs.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            handleExternalFile(fullPath, rootPath);
        } else {
            var fileExt = path.extname(fullPath);
            if (fileExt === ".js") {
                var relativeToZipPath = fullPath.slice(rootPath.length + 1, fullPath.length);

                // 去除 main.js 以及 jsb-adapter 下除了 index.js 的文件
                if (relativeToZipPath !== "main.js" &&
                    (relativeToZipPath.indexOf("jsb-adapter") !== 0 || filePath === "index.js" || filePath === "rename-adapter.js")) {

                    // 替换 \\ 为 /
                    relativeToZipPath = relativeToZipPath.replace(/\\/g, '/');
                    VIVOExternals[relativeToZipPath] = "commonjs " + relativeToZipPath;
                }
            }
        }
    });
}

function zipVIVOExternals() {
    var webpackName = WEBPACK_NAME;
    var webpackSource = getResPath(webpackName);
    var webpackContent = fs.readFileSync(webpackSource, "utf8");
    // 导出的 vivo小游戏 config目录
    var configTarget = path.join(dirTarget, CONFIG_NAME);

    webpackContent = webpackContent.replace("EXTERNALS_PLACEHOLDER", JSON.stringify(VIVOExternals));

    // config目录若存在
    fs.emptyDirSync(configTarget);
    // 在游戏工程的config目录里添加webpack.config.js
    fs.writeFileSync(path.join(configTarget, WEBPACK_NAME), webpackContent);
}

function writeConfigFile() {
    var cfgName = 'game.config.json';
    var projectPath = Editor.Project.path;
    if (typeof projectPath === 'undefined') {
        projectPath = Editor.projectPath;
    }
    var projectCgfFile = path.join(projectPath, cfgName);
    var package = RUNTIME_CONFIG.package;
    var name = RUNTIME_CONFIG.name;
    var versionName = RUNTIME_CONFIG.versionName;
    var versionCode = RUNTIME_CONFIG.versionCode;
    var minPlatformVersion = RUNTIME_CONFIG.minPlatformVersion;
    var deviceOrientation = RUNTIME_CONFIG.deviceOrientation;
    var logLevel = RUNTIME_CONFIG.logLevel;

    var jsonObj = {
        "package": package,
        "name": name,
        "icon": `/image/${path.parse(iconPath).base}`,
        "versionName": versionName,
        "versionCode": versionCode,
        "minPlatformVersion": minPlatformVersion,
        "deviceOrientation": deviceOrientation,
        "type": "game",
        "config": {
            "logLevel": logLevel
        },
        "display": {
        }
    };
    var jsonStr = JSON.stringify(jsonObj);
    fs.writeFileSync(projectCgfFile, jsonStr);
}

function handleSrc() {
    var mainName = 'main.js';
    var fileMain = path.join(zipRootPath, mainName);
    var mainString = fs.readFileSync(fileMain, "utf8");

    mainString = mainString.replace('window.jsb', 'window.qg');

    var index = mainString.indexOf("require('src/settings");

    mainString = mainString.slice(0, index) + "require('jsb-adapter/engine/rename-adapter.js');\nrequire('src/qgame-adapter.js');\n\t" + mainString.slice(index);
    mainString = mainString.replace("require('jsb-adapter/jsb-engine.js');", "require('jsb-adapter/engine/index.js');");
    mainString = mainString.replace("var isRuntime = (typeof loadRuntime === 'function');", '');
    mainString = mainString.replace('if (isRuntime)', 'if (true)');
    fs.writeFileSync(fileMain, mainString);

    // 导出的 vivo小游戏 src目录
    var srcTarget = path.join(dirTarget, SRC_NAME);
    // 如果src目录存在，则先删除再创建目录
    fs.emptyDirSync(srcTarget);
    // 添加game.js
    fs.writeFileSync(path.join(srcTarget, MAIN_JS_NAME), mainString);

    var cfgName = 'game.config.json';
    var projectPath = Editor.Project.path;
    if (typeof projectPath === 'undefined') {
        projectPath = Editor.projectPath;
    }
    var projectCgfFile = path.join(projectPath, cfgName);

    fs.writeFileSync(path.join(srcTarget, GAME_CONFIG_JSONS_NAME), fs.readFileSync(projectCgfFile));

    var imagePath = path.join(srcTarget, 'image');
    // 判断游戏过程里image目录是否存在
    fs.emptyDirSync(imagePath);
    // 添加应用图标
    fs.writeFileSync(path.join(imagePath, path.parse(iconPath).base), fs.readFileSync(iconPath));
}

// 处理debug模式的签名
function handleSign() {
    // 导出的 vivo小游戏 sign目录
    var signTarget = path.join(dirTarget, SIGN_NAME);
    // sign目录若存在，则删除
    fs.emptyDirSync(signTarget);

    if (!useDebugKey) {
        var releasePath = path.join(signTarget, "release");
        if (!fs.existsSync(releasePath)) {
            fs.mkdirSync(releasePath);
        }
        //拷贝填写路径的 private.pem和certificate.pemwen
        if (fs.existsSync(privatePath)) {
            fs.writeFileSync(path.join(releasePath, "private.pem"), fs.readFileSync(privatePath));
        }
        if (fs.existsSync(certificatePath)) {
            fs.writeFileSync(path.join(releasePath, "certificate.pem"), fs.readFileSync(certificatePath));
        }
    }

    var debugPath = path.join(signTarget, 'debug');
    // 创建sign里的debug目录
    fs.mkdirSync(debugPath);

    var fullPath = getResPath("certificate.pem");
    // 添加debug模式的certificate.pem
    fs.writeFileSync(path.join(debugPath, 'certificate.pem'), fs.readFileSync(fullPath));
    fullPath = getResPath("private.pem");
    // 添加debug模式的private.pem
    fs.writeFileSync(path.join(debugPath, 'private.pem'), fs.readFileSync(fullPath));
}

function handlePackage() {
    var fullPath = getResPath("package.json");
    //添加 package.json到游戏过程目录
    fs.writeFileSync(path.join(dirTarget, 'package.json'), fs.readFileSync(fullPath));
}

// 处理engine目录
function handleEngine(dirRes, dirSrc, dirAdapter, event) {
    // 导出的 vivo小游戏 engine目录
    var engineTarget = path.join(dirTarget, ENGINE_NAME);
    // 如果src目录存在，则先删除再创建目录
    fs.emptyDirSync(engineTarget);

    // 将creator导出的res、src、jsb-adapter目录拷贝到游戏过程的engine目录里
    fs.copySync(dirSrc, path.join(engineTarget, 'src'));
    fs.copySync(dirAdapter, path.join(engineTarget, 'jsb-adapter'));
    var isTinyPackage = RUNTIME_CONFIG.tinyPackageMode;
    var target = path.join(engineTarget, 'jsb-adapter');
    var rtAdapterTarget = path.join(target, 'engine/rt-adapter.js');
    var jsbAdapterIndexPath = path.join(target, "engine/index.js");
    var requireStr = "\nrequire(\'.\/rt-adapter.js\');";
    if (isTinyPackage === true) {
        var remoteServer = RUNTIME_CONFIG.tinyPackageServer || '';
        remoteServer = remoteServer.trim();
        if (remoteServer === '') {
            event.reply(new Error("please enter remote server root"));
            return;
        }

        // 将 rt-adapter.js 文件添加到 engine 目录中
        var rtAdapterPath = getResPath('rt-adapter.js');
        var rtAdapterStr = fs.readFileSync(rtAdapterPath, "utf8");
        rtAdapterStr = rtAdapterStr.replace('REMOTE_SERVER_ROOT_PLACE_HOLDER', remoteServer);
        fs.writeFileSync(rtAdapterTarget, rtAdapterStr);

        // 为 index.js 文件添加引入 rt-adapter.js
        var indexStr = fs.readFileSync(jsbAdapterIndexPath, "utf8");
        indexStr += requireStr
        fs.writeFileSync(jsbAdapterIndexPath, indexStr);
    } else {
        //非小包模式才拷贝资源，否则让用户自己拷贝资源到自己的服务端中
        fs.copySync(dirRes, path.join(engineTarget, 'res'))
    }
}

function onBeforeBuildFinish(event, options) {
    Editor.log('Checking config file ' + options.dest);
    zipRootPath = path.resolve(options.dest, '..', 'tempBuildDir');

    // 导出的游戏过程目录路径
    dirTarget = options.dest;
    // fs.copySync(dirTarget, zipRootPath);
    if (fs.existsSync(path.join(dirTarget, 'main.js'))) {
        fs.copySync(path.join(dirTarget, 'main.js'), path.join(zipRootPath, 'main.js'));
    }
    if (fs.existsSync(path.join(dirTarget, 'src'))) {
        fs.copySync(path.join(dirTarget, 'src'), path.join(zipRootPath, 'src'));
    }
    if (fs.existsSync(path.join(dirTarget, 'res'))) {
        fs.copySync(path.join(dirTarget, 'res'), path.join(zipRootPath, 'res'));
    }
    if (fs.existsSync(path.join(dirTarget, 'subpackages'))) {
        fs.copySync(path.join(dirTarget, 'subpackages'), path.join(zipRootPath, 'subpackages'));
    }
    fs.removeSync(path.join(dirTarget, 'main.js'));
    fs.removeSync(path.join(dirTarget, 'src'));
    fs.removeSync(path.join(dirTarget, 'res'));
    fs.removeSync(path.join(dirTarget, 'subpackages'));


    if (!fs.existsSync(dirTarget)) {
        fs.mkdirSync(dirTarget)
    }

    Editor.log('Building game ' + options.platform + ' to ' + dirTarget);

    // 将配置信息写入game.config.json
    writeConfigFile();

    var dirRes = path.join(zipRootPath, 'res');
    var dirSrc = path.join(zipRootPath, 'src');
    var dirAdapter = getResPath('jsb-adapter');

    var qgamePath = getResPath(QGAME_ADAPTER_NAME);
    var babelrcPath = getResPath(BABELRC_NAME);

    // 将.babelrc 拷贝到 vivo小游戏 工程目录
    fs.writeFileSync(path.join(dirTarget, BABELRC_NAME), fs.readFileSync(babelrcPath));
    // 将qgame-adapter.js拷贝到 dirSrc 目录下
    fs.writeFileSync(path.join(dirSrc, QGAME_ADAPTER_NAME), fs.readFileSync(qgamePath));
    // 处理 src 目录
    handleSrc();
    //支持vivo低版本window.__cccanvas
    supportLowVersion();
    // 导出 sign 目录
    handleSign();
    // 处理 package.json
    handlePackage();
    // 导出 engine目录
    handleEngine(dirRes, dirSrc, dirAdapter, event);
    // 处理不需要编译的文件
    var dirList = [{
        dir: dirRes,
        rootPath: zipRootPath
    }, {
        dir: dirSrc,
        rootPath: zipRootPath
    }, {
        dir: dirAdapter,
        rootPath: path.join(__dirname, "res")
    }];

    dirList.forEach(item => {
        handleExternalFile(item.dir, item.rootPath);
    });
    // 添加 webpack.config.js 文件
    zipVIVOExternals();

    // 导出rpk包
    var exec = require('child_process').exec;
    var isWindowsPlatform = process.platform === 'win32';
    var npmCmd = isWindowsPlatform ? 'npm.cmd' : 'npm';

    var environmentPath = {};
    //判断自定义npm路径
    if (RUNTIME_CONFIG.npmPath) {
        isFixPath = false;
        Editor.log(Editor.T('vivo-runtime.custom_npm_path_config'), RUNTIME_CONFIG.npmPath);
        //windown
        if (isWindowsPlatform) {
            environmentPath['Path'] = RUNTIME_CONFIG.npmPath;
        }
        else {
            environmentPath['PATH'] = RUNTIME_CONFIG.npmPath;
            environmentPath['PATH'] += ":/usr/bin:/bin:/usr/sbin:/sbin";

        }
    }
    else {
        if (showNpmPath) {
            Editor.log(Editor.T('vivo-runtime.custom_npm_path_not_config'));
        }
        if (!isFixPath) {
            isFixPath = true;
            fixPath();
        }
        environmentPath = process.env;
    }


    //检查是否安装nodejs
    function _isInstallNodejs(complete) {
        exec(`${npmCmd} -v`, {
            env: environmentPath,
            cwd: dirTarget
        }, (error) => {
            if (!error) {
                //检查成功
                if (complete) {
                    complete();
                }
            }
            else {
                if (RUNTIME_CONFIG.npmPath) {
                    event.reply(new Error(Editor.T('vivo-runtime.custom_npm_path_config_error')));
                    return;
                }
                Editor.Ipc.sendToWins('builder:events', 'npmPath-show');
                event.reply();
                if (isWindowsPlatform) {
                    Editor.log(Editor.T('vivo-runtime.not_install_nodejs_windows_error'));
                }
                else {
                    Editor.log(Editor.T('vivo-runtime.not_install_nodejs_mac_error'));
                }
                return;
            }
        })
    }

    function copyTinyRes() {
        var res = path.join(zipRootPath, 'res');
        var dirRes = path.join(dirTarget, 'res');
        if (fs.existsSync(res) && !fs.existsSync(dirRes)) {
            fs.copySync(res, dirRes);
            if (fs.existsSync(zipRootPath)) {
                fs.removeSync(zipRootPath);
            }
        }
    }

    // 构建rpk包
    function build() {
        Editor.log(Editor.T('vivo-runtime.rpk_installing'));

        exec(`${npmCmd} run ${!useDebugKey ? "release" : "build"}`, {
            env: environmentPath,
            cwd: dirTarget
        }, (error) => {
            copyTinyRes();
            if (!error) {
                Editor.log(Editor.T('vivo-runtime.rpk_install_success'));
                sendStatistics();
                event.reply();
            }
            else {
                Editor.log(Editor.T('vivo-runtime.rpk_install_fail') + error);
            }
        })
    }

    var gulp = require('gulp');
    gulp.task('build-adapter', function () {
        //let jsbAdapterBuild = Editor.require('app://editor/share/build-jsb-adapter');
        let jsbAdapterBuild = require('./build-jsb-adapter');//Editor.require('app://editor/share/build-jsb-adapter');
        return jsbAdapterBuild.build({
            rootPath: path.join(dirTarget, 'engine', "jsb-adapter"),
            dstPath: path.join(dirTarget, 'engine', "jsb-adapter"),
            excludedModules: []
        });
    });

    gulpTask();
    function gulpTask() {
        gulp.start('build-adapter', function (err) {
            if (err) {
                // callback(err);
                event.reply(new Error(Editor.T('vivo-runtime.zip_file_error') + error));
                return;
            }
            var enginePath = path.join(dirTarget, 'engine', "jsb-adapter", 'engine');
            fs.emptyDirSync(enginePath);
            var src = path.join(dirTarget, 'engine', "jsb-adapter", 'jsb-engine.js');
            var renameSrc = path.join(dirTarget, 'engine', "jsb-adapter", 'engine', 'index.js')
            fs.renameSync(src, renameSrc);
            _isInstallNodejs(function () {
                // 如果已安装npm包，直接构建rpk包
                if (fs.existsSync(path.join(dirTarget, 'node_modules')) && !fs.existsSync(path.join(dirTarget, 'node_modules', '.staging'))) {
                    build();
                }
                else {
                    Editor.log(Editor.T('vivo-runtime.installing_npm_network'));
                    // 安装依赖的npm包
                    exec(`${npmCmd} install`, {
                        env: environmentPath,
                        cwd: dirTarget
                    }, (error) => {
                        if (!error) {
                            Editor.log(Editor.T('vivo-runtime.npm_installed_success'));
                            build();
                        }
                        else {
                            event.reply(new Error(Editor.T('vivo-runtime.npm_install_fail')));
                        }
                    })
                }
            });
        });
    }


}

function supportLowVersion() {
    var fileRuntimeJs = path.join(zipRootPath, 'src', 'cocos2d-runtime.js');
    if (fs.existsSync(fileRuntimeJs)) {
        var mainString = fs.readFileSync(fileRuntimeJs, "utf8");
        //debug
        mainString = mainString.replace('window.__canvas;', 'window.__canvas || window.__cccanvas;');
        //release
        mainString = mainString.replace('window.__canvas,', 'window.__canvas || window.__cccanvas,');
        fs.writeFileSync(fileRuntimeJs, mainString);
    }
}

// 删除目录
function deleteDir(dirPath) {
    let files = fs.readdirSync(dirPath);

    for (var i = 0; i < files.length; i++) {
        let newPath = path.join(dirPath, files[i]);
        let stat = fs.statSync(newPath);

        if (stat.isDirectory()) {
            deleteDir(newPath);
        } else {
            fs.unlinkSync(newPath);
        }
    }

    fs.rmdirSync(dirPath)
}

//先读取runtime相应的配置信息
function loadRuntimeSettings(event, options) {
    var value = Editor.Profile.load('profile://project/vivo-runtime.json');
    RUNTIME_CONFIG = value.data;
    var package = RUNTIME_CONFIG.package;
    var name = RUNTIME_CONFIG.name;
    var icon = RUNTIME_CONFIG.icon;
    var versionName = RUNTIME_CONFIG.versionName;
    var versionCode = RUNTIME_CONFIG.versionCode;
    var minPlatformVersion = RUNTIME_CONFIG.minPlatformVersion;
    showNpmPath = RUNTIME_CONFIG.showNpmPath;
    sendStatisticsDebug = options.debug;
    sendStatisticsSourceMaps = options.sourceMaps;

    iconPath = icon || '';
    iconPath = icon.trim();
    privatePath = RUNTIME_CONFIG.privatePath || '';
    certificatePath = RUNTIME_CONFIG.certificatePath || '';
    useDebugKey = RUNTIME_CONFIG.useDebugKey;


    var configList = [{
        name: Editor.T('vivo-runtime.package'),
        value: package
    }, {
        name: Editor.T('vivo-runtime.name'),
        value: name
    }, {
        name: Editor.T('vivo-runtime.desktop_icon'),
        value: icon
    }, {
        name: Editor.T('vivo-runtime.version_name'),
        value: versionName
    }, {
        name: Editor.T('vivo-runtime.version_number'),
        value: versionCode
    }, {
        name: Editor.T('vivo-runtime.support_min_platform'),
        value: minPlatformVersion
    }];

    // 配置字段校验
    var validator = true;
    var nameList = [];
    var errorText = '';
    configList.forEach(function (item) {
        if (!item.value) {
            validator = false;
            nameList.push(item.name);
        }
    });

    if (!validator) {
        errorText += nameList.join('、') + Editor.T('vivo-runtime.not_empty');
    }

    if (icon) {
        if (!fs.existsSync(iconPath)) {
            validator = false;
            errorText += icon + Editor.T('vivo-runtime.icon_not_exist');
        }
    }

    //不勾选调试秘钥库
    if (!useDebugKey) {
        if (privatePath === "") {
            validator = false;
            errorText += Editor.T('vivo-runtime.select_private_pem_path');
        } else if (!fs.existsSync(privatePath)) {
            validator = false;
            errorText += `${privatePath} ` + Editor.T('vivo-runtime.signature_not_exist');
        }

        if (certificatePath === "") {
            validator = false;
            errorText += Editor.T('vivo-runtime.select_certificate_pem_path');
        } else if (!fs.existsSync(certificatePath)) {
            validator = false;
            errorText += `${certificatePath}` + Editor.T('vivo-runtime.signature_not_exist');
        }
    }

    if (!validator) {
        event.reply(new Error(errorText));
        return;
    }

    onBeforeBuildFinish(event, options);
}

function sendStatistics() {
    if (RUNTIME_CONFIG.useDebugKey ||
        RUNTIME_CONFIG.package.indexOf("test") ||
        RUNTIME_CONFIG.name.indexOf("test") ||
        sendStatisticsDebug ||
        sendStatisticsSourceMaps
    ) {
        return;
    }
    Editor.Metrics.trackEvent('Project', 'BetaPlatforms', 'vivo-runtime',
        {
            packageName: RUNTIME_CONFIG.package,//包名
            appName: RUNTIME_CONFIG.name,// 应用名字
            version: RUNTIME_CONFIG.versionName,//应用版本
            orientation: RUNTIME_CONFIG.deviceOrientation//屏幕方向
        }
    );
}

module.exports = {
    name: Editor.T('vivo-runtime.platform_name'),
    platform: 'qgame',
    extends: 'runtime',
    buttons: [
        Editor.Builder.DefaultButtons.Build,
        { label: Editor.T('BUILDER.play'), message: 'play' },
    ],
    messages: {
        'build-finished': loadRuntimeSettings,
        'play': (event, options) => {
            Editor.Panel.open('vivo-runtime.qrcode', options);
        }
    },
    settings: Editor.url('packages://vivo-runtime/build-runtime-ui.js')
};