/**
 * Created by wzm on 20/07/2018.
 */

'use strict';
let path = require('path');
let fs = require('fs');
exports.template = `
        <ui-prop name="${Editor.T('vivo-runtime.package')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('vivo-runtime.package_hint')}" v-value="runtimeSetting.package"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.name')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('vivo-runtime.name_hint')}" v-value="runtimeSetting.name"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.desktop_icon')}">
            <ui-input v-value="runtimeSetting.icon" class="flex-1" placeholder="${Editor.T('vivo-runtime.desktop_icon_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onChooseIconPath">···</ui-button>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.version_name')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('vivo-runtime.version_name_hint')}" v-value="runtimeSetting.versionName"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.version_number')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('vivo-runtime.version_number_hint')}" v-value="runtimeSetting.versionCode"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.support_min_platform')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('vivo-runtime.support_min_platform_hint')}" v-value="runtimeSetting.minPlatformVersion"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.screen_orientation')}">
            <ui-select class="flex-1" v-value="runtimeSetting.deviceOrientation">
                <option value="portrait">${Editor.T('vivo-runtime.vertical_screen')}</option>
                <option value="landscape">${Editor.T('vivo-runtime.horizontal_screen')}</option>
            </ui-select>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.log_level')}">
            <ui-select class="flex-1" v-value="runtimeSetting.logLevel">
                <option value="log">log</option>
                <option value="off">off</option>
                <option value="error">error</option>
                <option value="warn">warn</option>
                <option value="info">info</option>
                <option value="debug">debug</option>
            </ui-select>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.small_packet_mode')}" auto-height>
            <ui-checkbox v-value="runtimeSetting.tinyPackageMode"></ui-checkbox>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.small_packet_path')}" auto-height>
            <ui-input class="flex-1" v-value="runtimeSetting.tinyPackageServer" placeholder="${Editor.T('vivo-runtime.small_packet_path_hint')}"></ui-input>
        </ui-prop>

         <ui-prop name="${Editor.T('vivo-runtime.keystore')}" auto-height>
           <ui-checkbox v-value="runtimeSetting.useDebugKey" v-on:confirm="onChangeMode">${Editor.T('vivo-runtime.use_debug_keystore')}</ui-checkbox>
        </ui-prop>
        <ui-prop name="${Editor.T('vivo-runtime.certificate_pem_path')}" v-disabled="runtimeSetting.disabledMode" >
        <ui-input v-value="runtimeSetting.certificatePath" class="flex-1" placeholder="${Editor.T('vivo-runtime.certificate_pem_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onCertificatePath">···</ui-button>
         <ui-button class="tiny" v-on:confirm="_onNewKeystoreClick">
                ${Editor.T('SHARED.new')}
            </ui-button>
        </ui-prop>
         <ui-prop name="${Editor.T('vivo-runtime.private_pem_path')}"  v-disabled="runtimeSetting.disabledMode">
        <ui-input v-value="runtimeSetting.privatePath" class="flex-1" placeholder="${Editor.T('vivo-runtime.private_pem_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onPrivatePath">···</ui-button>
        </ui-prop>

        <ui-prop name="${Editor.T('vivo-runtime.custom_npm_path')}" v-show="runtimeSetting.showNpmPath">
            <ui-input v-value="runtimeSetting.npmPath" class="flex-1" placeholder="${Editor.T('vivo-runtime.custom_npm_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onChooseNpmPath">···</ui-button>
        </ui-prop>

         <ui-prop name="MD5 Cache ">
            <ui-checkbox v-value="project.md5Cache"></ui-checkbox>
        </ui-prop>
`;

exports.name = 'qgame';

exports.data = function () {
    return {
        runtimeSetting: {
            "package": "",
            "name": "",
            "icon": "",
            "versionName": "",
            "versionCode": "",
            "minPlatformVersion": "",
            "deviceOrientation": "portrait",
            "tinyPackageMode": false,
            "tinyPackageServer": "",
            useDebugKey: true,
            privatePath: "",
            certificatePath: "",
            disabledMode: "disabled is-disabled",
            showNpmPath: false
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

const BuilderEvent = require(Editor.url('packages://builder/utils/event'));

exports.created = function () {
    this.originEncryptJs = this.project.encryptJs;
    this.includeSDKBox = this.project.includeSDKBox;
    this.project.includeSDKBox = false;
    this.project.encryptJs = false;
    Editor.Profile.load('profile://project/vivo-runtime.json', (err, ret) => {
        if (err) return;
        this.profile = ret;
        this.runtimeSetting = ret.data;
    });
    BuilderEvent.on('certificate-created', this._onCertificateCreated);
    BuilderEvent.on('npmPath-show', this._onNpmPathShow);
};

exports.directives = {};
exports.beforeDestroy = function () {
    BuilderEvent.removeListener('certificate-created', this._onCertificateCreated);
    BuilderEvent.removeListener('npmPath-show', this._onNpmPathShow);
    this.project.encryptJs = this.originEncryptJs;
    this.project.includeSDKBox = this.includeSDKBox;
};

exports.methods = {
    _getProjectPath() {
        return Editor.Project && Editor.Project.path ? Editor.Project.path : Editor.projectInfo.path;
    },
    _onCertificateCreated(...params) {
        console.log('parsms ', ...params);
        if (!params || params === -1) {
            return;
        }
        let dir = params[0];
        let certificatePath = path.join(dir, "certificate.pem");
        if (fs.existsSync(certificatePath)) {
            this.runtimeSetting.certificatePath = certificatePath;
        }
        let privatePath = path.join(dir, "private.pem");
        if (fs.existsSync(privatePath)) {
            this.runtimeSetting.privatePath = privatePath;
        }
    },
    _onNpmPathShow(...params) {
        this.runtimeSetting.showNpmPath = true;
    },
    _onNewKeystoreClick() {
        Editor.Panel.open('vivo-runtime');
    },
    onChangeMode() {
        //控制证书的选择
        if (this.runtimeSetting.useDebugKey) {
            this.runtimeSetting.disabledMode = "disabled is-disabled";
        } else {
            this.runtimeSetting.disabledMode = "";
        }
    },
    //选择图片
    onChooseIconPath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: require('path').join(this._getProjectPath(), "asserts"),
            properties: ['openFile'],
            filters: [
                { name: Editor.T('vivo-runtime.select_pic'), extensions: ['png'] }
            ],
        });

        if (res && res[0]) {
            this.runtimeSetting.icon = res[0];
        }
    },
    onChooseNpmPath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: require('path').join(this._getProjectPath(), "asserts"),
            properties: ['openDirectory']
        });

        if (res && res[0]) {
            this.runtimeSetting.npmPath = res[0];
        }
    },
    //选择证书路径
    onCertificatePath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: this._getProjectPath(),
            properties: ['openFile'],
            filters: [
                { name: Editor.T('vivo-runtime.select_certificate_pem_path'), extensions: ['pem'] }
            ],
        });

        if (res && res[0]) {
            this.runtimeSetting.certificatePath = res[0];
            var privatePath = path.join(path.dirname(res[0]), "private.pem");
            if ((this.runtimeSetting.privatePath === "" || !fs.existsSync(this.runtimeSetting.privatePath)) &&
                fs.existsSync(privatePath)) {
                this.runtimeSetting.privatePath = privatePath;
            }
        }
    },
    onPrivatePath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: this._getProjectPath(),
            properties: ['openFile'],
            filters: [
                { name: Editor.T('vivo-runtime.select_private_pem_path'), extensions: ['pem'] }
            ],
        });

        if (res && res[0]) {
            this.runtimeSetting.privatePath = res[0];
            var certificatePath = path.join(path.dirname(res[0]), "certificate.pem");
            if ((this.runtimeSetting.certificatePath === "" || !fs.existsSync(this.runtimeSetting.certificatePath)) &&
                fs.existsSync(certificatePath)) {
                this.runtimeSetting.certificatePath = certificatePath;
            }
        }
    }
};