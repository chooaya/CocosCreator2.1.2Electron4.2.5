所有需要通过 `cc.loader.loadRes` 动态加载的资源，都必须放置在 resources 文件夹或它的子文件夹下。如果一份资源仅仅是被 resources 中的其它资源所依赖，而不需要直接被 `cc.loader.loadRes` 调用，那么请不要放在 resources 文件夹里。

resources 文件夹里面的资源，可以引用文件夹外部的其它资源，同样也可以被外部场景或资源引用到。项目构建时，除了已在构建发布面板勾选的场景外，resources 文件夹里面的所有资源，连同它们关联依赖的 resources 文件夹外部的资源，都会被导出。

关于 resources 的更多信息，可参考文档：<br>
[获取和加载资源 - 动态加载 Asset](https://docs.cocos.com/creator/manual/zh/scripting/load-assets.html#%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD-asset)