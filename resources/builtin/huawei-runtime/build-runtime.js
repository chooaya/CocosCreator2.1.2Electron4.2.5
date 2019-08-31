var GAME_CONFIG_JSONS_NAME = "manifest.json";
var path = require('path');
var fs = require('fire-fs');
var fixPath = require('fix-path');

var zipRootPath;
let RUNTIME_CONFIG;

// 导出的huawei快游戏目录名称
var MAIN_JS = "game.js";
var NPM_PATH = '/usr/local/bin/';

// 导出的快游戏根目录
var dirTarget;
var dirTargetBuildDir;
// cp配置的应用图标路径
var iconPath;
// 写入manifest.json的应用图标的路径

var kitPath;
var subPackageData;
var privatePath;
var certificatePath;
var useDebugKey;
var customMainfestPath;
var environmentPath = {};
var sendStatisticsDebug;
var sendStatisticsSourceMaps;
var isFixPath = false;
var showNpmPath;

// 获取资源文件
function getResPath(name) {
    var resPath = path.join(__dirname, "res");
    return path.join(resPath, name);
}

// 获取打包工具目录
function _getpackPath() {
    return path.join(__dirname, "package");
}

function writeConfigFile(dist) {
    var projectCgfFile = path.join(dist, GAME_CONFIG_JSONS_NAME);
    var package = RUNTIME_CONFIG.package;
    var name = RUNTIME_CONFIG.name;
    var versionName = RUNTIME_CONFIG.versionName;
    var versionCode = RUNTIME_CONFIG.versionCode;
    var minPlatformVersion = RUNTIME_CONFIG.minPlatformVersion;
    var deviceOrientation = RUNTIME_CONFIG.deviceOrientation;
    var logLevel = RUNTIME_CONFIG.logLevel;

    var permissions = [{
        "origin": "*"
    }];

    var jsonObj = {
        "package": package,
        "appType": 'fastgame',
        "name": name,
        "versionName": versionName,
        "versionCode": versionCode,
        "icon": `/image/${path.parse(iconPath).base}`,
        "minPlatformVersion": minPlatformVersion,
        "permissions": permissions,
        "router": {}
    };

    if (subPackageData) {
        jsonObj.subpackages = subPackageData;
    }

    if (fs.existsSync(customMainfestPath)) {
        var readJson;
        try {
            readJson = fs.readJsonSync(customMainfestPath);
            Editor.log(Editor.T('huawei-runtime.custom_manifest_data'), JSON.stringify(readJson));
        } catch (error) {
            Editor.log(Editor.T('huawei-runtime.custom_manifest_data_error'));
        }

        if (readJson) {
            for (var key in readJson) {
                if (key === "package" ||
                    key === "appType" ||
                    key === "name" ||
                    key === "versionName" ||
                    key === "versionCode" ||
                    key === "icon" ||
                    key === "minPlatformVersion" ||
                    key === "permissions"
                ) {
                    continue;
                }
                jsonObj[key] = readJson[key];
            }
        }
    }

    var config = {};
    var display = {};
    if (jsonObj.config) {
        config = jsonObj.config;
    }

    if (jsonObj.display) {
        display = jsonObj.display;
    }
    //覆盖自定义数据，以构建面板数据为准
    config.logLevel = logLevel;
    display.orientation = deviceOrientation;
    display.fullScreen = RUNTIME_CONFIG.fullScreen;
    jsonObj.display = display;

    var jsonStr = JSON.stringify(jsonObj);
    fs.writeFileSync(projectCgfFile, jsonStr);
}

function copyFileFromOptionsDest(options, dist) {
    fs.emptyDirSync(dist);
    //获取jsb-link目录的res,src,adapter,subpackages的路径
    var dirRes = path.join(options.dest, 'res');
    var dirSrc = path.join(options.dest, 'src');
    var dirAdapter = getResPath('jsb-adapter');
    var dirSub = path.join(options.dest, 'subpackages');
    //拷贝jsb-adapter,main.js,res,src,subpackages 到huawei目录
    var jsbPath = path.join(dist, 'jsb-adapter');
    var resPath = path.join(dist, 'res');
    var srcPath = path.join(dist, 'src');
    var subPath = path.join(dist, 'subpackages');

    fs.copySync(dirAdapter, jsbPath);
    var isTinyPackage = RUNTIME_CONFIG.tinyPackageMode;
    if (!isTinyPackage) {
        fs.copySync(dirRes, resPath);
    }
    fs.copySync(dirSrc, srcPath);

    //复制分包
    if (fs.existsSync(dirSub)) {
        fs.copySync(dirSub, subPath);
    }

    // 添加应用图标
    handleLogo(dist);

    copySubpackagePipe();

    //拷贝main.js
    handleMainJs(dist);

    //小包模式
    handleTinyPackage(jsbPath);

    // 将配置信息写入manifest.json
    writeConfigFile(dist);

    function handleTinyPackage(jsbPath) {
        var isTinyPackage = RUNTIME_CONFIG.tinyPackageMode;
        if (isTinyPackage) {
            var remoteServer = RUNTIME_CONFIG.tinyPackageServer;
            if (remoteServer === '') {
                event.reply(new Error("please enter remote server root"));
                return;
            }
            // 将 rt-adapter.js 文件添加到 engine 目录中
            var rtAdapterTarget = path.join(jsbPath, 'engine/rt-adapter.js');
            var rtAdapterPath = getResPath('rt-adapter.js');
            var rtAdapterStr = fs.readFileSync(rtAdapterPath, "utf8");
            fs.ensureDirSync(jsbPath)
            fs.ensureDirSync(path.join(jsbPath, 'engine'));
            rtAdapterStr = rtAdapterStr.replace('REMOTE_SERVER_ROOT_PLACE_HOLDER', remoteServer);
            fs.writeFileSync(rtAdapterTarget, rtAdapterStr);
            // 为 index.js 文件添加引入 rt-adapter.js
            var jsbAdapterIndexPath = path.join(getResPath('jsb-adapter'), "engine/index.js");
            var indexStr = fs.readFileSync(jsbAdapterIndexPath, "utf8");
            if (indexStr.indexOf("require(\'.\/rt-adapter.js\');") == -1) {
                indexStr += "require(\'.\/rt-adapter.js\');";
            }
            var indexPath = path.join(jsbPath, "engine/index.js");
            fs.writeFileSync(indexPath, indexStr);
        }
    }
}

function onBeforeBuildFinish(event, options) {
    Editor.log('Checking config file ' + options.dest);
    // 导出的游戏过程目录路径
    dirTarget = options.dest//path.resolve(, '..', `./${QUICKGAME_NAME}`);
    dirTargetBuildDir = path.join(dirTarget, 'build');
    kitPath = _getpackPath();
    zipRootPath = options.dest;
    //清空，不存在则创建
    fs.emptyDirSync(dirTargetBuildDir);

    var buildPath = path.join(dirTarget, "build");

    handleSubPackageData(options);

    fs.emptyDirSync(path.join(dirTarget, 'dist'));
    copyFileFromOptionsDest(options, buildPath);
    renameIndexJsToGameJs();

    var gulp = require('gulp');
    gulp.task('build-adapter', function () {
        //let jsbAdapterBuild = Editor.require('app://editor/share/build-jsb-adapter');
        let jsbAdapterBuild = require('./build-jsb-adapter');//Editor.require('app://editor/share/build-jsb-adapter');
        return jsbAdapterBuild.build({
            rootPath: path.join(buildPath, 'jsb-adapter'),
            dstPath: path.join(buildPath, 'jsb-adapter'),
            excludedModules: []
        });
    });

    gulpTask();
    function gulpTask() {
        gulp.start('build-adapter', function (err) {
            if (err) {
                // callback(err);
                event.reply(new Error(Editor.T('huawei-runtime.package') + err));
                return;
            }
            var enginePath = path.join(buildPath, "jsb-adapter", 'engine');
            if (fs.existsSync(enginePath)) {
                fs.removeSync(enginePath);
            }
            handleRpk();
        });
    }



    function handleRpk() {
        var quickCmd = path.join(kitPath, "lib", "bin");
        if (process.env.PATH.indexOf(quickCmd) === -1) {
            process.env.PATH += `:${quickCmd}`;
        }
        // 导出rpk包
        var exec = require('child_process').exec;

        var npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

        environmentPath = {}
        //判断自定义npm路径
        if (RUNTIME_CONFIG.npmPath) {
            isFixPath = false;
            Editor.log(Editor.T('huawei-runtime.custom_npm_path_config'), RUNTIME_CONFIG.npmPath);
            if (process.platform === 'win32') {
                environmentPath['Path'] = RUNTIME_CONFIG.npmPath;
            } else {
                environmentPath['PATH'] = RUNTIME_CONFIG.npmPath;
            }
        }
        else {
            if (showNpmPath) {
                Editor.log(Editor.T('huawei-runtime.custom_npm_path_not_config'));
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
                        event.reply(new Error(Editor.T('huawei-runtime.custom_npm_path_config_error')));
                        return;
                    }
                    Editor.Ipc.sendToWins('builder:events', 'npmPath-show');
                    if (process.platform === 'win32') {
                        event.reply(new Error(Editor.T('huawei-runtime.window_default_npm_path_error')));
                        return;
                    }
                    event.reply(new Error(Editor.T('huawei-runtime.mac_default_npm_path_error')));
                }
            })
        }

        _isInstallNodejs(function () {
            // 如果已安装npm包，直接构建rpk包
            if (fs.existsSync(path.join(kitPath, 'node_modules'))) {
                buildRpk(event, exec);
            } else {
                //安装依赖的npm包
                _npmInstall();

                function _npmInstall() {
                    Editor.log(Editor.T('huawei-runtime.begin_install_npm'));
                    exec(`${npmCmd} install`, {
                        env: process.env,
                        cwd: kitPath
                    }, (error) => {
                        if (!error) {
                            Editor.log(Editor.T('huawei-runtime.npm_installed_success'));
                            buildRpk(event, exec);
                            return;
                        }
                        event.reply(new Error(Editor.T('huawei-runtime.npm_installed_success') + error));
                    });
                }
            }
        });

    }
}

function renameIndexJsToGameJs() {
    var dirSubPackage = path.join(dirTargetBuildDir, 'subpackages');
    if (fs.existsSync(dirSubPackage)) {
        //修改index.js为game.js
        for (var dir in subPackageData) {
            var indexJsPath = path.join(dirTargetBuildDir, subPackageData[dir].resource, 'index.js');
            var gameJsPath = path.join(dirTargetBuildDir, subPackageData[dir].resource, 'game.js');
            if (fs.existsSync(indexJsPath)) {
                fs.renameSync(indexJsPath, gameJsPath);
            }
        }
    }
}

// 构建rpk包
function buildRpk(event, exec) {
    var outputBuildPath = path.join(dirTarget, 'dist');
    var inputBuildPath = path.join(dirTarget, 'build');
    //get privatePem and certificatePem path
    var privatePem = !useDebugKey ? privatePath : getResPath("private.pem");
    var certificatePem = !useDebugKey ? certificatePath : getResPath("certificate.pem");
    var package = RUNTIME_CONFIG.package;
    var indexPath = path.join(kitPath, 'index.js');
    var nodePath = 'node';

    var buildRpkCmd = `${nodePath} ${indexPath} ${inputBuildPath} ${outputBuildPath} ${package} ${privatePem} ${certificatePem}`;
    Editor.log(Editor.T('huawei-runtime.rpk_installing'));
    var buildPath = dirTarget;
    exec(`${buildRpkCmd}`, {
        env: environmentPath,
        cwd: buildPath
    }, (error) => {
        if (error) {
            event.reply(new Error(Editor.T('huawei-runtime.rpk_install_fail') + error));
            return;
        }
        Editor.log(Editor.T('huawei-runtime.rpk_install_success'));
        copyResTiny();
        sendStatistics();
        event.reply();
    });
}

function copyResTiny() {
    if (!isTinyPackage) {
        return;
    }
    var dirRes = path.join(zipRootPath, 'res');
    var resPath = path.join(dirTarget, 'res');
    var isTinyPackage = RUNTIME_CONFIG.tinyPackageMode;
    fs.copySync(dirRes, resPath);
}

function handleLogo(dist) {
    var imagePath = path.join(dist, 'image');
    fs.ensureDirSync(imagePath);
    fs.writeFileSync(path.join(imagePath, path.parse(iconPath).base), fs.readFileSync(iconPath));
}

function copySubpackagePipe() {
    if (!subPackageData) {
        return;
    }
    var pipe = getResPath('subpackage-pipe.js');
    fs.copySync(pipe, path.join(dirTargetBuildDir, 'src', 'subpackage-pipe.js'));
}

function handleMainJs(dist) {
    var fileMain = path.join(zipRootPath, "main.js");
    var mainString = fs.readFileSync(fileMain, "utf8");
    mainString = mainString.replace("require('jsb-adapter/engine/index.js');", "require('jsb-adapter/jsb-engine.js');");
    if (subPackageData) {
        mainString = mainString.replace("window._CCSettings = undefined;", "");
        var string = "\nrequire('src/subpackage-pipe.js');";
        var len = mainString.indexOf("cc.game.run(option, onStart);");
        mainString = mainString.slice(0, len) + string + mainString.slice(len);
    }
    fs.writeFileSync(path.join(dist, MAIN_JS), mainString);
}

function handleSubPackageData(options) {
    var subPackageJson = options.buildResults._subpackages;
    if (JSON.stringify(subPackageJson) == "{}") {
        subPackageData = undefined;
    } else {
        var subpackArray = [];
        var backPackArray = [];
        for (var Key in subPackageJson) {
            var fileName = subPackageJson[Key].name;
            var filePath = subPackageJson[Key].path;
            var newPath = path.join(path.dirname(filePath), fileName);
            newPath = newPath.replace(/\\/g, "/");

            // 添加配置文件数组
            var subObj = {
                "name": fileName,
                "resource": newPath //path.join(newPath, MAIN_JS)
            }
            var group = {
                "name": fileName,
                "original": filePath,
                "newPath": newPath
            }
            subpackArray.push(subObj);
            backPackArray.push(group);
        }

        subPackageData = subpackArray;
        backUpGroup = backPackArray;
    }

}

//先读取runtime相应的配置信息
function loadRuntimeSettings(event, options) {

    var value = Editor.Profile.load('profile://project/huawei-runtime.json');
    RUNTIME_CONFIG = value.data;
    var package = RUNTIME_CONFIG.package;
    var name = RUNTIME_CONFIG.name;
    var icon = RUNTIME_CONFIG.icon;
    var versionName = RUNTIME_CONFIG.versionName;
    var versionCode = RUNTIME_CONFIG.versionCode;
    var minPlatformVersion = RUNTIME_CONFIG.minPlatformVersion;
    showNpmPath = RUNTIME_CONFIG.showNpmPath;
    privatePath = RUNTIME_CONFIG.privatePath;
    certificatePath = RUNTIME_CONFIG.certificatePath;
    useDebugKey = RUNTIME_CONFIG.useDebugKey;
    iconPath = icon ? icon : '';
    customMainfestPath = RUNTIME_CONFIG.manifestPath;

    sendStatisticsDebug = options.debug;
    sendStatisticsSourceMaps = options.sourceMaps;

    if (!customMainfestPath) {
        Editor.log(Editor.T('huawei-runtime.not_mainfest_data'));
    }

    var configList = [{
        name: Editor.T('huawei-runtime.package'),
        value: package
    }, {
        name: Editor.T('huawei-runtime.name'),
        value: name
    }, {
        name: Editor.T('huawei-runtime.desktop_icon'),
        value: icon
    }, {
        name: Editor.T('huawei-runtime.version_name'),
        value: versionName
    }, {
        name: Editor.T('huawei-runtime.version_number'),
        value: versionCode
    }, {
        name: Editor.T('huawei-runtime.support_min_platform'),
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
        errorText += nameList.join('、') + Editor.T('huawei-runtime.not_empty');
    }

    if (icon) {
        if (!fs.existsSync(iconPath)) {
            validator = false;
            errorText += icon + Editor.T('huawei-runtime.icon_not_exist');
        }
    }
    //不勾选调试秘钥库
    if (!useDebugKey) {
        if (privatePath === "") {
            validator = false;
            errorText += Editor.T('huawei-runtime.private_pem_path_error');
        } else if (!fs.existsSync(privatePath)) {
            validator = false;
            errorText += `${privatePath}` + Editor.T('huawei-runtime.signature_not_exist');
        }

        if (certificatePath === "") {
            validator = false;
            errorText += Editor.T('huawei-runtime.certificate_pem_path_error');
        } else if (!fs.existsSync(certificatePath)) {
            validator = false;
            errorText += `${certificatePath} ` + Editor.T('huawei-runtime.signature_not_exist');
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
    Editor.Metrics.trackEvent('Project', 'BetaPlatforms', 'huawei-runtime',
        {
            packageName: RUNTIME_CONFIG.package,//包名
            appName: RUNTIME_CONFIG.name,// 应用名字
            version: RUNTIME_CONFIG.versionName,//应用版本
            orientation: RUNTIME_CONFIG.deviceOrientation//屏幕方向
        }
    );
}

module.exports = {
    name: Editor.T('huawei-runtime.platform_name'),
    platform: 'huawei',
    extends: 'runtime',
    buttons: [
        Editor.Builder.DefaultButtons.Build,
        { label: Editor.T('BUILDER.play'), message: 'play' },
    ],
    messages: {
        'build-finished': loadRuntimeSettings,
        'play': (event, options) => {
            Editor.Panel.open('runtime-dev-tools', options);
        }
    },
    settings: Editor.url('packages://huawei-runtime/build-runtime-ui.js'),
}