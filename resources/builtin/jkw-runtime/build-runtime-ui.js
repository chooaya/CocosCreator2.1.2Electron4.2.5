/**
 * Created by wzm on 20/07/2018.
 */

'use strict';

exports.template = `
        <ui-prop name="${Editor.T('cpk-publish.use_native_renderer')}" v-show="false">
            <ui-checkbox v-value="project.nativeRenderer"></ui-checkbox>
        </ui-prop>

        <ui-prop name="${Editor.T('cpk-publish.small_packet_mode')}" auto-height>
            <ui-checkbox v-value="runtimeSetting.tinyPackageMode"></ui-checkbox>
        </ui-prop>

        <ui-prop name="${Editor.T('cpk-publish.small_packet_path')}" auto-height>
            <ui-input class="flex-1" v-value="runtimeSetting.tinyPackageServer" placeholder="${Editor.T('cpk-publish.small_packet_path_hint')}"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('cpk-publish.worker_path')}" auto-height  v-show="false">
            <ui-input
                 class = "flex-1"
                 v-value = "runtimeSetting.workerPath"
                 placeholder = "${Editor.T('cpk-publish.worker_path_hint')}"
            ></ui-input>
        </ui-prop>
         <ui-prop name="MD5 Cache ">
            <ui-checkbox v-value="project.md5Cache"></ui-checkbox>
        </ui-prop>
`;

exports.name = 'jkw-game';

exports.data = function () {
    return {
        runtimeSetting: {
            tinyPackageMode: false,
            tinyPackageServer: "",
            workerPath: ""
        },
        //记录原来的EncryptJs的选项
        originEncryptJs: false,
        profile: null,
    };
};

exports.watch = {
    runtimeSetting: {
        handler(val) {
            Object.assign(this.profile.data, this.runtimeSetting);
            this.profile.save();
        },
        deep: true,
    }
};

exports.created = function () {
    this.originEncryptJs = this.project.encryptJs;
    this.includeSDKBox = this.project.includeSDKBox;
    this.project.encryptJs = false;
    this.project.includeSDKBox = false;
    Editor.Profile.load('profile://project/cpk-publish.json', (err, ret) => {
        if (err) return;
        this.profile = ret;
        this.runtimeSetting = ret.data;
    });
};

exports.directives = {};
exports.beforeDestroy = function () {
    this.project.encryptJs = this.originEncryptJs;
    this.project.includeSDKBox = this.includeSDKBox;
};

exports.methods = {};