# runtime-packer
游戏开发者将 runtime-packer 集成到 creator 中，在 creator 打包完成后生成相应的 rpk 文件。

## 插件安装方法
把插件仓库目录放到 Creator 编辑器安装路径下的 Resources/builtin 目录下即可。

## 打包方法

1. 在Creator菜单选择'project'
2. 在打开的编译界面中,'platform'选择'OPPO 快游戏'
3. 填写必填项：“游戏包名”，“游戏名称”，”桌面图标“，”游戏版本名称“，”游戏版本号“，”平台版本号”，“本地npm 安装路径”，“本地quickgame-toolkit路径”；
   
    其中：npm 需要[本地安装nodejs](https://nodejs.org/en/download/)。获取本地的npm的安装路径的命令：

```
which npm
```
在mac系统下，如果输出结果：
    
```
 /Users/yourname/.nvm/versions/node/v8.1.4/bin/npm
```
   则本地npm安装路径需要填写为   

```
/Users/yourname/.nvm/versions/node/v8.1.4/bin  
```
   在windows系统下，如果输出结果：

   
```
c:\Program Files\nodejs\npm
```
   则本地npm安装路径需要填写为
   
```
c:\Program Files\nodejs
```
  这里的quickgame-toolkit路径也需要注意：为解压后的quickgame-toolkit路径，
  如quickgame.cmd路径
  在mac系统下路径为
  
```
/Users/hym/Documents/quickgame-toolkit/lib/bin/quickgame.cmd
```
则本地quickgame-toolki安装路径需要填写为

```
/Users/hym/Documents/quickgame-toolkit
```
  
  在windows系统路径为
  
```
D:\quickgame-toolki\lib\bin\quickgame.cmd
```
则本地quickgame-toolki安装路径需要填写为

```
D:\quickgame-toolki
```
4.点击下面的'Build'按钮进行编译打包
5.点击中间的'Open'按钮可以打开 quickgame所在目录，rpk目录在quickgame/dist/目录下
6.如要构建发布程序包，则需要勾选了“构建发布程序包”，还要事先在快游戏工程根目录中，添加build-templates/jsb-link目录，并在该目录中放置sign目录，在sign目录中放置release目录，在release目录中放置你的私钥文件private.pem和证书文件certificate.pem。 如工程名为NewProject最终的目录结构如：NewProject/build-templates/jsb-link/sign/release/certificate.pem和NewProject/build-templates/jsb-link/sign/release/private.pem

```
|-NewProject/
    |-build                 //构建后生成的目录，里面有熟悉的jsb-link和 quickgame目录             
    |-build-templates      //需要新建的目录
       |-jsb-link
          |-sign                 //签名
             |-release            //正式证书，开发者自己添加
                 |-certificate.pem  //证书
                 |-private.pem      //私钥
```


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

### 写入 manifest.json 文件
```JavaScript
    void writeConfigFile(deviceOrientation, showStatusBar, runtimeVersion, path);
```

__*参数*__

- subpackageArr: 子包数组。
- path: 要写入的绝对路径。

### 处理 main.js文件
```JavaScript
    void handleMainJs();
```

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

- assetsPath: 生成的分包的目录。
- targetPath: 生成分包的目标目录。
- complete: 完成的回调函数。

### 将目录生成为 rpk
```JavaScript
    void handleRpk();
```

### 将分包目录生成为 rpk
```JavaScript
    void buildSubPackage(event, exec);
```

__*参数*__

- event: 处理结束后，调用 event.reply();
- exec: 执行命令对象

## 如何将模版文件添加到 rpk 包中
1. 在打包脚本 res 目录中添加模版文件。
2. 在 build-runtime.js 中，通过 getResPath，获取模版文件的绝对路径。
* 具体步骤参考 package.json 文件的添加过程。

