let path = require('path');
let fs = require('fs-extra');

let buildAdapter = require("../build-jsb-adapter.js");
let resPath = path.join(__dirname, "../", "res");
let cpk;

let dirName = "jsb-adapter";
let srcPath = path.join(resPath, dirName);
let destPath;   // 目标路径

let rtAdapterName = "rt-adapter.js";
let isTinyPackage = false;  // 是否是小包模式
let tinyPackageServer = "";
let rtAdapterDestPath;

module.exports = {
    /**
     * 收集信息
     * @param info 打包信息
     */
    gatherInfo(info) {
        cpk = info.cpk;
        isTinyPackage = info.isTinyPackage;
        tinyPackageServer = info.customConfig.tinyPackageServer;
        destPath = path.join(info.buildPath, dirName);
        rtAdapterDestPath = path.join(destPath, "engine", rtAdapterName);
    },
    /**
     * 整理资源
     */
    async organizeResources() {
        let jsbAdapterDestPath = path.join(destPath, "engine", "index.js");
        fs.emptyDirSync(destPath);  // 清空旧资源

        // 构建
        await buildAdapter.build({
            isTinyPackage: isTinyPackage,
            rootPath: srcPath,
            dstPath: destPath,
            excludedModules: []
        });
        // 小包模式
        if (isTinyPackage) {
            if (tinyPackageServer === '') {
                Editor.error("please enter remote server root");
                return;
            }

            // 修改index.js
            var indexStr = fs.readFileSync(jsbAdapterDestPath, "utf8");
            indexStr = indexStr.replace('REMOTE_SERVER_ROOT_PLACE_HOLDER', tinyPackageServer);
            fs.writeFileSync(jsbAdapterDestPath, indexStr);
        }
    },
    /**
     * 打包
     */
    pack() {
        cpk.directory(destPath, dirName);   // 添加jsb-adapter到cpk
    }
};