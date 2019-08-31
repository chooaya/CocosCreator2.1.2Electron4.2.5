const fs = require('fs')
const path = require('path')

const outputPath = path.join(process.cwd(), './build')
const enginePath = path.join(process.cwd(), './engine')

function mkdirsSync (dirname) {
  if (fs.existsSync(dirname)) {
    return true
  }
  else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

function copyfile(src, dest) {
  if (fs.existsSync(src)) {
    const readable = fs.createReadStream(src)
    const writable = fs.createWriteStream(dest)
    readable.pipe(writable)
    readable.on('close', function () {
      // 拷贝完成
      writable.end()
    })
  }
}

function copyEngineFile (dir) {
  dir = dir || '.'
  let directory = path.join(enginePath, dir)

  fs.readdirSync(directory).forEach(function(file) {
    const fullpath = path.join(directory, file)
    const stat = fs.statSync(fullpath)
    const destPath = path.join('build', dir, path.basename(file))
    if (stat.isFile()) {
      copyfile(fullpath, destPath)
    }
    else if (stat.isDirectory()) {
      fs.mkdirSync(destPath)
      var subdir = path.join(dir, file)
      copyEngineFile(subdir)
    }
  })
}

module.exports = {
  postHook: function(webpackConf, options){
    // 设置externals
    webpackConf.externals = Object.assign(webpackConf.externals || {}, EXTERNALS_PLACEHOLDER)

    // copy engine文件
    mkdirsSync(outputPath)
    copyEngineFile()
  }
}
