'use strict';

var childProcess = require('child_process');
var spawn = childProcess.spawn;
var exec = childProcess.exec;
var execSync = childProcess.execSync;
var spawnSync = childProcess.spawnSync;

module.exports = function (pid, port, signal, callback) {
    var tree = {};
    var pidsToProcess = {};
    tree[pid] = [];
    pidsToProcess[pid] = 1;

    if (typeof signal === 'function' && callback === undefined) {
        callback = signal;
        signal = undefined;
    }

    switch (process.platform) {
        case 'win32':
            // exec('taskkill /pid ' + pid + ' /T /F', callback);
            execSync('taskkill /pid ' + pid + ' /T /F');
            break;
        case 'darwin':
            killInMac(port);
            break;
        default: // Linux
            buildProcessTree(pid, tree, pidsToProcess, function (parentPid) {
                return spawn('ps', ['-o', 'pid', '--no-headers', '--ppid', parentPid]);
            }, function () {
                killAll(tree, signal, callback);
            });
            break;
    }
};

function killAll(tree, signal, callback) {
    var killed = {};
    try {
        Object.keys(tree).forEach(function (pid) {
            tree[pid].forEach(function (pidpid) {
                if (!killed[pidpid]) {
                    killPid(pidpid, signal);
                    killed[pidpid] = 1;
                }
            });
            if (!killed[pid]) {
                killPid(pid, signal);
                killed[pid] = 1;
            }
        });
    } catch (err) {
        if (callback) {
            return callback(err);
        } else {
            throw err;
        }
    }
    if (callback) {
        return callback();
    }
}

function killPid(pid, signal) {
    try {
        process.kill(parseInt(pid, 10), signal);
    }
    catch (err) {
        if (err.code !== 'ESRCH') throw err;
    }
}


function Uint8ArrayToString(fileData) {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString;
}

function killInMac(httpPort) {
    var pID;
    var result = spawnSync("lsof", ['-i', `:${httpPort}`]);
    let data = Uint8ArrayToString(result.stdout);

    data.split(/[\n|\r]/).forEach(item => {
        if (item.indexOf('LISTEN') !== -1 && !pID) {
            let reg = item.split(/\s+/)
            if (/\d+/.test(reg[1])) {
                pID = reg[1]
            }
        }
    })
    if (!pID) {
        Editor.log((`port:${httpPort} close!`));
        return
    }

    execSync(`kill -9 ${pID}`);
}

function buildProcessTree(parentPid, tree, pidsToProcess, spawnChildProcessesList, cb) {
    var ps = spawnChildProcessesList(parentPid);
    var allData = '';
    ps.stdout.on('data', function (data) {
        var data = data.toString('ascii');
        allData += data;
    });

    var onClose = function (code) {
        delete pidsToProcess[parentPid];

        if (code != 0) {
            // no more parent processes
            if (Object.keys(pidsToProcess).length == 0) {
                cb();
            }
            return;
        }

        allData.match(/\d+/g).forEach(function (pid) {
            pid = parseInt(pid, 10);
            tree[parentPid].push(pid);
            tree[pid] = [];
            pidsToProcess[pid] = 1;
            buildProcessTree(pid, tree, pidsToProcess, spawnChildProcessesList, cb);
        });
    };

    ps.on('close', onClose);
}