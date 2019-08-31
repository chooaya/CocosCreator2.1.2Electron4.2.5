'use strict';

var style = `
    body {
            margin: 10px;
            background-color: transparent
        }

        h1 {
            color: #f90
        }

        .qrCode {
             width:220px;
             height:220px;
             margin:0px auto;
             padding: 10px;
        }
`;

var template = `
    <section>
        <h1>{{msg}}</h1>
    <div style="background-color:white ;height:100%;">
        <div id="qrCode" class="qrCode"></div>
    </div>
    </section>
`;
let vivo = require(Editor.url('packages://vivo-runtime/lib/vivo'));
Editor.Panel.extend({
    _vm: null,
    style: style,
    template: template,
    ops: null,

    $: {
        qrCode: "#qrCode"
    },

    messages: {
    },
    run(options) {
        vivo.options = options;
        vivo.setOptions(options);
        this.ops = options;
    },

    ready() {
        window.abc = this._vm = new window.Vue({
            el: this.shadowRoot,
            data: {
                msg: "正在生成二维码，请稍等"//打开快应用调试器的扫描安装，即可调试
            },

            watch: {
            },

            methods: {
            }
        });
        let that = this;
        process.nextTick(() => {
            if (!vivo.options) {
                // that._vm.$root._data.msg = "请重新在构建页面打开";
                Editor.Panel.close('vivo-runtime.qrcode');
                return;
            }
            that._vm.$root._data.msg = Editor.T('vivo-runtime.qr_code_generating');//"正在生成二维码，请稍等";
            var runServerSuccess = function (port) {
                that._vm.$root._data.msg = Editor.T('vivo-runtime.debug_scan_qr_code');
                let network = require(Editor.url('packages://vivo-runtime/lib/network'));
                var QRCode = require(Editor.url('packages://vivo-runtime/lib/qrcode'));
                let networkIp = 'http://' + network.getHostIp() + ":" + port;
                new QRCode(that.$qrCode, {
                    text: networkIp,
                    width: 200,
                    height: 200,
                    // colorDark: "#333333", //二维码颜色
                    // colorLight: "#ffffff", //二维码背景色
                    // correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
                });
            };
            var runServerFail = function (error, out) {
                Editor.error("npm run server errror:", error);
            };
            vivo.npmRunServer(runServerSuccess, runServerFail);
        });


    },
    close() {
        vivo.closePort();
    },

});