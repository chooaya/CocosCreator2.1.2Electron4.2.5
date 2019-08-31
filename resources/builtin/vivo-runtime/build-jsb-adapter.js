const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const sourcemaps = require("gulp-sourcemaps");
const babelify = require("babelify");
const browserify = require('browserify');
const source = require("vinyl-source-stream");
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const async = require('async');

/**
 * 遍历对比源码与目标文件的修改时间
 * @param {string} dir
 * @param {string} targetFileMtime
 */
function checkFileStat(dir, targetFileMtime) {
    let files = fs.readdirSync(dir);
    return files.some(file => {
        let filePath = path.join(dir, file);
        let stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            return checkFileStat(filePath, targetFileMtime);
        }
        else if (stat.mtime.getTime() > targetFileMtime) {
            return true;
        }
    });
}

/**
 * 检测源码是否更新
 * @param {string} src
 * @param {string} dst
 */
function hasChanged(src, dst) {
    if (!fs.existsSync(dst)) {
        return true;
    }
    let stat = fs.statSync(dst);
    let dir = path.dirname(src);
    return checkFileStat(dir, stat.mtime.getTime());
}

/**
 * 创建 bundle 任务
 * @param {string} src
 * @param {string} dst
 * @param {Array} excludes
 */
function createBundleTask(src, dst, excludes) {
    let targetFileName = path.basename(dst);
    dst = path.dirname(dst);
    let bundler = browserify(src);
    if (excludes) {
        excludes.forEach(function (path) {
            bundler.exclude(path);
        });
    }
    return bundler.transform(babelify, { presets: ['env'] })
        .bundle()
        .pipe(source(targetFileName))
        .pipe(buffer())
        // .pipe(sourcemaps.init({ loadMaps: true }))
        // .pipe(uglify()) // Use any gulp plugins you want now
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dst));
}

/**
 * 创建 copy 任务
 * @param {string} src
 * @param {string} dst
 */
function createCopyTask(src, dst) {
    return gulp.src(src)
        .pipe(gulp.dest(dst));
}

// 启动编辑器时，进行预编译
async function prebuild(opts) {
    let {
        rootPath,
        dstPath,
    } = opts;

    if (!rootPath) {
        throw (new Error('Please specify the jsbAdapter path'));
    }

    console.time('build jsb-adapter');

    // build jsb-builtin.js
    await new Promise(resolve => {
        let src = path.join(rootPath, './builtin/index.js');
        let dst = path.join(dstPath, './jsb-builtin.js');
        if (hasChanged(src, dst)) {
            createBundleTask(src, dst).on('end', resolve);
        }
        else {
            resolve();
        }
    });

    // build jsb-engine.js
    await new Promise(resolve => {
        let src = path.join(rootPath, './engine/index.js');
        let dst = path.join(dstPath, './jsb-engine.js');
        if (hasChanged(src, dst)) {
            createBundleTask(src, dst).on('end', resolve);
        }
        else {
            resolve();
        }
    });

    console.timeEnd('build jsb-adapter');
}

// 构建项目时，进行的编译
async function build(opts) {
    let {
        rootPath,
        dstPath,
        excludedModules,
    } = opts;

    if (!rootPath) {
        throw (new Error('Please specify the jsbAdapter path'));
    }

    console.time('build jsb-adapter');

    // build jsb-builtin.js
    // await new Promise(resolve => {
    //     let src = path.join(rootPath, './bin/jsb-builtin.js');
    //     createCopyTask(src, dstPath).on('end', resolve);
    // });

    // build jsb-engine.js
    await new Promise(resolve => {
        // 检测是否有模块剔除的需求
        if (excludedModules && excludedModules.length > 0) {
            let excludes = [];
            let jsbModules = require(Editor.url('packages://jsb-adapter/modules.json'));
            excludedModules.forEach(function (exName) {
                jsbModules.some(function (item) {
                    if (item.name === exName && item.entries) {
                        item.entries.forEach(function (entry) {
                            excludes.push(path.join(rootPath, entry));
                        });
                        return true;
                    }
                });
            });
            let src = path.join(rootPath, './engine/index.js');
            let dst = path.join(dstPath, './jsb-engine.js');
            createBundleTask(src, dst, excludes).on('end', resolve);
        }
        // 没有模块剔除，就只做简单的拷贝
        else {
            let src = path.join(rootPath, './engine/index.js');
            let dst = path.join(dstPath, './jsb-engine.js');
            createBundleTask(src, dst).on('end', resolve);
        }
    });

    console.timeEnd('build jsb-adapter');
}

const jsbAdapterBuilder = {
    prebuild,
    build,
};

module.exports = jsbAdapterBuilder;