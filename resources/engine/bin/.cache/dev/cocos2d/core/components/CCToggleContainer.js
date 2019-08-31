(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/components/CCToggleContainer.js';
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
        var ToggleContainer = cc.Class({
            name: 'cc.ToggleContainer',
            extends: cc.Component,
            editor: CC_EDITOR && {
                menu: 'i18n:MAIN_MENU.component.ui/ToggleContainer',
                help: 'i18n:COMPONENT.help_url.toggleContainer',
                executeInEditMode: true
            },
            properties: {
                allowSwitchOff: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.toggle_group.allowSwitchOff',
                    default: false
                },
                checkEvents: {
                    default: [],
                    type: cc.Component.EventHandler
                }
            },
            updateToggles: function updateToggles(toggle) {
                if (!this.enabledInHierarchy)
                    return;
                if (toggle.isChecked) {
                    this.toggleItems.forEach(function (item) {
                        if (item !== toggle && item.isChecked && item.enabled) {
                            item._hideCheckMark();
                        }
                    });
                    if (this.checkEvents) {
                        cc.Component.EventHandler.emitEvents(this.checkEvents, toggle);
                    }
                }
            },
            _allowOnlyOneToggleChecked: function _allowOnlyOneToggleChecked() {
                var isChecked = false;
                this.toggleItems.forEach(function (item) {
                    if (isChecked) {
                        item._hideCheckMark();
                    } else if (item.isChecked) {
                        isChecked = true;
                    }
                });
                return isChecked;
            },
            _makeAtLeastOneToggleChecked: function _makeAtLeastOneToggleChecked() {
                var isChecked = this._allowOnlyOneToggleChecked();
                if (!isChecked && !this.allowSwitchOff) {
                    var toggleItems = this.toggleItems;
                    if (toggleItems.length > 0) {
                        toggleItems[0].check();
                    }
                }
            },
            onEnable: function onEnable() {
                this.node.on('child-added', this._allowOnlyOneToggleChecked, this);
                this.node.on('child-removed', this._makeAtLeastOneToggleChecked, this);
            },
            onDisable: function onDisable() {
                this.node.off('child-added', this._allowOnlyOneToggleChecked, this);
                this.node.off('child-removed', this._makeAtLeastOneToggleChecked, this);
            },
            start: function start() {
                this._makeAtLeastOneToggleChecked();
            }
        });
        var js = require('../platform/js');
        js.get(ToggleContainer.prototype, 'toggleItems', function () {
            return this.node.getComponentsInChildren(cc.Toggle);
        });
        cc.ToggleContainer = module.exports = ToggleContainer;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDVG9nZ2xlQ29udGFpbmVyLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2NvbXBvbmVudHMvQ0NUb2dnbGVDb250YWluZXIuanMiXSwibmFtZXMiOlsiVG9nZ2xlQ29udGFpbmVyIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwiZWRpdG9yIiwiQ0NfRURJVE9SIiwibWVudSIsImhlbHAiLCJleGVjdXRlSW5FZGl0TW9kZSIsInByb3BlcnRpZXMiLCJhbGxvd1N3aXRjaE9mZiIsInRvb2x0aXAiLCJDQ19ERVYiLCJkZWZhdWx0IiwiY2hlY2tFdmVudHMiLCJ0eXBlIiwiRXZlbnRIYW5kbGVyIiwidXBkYXRlVG9nZ2xlcyIsInRvZ2dsZSIsImVuYWJsZWRJbkhpZXJhcmNoeSIsImlzQ2hlY2tlZCIsInRvZ2dsZUl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJlbmFibGVkIiwiX2hpZGVDaGVja01hcmsiLCJlbWl0RXZlbnRzIiwiX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQiLCJfbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkIiwibGVuZ3RoIiwiY2hlY2siLCJvbkVuYWJsZSIsIm5vZGUiLCJvbiIsIm9uRGlzYWJsZSIsIm9mZiIsInN0YXJ0IiwianMiLCJyZXF1aXJlIiwiZ2V0IiwicHJvdG90eXBlIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJUb2dnbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUFvQ0EsSUFBSUEsZUFBQUEsR0FBa0JDLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUMzQkUsSUFBQUEsRUFBTSxvQkFEcUI7QUFBQSxZQUUzQkMsT0FBQUEsRUFBU0gsRUFB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TCw0QkFBbkMsRUFBaUUsSUFBakUsRUFGa0I7QUFBQSxhQTFFSztBQUFBLFlBK0UzQk0sU0FBQUEsRUFBVyxTQUFBLFNBQUEsR0FBWTtBQUFBLGdCQUNuQixLQUFLRixJQUFMLENBQVVHLEdBQVYsQ0FBYyxhQUFkLEVBQTZCLEtBQUtSLDBCQUFsQyxFQUE4RCxJQUE5RCxFQURtQjtBQUFBLGdCQUVuQixLQUFLSyxJQUFMLENBQVVHLEdBQVYsQ0FBYyxlQUFkLEVBQStCLEtBQUtQLDRCQUFwQyxFQUFrRSxJQUFsRSxFQUZtQjtBQUFBLGFBL0VJO0FBQUEsWUFvRjNCUSxLQUFBQSxFQUFPLFNBQUEsS0FBQSxHQUFZO0FBQUEsZ0JBQ2YsS0FBS1IsNEJBQUwsR0FEZTtBQUFBLGFBcEZRO0FBQUEsU0FBVDdCLENBQXRCO1FBOEZBLElBQUlzQyxFQUFBQSxHQUFLQyxPQUFBQSxDQUFRLGdCQUFSQSxDQUFUO1FBQ0FELEVBQUFBLENBQUdFLEdBQUhGLENBQU92QyxlQUFBQSxDQUFnQjBDLFNBQXZCSCxFQUFrQyxhQUFsQ0EsRUFDSSxZQUFZO0FBQUEsWUFDUixPQUFPLEtBQUtMLElBQUwsQ0FBVVMsdUJBQVYsQ0FBa0MxQyxFQUFBQSxDQUFHMkMsTUFBckMsQ0FBUCxDQURRO0FBQUEsU0FEaEJMO1FBTUF0QyxFQUFBQSxDQUFHRCxlQUFIQyxHQUFxQjRDLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCN0MsZUFBdENDIiwiZmlsZSI6IkNDVG9nZ2xlQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqXHJcbiAqICEjZW4gVG9nZ2xlQ29udGFpbmVyIGlzIG5vdCBhIHZpc2lhYmxlIFVJIGNvbXBvbmVudCBidXQgYSB3YXkgdG8gbW9kaWZ5IHRoZSBiZWhhdmlvciBvZiBhIHNldCBvZiBUb2dnbGVzLiA8YnIvPlxyXG4gKiBUb2dnbGVzIHRoYXQgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIGNvdWxkIG9ubHkgaGF2ZSBvbmUgb2YgdGhlbSB0byBiZSBzd2l0Y2hlZCBvbiBhdCBhIHRpbWUuPGJyLz5cclxuICogTm90ZTogQWxsIHRoZSBmaXJzdCBsYXllciBjaGlsZCBub2RlIGNvbnRhaW5pbmcgdGhlIHRvZ2dsZSBjb21wb25lbnQgd2lsbCBhdXRvIGJlIGFkZGVkIHRvIHRoZSBjb250YWluZXJcclxuICogISN6aCBUb2dnbGVDb250YWluZXIg5LiN5piv5LiA5Liq5Y+v6KeB55qEIFVJIOe7hOS7tu+8jOWug+WPr+S7peeUqOadpeS/ruaUueS4gOe7hCBUb2dnbGUg57uE5Lu255qE6KGM5Li644CCPGJyLz5cclxuICog5b2T5LiA57uEIFRvZ2dsZSDlsZ7kuo7lkIzkuIDkuKogVG9nZ2xlQ29udGFpbmVyIOeahOaXtuWAme+8jOS7u+S9leaXtuWAmeWPquiDveacieS4gOS4qiBUb2dnbGUg5aSE5LqO6YCJ5Lit54q25oCB44CCPGJyLz5cclxuICog5rOo5oSP77ya5omA5pyJ5YyF5ZCrIFRvZ2dsZSDnu4Tku7bnmoTkuIDnuqflrZDoioLngrnpg73kvJroh6rliqjooqvmt7vliqDliLDor6XlrrnlmajkuK1cclxuICogQGNsYXNzIFRvZ2dsZUNvbnRhaW5lclxyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcclxuICovXHJcbnZhciBUb2dnbGVDb250YWluZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lOiAnY2MuVG9nZ2xlQ29udGFpbmVyJyxcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcclxuICAgICAgICBtZW51OiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnVpL1RvZ2dsZUNvbnRhaW5lcicsXHJcbiAgICAgICAgaGVscDogJ2kxOG46Q09NUE9ORU5ULmhlbHBfdXJsLnRvZ2dsZUNvbnRhaW5lcicsXHJcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gSWYgdGhpcyBzZXR0aW5nIGlzIHRydWUsIGEgdG9nZ2xlIGNvdWxkIGJlIHN3aXRjaGVkIG9mZiBhbmQgb24gd2hlbiBwcmVzc2VkLlxyXG4gICAgICAgICAqIElmIGl0IGlzIGZhbHNlLCBpdCB3aWxsIG1ha2Ugc3VyZSB0aGVyZSBpcyBhbHdheXMgb25seSBvbmUgdG9nZ2xlIGNvdWxkIGJlIHN3aXRjaGVkIG9uXHJcbiAgICAgICAgICogYW5kIHRoZSBhbHJlYWR5IHN3aXRjaGVkIG9uIHRvZ2dsZSBjYW4ndCBiZSBzd2l0Y2hlZCBvZmYuXHJcbiAgICAgICAgICogISN6aCDlpoLmnpzov5nkuKrorr7nva7kuLogdHJ1Ze+8jCDpgqPkuYggdG9nZ2xlIOaMiemSruWcqOiiq+eCueWHu+eahOaXtuWAmeWPr+S7peWPjeWkjeWcsOiiq+mAieS4reWSjOacqumAieS4reOAglxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYWxsb3dTd2l0Y2hPZmZcclxuICAgICAgICAgKi9cclxuICAgICAgICBhbGxvd1N3aXRjaE9mZjoge1xyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnRvZ2dsZV9ncm91cC5hbGxvd1N3aXRjaE9mZicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogISNlbiBJZiBUb2dnbGUgaXMgY2xpY2tlZCwgaXQgd2lsbCB0cmlnZ2VyIGV2ZW50J3MgaGFuZGxlclxyXG4gICAgICAgICAqICEjemggVG9nZ2xlIOaMiemSrueahOeCueWHu+S6i+S7tuWIl+ihqOOAglxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Q29tcG9uZW50LkV2ZW50SGFuZGxlcltdfSBjaGVja0V2ZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNoZWNrRXZlbnRzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVG9nZ2xlczogZnVuY3Rpb24gKHRvZ2dsZSkge1xyXG4gICAgICAgIGlmKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSB0b2dnbGUgJiYgaXRlbS5pc0NoZWNrZWQgJiYgaXRlbS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5faGlkZUNoZWNrTWFyaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5jaGVja0V2ZW50cywgdG9nZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2dnbGVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX2hpZGVDaGVja01hcmsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNDaGVja2VkO1xyXG4gICAgfSxcclxuXHJcbiAgICBfbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IHRoaXMuX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0NoZWNrZWQgJiYgIXRoaXMuYWxsb3dTd2l0Y2hPZmYpIHtcclxuICAgICAgICAgICAgdmFyIHRvZ2dsZUl0ZW1zID0gdGhpcy50b2dnbGVJdGVtcztcclxuICAgICAgICAgICAgaWYgKHRvZ2dsZUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUl0ZW1zWzBdLmNoZWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjaGlsZC1hZGRlZCcsIHRoaXMuX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbignY2hpbGQtcmVtb3ZlZCcsIHRoaXMuX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ2NoaWxkLWFkZGVkJywgdGhpcy5fYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZignY2hpbGQtcmVtb3ZlZCcsIHRoaXMuX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqICEjZW4gUmVhZCBvbmx5IHByb3BlcnR5LCByZXR1cm4gdGhlIHRvZ2dsZSBpdGVtcyBhcnJheSByZWZlcmVuY2UgbWFuYWdlZCBieSBUb2dnbGVDb250YWluZXIuXHJcbiAqICEjemgg5Y+q6K+75bGe5oCn77yM6L+U5ZueIFRvZ2dsZUNvbnRhaW5lciDnrqHnkIbnmoQgdG9nZ2xlIOaVsOe7hOW8leeUqFxyXG4gKiBAcHJvcGVydHkge1RvZ2dsZVtdfSB0b2dnbGVJdGVtc1xyXG4gKi9cclxudmFyIGpzID0gcmVxdWlyZSgnLi4vcGxhdGZvcm0vanMnKTtcclxuanMuZ2V0KFRvZ2dsZUNvbnRhaW5lci5wcm90b3R5cGUsICd0b2dnbGVJdGVtcycsXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Ub2dnbGUpO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuY2MuVG9nZ2xlQ29udGFpbmVyID0gbW9kdWxlLmV4cG9ydHMgPSBUb2dnbGVDb250YWluZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcclxuICogISNlbiBUb2dnbGVDb250YWluZXIgaXMgbm90IGEgdmlzaWFibGUgVUkgY29tcG9uZW50IGJ1dCBhIHdheSB0byBtb2RpZnkgdGhlIGJlaGF2aW9yIG9mIGEgc2V0IG9mIFRvZ2dsZXMuIDxici8+XHJcbiAqIFRvZ2dsZXMgdGhhdCBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgY291bGQgb25seSBoYXZlIG9uZSBvZiB0aGVtIHRvIGJlIHN3aXRjaGVkIG9uIGF0IGEgdGltZS48YnIvPlxyXG4gKiBOb3RlOiBBbGwgdGhlIGZpcnN0IGxheWVyIGNoaWxkIG5vZGUgY29udGFpbmluZyB0aGUgdG9nZ2xlIGNvbXBvbmVudCB3aWxsIGF1dG8gYmUgYWRkZWQgdG8gdGhlIGNvbnRhaW5lclxyXG4gKiAhI3poIFRvZ2dsZUNvbnRhaW5lciDkuI3mmK/kuIDkuKrlj6/op4HnmoQgVUkg57uE5Lu277yM5a6D5Y+v5Lul55So5p2l5L+u5pS55LiA57uEIFRvZ2dsZSDnu4Tku7bnmoTooYzkuLrjgII8YnIvPlxyXG4gKiDlvZPkuIDnu4QgVG9nZ2xlIOWxnuS6juWQjOS4gOS4qiBUb2dnbGVDb250YWluZXIg55qE5pe25YCZ77yM5Lu75L2V5pe25YCZ5Y+q6IO95pyJ5LiA5LiqIFRvZ2dsZSDlpITkuo7pgInkuK3nirbmgIHjgII8YnIvPlxyXG4gKiDms6jmhI/vvJrmiYDmnInljIXlkKsgVG9nZ2xlIOe7hOS7tueahOS4gOe6p+WtkOiKgueCuemDveS8muiHquWKqOiiq+a3u+WKoOWIsOivpeWuueWZqOS4rVxyXG4gKiBAY2xhc3MgVG9nZ2xlQ29udGFpbmVyXHJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxyXG4gKi9cbnZhciBUb2dnbGVDb250YWluZXIgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLlRvZ2dsZUNvbnRhaW5lcicsXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgbWVudTogJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC51aS9Ub2dnbGVDb250YWluZXInLFxuICAgICAgICBoZWxwOiAnaTE4bjpDT01QT05FTlQuaGVscF91cmwudG9nZ2xlQ29udGFpbmVyJyxcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWVcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcclxuICAgICAgICAgKiAhI2VuIElmIHRoaXMgc2V0dGluZyBpcyB0cnVlLCBhIHRvZ2dsZSBjb3VsZCBiZSBzd2l0Y2hlZCBvZmYgYW5kIG9uIHdoZW4gcHJlc3NlZC5cclxuICAgICAgICAgKiBJZiBpdCBpcyBmYWxzZSwgaXQgd2lsbCBtYWtlIHN1cmUgdGhlcmUgaXMgYWx3YXlzIG9ubHkgb25lIHRvZ2dsZSBjb3VsZCBiZSBzd2l0Y2hlZCBvblxyXG4gICAgICAgICAqIGFuZCB0aGUgYWxyZWFkeSBzd2l0Y2hlZCBvbiB0b2dnbGUgY2FuJ3QgYmUgc3dpdGNoZWQgb2ZmLlxyXG4gICAgICAgICAqICEjemgg5aaC5p6c6L+Z5Liq6K6+572u5Li6IHRydWXvvIwg6YKj5LmIIHRvZ2dsZSDmjInpkq7lnKjooqvngrnlh7vnmoTml7blgJnlj6/ku6Xlj43lpI3lnLDooqvpgInkuK3lkozmnKrpgInkuK3jgIJcclxuICAgICAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFsbG93U3dpdGNoT2ZmXHJcbiAgICAgICAgICovXG4gICAgICAgIGFsbG93U3dpdGNoT2ZmOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnRvZ2dsZV9ncm91cC5hbGxvd1N3aXRjaE9mZicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gSWYgVG9nZ2xlIGlzIGNsaWNrZWQsIGl0IHdpbGwgdHJpZ2dlciBldmVudCdzIGhhbmRsZXJcclxuICAgICAgICAgKiAhI3poIFRvZ2dsZSDmjInpkq7nmoTngrnlh7vkuovku7bliJfooajjgIJcclxuICAgICAgICAgKiBAcHJvcGVydHkge0NvbXBvbmVudC5FdmVudEhhbmRsZXJbXX0gY2hlY2tFdmVudHNcclxuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tFdmVudHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlclxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVRvZ2dsZXM6IGZ1bmN0aW9uIHVwZGF0ZVRvZ2dsZXModG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcblxuICAgICAgICBpZiAodG9nZ2xlLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRvZ2dsZSAmJiBpdGVtLmlzQ2hlY2tlZCAmJiBpdGVtLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5faGlkZUNoZWNrTWFyaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0V2ZW50cykge1xuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLmNoZWNrRXZlbnRzLCB0b2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9hbGxvd09ubHlPbmVUb2dnbGVDaGVja2VkOiBmdW5jdGlvbiBfYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZCgpIHtcbiAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvZ2dsZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLl9oaWRlQ2hlY2tNYXJrKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlzQ2hlY2tlZDtcbiAgICB9LFxuXG4gICAgX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZDogZnVuY3Rpb24gX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZCgpIHtcbiAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IHRoaXMuX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQoKTtcblxuICAgICAgICBpZiAoIWlzQ2hlY2tlZCAmJiAhdGhpcy5hbGxvd1N3aXRjaE9mZikge1xuICAgICAgICAgICAgdmFyIHRvZ2dsZUl0ZW1zID0gdGhpcy50b2dnbGVJdGVtcztcbiAgICAgICAgICAgIGlmICh0b2dnbGVJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlSXRlbXNbMF0uY2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbignY2hpbGQtYWRkZWQnLCB0aGlzLl9hbGxvd09ubHlPbmVUb2dnbGVDaGVja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjaGlsZC1yZW1vdmVkJywgdGhpcy5fbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ2NoaWxkLWFkZGVkJywgdGhpcy5fYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ2NoaWxkLXJlbW92ZWQnLCB0aGlzLl9tYWtlQXRMZWFzdE9uZVRvZ2dsZUNoZWNrZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZCgpO1xuICAgIH1cbn0pO1xuXG4vKipcclxuICogISNlbiBSZWFkIG9ubHkgcHJvcGVydHksIHJldHVybiB0aGUgdG9nZ2xlIGl0ZW1zIGFycmF5IHJlZmVyZW5jZSBtYW5hZ2VkIGJ5IFRvZ2dsZUNvbnRhaW5lci5cclxuICogISN6aCDlj6ror7vlsZ7mgKfvvIzov5Tlm54gVG9nZ2xlQ29udGFpbmVyIOeuoeeQhueahCB0b2dnbGUg5pWw57uE5byV55SoXHJcbiAqIEBwcm9wZXJ0eSB7VG9nZ2xlW119IHRvZ2dsZUl0ZW1zXHJcbiAqL1xudmFyIGpzID0gcmVxdWlyZSgnLi4vcGxhdGZvcm0vanMnKTtcbmpzLmdldChUb2dnbGVDb250YWluZXIucHJvdG90eXBlLCAndG9nZ2xlSXRlbXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Ub2dnbGUpO1xufSk7XG5cbmNjLlRvZ2dsZUNvbnRhaW5lciA9IG1vZHVsZS5leHBvcnRzID0gVG9nZ2xlQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFZHOW5aMnhsUTI5dWRHRnBibVZ5TG1weklsMHNJbTVoYldWeklqcGJJbFJ2WjJkc1pVTnZiblJoYVc1bGNpSXNJbU5qSWl3aVEyeGhjM01pTENKdVlXMWxJaXdpWlhoMFpXNWtjeUlzSWtOdmJYQnZibVZ1ZENJc0ltVmthWFJ2Y2lJc0lrTkRYMFZFU1ZSUFVpSXNJbTFsYm5VaUxDSm9aV3h3SWl3aVpYaGxZM1YwWlVsdVJXUnBkRTF2WkdVaUxDSndjbTl3WlhKMGFXVnpJaXdpWVd4c2IzZFRkMmwwWTJoUFptWWlMQ0owYjI5c2RHbHdJaXdpUTBOZlJFVldJaXdpWkdWbVlYVnNkQ0lzSW1Ob1pXTnJSWFpsYm5Seklpd2lkSGx3WlNJc0lrVjJaVzUwU0dGdVpHeGxjaUlzSW5Wd1pHRjBaVlJ2WjJkc1pYTWlMQ0owYjJkbmJHVWlMQ0psYm1GaWJHVmtTVzVJYVdWeVlYSmphSGtpTENKcGMwTm9aV05yWldRaUxDSjBiMmRuYkdWSmRHVnRjeUlzSW1admNrVmhZMmdpTENKcGRHVnRJaXdpWlc1aFlteGxaQ0lzSWw5b2FXUmxRMmhsWTJ0TllYSnJJaXdpWlcxcGRFVjJaVzUwY3lJc0lsOWhiR3h2ZDA5dWJIbFBibVZVYjJkbmJHVkRhR1ZqYTJWa0lpd2lYMjFoYTJWQmRFeGxZWE4wVDI1bFZHOW5aMnhsUTJobFkydGxaQ0lzSW14bGJtZDBhQ0lzSW1Ob1pXTnJJaXdpYjI1RmJtRmliR1VpTENKdWIyUmxJaXdpYjI0aUxDSnZia1JwYzJGaWJHVWlMQ0p2Wm1ZaUxDSnpkR0Z5ZENJc0ltcHpJaXdpY21WeGRXbHlaU0lzSW1kbGRDSXNJbkJ5YjNSdmRIbHdaU0lzSW1kbGRFTnZiWEJ2Ym1WdWRITkpia05vYVd4a2NtVnVJaXdpVkc5bloyeGxJaXdpYlc5a2RXeGxJaXdpWlhod2IzSjBjeUpkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVFd1FrRTdPenM3T3pzN096czdRVUZWUVN4SlFVRkpRU3hyUWtGQmEwSkRMRWRCUVVkRExFdEJRVWdzUTBGQlV6dEJRVU16UWtNc1ZVRkJUU3h2UWtGRWNVSTdRVUZGTTBKRExHRkJRVk5JTEVkQlFVZEpMRk5CUm1VN1FVRkhNMEpETEZsQlFWRkRMR0ZCUVdFN1FVRkRha0pETEdOQlFVMHNOa05CUkZjN1FVRkZha0pETEdOQlFVMHNlVU5CUmxjN1FVRkhha0pETERKQ1FVRnRRanRCUVVoR0xFdEJTRTA3TzBGQlV6TkNReXhuUWtGQldUdEJRVU5TT3pzN096czdPMEZCVDBGRExIZENRVUZuUWp0QlFVTmFReXh4UWtGQlUwTXNWVUZCVlN3MFEwRkVVRHRCUVVWYVF5eHhRa0ZCVXp0QlFVWkhMRk5CVWxJN08wRkJZVkk3T3pzN08wRkJTMEZETEhGQ1FVRmhPMEZCUTFSRUxIRkNRVUZUTEVWQlJFRTdRVUZGVkVVc2EwSkJRVTFvUWl4SFFVRkhTU3hUUVVGSUxFTkJRV0ZoTzBGQlJsWTdRVUZzUWt3c1MwRlVaVHM3UVVGcFF6TkNReXh0UWtGQlpTeDFRa0ZCVlVNc1RVRkJWaXhGUVVGclFqdEJRVU0zUWl4WlFVRkhMRU5CUVVNc1MwRkJTME1zYTBKQlFWUXNSVUZCTmtJN08wRkJSVGRDTEZsQlFVbEVMRTlCUVU5RkxGTkJRVmdzUlVGQmMwSTdRVUZEYkVJc2FVSkJRVXRETEZkQlFVd3NRMEZCYVVKRExFOUJRV3BDTEVOQlFYbENMRlZCUVZWRExFbEJRVllzUlVGQlowSTdRVUZEY2tNc2IwSkJRVWxCTEZOQlFWTk1MRTFCUVZRc1NVRkJiVUpMTEV0QlFVdElMRk5CUVhoQ0xFbEJRWEZEUnl4TFFVRkxReXhQUVVFNVF5eEZRVUYxUkR0QlFVTnVSRVFzZVVKQlFVdEZMR05CUVV3N1FVRkRTRHRCUVVOS0xHRkJTa1E3TzBGQlRVRXNaMEpCUVVrc1MwRkJTMWdzVjBGQlZDeEZRVUZ6UWp0QlFVTnNRbVlzYlVKQlFVZEpMRk5CUVVnc1EwRkJZV0VzV1VGQllpeERRVUV3UWxVc1ZVRkJNVUlzUTBGQmNVTXNTMEZCUzFvc1YwRkJNVU1zUlVGQmRVUkpMRTFCUVhaRU8wRkJRMGc3UVVGRFNqdEJRVU5LTEV0QkwwTXdRanM3UVVGcFJETkNVeXhuUTBGQk5FSXNjME5CUVZrN1FVRkRjRU1zV1VGQlNWQXNXVUZCV1N4TFFVRm9RanRCUVVOQkxHRkJRVXRETEZkQlFVd3NRMEZCYVVKRExFOUJRV3BDTEVOQlFYbENMRlZCUVZWRExFbEJRVllzUlVGQlowSTdRVUZEY2tNc1owSkJRVWxJTEZOQlFVb3NSVUZCWlR0QlFVTllSeXh4UWtGQlMwVXNZMEZCVER0QlFVTklMR0ZCUmtRc1RVRkhTeXhKUVVGSlJpeExRVUZMU0N4VFFVRlVMRVZCUVc5Q08wRkJRM0pDUVN3MFFrRkJXU3hKUVVGYU8wRkJRMGc3UVVGRFNpeFRRVkJFT3p0QlFWTkJMR1ZCUVU5QkxGTkJRVkE3UVVGRFNDeExRVGRFTUVJN08wRkJLMFF6UWxFc2EwTkJRVGhDTEhkRFFVRlpPMEZCUTNSRExGbEJRVWxTTEZsQlFWa3NTMEZCUzA4c01FSkJRVXdzUlVGQmFFSTdPMEZCUlVFc1dVRkJTU3hEUVVGRFVDeFRRVUZFTEVsQlFXTXNRMEZCUXl4TFFVRkxWaXhqUVVGNFFpeEZRVUYzUXp0QlFVTndReXhuUWtGQlNWY3NZMEZCWXl4TFFVRkxRU3hYUVVGMlFqdEJRVU5CTEdkQ1FVRkpRU3haUVVGWlVTeE5RVUZhTEVkQlFYRkNMRU5CUVhwQ0xFVkJRVFJDTzBGQlEzaENVaXcwUWtGQldTeERRVUZhTEVWQlFXVlRMRXRCUVdZN1FVRkRTRHRCUVVOS08wRkJRMG9zUzBGNFJUQkNPenRCUVRCRk0wSkRMR05CUVZVc2IwSkJRVms3UVVGRGJFSXNZVUZCUzBNc1NVRkJUQ3hEUVVGVlF5eEZRVUZXTEVOQlFXRXNZVUZCWWl4RlFVRTBRaXhMUVVGTFRpd3dRa0ZCYWtNc1JVRkJOa1FzU1VGQk4wUTdRVUZEUVN4aFFVRkxTeXhKUVVGTUxFTkJRVlZETEVWQlFWWXNRMEZCWVN4bFFVRmlMRVZCUVRoQ0xFdEJRVXRNTERSQ1FVRnVReXhGUVVGcFJTeEpRVUZxUlR0QlFVTklMRXRCTjBVd1FqczdRVUVyUlROQ1RTeGxRVUZYTEhGQ1FVRlpPMEZCUTI1Q0xHRkJRVXRHTEVsQlFVd3NRMEZCVlVjc1IwRkJWaXhEUVVGakxHRkJRV1FzUlVGQk5rSXNTMEZCUzFJc01FSkJRV3hETEVWQlFUaEVMRWxCUVRsRU8wRkJRMEVzWVVGQlMwc3NTVUZCVEN4RFFVRlZSeXhIUVVGV0xFTkJRV01zWlVGQlpDeEZRVUVyUWl4TFFVRkxVQ3cwUWtGQmNFTXNSVUZCYTBVc1NVRkJiRVU3UVVGRFNDeExRV3hHTUVJN08wRkJiMFl6UWxFc1YwRkJUeXhwUWtGQldUdEJRVU5tTEdGQlFVdFNMRFJDUVVGTU8wRkJRMGc3UVVGMFJqQkNMRU5CUVZRc1EwRkJkRUk3TzBGQmVVWkJPenM3T3p0QlFVdEJMRWxCUVVsVExFdEJRVXRETEZGQlFWRXNaMEpCUVZJc1EwRkJWRHRCUVVOQlJDeEhRVUZIUlN4SFFVRklMRU5CUVU5NlF5eG5Ra0ZCWjBJd1F5eFRRVUYyUWl4RlFVRnJReXhoUVVGc1F5eEZRVU5KTEZsQlFWazdRVUZEVWl4WFFVRlBMRXRCUVV0U0xFbEJRVXdzUTBGQlZWTXNkVUpCUVZZc1EwRkJhME14UXl4SFFVRkhNa01zVFVGQmNrTXNRMEZCVUR0QlFVTklMRU5CU0V3N08wRkJUVUV6UXl4SFFVRkhSQ3hsUVVGSUxFZEJRWEZDTmtNc1QwRkJUME1zVDBGQlVDeEhRVUZwUWpsRExHVkJRWFJESWl3aVptbHNaU0k2SWtORFZHOW5aMnhsUTI5dWRHRnBibVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2NseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhNeTB5TURFMklFTm9kV3R2Ym1jZ1ZHVmphRzV2Ykc5bmFXVnpJRWx1WXk1Y2NseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh5WEc1Y2NseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2NseHVYSEpjYmlCUVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYSEpjYmlCdlppQjBhR2x6SUhOdlpuUjNZWEpsSUdGdVpDQmhjM052WTJsaGRHVmtJR1Z1WjJsdVpTQnpiM1Z5WTJVZ1kyOWtaU0FvZEdobElGd2lVMjltZEhkaGNtVmNJaWtzSUdFZ2JHbHRhWFJsWkN4Y2NseHVJQ0IzYjNKc1pIZHBaR1VzSUhKdmVXRnNkSGt0Wm5KbFpTd2dibTl1TFdGemMybG5ibUZpYkdVc0lISmxkbTlqWVdKc1pTQmhibVFnYm05dUxXVjRZMngxYzJsMlpTQnNhV05sYm5ObFhISmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh5WEc0Z0lHNXZkQ0IxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJaMGQyRnlaU0JtYjNJZ1pHVjJaV3h2Y0dsdVp5QnZkR2hsY2lCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCMGFHRjBKM05jY2x4dUlDQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hISmNiaUFnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JRU52WTI5eklFTnlaV0YwYjNJdVhISmNibHh5WEc0Z1ZHaGxJSE52Wm5SM1lYSmxJRzl5SUhSdmIyeHpJR2x1SUhSb2FYTWdUR2xqWlc1elpTQkJaM0psWlcxbGJuUWdZWEpsSUd4cFkyVnVjMlZrTENCdWIzUWdjMjlzWkM1Y2NseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYSEpjYmx4eVhHNGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4eVhHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYSEpjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNjbHh1SUVGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjY2x4dUlFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEhKY2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YSEpjYmlCVVNFVWdVMDlHVkZkQlVrVXVYSEpjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJQ0VqWlc0Z1ZHOW5aMnhsUTI5dWRHRnBibVZ5SUdseklHNXZkQ0JoSUhacGMybGhZbXhsSUZWSklHTnZiWEJ2Ym1WdWRDQmlkWFFnWVNCM1lYa2dkRzhnYlc5a2FXWjVJSFJvWlNCaVpXaGhkbWx2Y2lCdlppQmhJSE5sZENCdlppQlViMmRuYkdWekxpQThZbkl2UGx4eVhHNGdLaUJVYjJkbmJHVnpJSFJvWVhRZ1ltVnNiMjVuSUhSdklIUm9aU0J6WVcxbElHZHliM1Z3SUdOdmRXeGtJRzl1YkhrZ2FHRjJaU0J2Ym1VZ2IyWWdkR2hsYlNCMGJ5QmlaU0J6ZDJsMFkyaGxaQ0J2YmlCaGRDQmhJSFJwYldVdVBHSnlMejVjY2x4dUlDb2dUbTkwWlRvZ1FXeHNJSFJvWlNCbWFYSnpkQ0JzWVhsbGNpQmphR2xzWkNCdWIyUmxJR052Ym5SaGFXNXBibWNnZEdobElIUnZaMmRzWlNCamIyMXdiMjVsYm5RZ2QybHNiQ0JoZFhSdklHSmxJR0ZrWkdWa0lIUnZJSFJvWlNCamIyNTBZV2x1WlhKY2NseHVJQ29nSVNONmFDQlViMmRuYkdWRGIyNTBZV2x1WlhJZzVMaU41cGl2NUxpQTVMaXE1WSt2NktlQjU1cUVJRlZKSU9lN2hPUzd0dSs4ak9XdWcrV1ByK1M3cGVlVXFPYWRwZVMvcnVhVXVlUzRnT2U3aENCVWIyZG5iR1VnNTd1RTVMdTI1NXFFNktHTTVMaTY0NENDUEdKeUx6NWNjbHh1SUNvZzViMlQ1TGlBNTd1RUlGUnZaMmRzWlNEbHNaN2t1bzdsa0l6a3VJRGt1S29nVkc5bloyeGxRMjl1ZEdGcGJtVnlJT2VhaE9hWHR1V0FtZSs4ak9TN3UrUzlsZWFYdHVXQW1lV1BxdWlEdmVhY2llUzRnT1M0cWlCVWIyZG5iR1VnNWFTRTVMcU82WUNKNUxpdDU0cTI1b0NCNDRDQ1BHSnlMejVjY2x4dUlDb2c1ck9vNW9TUDc3eWE1b21BNXB5SjVZeUY1WkNySUZSdloyZHNaU0RudTRUa3U3Ym5tb1RrdUlEbnVxZmxyWkRvaW9MbmdybnBnNzNrdkpyb2g2cmxpcWpvb3F2bXQ3dmxpcURsaUxEb3I2WGxycm5sbWFqa3VLMWNjbHh1SUNvZ1FHTnNZWE56SUZSdloyZHNaVU52Ym5SaGFXNWxjbHh5WEc0Z0tpQkFaWGgwWlc1a2N5QkRiMjF3YjI1bGJuUmNjbHh1SUNvdlhISmNiblpoY2lCVWIyZG5iR1ZEYjI1MFlXbHVaWElnUFNCall5NURiR0Z6Y3loN1hISmNiaUFnSUNCdVlXMWxPaUFuWTJNdVZHOW5aMnhsUTI5dWRHRnBibVZ5Snl4Y2NseHVJQ0FnSUdWNGRHVnVaSE02SUdOakxrTnZiWEJ2Ym1WdWRDeGNjbHh1SUNBZ0lHVmthWFJ2Y2pvZ1EwTmZSVVJKVkU5U0lDWW1JSHRjY2x4dUlDQWdJQ0FnSUNCdFpXNTFPaUFuYVRFNGJqcE5RVWxPWDAxRlRsVXVZMjl0Y0c5dVpXNTBMblZwTDFSdloyZHNaVU52Ym5SaGFXNWxjaWNzWEhKY2JpQWdJQ0FnSUNBZ2FHVnNjRG9nSjJreE9HNDZRMDlOVUU5T1JVNVVMbWhsYkhCZmRYSnNMblJ2WjJkc1pVTnZiblJoYVc1bGNpY3NYSEpjYmlBZ0lDQWdJQ0FnWlhobFkzVjBaVWx1UldScGRFMXZaR1U2SUhSeWRXVmNjbHh1SUNBZ0lIMHNYSEpjYmx4eVhHNGdJQ0FnY0hKdmNHVnlkR2xsY3pvZ2UxeHlYRzRnSUNBZ0lDQWdJQzhxS2x4eVhHNGdJQ0FnSUNBZ0lDQXFJQ0VqWlc0Z1NXWWdkR2hwY3lCelpYUjBhVzVuSUdseklIUnlkV1VzSUdFZ2RHOW5aMnhsSUdOdmRXeGtJR0psSUhOM2FYUmphR1ZrSUc5bVppQmhibVFnYjI0Z2QyaGxiaUJ3Y21WemMyVmtMbHh5WEc0Z0lDQWdJQ0FnSUNBcUlFbG1JR2wwSUdseklHWmhiSE5sTENCcGRDQjNhV3hzSUcxaGEyVWdjM1Z5WlNCMGFHVnlaU0JwY3lCaGJIZGhlWE1nYjI1c2VTQnZibVVnZEc5bloyeGxJR052ZFd4a0lHSmxJSE4zYVhSamFHVmtJRzl1WEhKY2JpQWdJQ0FnSUNBZ0lDb2dZVzVrSUhSb1pTQmhiSEpsWVdSNUlITjNhWFJqYUdWa0lHOXVJSFJ2WjJkc1pTQmpZVzRuZENCaVpTQnpkMmwwWTJobFpDQnZabVl1WEhKY2JpQWdJQ0FnSUNBZ0lDb2dJU042YUNEbHBvTG1ucHpvdjVua3VLcm9ycjdudmE3a3VMb2dkSEoxWmUrOGpDRHBncVBrdVlnZ2RHOW5aMnhsSU9hTWllbVNydVdjcU9paXErZUN1ZVdIdStlYWhPYVh0dVdBbWVXUHIrUzdwZVdQamVXa2plV2NzT2lpcSttQWllUzRyZVdTak9hY3F1bUFpZVM0cmVPQWdseHlYRzRnSUNBZ0lDQWdJQ0FxSUVCd2NtOXdaWEowZVNCN1FtOXZiR1ZoYm4wZ1lXeHNiM2RUZDJsMFkyaFBabVpjY2x4dUlDQWdJQ0FnSUNBZ0tpOWNjbHh1SUNBZ0lDQWdJQ0JoYkd4dmQxTjNhWFJqYUU5bVpqb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiMjlzZEdsd09pQkRRMTlFUlZZZ0ppWWdKMmt4T0c0NlEwOU5VRTlPUlU1VUxuUnZaMmRzWlY5bmNtOTFjQzVoYkd4dmQxTjNhWFJqYUU5bVppY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNklHWmhiSE5sWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdJQ0FnSUNvZ0lTTmxiaUJKWmlCVWIyZG5iR1VnYVhNZ1kyeHBZMnRsWkN3Z2FYUWdkMmxzYkNCMGNtbG5aMlZ5SUdWMlpXNTBKM01nYUdGdVpHeGxjbHh5WEc0Z0lDQWdJQ0FnSUNBcUlDRWplbWdnVkc5bloyeGxJT2FNaWVtU3J1ZWFoT2VDdWVXSHUrUzZpK1M3dHVXSWwraWhxT09BZ2x4eVhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0I3UTI5dGNHOXVaVzUwTGtWMlpXNTBTR0Z1Wkd4bGNsdGRmU0JqYUdWamEwVjJaVzUwYzF4eVhHNGdJQ0FnSUNBZ0lDQXFMMXh5WEc0Z0lDQWdJQ0FnSUdOb1pXTnJSWFpsYm5Sek9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNklGdGRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lCall5NURiMjF3YjI1bGJuUXVSWFpsYm5SSVlXNWtiR1Z5WEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lIMHNYSEpjYmx4eVhHNGdJQ0FnZFhCa1lYUmxWRzluWjJ4bGN6b2dablZ1WTNScGIyNGdLSFJ2WjJkc1pTa2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG1WdVlXSnNaV1JKYmtocFpYSmhjbU5vZVNrZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb2RHOW5aMnhsTG1selEyaGxZMnRsWkNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblJ2WjJkc1pVbDBaVzF6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dsMFpXMHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBkR1Z0SUNFOVBTQjBiMmRuYkdVZ0ppWWdhWFJsYlM1cGMwTm9aV05yWldRZ0ppWWdhWFJsYlM1bGJtRmliR1ZrS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNWZhR2xrWlVOb1pXTnJUV0Z5YXlncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1Ob1pXTnJSWFpsYm5SektTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWXk1RGIyMXdiMjVsYm5RdVJYWmxiblJJWVc1a2JHVnlMbVZ0YVhSRmRtVnVkSE1vZEdocGN5NWphR1ZqYTBWMlpXNTBjeXdnZEc5bloyeGxLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgwc1hISmNibHh5WEc0Z0lDQWdYMkZzYkc5M1QyNXNlVTl1WlZSdloyZHNaVU5vWldOclpXUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnYVhORGFHVmphMlZrSUQwZ1ptRnNjMlU3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYjJkbmJHVkpkR1Z0Y3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNocGRHVnRLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwTm9aV05yWldRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2wwWlcwdVgyaHBaR1ZEYUdWamEwMWhjbXNvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2hwZEdWdExtbHpRMmhsWTJ0bFpDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhORGFHVmphMlZrSUQwZ2RISjFaVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYVhORGFHVmphMlZrTzF4eVhHNGdJQ0FnZlN4Y2NseHVYSEpjYmlBZ0lDQmZiV0ZyWlVGMFRHVmhjM1JQYm1WVWIyZG5iR1ZEYUdWamEyVmtPaUJtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdselEyaGxZMnRsWkNBOUlIUm9hWE11WDJGc2JHOTNUMjVzZVU5dVpWUnZaMmRzWlVOb1pXTnJaV1FvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnBjME5vWldOclpXUWdKaVlnSVhSb2FYTXVZV3hzYjNkVGQybDBZMmhQWm1ZcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFJ2WjJkc1pVbDBaVzF6SUQwZ2RHaHBjeTUwYjJkbmJHVkpkR1Z0Y3p0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnZaMmRzWlVsMFpXMXpMbXhsYm1kMGFDQStJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZaMmRzWlVsMFpXMXpXekJkTG1Ob1pXTnJLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOUxGeHlYRzVjY2x4dUlDQWdJRzl1Ulc1aFlteGxPaUJtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIyUmxMbTl1S0NkamFHbHNaQzFoWkdSbFpDY3NJSFJvYVhNdVgyRnNiRzkzVDI1c2VVOXVaVlJ2WjJkc1pVTm9aV05yWldRc0lIUm9hWE1wTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym05a1pTNXZiaWduWTJocGJHUXRjbVZ0YjNabFpDY3NJSFJvYVhNdVgyMWhhMlZCZEV4bFlYTjBUMjVsVkc5bloyeGxRMmhsWTJ0bFpDd2dkR2hwY3lrN1hISmNiaUFnSUNCOUxGeHlYRzVjY2x4dUlDQWdJRzl1UkdsellXSnNaVG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtOWtaUzV2Wm1Zb0oyTm9hV3hrTFdGa1pHVmtKeXdnZEdocGN5NWZZV3hzYjNkUGJteDVUMjVsVkc5bloyeGxRMmhsWTJ0bFpDd2dkR2hwY3lrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIyUmxMbTltWmlnblkyaHBiR1F0Y21WdGIzWmxaQ2NzSUhSb2FYTXVYMjFoYTJWQmRFeGxZWE4wVDI1bFZHOW5aMnhsUTJobFkydGxaQ3dnZEdocGN5azdYSEpjYmlBZ0lDQjlMRnh5WEc1Y2NseHVJQ0FnSUhOMFlYSjBPaUJtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmJXRnJaVUYwVEdWaGMzUlBibVZVYjJkbmJHVkRhR1ZqYTJWa0tDazdYSEpjYmlBZ0lDQjlYSEpjYm4wcE8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlDRWpaVzRnVW1WaFpDQnZibXg1SUhCeWIzQmxjblI1TENCeVpYUjFjbTRnZEdobElIUnZaMmRzWlNCcGRHVnRjeUJoY25KaGVTQnlaV1psY21WdVkyVWdiV0Z1WVdkbFpDQmllU0JVYjJkbmJHVkRiMjUwWVdsdVpYSXVYSEpjYmlBcUlDRWplbWdnNVkrcTZLKzc1YkdlNW9Dbjc3eU02TCtVNVp1ZUlGUnZaMmRzWlVOdmJuUmhhVzVsY2lEbnJxSG5rSWJubW9RZ2RHOW5aMnhsSU9hVnNPZTdoT1c4bGVlVXFGeHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UxUnZaMmRzWlZ0ZGZTQjBiMmRuYkdWSmRHVnRjMXh5WEc0Z0tpOWNjbHh1ZG1GeUlHcHpJRDBnY21WeGRXbHlaU2duTGk0dmNHeGhkR1p2Y20wdmFuTW5LVHRjY2x4dWFuTXVaMlYwS0ZSdloyZHNaVU52Ym5SaGFXNWxjaTV3Y205MGIzUjVjR1VzSUNkMGIyZG5iR1ZKZEdWdGN5Y3NYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVibTlrWlM1blpYUkRiMjF3YjI1bGJuUnpTVzVEYUdsc1pISmxiaWhqWXk1VWIyZG5iR1VwTzF4eVhHNGdJQ0FnZlZ4eVhHNHBPMXh5WEc1Y2NseHVZMk11Vkc5bloyeGxRMjl1ZEdGcGJtVnlJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JVYjJkbmJHVkRiMjUwWVdsdVpYSTdYSEpjYmlKZGZRPT0iXX0=