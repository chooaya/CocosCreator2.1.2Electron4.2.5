const { exec } = require('child_process');
var path = require('path');
var spawnSync = require('child_process').spawnSync;
var execSync = require('child_process').execSync;
var fs = require('fire-fs');
var options;
var pid;
var qrPort;
var RUNTIME_CONFIG;

var setOptions = function (ops) {
    options = ops;
}

var getEnviromment = function () {
    var environmentPath = {};
    RUNTIME_CONFIG = (Editor.remote.Profile.load('profile://project/vivo-runtime.json')).data;
    let npmPath = RUNTIME_CONFIG.npmPath;
    if (npmPath) {
        Editor.log(Editor.T('vivo-runtime.custom_npm_path_config'), npmPath);
        //window
        if (process.platform === 'win32') {
            environmentPath['Path'] = RUNTIME_CONFIG.npmPath;
            environmentPath['Path'] += ";C:\\Windows\\System32";
        }
        else {
            environmentPath['PATH'] = RUNTIME_CONFIG.npmPath;
            environmentPath['PATH'] += ":/usr/bin:/bin:/usr/sbin:/sbin";

        }
    }
    else {
        Editor.log(Editor.T('vivo-runtime.custom_npm_path_not_config'));
        if (!process.platform === 'win32' && process.env.PATH.indexOf(NPM_PATH) === -1) {
            process.env.PATH += `:${NPM_PATH}`;
        }
        environmentPath = process.env;
    }
    return environmentPath;
}

function printNotInstallNodeError() {
    if (RUNTIME_CONFIG && RUNTIME_CONFIG.npmPath) {
        Editor.error(Editor.T('vivo-runtime.custom_npm_path_config_error'));
        return;
    }
    if (process.platform === 'win32') {
        Editor.error(Editor.T('vivo-runtime.not_install_nodejs_windows_error_before_preview'));
    }
    else {
        Editor.error(Editor.T('vivo-runtime.not_install_nodejs_mac_error_before_preview'));
    }
}

function isInstallNode(environmentPath) {
    try {
        execSync(`node -v`, { env: environmentPath });
    } catch (error) {
        return false;
    }
    return true;
}

function getMacPort(port) {
    try {
        var result = execSync(`lsof -i :${port}`);
    } catch (error) {
        return port;
    }
    return getMacPort(port + 1)
}

function getWindowsPort(port) {
    try {
        execSync(`netstat -ano|findstr "${port}"`);
    } catch (error) {
        return port;
    }
    return getWindowsPort(port + 1);
}

function getPort() {
    var port = process.platform === 'win32' ? getWindowsPort(12307) : getMacPort(12307);
    return port;
}

var npmRunServer = function (complet, err) {

    var environmentPath = getEnviromment();
    if (!isInstallNode(environmentPath)) {
        printNotInstallNodeError();
        return;
    }

    var dir = options.dest;
    var node_modules = path.join(dir, "node_modules");
    var config = path.join(dir, "config");
    var dist = path.join(dir, "dist");

    if (!fs.existsSync(node_modules) || !fs.existsSync(config) || !fs.existsSync(dist)) {
        Editor.error(Editor.T('vivo-runtime.buidBeforePreview'));
        return;
    }
    var spawn = require('child_process').spawn;
    qrPort = getPort();
    let indexJsPath = path.join(dir, 'node_modules', 'qgame-toolkit', 'bin', 'index.js');
    // free = spawn(npmPath, ['run', 'server', '--', `--=${port}`], {
    free = spawn('node', [`${indexJsPath}`, `server`, `--`, `--port=${qrPort}`], {
        env: environmentPath,
        cwd: dir
    });
    var openQrcodeSuccess = false;
    // 捕获标准输出并将其打印到控制台
    free.stdout.on('data', function (data) {
        if (data && data.indexOf("生成HTTP服务器的二维码") !== -1) {
            openQrcodeSuccess = true;
            return;
        }
        if (openQrcodeSuccess) {
            openQrcodeSuccess = false;
            pid = free.pid;
            complet(qrPort);
        }
    });

    // 捕获标准错误输出并将其打印到控制台
    free.stderr.on('data', function (data) {
        Editor.error(data);
    });

    // 注册子进程关闭事件
    free.on('exit', function (code, signal) {
        // Editor.log('=======child process eixt ,exit:' + code);
    });
    free.on('close', function (code, signal) {
        // Editor.log('=======child process close ,exit:' + code);
    });
}

var closePort = function () {
    var kill = require(Editor.url('packages://vivo-runtime/lib/killPort'));
    if (pid) {
        kill(pid, qrPort);
    }
    pid = undefined;
}

let vivo = {
    npmRunServer,
    setOptions,
    closePort,
    options
}
module.exports = vivo;