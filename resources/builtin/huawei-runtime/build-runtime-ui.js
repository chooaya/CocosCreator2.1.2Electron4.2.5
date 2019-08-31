/**
 * Created by wzm on 20/07/2018.
 */

'use strict';
let path = require('path');
let fs = require('fs');
exports.template = `
        <ui-prop name="${Editor.T('huawei-runtime.package')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('huawei-runtime.package_hint')}" v-value="runtimeSetting.package"></ui-input>
        </ui-prop>
        <ui-prop name="${Editor.T('huawei-runtime.name')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('huawei-runtime.name_hint')}" v-value="runtimeSetting.name"></ui-input>
        </ui-prop>
        <ui-prop name="${Editor.T('huawei-runtime.desktop_icon')}">
        <ui-input v-value="runtimeSetting.icon" class="flex-1" placeholder="${Editor.T('huawei-runtime.desktop_icon_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onChooseIconPath">···</ui-button>
        </ui-prop>
        <ui-prop name="${Editor.T('huawei-runtime.version_name')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('huawei-runtime.version_name_hint')}" v-value="runtimeSetting.versionName"></ui-input>
        </ui-prop>
        <ui-prop name="${Editor.T('huawei-runtime.version_number')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('huawei-runtime.version_number_hint')}" v-value="runtimeSetting.versionCode"></ui-input>
        </ui-prop>
        <ui-prop name="${Editor.T('huawei-runtime.support_min_platform')}" auto-height>
            <ui-input class="flex-1" placeholder="${Editor.T('huawei-runtime.support_min_platform_hint')}" v-value="runtimeSetting.minPlatformVersion"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('huawei-runtime.custom_manifest_file_path')}">
        <ui-input v-value="runtimeSetting.manifestPath" class="flex-1" placeholder="${Editor.T('huawei-runtime.custom_manifest_file_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onChooseMainfestPath">···</ui-button>
        </ui-prop>


        <ui-prop name="${Editor.T('huawei-runtime.screen_orientation')}">
            <ui-select class="flex-1" v-value="runtimeSetting.deviceOrientation">
                <option value="portrait">${Editor.T('huawei-runtime.vertical_screen')}</option>
    <option value="landscape">${Editor.T('huawei-runtime.horizontal_screen')}</option>
            </ui-select>
        </ui-prop>

        <ui-prop name="${Editor.T('huawei-runtime.full_screen')}" auto-height>
            <ui-checkbox v-value="runtimeSetting.fullScreen"></ui-checkbox>
        </ui-prop>

        <ui-prop name="logLevel">
            <ui-select class="flex-1" v-value="runtimeSetting.logLevel">
                <option value="off">off</option>
                <option value="error">error</option>
                <option value="warn">warn</option>
                <option value="info">info</option>
                <option value="log">log</option>
                <option value="debug">debug</option>
            </ui-select>
        </ui-prop>

        <ui-prop name="${Editor.T('huawei-runtime.use_native_renderer')}" v-show="false">
            <ui-checkbox v-value="project.nativeRenderer"></ui-checkbox>
        </ui-prop>

       <ui-prop name="${Editor.T('huawei-runtime.small_packet_mode')}" auto-height>
            <ui-checkbox v-value="runtimeSetting.tinyPackageMode"></ui-checkbox>
       </ui-prop>
       <ui-prop name="${Editor.T('huawei-runtime.small_Packet_Path')}" auto-height>
            <ui-input class="flex-1" v-value="runtimeSetting.tinyPackageServer" placeholder="${Editor.T('huawei-runtime.small_Packet_Path_hint')}"></ui-input>
       </ui-prop>
       <ui-prop name="${Editor.T('huawei-runtime.keystore')}" auto-height>
           <ui-checkbox v-value="runtimeSetting.useDebugKey" v-on:confirm="onChangeMode">${Editor.T('huawei-runtime.use_debug_keystore')}</ui-checkbox>
        </ui-prop>

        <ui-prop name="${Editor.T('huawei-runtime.certificate_pem_path')}" v-disabled="runtimeSetting.disabledMode" >
        <ui-input v-value="runtimeSetting.certificatePath" class="flex-1" placeholder="${Editor.T('huawei-runtime.certificate_pem_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onCertificatePath">···</ui-button>
         <ui-button class="tiny" v-on:confirm="_onNewKeystoreClick">
                ${Editor.T('SHARED.new')}
            </ui-button>

        </ui-prop>
         <ui-prop name="${Editor.T('huawei-runtime.private_pem_path')}"  v-disabled="runtimeSetting.disabledMode">
        <ui-input v-value="runtimeSetting.privatePath" class="flex-1" placeholder="${Editor.T('huawei-runtime.private_pem_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onPrivatePath">···</ui-button>
          <ui-button class="tiny" v-on:confirm="_onViewFingerPrintClick">
               ${Editor.T('huawei-runtime.print_finger')}
            </ui-button>
        </ui-prop>

        <ui-prop name="${Editor.T('huawei-runtime.custom_npm_path')}" v-show="runtimeSetting.showNpmPath">
            <ui-input v-value="runtimeSetting.npmPath" class="flex-1" placeholder="${Editor.T('huawei-runtime.custom_npm_path_hint')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onChooseNpmPath">···</ui-button>
        </ui-prop>

        <ui-prop name="MD5 Cache ">
            <ui-checkbox v-value="project.md5Cache"></ui-checkbox>
        </ui-prop>
`;

exports.name = 'huawei';

exports.data = function () {
    return {
        runtimeSetting: {
            package: "",
            name: "",
            icon: "",
            versionName: "",
            versionCode: "",
            minPlatformVersion: "",
            manifestPath: "",
            deviceOrientation: "portrait",
            fullScreen: true,
            logLevel: "log",
            tinyPackageMode: false,
            tinyPackageServer: "",
            useDebugKey: true,
            privatePath: "",
            certificatePath: "",
            disabledMode: "disabled is-disabled",
            npmPath: "",
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
    this.project.encryptJs = false;
    this.project.includeSDKBox = false;
    Editor.Profile.load('profile://project/huawei-runtime.json', (err, ret) => {
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
        Editor.Panel.open('huawei-runtime');
    },
    _onViewFingerPrintClick(event) {
        if (!this.runtimeSetting.certificatePath) {
            Editor.error(new Error(Editor.T('huawei-runtime.select_certificate_path')));
            return;
        }
        var environment = {};
        if (this.runtimeSetting.npmPath) {
            environment['Path'] = this.runtimeSetting.npmPath;
        } else {
            var NPM_PATH = '/usr/local/bin/';
            if (process.platform !== 'win32' && process.env.PATH.indexOf(NPM_PATH) === -1) {
                process.env.PATH += `:${NPM_PATH}`;
            }
            if (process.platform !== 'win32' && (!fs.existsSync(path.join(NPM_PATH, 'node')))) {
                Editor.log(new Error(Editor.T('huawei-runtime.install_nodejs_before_view_certificate')));
                return;
            }
            environment = process.env;
        }
        let that = this;
        this._isInstallNodejs(environment, function () {
            that._printFinger(environment);
        });
    },
    _isInstallNodejs(environment, complete) {
        let exec = require('child_process').exec;
        exec(`node -v`, {
            env: environment,
        }, (error) => {
            if (!error) {
                //检查成功
                if (complete) {
                    complete();
                }
                return;
            }
            if (this.runtimeSetting.npmPath) {
                Editor.error(new Error(Editor.T('huawei-runtime.custom_npm_path_config_error')));
                return;
            }
            if (process.platform === 'win32') {
                Editor.error(new Error(Editor.T('huawei-runtime.window_default_npm_path_error')));
                return;
            }
            Editor.error(new Error(Editor.T('huawei-runtime.mac_default_npm_path_error')));
        });
    },
    _printFinger(environment) {
        let exec = require('child_process').exec;
        var tool = Editor.url('packages://huawei-runtime/package/print-cert-fp.js');
        var toolPath = Editor.url('packages://huawei-runtime/package');
        var cmdBatch = `node ${tool}  ${this.runtimeSetting.certificatePath}`;
        exec(cmdBatch, {
            env: environment,
            cwd: toolPath
        }, (error, stdout) => {
            if (!error) {
                if (!stdout) {
                    Editor.error(new Error(Editor.T('huawei-runtime.select_certificate_path_after_view_certificate')));
                    return;
                }
                Editor.log(Editor.T('huawei-runtime.certificate_fingerprint'), stdout);
                return;
            }
            if (process.platform === 'win32') {
                Editor.log(new Error(Editor.T('huawei-runtime.certificate_fingerprint_window_error') + error));
            } else {
                Editor.log(new Error(Editor.T('huawei-runtime.certificate_fingerprint_mac_error') + error));
            }

        });
    },
    onChangeMode() {
        //控制证书的选择
        if (this.runtimeSetting.useDebugKey) {
            this.runtimeSetting.disabledMode = "disabled is-disabled";
        }
        else {
            this.runtimeSetting.disabledMode = "";
        }
    },
    onChooseIconPath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: this._getProjectPath() + "/asserts",
            properties: ['openFile'],
            filters: [
                { name: Editor.T('huawei-runtime.choose_image'), extensions: ['png'] }
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
    onChooseMainfestPath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: this._getProjectPath() + "/asserts",
            properties: ['openFile'],
            filters: [
                { name: Editor.T('huawei-runtime.choose_json_file'), extensions: ['json'] }
            ],
        });

        if (res && res[0]) {
            this.runtimeSetting.manifestPath = res[0];
        }
    },
    onCertificatePath(event) {
        event.stopPropagation();
        let res = Editor.Dialog.openFile({
            defaultPath: this._getProjectPath(),
            properties: ['openFile'],
            filters: [
                { name: Editor.T('huawei-runtime.certificate_pem_path_hint'), extensions: ['pem'] }
            ],
        });

        if (res && res[0]) {
            this.runtimeSetting.certificatePath = res[0];
            var privatePath = path.join(path.dirname(res[0]), "private.pem");
            if ((this.runtimeSetting.privatePath === "" || !fs.existsSync(this.runtimeSetting.privatePath))
                && fs.existsSync(privatePath)) {
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
                { name: Editor.T('huawei-runtime.private_pem_path_hint'), extensions: ['pem'] }
            ],
        });

        if (res && res[0]) {
            this.runtimeSetting.privatePath = res[0];
            var certificatePath = path.join(path.dirname(res[0]), "certificate.pem");
            if ((this.runtimeSetting.certificatePath === "" || !fs.existsSync(this.runtimeSetting.certificatePath))
                && fs.existsSync(certificatePath)) {
                this.runtimeSetting.certificatePath = certificatePath;
            }
        }
    }
};