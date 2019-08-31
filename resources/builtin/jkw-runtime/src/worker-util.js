let path = require('path');
let fs = require('fs-extra');

let workerRelativePath; // worker的相对路径
let workerPath;         // worker路径
let workerDestPath;     // worker目标路径
let buildPath;          // 构建路径
let cpk;

/**
 * 获取worker路径
 * @param projectPath creator工程路径
 * @param runtimeConfig runtime配置
 * @returns {string}
 */
function getWorkerPath(projectPath, runtimeConfig) {
    workerRelativePath = runtimeConfig.workerPath;
    workerRelativePath = workerRelativePath.replace(/%s/g, ""); // 去空格

    if (workerRelativePath === "") {
        return undefined;
    }

    return path.join(projectPath, workerRelativePath);
}

module.exports = {
    /**
     * 收集信息
     * @param info 打包信息
     */
    gatherInfo(info) {
        cpk = info.cpk;
        buildPath = info.buildPath;
        workerPath = getWorkerPath(info.projectPath, info.customConfig);

        if (workerPath) {
            Editor.log("workerPath: ", workerPath);
            info.gameConfig.workers = workerRelativePath;
            workerDestPath = path.join(info.buildPath, workerRelativePath);
            Editor.log("workerDestPath: ", workerDestPath);
        }
    },
    /**
     * 整理资源
     */
    organizeResources() {
        if (!workerPath) {
            return;
        }

        if (!fs.existsSync(workerPath)) {
            throw "Please configure the worker path correctly!";
        }

        // 移除旧的worker
        if (fs.existsSync(workerDestPath)) {
            // 存在旧的workder

            let stat = fs.statSync(workerDestPath);
            if (stat.isDirectory()) {
                // 移除文件夹
                fs.removeSync(workerDestPath);
            } else {
                // 移除文件
                fs.unlinkSync(workerDestPath);
            }
        }

        // 复制worker
        let stat = fs.statSync(workerPath);
        if (stat.isDirectory() || stat.isFile()) {
            fs.copySync(workerPath, workerDestPath);
        } else {
            Editor.error(workerPath + " was not copy to " + workerDestPath);
        }
    },
    /**
     * 打包
     */
    pack() {
        if (workerPath) {
            let name = workerRelativePath.split(/\/|\\/)[0];
            let stat = fs.statSync(workerDestPath);

            if (stat.isDirectory()) {
                cpk.directory(workerDestPath, name);    // worker文件夹添加到cpk
            } else if (stat.isFile()) {
                cpk.append(workerDestPath, name);    // worker文件添加到cpk
            } else {
                Editor.error(workerDestPath + " was not added to zip!");
            }
        }

    }
};