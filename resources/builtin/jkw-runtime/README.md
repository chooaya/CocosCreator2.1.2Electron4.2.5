# runtime-packer
游戏开发者将 runtime-packer 集成到 creator 中，在 creator 打包完成后生成相应的 CPK 文件。

## 插件安装方法
把插件仓库目录放到 Creator 编辑器安装路径下的 Resources/builtin 目录下即可。

## 打包方法

1. 在Creator菜单选择'project'
2. 在打开的编译界面中,'platform'选择'Cocos Mini Game'
3. 点击下面的'Build'按钮进行编译打包
4. 点击中间的'Open'按钮可以打开 CPK 所在目录

## 配置属性

### SRC_DIR_NAME
用于设置 creator 打包出来的 src 目录在压缩包中的路径。

### RES_DIR_NAME
用于设置 creator 打包出来的 res 目录在压缩包中的路径。

### JSB_ADAPTER_DIR_NAME
用于设置 creator 打包出来的 jsb-adapter 目录在压缩包中的路径。

### GAME_MANIFEST_DIR_NAME
用于设置 main.js 以及 game.config.json 文件在压缩包中的存放目录。

### MAIN_JS_NAME
用于设置 main.js 文件在压缩包存放的名称。

### GAME_CONFIG_JSONS_NAME
用于设置 game.config.json 文件在压缩包中存放的名称。

## 方法

### 入口函数
```JavaScript
    void onBeforeBuildFinish(event, options);
```

__*参数*__

- event: 处理结束后，调用 event.reply();。
- options: 可获取当前项目的相关信息。

__*说明*__

- 该函数在 creator 生成所有文件之后调用。

### 写入 game.config.json 文件
```JavaScript
    void writeConfigFile(deviceOrientation, showStatusBar, runtimeVersion, path);
```

__*参数*__

- subpackageArr: 子包数组。
- path: 要写入的绝对路径。

### 处理 main.js 以及 game.config.json 文件
```JavaScript
    void handleSrc(zipObj);
```

__*参数*__

- zipObj: 可以传 jszip 对象，或者传 jszip.folder，若为后者，则在压缩包的相应目录添加文件。

### 压缩多个目录
```JavaScript
    void handleDirs(zipObj, dirList, destList, noZipFileList, complete);
```

__*参数*__

- zipObj: 可以传 jszip 对象，或者传 jszip.folder，若为后者，则在压缩包的相应目录添加文件。
- dirList: 要压缩的目录数组。
- destList: 相对于压缩文件个目录的目录路径数组，决定最后存储在压缩文件中的目录。
- noZipFileList: 不添加到压缩文件中的文件数组。
- complete: 压缩成功的回调。

### 遍历目录
```JavaScript
    void walkDir(dir, fileCb, dirCb, nexDir, complete);
```

__*参数*__

- dir: 要遍历的文件夹的绝对路径。
- fileCb: 读取到文件时的回调函数。
- dirCb: 读取到目录时的回调函数。
- nexDir: 读取完一层目录后的回调，传回下一层目录的相关参数。
- complete: 遍历结束后的回调函数。

### 将目录中的文件添加到压缩文件中
```JavaScript
    void zipDir(zipObj, dir, destDirPath, noZipFileList, complete);
```

__*参数*__

- zipObj: 可以传 jszip 对象，或者传 jszip.folder，若为后者，则在压缩包的相应目录添加文件。
- dir: 要压缩的目录的绝对路径。
- destDirPath: 根据 zipObj 所处于的目录，拼接上该路径为最终文件存储的路径。
- noZipFileList: 不加入压缩文件的文件列表。
- complete: 压缩结束后的回调函数。

### 将文件添加到压缩文件中
```JavaScript
    void addZipFile(zipObj, destDirPath, filePath, fullPath);
```

__*参数*__

- zipObj: 可以传 jszip 对象，或者传 jszip.folder，若为后者，则在压缩包的相应目录添加文件。
- destDirPath: 相对于压缩包的路径，在添加 webpack external 使用到。
- filePath: 指定添加该文件到压缩文件中时的文件名称。
- fullPath: 要添加的文件的绝对路径。

__*说明*__

若要处理 require 的相关问题，可以在该函数中处理。

### 拼接 res 目录中文件的文件名
```JavaScript
    void getResPath(name);
```

__*参数*__

- name: 要获取的文件的名字。

__*返回值*__

- 返回要获取的 res 目录中文件的绝对路径。

### 在构建目录中创建子包资源目录
```JavaScript
    void mkSubpackageRes(assetsPath, targetPath, complete);
```

__*参数*__

- assetsPath: creator 生成的分包的目录。
- targetPath: 生成分包的目标目录。
- complete: 完成的回调函数。

### 将分包目录生成为 cpk
```JavaScript
    void zipSubpackage(subpackageDirs, targetPath, title, complete);
```

__*参数*__

- subPakcageDir: 子包目录数组。
- targetPath: 生成目标目录。
- title: cpk 名。
- complete: 完成回调。

## 如何将模版文件添加到 cpk 包中
1. 在打包脚本 res 目录中添加模版文件。
2. 在 build-runtime.js 中，通过 getResPath，获取模版文件的绝对路径。
3. 调用 addZipFile 将文件添加到压缩包中。


* 具体步骤参考 package.json 文件的添加过程。

