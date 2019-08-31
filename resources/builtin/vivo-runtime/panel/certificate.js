'use strict';

var style = `
    :host {
        overflow: auto;
    }

    h2 {
        margin: 20px 20px 0 20px;
        font-size: 26px;
        color: #DDD;
        padding-bottom: 15px;
        border-bottom: 1px solid #666;
    }

    section {
        margin: 0 10px;
        padding: 15px;
    }

    section .line {
        margin: 8px 0;
        border-bottom: 1px solid #666;
    }

    footer {
        padding: 10px 25px;
        justify-content: flex-end;
    }

    ui-prop[error] {
        border-radius: 6px;
        box-shadow: inset 0 0 20px 1px red;
    }
`;

var template = `
    <h2></h2>
    <section>
         <ui-loader :hidden="!saving" style="background-color: rgba(0, 0, 0, 0.3);"></ui-loader>
         <ui-prop name="${Editor.T('KEYSTORE.country')}" v-bind:error="countryError">
            <ui-input class="flex-1"v-value="country"></ui-input>
        </ui-prop>

         <ui-prop name="${Editor.T('KEYSTORE.state')}" v-bind:error="stateError">
            <ui-input class="flex-1"v-value="state"></ui-input>
        </ui-prop>

        <div class="line"></div>

       <ui-prop name="${Editor.T('KEYSTORE.locality')}" v-bind:error="localityError">
            <ui-input class="flex-1"v-value="locality"></ui-input>
        </ui-prop>

        <ui-prop name="${Editor.T('KEYSTORE.organization')}" v-bind:error="organizationError">
            <ui-input class="flex-1"v-value="organization"></ui-input>
        </ui-prop>

         <ui-prop name="${Editor.T('KEYSTORE.organizational_unit')}" v-bind:error="organizationalUnitError">
            <ui-input class="flex-1"v-value="organizationalUnit"></ui-input>
        </ui-prop>

        <div class="line"></div>

       <ui-prop name="${Editor.T('KEYSTORE.name')}" v-bind:error="commonNameError">
            <ui-input class="flex-1"v-value="commonName"></ui-input>
        </ui-prop>

        <ui-prop name="Email Address" v-bind:error="emailError">
            <ui-input class="flex-1"v-value="email"></ui-input>
        </ui-prop>

         <ui-prop name="${Editor.T('vivo-runtime.save_certificate_path')}" v-bind:error="certificatePathError">
        <ui-input v-value="certificatePath" class="flex-1" placeholder="${Editor.T('vivo-runtime.select_save_certificate_path')}"></ui-input>
        <ui-button class="tiny" v-on:confirm="onChooseIconPath">···</ui-button>

    </section>

    <footer class="group layout horizontal center">
        <ui-button class="green" v-on:confirm="_onSaveClick">
            ${Editor.T('SHARED.save')}
        </ui-button>
    </footer>
`;

Editor.Panel.extend({
    _vm: null,
    style: style,
    template: template,

    messages: {
    },

    ready() {
        window.abc = this._vm = new window.Vue({
            el: this.shadowRoot,
            data: {
                commonName: '',
                saving: false,
                organizationalUnit: '',
                organization: '',
                locality: '',
                state: '',
                country: '',
                email: '',
                certificatePath: Editor.Project && Editor.Project.path ? Editor.Project.path : Editor.projectInfo.path || '',

                commonNameError: false,
                organizationalUnitError: false,
                organizationError: false,
                localityError: false,
                stateError: false,
                countryError: false,
                emailError: false,
                certificatePathError: false
            },

            watch: {
                commonName: {
                    handler() {
                        this.commonNameError = false;
                    }
                },
                organizationalUnit: {
                    handler() {
                        this.organizationalUnitError = false;
                    }
                },
                organization: {
                    handler() {
                        this.organizationError = false;
                    }
                },
                locality: {
                    handler() {
                        this.localityError = false;
                    }
                },
                state: {
                    handler() {
                        this.stateError = false;
                    }
                },
                country: {
                    handler() {
                        this.countryError = false;
                    }
                },
                email: {
                    handler() {
                        this.emailError = false;
                    }
                },
                certificatePath: {
                    handler() {
                        this.certificatePathError = false;
                    }
                }
            },

            methods: {
                _getProjectPath() {
                    return Editor.Project && Editor.Project.path ? Editor.Project.path : Editor.projectInfo.path;
                },
                onChooseIconPath(event) {
                    event.stopPropagation();
                    let res = Editor.Dialog.openFile({
                        defaultPath: this._getProjectPath(),
                        properties: ['openDirectory'],
                        filters: [
                            { name: Editor.T('vivo-runtime.select_save_certificate_path') }
                        ],
                    });

                    if (res && res[0]) {
                        this.certificatePath = res[0];
                    }
                },
                _judgeEmpty(key, value) {
                    var error = false;
                    if (!key || key.trim().length == 0) {
                        error = true;
                        Editor.error(Editor.T(`certificate.error.${value} Can't be empty`));
                    }
                    return error;
                },
                _onSaveClick(event) {
                    event.stopPropagation();

                    if (!this.country || this.country.trim().length != 2) {
                        this.countryError = true;
                        Editor.error(Editor.T(`certificate.error.${Editor.T('KEYSTORE.country')} only needs 2 letter code`));
                    }

                    this.commonNameError = this._judgeEmpty(this.commonName, Editor.T('KEYSTORE.name'));
                    this.organizationalUnitError = this._judgeEmpty(this.organizationalUnit, Editor.T('KEYSTORE.organizational_unit'));
                    this.organizationError = this._judgeEmpty(this.organization, Editor.T('KEYSTORE.organization'));
                    this.localityError = this._judgeEmpty(this.locality, Editor.T('KEYSTORE.locality'));
                    this.stateError = this._judgeEmpty(this.state, Editor.T('KEYSTORE.state'));
                    this.emailError = this._judgeEmpty(this.email, 'email');

                    !this.commonName && (this.commonNameError = true);
                    !this.organizationalUnit && (this.organizationalUnitError = true);
                    !this.organization && (this.organizationError = true);
                    !this.locality && (this.localityError = true);
                    !this.state && (this.stateError = true);
                    !this.email && (this.emailError = true);
                    !this.certificatePath && (this.certificatePathError = true);

                    if (!require('fs').existsSync(this.certificatePath)) {
                        this.certificatePathError = true;
                    } else {
                        this.certificatePathError = false;
                    }

                    if (!this.commonName &&
                        !this.organizationalUnit &&
                        !this.organization &&
                        !this.locality &&
                        !this.state &&
                        !this.country &&
                        !this.certificatePath) {
                        Editor.error(Editor.T('certificate.error.publish_empty'));
                        return;
                    }

                    if (this.passwordError ||
                        this.confirmPasswordError ||
                        this.aliasError ||
                        this.aliasPasswordError ||
                        this.confirmAliasPasswordError ||
                        this.validityError ||
                        this.commonNameError ||
                        this.organizationalUnitError ||
                        this.organizationError ||
                        this.localityError ||
                        this.stateError ||
                        this.countryError ||
                        this.certificatePathError
                    ) {
                        return;
                    }
                    let dir = this.certificatePath;
                    if (!dir || dir === -1) {
                        return;
                    }

                    //获取目录
                    if (process.env.PATH.indexOf('/usr/bin/openssl') === -1) {
                        process.env.PATH += `:/usr/bin/openssl`;
                    }

                    var that = this;
                    var subjString = `/C=${this.country}/ST=${this.state}/L=${this.locality}/O=${this.organization}/OU=${this.organizationalUnit}/CN=${this.commonName}/emailAddress=${this.email}`;
                    var openSSLWinPath = require('path').join(Editor.url('packages://oppo-runtime/openSSLWin64/bin'), 'openssl');
                    var cfg = require('path').join(Editor.url('packages://oppo-runtime/openSSLWin64/bin'), 'openssl.cfg');
                    var openSSLPath = process.platform === 'win32' ? openSSLWinPath : 'openssl';
                    var certificateCmd = `${openSSLPath} req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem -subj ${subjString}`;
                    that.saving = true;
                    var exec = require('child_process').exec;
                    var cfgPath = process.platform === 'win32' ? { 'OPENSSL_CONF': cfg } : process.env;
                    exec(`${certificateCmd}`, {
                        env: cfgPath,
                        cwd: dir
                    }, (error) => {
                        that.saving = false;
                        if (!error) {
                            Editor.log(Editor.T('vivo-runtime.build_certificate_complet'));
                            Editor.Ipc.sendToWins('builder:events', 'certificate-created', dir);
                            Editor.Panel.close('vivo-runtime');
                            return;
                        }
                        Editor.error(Editor.T('vivo-runtime.build_certificate_fail') + error);
                    });
                },

            }
        });

    }
});