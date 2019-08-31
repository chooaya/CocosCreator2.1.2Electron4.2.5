let cpkUitl = require("./src/cpk-util.js");
async function onBuildFinished(event, options) {
    await cpkUitl.gatherInfo(options);  // 收集打包信息
    await cpkUitl.organizeResources();  // 整理打包资源
    await cpkUitl.pack();               // 打包
    event.reply();
}


function loadRuntimeBefore(event, options) {
    let fs = require('fs-extra');
    if (fs.existsSync(options.dest)) {
        //清空目录
        fs.emptyDirSync(options.dest);
    }
    event.reply();
}

module.exports = {
    name: Editor.T('cpk-publish.platform_name'),
    platform: 'jkw-game',
    extends: 'runtime',
    buttons: [
        Editor.Builder.DefaultButtons.Build,
        { label: Editor.T('BUILDER.play'), message: 'play' },
    ],
    messages: {
        'build-start': loadRuntimeBefore,
        'build-finished': onBuildFinished,
        'play'(event, options) {
        },
    },
    settings: Editor.url('packages://cpk-publish/build-runtime-ui.js')
};
