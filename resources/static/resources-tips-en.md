All assets that require dynamically loaded via `cc.loader.loadRes`, must be placed under the resources folder or its subfolders. If an asset is only depended on by other assets in the resources and does not need to be called directly by `cc.loader.loadRes`, then please don't put it in the resources folder.

The assets in the resources folder can refer to other assets outside the folder, and can also be referenced by external scenes or assets. When the project is built, all assets in the resources folder, along with assets outside the resources folder they are associated with, will be exported, in addition to the scenes that have been checked in the **Build** panel.

For more details about the resources folder, please refer to: <br>
[Acquire and load asset - How to dynamically load](https://docs.cocos2d-x.org/creator/manual/en/scripting/load-assets.html#how-to-dynamically-load)