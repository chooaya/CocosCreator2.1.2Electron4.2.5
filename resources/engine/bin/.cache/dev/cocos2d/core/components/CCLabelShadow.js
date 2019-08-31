(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/components/CCLabelShadow.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        var LabelShadow = cc.Class({
            name: 'cc.LabelShadow',
            extends: require('./CCComponent'),
            editor: CC_EDITOR && {
                menu: 'i18n:MAIN_MENU.component.renderers/LabelShadow',
                executeInEditMode: true,
                requireComponent: cc.Label
            },
            properties: {
                _color: cc.Color.WHITE,
                _offset: cc.v2(2, 2),
                _blur: 2,
                color: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.shadow.color',
                    get: function get() {
                        return this._color;
                    },
                    set: function set(value) {
                        this._color = value;
                        this._updateRenderData();
                    }
                },
                offset: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.shadow.offset',
                    get: function get() {
                        return this._offset;
                    },
                    set: function set(value) {
                        this._offset = value;
                        this._updateRenderData();
                    }
                },
                blur: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.shadow.blur',
                    get: function get() {
                        return this._blur;
                    },
                    set: function set(value) {
                        this._blur = value;
                        this._updateRenderData();
                    },
                    range: [
                        0,
                        1024
                    ]
                }
            },
            onEnable: function onEnable() {
                this._updateRenderData();
            },
            onDisable: function onDisable() {
                this._updateRenderData();
            },
            _updateRenderData: function _updateRenderData() {
                var label = this.node.getComponent(cc.Label);
                if (label) {
                    label._updateRenderData();
                }
            }
        });
        cc.LabelShadow = module.exports = LabelShadow;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDTGFiZWxTaGFkb3cuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL2NvcmUvY29tcG9uZW50cy9DQ0xhYmVsU2hhZG93LmpzIl0sIm5hbWVzIjpbIkxhYmVsU2hhZG93IiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJleHRlbmRzIiwicmVxdWlyZSIsImVkaXRvciIsIkNDX0VESVRPUiIsIm1lbnUiLCJleGVjdXRlSW5FZGl0TW9kZSIsInJlcXVpcmVDb21wb25lbnQiLCJMYWJlbCIsInByb3BlcnRpZXMiLCJfY29sb3IiLCJDb2xvciIsIldISVRFIiwiX29mZnNldCIsInYyIiwiX2JsdXIiLCJjb2xvciIsInRvb2x0aXAiLCJDQ19ERVYiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsIl91cGRhdGVSZW5kZXJEYXRhIiwib2Zmc2V0IiwiYmx1ciIsInJhbmdlIiwib25FbmFibGUiLCJvbkRpc2FibGUiLCJsYWJlbCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUF3Q0EsSUFBSUEsV0FBQUEsR0FBY0MsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ3ZCRSxJQUFBQSxFQUFNLGdCQURpQjtBQUFBLFlBRXZCQyxPQUFBQSxFQUFTQyxPQUFBQSxDQUFRLGVBQVJBLENBRmM7QUFBQSxZQUd2QkMsTUFBQUEsRUFBUUMsU0FBQUEsSUFBYTtBQUFBLGdCQUNqQkMsSUFBQUEsRUFBTSxnREFEVztBQUFBLGdCQUVqQkMsaUJBQUFBLEVBQW1CLElBRkY7QUFBQSxnQkFHakJDLGdCQUFBQSxFQUFrQlQsRUFBQUEsQ0FBR1UsS0FISjtBQUFBLGFBSEU7QUFBQSxZQVN2QkMsVUFBQUEsRUFBWTtBQUFBLGdCQUNSQyxNQUFBQSxFQUFRWixFQUFBQSxDQUFHYSxLQUFIYixDQUFTYyxLQURUO0FBQUEsZ0JBRVJDLE9BQUFBLEVBQVNmLEVBQUFBLENBQUdnQixFQUFIaEIsQ0FBTSxDQUFOQSxFQUFTLENBQVRBLENBRkQ7QUFBQSxnQkFHUmlCLEtBQUFBLEVBQU8sQ0FIQztBQUFBLGdCQWFSQyxLQUFBQSxFQUFPO0FBQUEsb0JBQ0hDLE9BQUFBLEVBQVNDLE1BQUFBLElBQVUsNkJBRGhCO0FBQUEsb0JBRUhDLEdBQUFBLEVBQUssU0FBQSxHQUFBLEdBQVk7QUFBQSx3QkFDYixPQUFPLEtBQUtULE1BQVosQ0FEYTtBQUFBLHFCQUZkO0FBQUEsb0JBS0hVLEdBQUFBLEVBQUssU0FBQSxHQUFBLENBQVVDLEtBQVYsRUFBaUI7QUFBQSx3QkFDbEIsS0FBS1gsTUFBTCxHQUFjVyxLQUFkLENBRGtCO0FBQUEsd0JBRWxCLEtBQUtDLGlCQUFMLEdBRmtCO0FBQUEscUJBTG5CO0FBQUEsaUJBYkM7QUFBQSxnQkFnQ1JDLE1BQUFBLEVBQVE7QUFBQSxvQkFDSk4sT0FBQUEsRUFBU0MsTUFBQUEsSUFBVSw4QkFEZjtBQUFBLG9CQUVKQyxHQUFBQSxFQUFLLFNBQUEsR0FBQSxHQUFZO0FBQUEsd0JBQ2IsT0FBTyxLQUFLTixPQUFaLENBRGE7QUFBQSxxQkFGYjtBQUFBLG9CQUtKTyxHQUFBQSxFQUFLLFNBQUEsR0FBQSxDQUFVQyxLQUFWLEVBQWlCO0FBQUEsd0JBQ2xCLEtBQUtSLE9BQUwsR0FBZVEsS0FBZixDQURrQjtBQUFBLHdCQUVsQixLQUFLQyxpQkFBTCxHQUZrQjtBQUFBLHFCQUxsQjtBQUFBLGlCQWhDQTtBQUFBLGdCQW1EUkUsSUFBQUEsRUFBTTtBQUFBLG9CQUNGUCxPQUFBQSxFQUFTQyxNQUFBQSxJQUFVLDRCQURqQjtBQUFBLG9CQUVGQyxHQUFBQSxFQUFLLFNBQUEsR0FBQSxHQUFZO0FBQUEsd0JBQ2IsT0FBTyxLQUFLSixLQUFaLENBRGE7QUFBQSxxQkFGZjtBQUFBLG9CQUtGSyxHQUFBQSxFQUFLLFNBQUEsR0FBQSxDQUFVQyxLQUFWLEVBQWlCO0FBQUEsd0JBQ2xCLEtBQUtOLEtBQUwsR0FBYU0sS0FBYixDQURrQjtBQUFBLHdCQUVsQixLQUFLQyxpQkFBTCxHQUZrQjtBQUFBLHFCQUxwQjtBQUFBLG9CQVNGRyxLQUFBQSxFQUFPO0FBQUEsd0JBQUMsQ0FBRDtBQUFBLHdCQUFJLElBQUo7QUFBQSxxQkFUTDtBQUFBLGlCQW5ERTtBQUFBLGFBVFc7QUFBQSxZQXlFdkJDLFFBQUFBLEVBekV1QixTQUFBLFFBQUEsR0F5RVg7QUFBQSxnQkFDUixLQUFLSixpQkFBTCxHQURRO0FBQUEsYUF6RVc7QUFBQSxZQTZFdkJLLFNBQUFBLEVBN0V1QixTQUFBLFNBQUEsR0E2RVY7QUFBQSxnQkFDVCxLQUFLTCxpQkFBTCxHQURTO0FBQUEsYUE3RVU7QUFBQSxZQWlGdkJBLGlCQUFBQSxFQWpGdUIsU0FBQSxpQkFBQSxHQWlGRjtBQUFBLGdCQUNqQixJQUFJTSxLQUFBQSxHQUFRLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmhDLEVBQUFBLENBQUdVLEtBQTFCLENBQVosQ0FEaUI7QUFBQSxnQkFFakIsSUFBSW9CLEtBQUosRUFBVztBQUFBLG9CQUNQQSxLQUFBQSxDQUFNTixpQkFBTk0sR0FETztBQUFBLGlCQUZNO0FBQUEsYUFqRkU7QUFBQSxTQUFUOUIsQ0FBbEI7UUEwRkFBLEVBQUFBLENBQUdELFdBQUhDLEdBQWlCaUMsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJsQyxXQUFsQ0MiLCJmaWxlIjoiQ0NMYWJlbFNoYWRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqXHJcbiAqICEjZW4gU2hhZG93IGVmZmVjdCBmb3IgTGFiZWwgY29tcG9uZW50LCBvbmx5IGZvciBzeXN0ZW0gZm9udHMgb3IgVFRGIGZvbnRzXHJcbiAqICEjemgg55So5LqO57uZIExhYmVsIOe7hOS7tua3u+WKoOmYtOW9seaViOaenO+8jOWPquiDveeUqOS6juezu+e7n+Wtl+S9k+aIliB0dGYg5a2X5L2TXHJcbiAqIEBjbGFzcyBMYWJlbFNoYWRvd1xyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcclxuICogQGV4YW1wbGVcclxuICogIC8vIENyZWF0ZSBhIG5ldyBub2RlIGFuZCBhZGQgbGFiZWwgY29tcG9uZW50cy5cclxuICogIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgTGFiZWxcIik7XHJcbiAqICB2YXIgbGFiZWwgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAqICBsYWJlbC5zdHJpbmcgPSBcImhlbGxvIHdvcmxkXCI7XHJcbiAqICB2YXIgbGFiZWxTaGFkb3cgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbFNoYWRvdyk7XHJcbiAqICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICovXHJcblxyXG5sZXQgTGFiZWxTaGFkb3cgPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lOiAnY2MuTGFiZWxTaGFkb3cnLFxyXG4gICAgZXh0ZW5kczogcmVxdWlyZSgnLi9DQ0NvbXBvbmVudCcpLFxyXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xyXG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL0xhYmVsU2hhZG93JyxcclxuICAgICAgICBleGVjdXRlSW5FZGl0TW9kZTogdHJ1ZSxcclxuICAgICAgICByZXF1aXJlQ29tcG9uZW50OiBjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIF9jb2xvcjogY2MuQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgX29mZnNldDogY2MudjIoMiwgMiksXHJcbiAgICAgICAgX2JsdXI6IDIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gVGhlIHNoYWRvdyBjb2xvclxyXG4gICAgICAgICAqICEjemgg6Zi05b2x55qE6aKc6ImyXHJcbiAgICAgICAgICogQHByb3BlcnR5IGNvbG9yXHJcbiAgICAgICAgICogQHR5cGUge0NvbG9yfVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogbGFiZWxTaGFkb3cuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5zaGFkb3cuY29sb3InLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhI2VuIE9mZnNldCBiZXR3ZWVuIGZvbnQgYW5kIHNoYWRvd1xyXG4gICAgICAgICAqICEjemgg5a2X5L2T5LiO6Zi05b2x55qE5YGP56e7XHJcbiAgICAgICAgICogQHByb3BlcnR5IG9mZnNldFxyXG4gICAgICAgICAqIEB0eXBlIHtWZWMyfVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogbGFiZWxTaGFkb3cub2Zmc2V0ID0gbmV3IGNjLlZlYzIoMiwgMik7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQuc2hhZG93Lm9mZnNldCcsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogISNlbiBBIG5vbi1uZWdhdGl2ZSBmbG9hdCBzcGVjaWZ5aW5nIHRoZSBsZXZlbCBvZiBzaGFkb3cgYmx1clxyXG4gICAgICAgICAqICEjemgg6Zi05b2x55qE5qih57OK56iL5bqmXHJcbiAgICAgICAgICogQHByb3BlcnR5IGJsdXJcclxuICAgICAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogbGFiZWxTaGFkb3cuYmx1ciA9IDI7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmx1cjoge1xyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnNoYWRvdy5ibHVyJyxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmx1cjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JsdXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxMDI0XSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkVuYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VwZGF0ZVJlbmRlckRhdGEgKCkge1xyXG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICBsYWJlbC5fdXBkYXRlUmVuZGVyRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuY2MuTGFiZWxTaGFkb3cgPSBtb2R1bGUuZXhwb3J0cyA9IExhYmVsU2hhZG93O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcclxuICogISNlbiBTaGFkb3cgZWZmZWN0IGZvciBMYWJlbCBjb21wb25lbnQsIG9ubHkgZm9yIHN5c3RlbSBmb250cyBvciBUVEYgZm9udHNcclxuICogISN6aCDnlKjkuo7nu5kgTGFiZWwg57uE5Lu25re75Yqg6Zi05b2x5pWI5p6c77yM5Y+q6IO955So5LqO57O757uf5a2X5L2T5oiWIHR0ZiDlrZfkvZNcclxuICogQGNsYXNzIExhYmVsU2hhZG93XHJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgYW5kIGFkZCBsYWJlbCBjb21wb25lbnRzLlxyXG4gKiAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZShcIk5ldyBMYWJlbFwiKTtcclxuICogIHZhciBsYWJlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICogIGxhYmVsLnN0cmluZyA9IFwiaGVsbG8gd29ybGRcIjtcclxuICogIHZhciBsYWJlbFNoYWRvdyA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsU2hhZG93KTtcclxuICogIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gKi9cblxudmFyIExhYmVsU2hhZG93ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5MYWJlbFNoYWRvdycsXG4gICAgZXh0ZW5kczogcmVxdWlyZSgnLi9DQ0NvbXBvbmVudCcpLFxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgbWVudTogJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5yZW5kZXJlcnMvTGFiZWxTaGFkb3cnLFxuICAgICAgICBleGVjdXRlSW5FZGl0TW9kZTogdHJ1ZSxcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfY29sb3I6IGNjLkNvbG9yLldISVRFLFxuICAgICAgICBfb2Zmc2V0OiBjYy52MigyLCAyKSxcbiAgICAgICAgX2JsdXI6IDIsXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogISNlbiBUaGUgc2hhZG93IGNvbG9yXHJcbiAgICAgICAgICogISN6aCDpmLTlvbHnmoTpopzoibJcclxuICAgICAgICAgKiBAcHJvcGVydHkgY29sb3JcclxuICAgICAgICAgKiBAdHlwZSB7Q29sb3J9XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiBsYWJlbFNoYWRvdy5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgKi9cbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQuc2hhZG93LmNvbG9yJyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gT2Zmc2V0IGJldHdlZW4gZm9udCBhbmQgc2hhZG93XHJcbiAgICAgICAgICogISN6aCDlrZfkvZPkuI7pmLTlvbHnmoTlgY/np7tcclxuICAgICAgICAgKiBAcHJvcGVydHkgb2Zmc2V0XHJcbiAgICAgICAgICogQHR5cGUge1ZlYzJ9XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiBsYWJlbFNoYWRvdy5vZmZzZXQgPSBuZXcgY2MuVmVjMigyLCAyKTtcclxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnNoYWRvdy5vZmZzZXQnLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhI2VuIEEgbm9uLW5lZ2F0aXZlIGZsb2F0IHNwZWNpZnlpbmcgdGhlIGxldmVsIG9mIHNoYWRvdyBibHVyXHJcbiAgICAgICAgICogISN6aCDpmLTlvbHnmoTmqKHns4rnqIvluqZcclxuICAgICAgICAgKiBAcHJvcGVydHkgYmx1clxyXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiBsYWJlbFNoYWRvdy5ibHVyID0gMjtcclxuICAgICAgICAgKi9cbiAgICAgICAgYmx1cjoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5zaGFkb3cuYmx1cicsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmx1cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JsdXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJEYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxMDI0XVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICB9LFxuICAgIF91cGRhdGVSZW5kZXJEYXRhOiBmdW5jdGlvbiBfdXBkYXRlUmVuZGVyRGF0YSgpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuX3VwZGF0ZVJlbmRlckRhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5MYWJlbFNoYWRvdyA9IG1vZHVsZS5leHBvcnRzID0gTGFiZWxTaGFkb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EVEdGaVpXeFRhR0ZrYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHNpVEdGaVpXeFRhR0ZrYjNjaUxDSmpZeUlzSWtOc1lYTnpJaXdpYm1GdFpTSXNJbVY0ZEdWdVpITWlMQ0p5WlhGMWFYSmxJaXdpWldScGRHOXlJaXdpUTBOZlJVUkpWRTlTSWl3aWJXVnVkU0lzSW1WNFpXTjFkR1ZKYmtWa2FYUk5iMlJsSWl3aWNtVnhkV2x5WlVOdmJYQnZibVZ1ZENJc0lreGhZbVZzSWl3aWNISnZjR1Z5ZEdsbGN5SXNJbDlqYjJ4dmNpSXNJa052Ykc5eUlpd2lWMGhKVkVVaUxDSmZiMlptYzJWMElpd2lkaklpTENKZllteDFjaUlzSW1OdmJHOXlJaXdpZEc5dmJIUnBjQ0lzSWtORFgwUkZWaUlzSW1kbGRDSXNJbk5sZENJc0luWmhiSFZsSWl3aVgzVndaR0YwWlZKbGJtUmxja1JoZEdFaUxDSnZabVp6WlhRaUxDSmliSFZ5SWl3aWNtRnVaMlVpTENKdmJrVnVZV0pzWlNJc0ltOXVSR2x6WVdKc1pTSXNJbXhoWW1Wc0lpd2libTlrWlNJc0ltZGxkRU52YlhCdmJtVnVkQ0lzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk1FSkJPenM3T3pzN096czdPenM3T3p0QlFXTkJMRWxCUVVsQkxHTkJRV05ETEVkQlFVZERMRXRCUVVnc1EwRkJVenRCUVVOMlFrTXNWVUZCVFN4blFrRkVhVUk3UVVGRmRrSkRMR0ZCUVZORExGRkJRVkVzWlVGQlVpeERRVVpqTzBGQlIzWkNReXhaUVVGUlF5eGhRVUZoTzBGQlEycENReXhqUVVGTkxHZEVRVVJYTzBGQlJXcENReXd5UWtGQmJVSXNTVUZHUmp0QlFVZHFRa01zTUVKQlFXdENWQ3hIUVVGSFZUdEJRVWhLTEV0QlNFVTdPMEZCVTNaQ1F5eG5Ra0ZCV1R0QlFVTlNReXhuUWtGQlVWb3NSMEZCUjJFc1MwRkJTQ3hEUVVGVFF5eExRVVJVTzBGQlJWSkRMR2xDUVVGVFppeEhRVUZIWjBJc1JVRkJTQ3hEUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlJrUTdRVUZIVWtNc1pVRkJUeXhEUVVoRE96dEJRVXRTT3pzN096czdPenRCUVZGQlF5eGxRVUZQTzBGQlEwaERMSEZDUVVGVFF5eFZRVUZWTERaQ1FVUm9RanRCUVVWSVF5eHBRa0ZCU3l4bFFVRlpPMEZCUTJJc2RVSkJRVThzUzBGQlMxUXNUVUZCV2p0QlFVTklMR0ZCU2tVN1FVRkxTRlVzYVVKQlFVc3NZVUZCVlVNc1MwRkJWaXhGUVVGcFFqdEJRVU5zUWl4eFFrRkJTMWdzVFVGQlRDeEhRVUZqVnl4TFFVRmtPMEZCUTBFc2NVSkJRVXRETEdsQ1FVRk1PMEZCUTBnN1FVRlNSU3hUUVdKRE96dEJRWGRDVWpzN096czdPenM3UVVGUlFVTXNaMEpCUVZFN1FVRkRTazRzY1VKQlFWTkRMRlZCUVZVc09FSkJSR1k3UVVGRlNrTXNhVUpCUVVzc1pVRkJXVHRCUVVOaUxIVkNRVUZQTEV0QlFVdE9MRTlCUVZvN1FVRkRTQ3hoUVVwSE8wRkJTMHBQTEdsQ1FVRkxMR0ZCUVZWRExFdEJRVllzUlVGQmFVSTdRVUZEYkVJc2NVSkJRVXRTTEU5QlFVd3NSMEZCWlZFc1MwRkJaanRCUVVOQkxIRkNRVUZMUXl4cFFrRkJURHRCUVVOSU8wRkJVa2NzVTBGb1EwRTdPMEZCTWtOU096czdPenM3T3p0QlFWRkJSU3hqUVVGTk8wRkJRMFpRTEhGQ1FVRlRReXhWUVVGVkxEUkNRVVJxUWp0QlFVVkdReXhwUWtGQlN5eGxRVUZaTzBGQlEySXNkVUpCUVU4c1MwRkJTMG9zUzBGQldqdEJRVU5JTEdGQlNrTTdRVUZMUmtzc2FVSkJRVXNzWVVGQlZVTXNTMEZCVml4RlFVRnBRanRCUVVOc1FpeHhRa0ZCUzA0c1MwRkJUQ3hIUVVGaFRTeExRVUZpTzBGQlEwRXNjVUpCUVV0RExHbENRVUZNTzBGQlEwZ3NZVUZTUXp0QlFWTkdSeXh0UWtGQlR5eERRVUZETEVOQlFVUXNSVUZCU1N4SlFVRktPMEZCVkV3N1FVRnVSRVVzUzBGVVZ6czdRVUY1UlhaQ1F5eFpRWHBGZFVJc2MwSkJlVVZZTzBGQlExSXNZVUZCUzBvc2FVSkJRVXc3UVVGRFNDeExRVE5GYzBJN1FVRTJSWFpDU3l4aFFUZEZkVUlzZFVKQk5rVldPMEZCUTFRc1lVRkJTMHdzYVVKQlFVdzdRVUZEU0N4TFFTOUZjMEk3UVVGcFJuWkNRU3h4UWtGcVJuVkNMQ3RDUVdsR1JqdEJRVU5xUWl4WlFVRkpUU3hSUVVGUkxFdEJRVXRETEVsQlFVd3NRMEZCVlVNc1dVRkJWaXhEUVVGMVFtaERMRWRCUVVkVkxFdEJRVEZDTEVOQlFWbzdRVUZEUVN4WlFVRkpiMElzUzBGQlNpeEZRVUZYTzBGQlExQkJMR3RDUVVGTlRpeHBRa0ZCVGp0QlFVTklPMEZCUTBvN1FVRjBSbk5DTEVOQlFWUXNRMEZCYkVJN08wRkJNRVpCZUVJc1IwRkJSMFFzVjBGQlNDeEhRVUZwUW10RExFOUJRVTlETEU5QlFWQXNSMEZCYVVKdVF5eFhRVUZzUXlJc0ltWnBiR1VpT2lKRFEweGhZbVZzVTJoaFpHOTNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjY2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE15MHlNREUySUVOb2RXdHZibWNnVkdWamFHNXZiRzluYVdWeklFbHVZeTVjY2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55MHlNREU1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xseHlYRzVjY2x4dUlHaDBkSEJ6T2k4dmQzZDNMbU52WTI5ekxtTnZiUzljY2x4dVhISmNiaUJRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZU0JqYjNCNVhISmNiaUJ2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHVnVaMmx1WlNCemIzVnlZMlVnWTI5a1pTQW9kR2hsSUZ3aVUyOW1kSGRoY21WY0lpa3NJR0VnYkdsdGFYUmxaQ3hjY2x4dUlIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjY2x4dUlIUnZJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52YkdWc2VTQjBieUJrWlhabGJHOXdJR2RoYldWeklHOXVJSGx2ZFhJZ2RHRnlaMlYwSUhCc1lYUm1iM0p0Y3k0Z1dXOTFJSE5vWVd4c1hISmNiaUJ1YjNRZ2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOW1kSGRoY21VZ1ptOXlJR1JsZG1Wc2IzQnBibWNnYjNSb1pYSWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdkR2hoZENkelhISmNiaUIxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYSEpjYmlCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnUTI5amIzTWdRM0psWVhSdmNpNWNjbHh1WEhKY2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHlYRzRnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdUlISmxjMlZ5ZG1WeklHRnNiQ0J5YVdkb2RITWdibTkwSUdWNGNISmxjM05zZVNCbmNtRnVkR1ZrSUhSdklIbHZkUzVjY2x4dVhISmNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hISmNiaUJKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjY2x4dUlFWkpWRTVGVTFNZ1JrOVNJRUVnVUVGU1ZFbERWVXhCVWlCUVZWSlFUMU5GSUVGT1JDQk9UMDVKVGtaU1NVNUhSVTFGVGxRdUlFbE9JRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSVnh5WEc0Z1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN3Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWx4eVhHNGdURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2NseHVJRTlWVkNCUFJpQlBVaUJKVGlCRFQwNU9SVU5VU1U5T0lGZEpWRWdnVkVoRklGTlBSbFJYUVZKRklFOVNJRlJJUlNCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTVjY2x4dUlGUklSU0JUVDBaVVYwRlNSUzVjY2x4dUlDb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW92WEhKY2JseHlYRzR2S2lwY2NseHVJQ29nSVNObGJpQlRhR0ZrYjNjZ1pXWm1aV04wSUdadmNpQk1ZV0psYkNCamIyMXdiMjVsYm5Rc0lHOXViSGtnWm05eUlITjVjM1JsYlNCbWIyNTBjeUJ2Y2lCVVZFWWdabTl1ZEhOY2NseHVJQ29nSVNONmFDRG5sS2prdW83bnU1a2dUR0ZpWld3ZzU3dUU1THUyNXJlNzVZcWc2WmkwNWIyeDVwV0k1cDZjNzd5TTVZK3E2SU85NTVTbzVMcU81N083NTd1ZjVhMlg1TDJUNW9pV0lIUjBaaURsclpma3ZaTmNjbHh1SUNvZ1FHTnNZWE56SUV4aFltVnNVMmhoWkc5M1hISmNiaUFxSUVCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZEZ4eVhHNGdLaUJBWlhoaGJYQnNaVnh5WEc0Z0tpQWdMeThnUTNKbFlYUmxJR0VnYm1WM0lHNXZaR1VnWVc1a0lHRmtaQ0JzWVdKbGJDQmpiMjF3YjI1bGJuUnpMbHh5WEc0Z0tpQWdkbUZ5SUc1dlpHVWdQU0J1WlhjZ1kyTXVUbTlrWlNoY0lrNWxkeUJNWVdKbGJGd2lLVHRjY2x4dUlDb2dJSFpoY2lCc1lXSmxiQ0E5SUc1dlpHVXVZV1JrUTI5dGNHOXVaVzUwS0dOakxreGhZbVZzS1R0Y2NseHVJQ29nSUd4aFltVnNMbk4wY21sdVp5QTlJRndpYUdWc2JHOGdkMjl5YkdSY0lqdGNjbHh1SUNvZ0lIWmhjaUJzWVdKbGJGTm9ZV1J2ZHlBOUlHNXZaR1V1WVdSa1EyOXRjRzl1Wlc1MEtHTmpMa3hoWW1Wc1UyaGhaRzkzS1R0Y2NseHVJQ29nSUc1dlpHVXVjR0Z5Wlc1MElEMGdkR2hwY3k1dWIyUmxPMXh5WEc0Z0tpOWNjbHh1WEhKY2JteGxkQ0JNWVdKbGJGTm9ZV1J2ZHlBOUlHTmpMa05zWVhOektIdGNjbHh1SUNBZ0lHNWhiV1U2SUNkall5NU1ZV0psYkZOb1lXUnZkeWNzWEhKY2JpQWdJQ0JsZUhSbGJtUnpPaUJ5WlhGMWFYSmxLQ2N1TDBORFEyOXRjRzl1Wlc1MEp5a3NYSEpjYmlBZ0lDQmxaR2wwYjNJNklFTkRYMFZFU1ZSUFVpQW1KaUI3WEhKY2JpQWdJQ0FnSUNBZ2JXVnVkVG9nSjJreE9HNDZUVUZKVGw5TlJVNVZMbU52YlhCdmJtVnVkQzV5Wlc1a1pYSmxjbk12VEdGaVpXeFRhR0ZrYjNjbkxGeHlYRzRnSUNBZ0lDQWdJR1Y0WldOMWRHVkpia1ZrYVhSTmIyUmxPaUIwY25WbExGeHlYRzRnSUNBZ0lDQWdJSEpsY1hWcGNtVkRiMjF3YjI1bGJuUTZJR05qTGt4aFltVnNMRnh5WEc0Z0lDQWdmU3hjY2x4dVhISmNiaUFnSUNCd2NtOXdaWEowYVdWek9pQjdYSEpjYmlBZ0lDQWdJQ0FnWDJOdmJHOXlPaUJqWXk1RGIyeHZjaTVYU0VsVVJTeGNjbHh1SUNBZ0lDQWdJQ0JmYjJabWMyVjBPaUJqWXk1Mk1pZ3lMQ0F5S1N4Y2NseHVJQ0FnSUNBZ0lDQmZZbXgxY2pvZ01peGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdJQ0FnSUNvZ0lTTmxiaUJVYUdVZ2MyaGhaRzkzSUdOdmJHOXlYSEpjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhQ0RwbUxUbHZiSG5tb1Rwb3B6b2liSmNjbHh1SUNBZ0lDQWdJQ0FnS2lCQWNISnZjR1Z5ZEhrZ1kyOXNiM0pjY2x4dUlDQWdJQ0FnSUNBZ0tpQkFkSGx3WlNCN1EyOXNiM0o5WEhKY2JpQWdJQ0FnSUNBZ0lDb2dRR1Y0WVcxd2JHVmNjbHh1SUNBZ0lDQWdJQ0FnS2lCc1lXSmxiRk5vWVdSdmR5NWpiMnh2Y2lBOUlHTmpMa052Ykc5eUxsbEZURXhQVnp0Y2NseHVJQ0FnSUNBZ0lDQWdLaTljY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjI5c2RHbHdPaUJEUTE5RVJWWWdKaVlnSjJreE9HNDZRMDlOVUU5T1JVNVVMbk5vWVdSdmR5NWpiMnh2Y2ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMk52Ykc5eU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelpYUTZJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZZMjlzYjNJZ1BTQjJZV3gxWlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNWd1pHRjBaVkpsYm1SbGNrUmhkR0VvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ0FnSUNBcUlDRWpaVzRnVDJabWMyVjBJR0psZEhkbFpXNGdabTl1ZENCaGJtUWdjMmhoWkc5M1hISmNiaUFnSUNBZ0lDQWdJQ29nSVNONmFDRGxyWmZrdlpQa3VJN3BtTFRsdmJIbm1vVGxnWS9ucDd0Y2NseHVJQ0FnSUNBZ0lDQWdLaUJBY0hKdmNHVnlkSGtnYjJabWMyVjBYSEpjYmlBZ0lDQWdJQ0FnSUNvZ1FIUjVjR1VnZTFabFl6SjlYSEpjYmlBZ0lDQWdJQ0FnSUNvZ1FHVjRZVzF3YkdWY2NseHVJQ0FnSUNBZ0lDQWdLaUJzWVdKbGJGTm9ZV1J2ZHk1dlptWnpaWFFnUFNCdVpYY2dZMk11Vm1Wak1pZ3lMQ0F5S1R0Y2NseHVJQ0FnSUNBZ0lDQWdLaTljY2x4dUlDQWdJQ0FnSUNCdlptWnpaWFE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEc5dmJIUnBjRG9nUTBOZlJFVldJQ1ltSUNkcE1UaHVPa05QVFZCUFRrVk9WQzV6YUdGa2IzY3ViMlptYzJWMEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYjJabWMyVjBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYjJabWMyVjBJRDBnZG1Gc2RXVTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTFjR1JoZEdWU1pXNWtaWEpFWVhSaEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5TEZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2S2lwY2NseHVJQ0FnSUNBZ0lDQWdLaUFoSTJWdUlFRWdibTl1TFc1bFoyRjBhWFpsSUdac2IyRjBJSE53WldOcFpubHBibWNnZEdobElHeGxkbVZzSUc5bUlITm9ZV1J2ZHlCaWJIVnlYSEpjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhQ0RwbUxUbHZiSG5tb1RtcUtIbnM0cm5xSXZsdXFaY2NseHVJQ0FnSUNBZ0lDQWdLaUJBY0hKdmNHVnlkSGtnWW14MWNseHlYRzRnSUNBZ0lDQWdJQ0FxSUVCMGVYQmxJSHRPZFcxaVpYSjlYSEpjYmlBZ0lDQWdJQ0FnSUNvZ1FHVjRZVzF3YkdWY2NseHVJQ0FnSUNBZ0lDQWdLaUJzWVdKbGJGTm9ZV1J2ZHk1aWJIVnlJRDBnTWp0Y2NseHVJQ0FnSUNBZ0lDQWdLaTljY2x4dUlDQWdJQ0FnSUNCaWJIVnlPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2YjJ4MGFYQTZJRU5EWDBSRlZpQW1KaUFuYVRFNGJqcERUMDFRVDA1RlRsUXVjMmhoWkc5M0xtSnNkWEluTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWliSFZ5TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZllteDFjaUE5SUhaaGJIVmxPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZkWEJrWVhSbFVtVnVaR1Z5UkdGMFlTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlZVzVuWlRvZ1d6QXNJREV3TWpSZExGeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0I5TEZ4eVhHNWNjbHh1SUNBZ0lHOXVSVzVoWW14bElDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDkxY0dSaGRHVlNaVzVrWlhKRVlYUmhLQ2s3WEhKY2JpQWdJQ0I5TEZ4eVhHNWNjbHh1SUNBZ0lHOXVSR2x6WVdKc1pTQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZFhCa1lYUmxVbVZ1WkdWeVJHRjBZU2dwTzF4eVhHNGdJQ0FnZlN4Y2NseHVYSEpjYmlBZ0lDQmZkWEJrWVhSbFVtVnVaR1Z5UkdGMFlTQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR3hoWW1Wc0lEMGdkR2hwY3k1dWIyUmxMbWRsZEVOdmJYQnZibVZ1ZENoall5NU1ZV0psYkNrN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0d4aFltVnNLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc0xsOTFjR1JoZEdWU1pXNWtaWEpFWVhSaEtDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1ZlNrN1hISmNibHh5WEc1all5NU1ZV0psYkZOb1lXUnZkeUE5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnVEdGaVpXeFRhR0ZrYjNjN1hISmNiaUpkZlE9PSJdfQ==