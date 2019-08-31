let Hashes = require('../lib/hashes.min.js');
let path = require('path');
let fs = require('fs-extra');

let buildPath;      // 构建路径
let packagesPath;   // 所有分包路径
let subpackages;    // 分包信息
let title;          // 打包面板中的游戏名称
let gameConfig;     // 游戏配置
let cpk;
let JsZip;

module.exports = {
    /**
     * 收集信息
     * @param info 打包信息
     */
    gatherInfo(info) {
        JsZip = info.JsZip;
        cpk = info.cpk;
        gameConfig = info.gameConfig;
        title = info.title;
        buildPath = info.buildPath;
        subpackages = info.subpackages;
        packagesPath = [];
    },
    /**
     * 整理资源
     */
    organizeResources() {
        let packages = gameConfig.subpackages = []; // game.config.json中分包信息

        for (let key in subpackages) {
            if (!subpackages.hasOwnProperty(key)) {
                continue;
            }

            let name = subpackages[key].name;
            let packagePath = path.join(buildPath, "subpackages", name);

            packagesPath.push(packagePath);
            // 重命名
            fs.renameSync(path.join(packagePath, "index.js"), path.join(packagePath, "main.js"));
            packages.push({
                name: name,
                root: name + "/"
            });
        }
    },
    /**
     * 打包
     */
    pack() {
        let subsPath = path.join(buildPath, "subpackages");

        // 分包打包成cpk
        packagesPath.forEach(function (dirPath) {
            let cpk = new JsZip();
            let dirName = path.win32.basename(dirPath);
            let crc32 = Hashes.CRC32(dirName + "/");
            let cpkPath = path.join(subsPath, title + "." + crc32 + ".cpk");

            if (fs.existsSync(cpkPath)) {
                fs.unlinkSync(cpkPath);
            }
            let writeStream = fs.createWriteStream(cpkPath);
            cpk.directory(dirPath, dirName);
            cpk.generateNodeStream({ type: "nodebuffer", base64: false, compression: 'DEFLATE' })
                .pipe(writeStream)
                .on('finish', function () {

                });
        });
    }
};