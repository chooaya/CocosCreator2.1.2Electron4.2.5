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

     h4 {
        margin: 20px 20px 0 20px;
        font-size: 20px;
        color: #F00;
        padding-bottom: 15px;
        border-bottom: 1px solid #666;
    }

     h6 {
        margin: 20px 20px 0 20px;
        font-size: 18px;
        color: #DDD;
        padding-bottom: 15px;
    }

      h7{
        margin: 23px 20px 0 20px;
        font-size: 15px;
        color: #DDD;
        padding-bottom: 15px;
    }
       h8{
        margin: 0px 0px 0 0px;
        font-size: 15px;
        color: #DDD;
        padding-bottom: 15px;
    }


       span {
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
    <section>
       <ui-loader :hidden="!saving" style="background-color: rgba(0, 0, 0, 0.3);"></ui-loader>
       <h4>{{warning}} </h4>

       <h6>Fingerprint</h6>
       <div>
       <h8 class="flex-1">{{fingerprint}}</h8>
       <ui-button class="tiny" v-on:confirm="_onCopyClick">copy</ui-button>
       </div>

       <h6>Private.pem</h6>
       <h7>{{privatePemPath}}</h7>

       <h6>Certificate.pem</h6>
       <h7>{{certificatePemPath}}</h7>

<ui-prop name="更多信息 <" foldable>

    <!--需要使用嵌套子组件的方式，将子组件放置在 class 样式为 child 的元素中-->
    <div class="child">
        <ui-prop name="foldable test..." readonly type="string"></ui-prop>
        <ui-prop name="foldable test..." readonly type="string"></ui-prop>
    </div>
</ui-prop>

    </section>

    <footer class="group layout horizontal center">
        <ui-button class="green" v-on:confirm="_onCloseClick">
           关闭
        </ui-button>
    </footer>
`;

Editor.Panel.extend({
    _vm: null,
    style: style,
    template: template,

    messages: {
    },

    run(args) {
        Editor.log('run======');
        this.finger = '无证书路径';
        this.privatePemPath = '无证书路径';
        this.certificatePemPath = '无证书路径';
        var that = this;

        if (!args || !args.certificatePemPath || !args.privatePemPath) {
            return;
        }
        this.certificatePemPath = null;
        this.privatePemPath = null;
        if (args && args.certificatePemPath) {
            this.certificatePemPath = args.certificatePemPath;
            Editor.log('certificatePemPath:' + this.certificatePemPath);
        }

        if (args && args.privatePemPath) {
            this.privatePemPath = args.privatePemPath;
            Editor.log('privatePemPath:' + this.privatePemPath);
        }


        var exec = require('child_process').exec;
        var NPM_PATH = '/usr/local/bin/';
        if (process.platform !== 'win32' && process.env.PATH.indexOf(NPM_PATH) === -1) {
            process.env.PATH += `:${NPM_PATH}`;
        }

        if (process.platform !== 'win32' && (!fs.existsSync(path.join(NPM_PATH, 'node')))) {
            Editor.log(new Error('查看证书指纹需要nodejs,请安装nodejs'));
            return;
        }
        //p判断nodejs安装
        //"C:\Program Files\nodejs\node.exe" E:\Code\Fa-toolkit\fa-sign-tools\print-cert-fp.js E:\test\miTest\sign\release\certificate.pem
        var tool = Editor.url('packages://huawei-runtime/package/print-cert-fp.js');
        var toolPath = Editor.url('packages://huawei-runtime/package');
        var cmdBatch = `node ${tool}  ${this.certificatePemPath}`;
        Editor.log('cmdbatch:', cmdBatch);
        exec(cmdBatch, {
            env: process.env,
            cwd: toolPath
        }, (error, stdout) => {
            if (!error) {
                this.finger = stdout;
                Editor.log('stdoout:', stdout);
                this._vm = new window.Vue({
                    el: this.shadowRoot,
                    data: {
                        warning: 'Fingerprint包含工程相关信息，请勿随意传播',
                        fingerprint: this.finger,
                        privatePemPath: this.privatePemPath,
                        certificatePemPath: this.certificatePemPath,
                    },

                    methods: {
                        onChooseIconPath(event) {
                            event.stopPropagation();
                            let res = Editor.Dialog.openFile({
                                defaultPath: Editor.Project && Editor.Project.path ? Editor.Project.path : Editor.projectInfo.path,
                                properties: ['openDirectory'],
                                filters: [
                                    { name: '选择保存证书的路径' }
                                ],
                            });

                            if (res && res[0]) {
                                this.certificatePath = res[0];
                            }
                        },
                        _onCloseClick(event) {
                            Editor.Panel.close('huawei-runtime.fingerprint');
                        },
                        _onCopyClick() {

                        }

                    }
                });
                return;
            }
            Editor.log(new Error(`查看证书指纹错误：${error}`));
        });
    },

});