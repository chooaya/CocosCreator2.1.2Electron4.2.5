(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/collider/CCPolygonCollider.js';
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
        cc.Collider.Polygon = cc.Class({
            properties: {
                threshold: {
                    default: 1,
                    serializable: false,
                    visible: false
                },
                _offset: cc.v2(0, 0),
                offset: {
                    get: function get() {
                        return this._offset;
                    },
                    set: function set(value) {
                        this._offset = value;
                    },
                    type: cc.Vec2
                },
                points: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.points',
                    default: function _default() {
                        return [
                            cc.v2(-50, -50),
                            cc.v2(50, -50),
                            cc.v2(50, 50),
                            cc.v2(-50, 50)
                        ];
                    },
                    type: [cc.Vec2]
                }
            },
            resetPointsByContour: CC_EDITOR && function () {
                var PhysicsUtils = Editor.require('scene://utils/physics');
                PhysicsUtils.resetPoints(this, { threshold: this.threshold });
            }
        });
        var PolygonCollider = cc.Class({
            name: 'cc.PolygonCollider',
            extends: cc.Collider,
            mixins: [cc.Collider.Polygon],
            editor: CC_EDITOR && {
                menu: 'i18n:MAIN_MENU.component.collider/Polygon Collider',
                inspector: 'packages://inspector/inspectors/comps/physics/points-base-collider.js'
            }
        });
        cc.PolygonCollider = module.exports = PolygonCollider;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDUG9seWdvbkNvbGxpZGVyLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2NvbGxpZGVyL0NDUG9seWdvbkNvbGxpZGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ29sbGlkZXIiLCJQb2x5Z29uIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidGhyZXNob2xkIiwiZGVmYXVsdCIsInNlcmlhbGl6YWJsZSIsInZpc2libGUiLCJfb2Zmc2V0IiwidjIiLCJvZmZzZXQiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsInR5cGUiLCJWZWMyIiwicG9pbnRzIiwidG9vbHRpcCIsIkNDX0RFViIsInJlc2V0UG9pbnRzQnlDb250b3VyIiwiQ0NfRURJVE9SIiwiUGh5c2ljc1V0aWxzIiwiRWRpdG9yIiwicmVxdWlyZSIsInJlc2V0UG9pbnRzIiwiUG9seWdvbkNvbGxpZGVyIiwibmFtZSIsImV4dGVuZHMiLCJtaXhpbnMiLCJlZGl0b3IiLCJtZW51IiwiaW5zcGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBK0JBQSxFQUFBQSxDQUFHQyxRQUFIRCxDQUFZRSxPQUFaRixHQUFzQkEsRUFBQUEsQ0FBR0csS0FBSEgsQ0FBUztBQUFBLFlBQzNCSSxVQUFBQSxFQUFZO0FBQUEsZ0JBQ1JDLFNBQUFBLEVBQVc7QUFBQSxvQkFDUEMsT0FBQUEsRUFBUyxDQURGO0FBQUEsb0JBRVBDLFlBQUFBLEVBQWMsS0FGUDtBQUFBLG9CQUdQQyxPQUFBQSxFQUFTLEtBSEY7QUFBQSxpQkFESDtBQUFBLGdCQU9SQyxPQUFBQSxFQUFTVCxFQUFBQSxDQUFHVSxFQUFIVixDQUFNLENBQU5BLEVBQVMsQ0FBVEEsQ0FQRDtBQUFBLGdCQWVSVyxNQUFBQSxFQUFRO0FBQUEsb0JBQ0pDLEdBQUFBLEVBQUssU0FBQSxHQUFBLEdBQVk7QUFBQSx3QkFDYixPQUFPLEtBQUtILE9BQVosQ0FEYTtBQUFBLHFCQURiO0FBQUEsb0JBSUpJLEdBQUFBLEVBQUssU0FBQSxHQUFBLENBQVVDLEtBQVYsRUFBaUI7QUFBQSx3QkFDbEIsS0FBS0wsT0FBTCxHQUFlSyxLQUFmLENBRGtCO0FBQUEscUJBSmxCO0FBQUEsb0JBT0pDLElBQUFBLEVBQU1mLEVBQUFBLENBQUdnQixJQVBMO0FBQUEsaUJBZkE7QUFBQSxnQkErQlJDLE1BQUFBLEVBQVE7QUFBQSxvQkFDSkMsT0FBQUEsRUFBU0MsTUFBQUEsSUFBVSxnREFEZjtBQUFBLG9CQUVKYixPQUFBQSxFQUFTLFNBQUEsUUFBQSxHQUFZO0FBQUEsd0JBQ2hCLE9BQU87QUFBQSw0QkFBQ04sRUFBQUEsQ0FBR1UsRUFBSFYsQ0FBTSxDQUFDLEVBQVBBLEVBQVUsQ0FBQyxFQUFYQSxDQUFEO0FBQUEsNEJBQWlCQSxFQUFBQSxDQUFHVSxFQUFIVixDQUFNLEVBQU5BLEVBQVUsQ0FBQyxFQUFYQSxDQUFqQjtBQUFBLDRCQUFpQ0EsRUFBQUEsQ0FBR1UsRUFBSFYsQ0FBTSxFQUFOQSxFQUFTLEVBQVRBLENBQWpDO0FBQUEsNEJBQStDQSxFQUFBQSxDQUFHVSxFQUFIVixDQUFNLENBQUMsRUFBUEEsRUFBVSxFQUFWQSxDQUEvQztBQUFBLHlCQUFQLENBRGdCO0FBQUEscUJBRmpCO0FBQUEsb0JBS0plLElBQUFBLEVBQU0sQ0FBQ2YsRUFBQUEsQ0FBR2dCLElBQUosQ0FMRjtBQUFBLGlCQS9CQTtBQUFBLGFBRGU7QUFBQSxZQXlDM0JJLG9CQUFBQSxFQUFzQkMsU0FBQUEsSUFBYSxZQUFZO0FBQUEsZ0JBQzNDLElBQUlDLFlBQUFBLEdBQWVDLE1BQUFBLENBQU9DLE9BQVBELENBQWUsdUJBQWZBLENBQW5CLENBRDJDO0FBQUEsZ0JBRTNDRCxZQUFBQSxDQUFhRyxXQUFiSCxDQUF5QixJQUF6QkEsRUFBK0IsRUFBQ2pCLFNBQUFBLEVBQVcsS0FBS0EsU0FBakIsRUFBL0JpQixFQUYyQztBQUFBLGFBekNwQjtBQUFBLFNBQVR0QixDQUF0QkE7UUF1REEsSUFBSTBCLGVBQUFBLEdBQWtCMUIsRUFBQUEsQ0FBR0csS0FBSEgsQ0FBUztBQUFBLFlBQzNCMkIsSUFBQUEsRUFBTSxvQkFEcUI7QUFBQSxZQUUzQkMsT0FBQUEsRUFBUzVCLEVBQUFBLENBQUdDLFFBRmU7QUFBQSxZQUczQjRCLE1BQUFBLEVBQVEsQ0FBQzdCLEVBQUFBLENBQUdDLFFBQUhELENBQVlFLE9BQWIsQ0FIbUI7QUFBQSxZQUszQjRCLE1BQUFBLEVBQVFULFNBQUFBLElBQWE7QUFBQSxnQkFDakJVLElBQUFBLEVBQU0sb0RBRFc7QUFBQSxnQkFFakJDLFNBQUFBLEVBQVcsdUVBRk07QUFBQSxhQUxNO0FBQUEsU0FBVGhDLENBQXRCO1FBV0FBLEVBQUFBLENBQUcwQixlQUFIMUIsR0FBcUJpQyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQlAsZUFBdEMxQiIsImZpbGUiOiJDQ1BvbHlnb25Db2xsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKlxyXG4gKiAhI2VuIERlZmluZXMgYSBQb2x5Z29uIENvbGxpZGVyIC5cclxuICogISN6aCDnlKjmnaXlrprkuYnlpJrovrnlvaLnorDmkp7kvZNcclxuICogQGNsYXNzIENvbGxpZGVyLlBvbHlnb25cclxuICovXHJcbmNjLkNvbGxpZGVyLlBvbHlnb24gPSBjYy5DbGFzcyh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGhyZXNob2xkOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX29mZnNldDogY2MudjIoMCwgMCksXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gUG9zaXRpb24gb2Zmc2V0XHJcbiAgICAgICAgICogISN6aCDkvY3nva7lgY/np7vph49cclxuICAgICAgICAgKiBAcHJvcGVydHkgb2Zmc2V0XHJcbiAgICAgICAgICogQHR5cGUge1ZlYzJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5WZWMyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogISNlbiBQb2x5Z29uIHBvaW50c1xyXG4gICAgICAgICAqICEjemgg5aSa6L655b2i6aG254K55pWw57uEXHJcbiAgICAgICAgICogQHByb3BlcnR5IHBvaW50c1xyXG4gICAgICAgICAqIEB0eXBlIHtWZWMyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQucGh5c2ljcy5waHlzaWNzX2NvbGxpZGVyLnBvaW50cycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gW2NjLnYyKC01MCwtNTApLCBjYy52Mig1MCwgLTUwKSwgY2MudjIoNTAsNTApLCBjYy52MigtNTAsNTApXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLlZlYzJdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldFBvaW50c0J5Q29udG91cjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgUGh5c2ljc1V0aWxzID0gRWRpdG9yLnJlcXVpcmUoJ3NjZW5lOi8vdXRpbHMvcGh5c2ljcycpO1xyXG4gICAgICAgIFBoeXNpY3NVdGlscy5yZXNldFBvaW50cyh0aGlzLCB7dGhyZXNob2xkOiB0aGlzLnRocmVzaG9sZH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vKipcclxuICogISNlbiBQb2x5Z29uIENvbGxpZGVyLlxyXG4gKiAhI3poIOWkmui+ueW9oueisOaSnue7hOS7tlxyXG4gKiBAY2xhc3MgUG9seWdvbkNvbGxpZGVyXHJcbiAqIEBleHRlbmRzIENvbGxpZGVyXHJcbiAqIEB1c2VzIENvbGxpZGVyLlBvbHlnb25cclxuICovXHJcbnZhciBQb2x5Z29uQ29sbGlkZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lOiAnY2MuUG9seWdvbkNvbGxpZGVyJyxcclxuICAgIGV4dGVuZHM6IGNjLkNvbGxpZGVyLFxyXG4gICAgbWl4aW5zOiBbY2MuQ29sbGlkZXIuUG9seWdvbl0sXHJcblxyXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xyXG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQuY29sbGlkZXIvUG9seWdvbiBDb2xsaWRlcicsXHJcbiAgICAgICAgaW5zcGVjdG9yOiAncGFja2FnZXM6Ly9pbnNwZWN0b3IvaW5zcGVjdG9ycy9jb21wcy9waHlzaWNzL3BvaW50cy1iYXNlLWNvbGxpZGVyLmpzJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY2MuUG9seWdvbkNvbGxpZGVyID0gbW9kdWxlLmV4cG9ydHMgPSBQb2x5Z29uQ29sbGlkZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcclxuICogISNlbiBEZWZpbmVzIGEgUG9seWdvbiBDb2xsaWRlciAuXHJcbiAqICEjemgg55So5p2l5a6a5LmJ5aSa6L655b2i56Kw5pKe5L2TXHJcbiAqIEBjbGFzcyBDb2xsaWRlci5Qb2x5Z29uXHJcbiAqL1xuY2MuQ29sbGlkZXIuUG9seWdvbiA9IGNjLkNsYXNzKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRocmVzaG9sZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIF9vZmZzZXQ6IGNjLnYyKDAsIDApLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gUG9zaXRpb24gb2Zmc2V0XHJcbiAgICAgICAgICogISN6aCDkvY3nva7lgY/np7vph49cclxuICAgICAgICAgKiBAcHJvcGVydHkgb2Zmc2V0XHJcbiAgICAgICAgICogQHR5cGUge1ZlYzJ9XHJcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlZlYzJcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhI2VuIFBvbHlnb24gcG9pbnRzXHJcbiAgICAgICAgICogISN6aCDlpJrovrnlvaLpobbngrnmlbDnu4RcclxuICAgICAgICAgKiBAcHJvcGVydHkgcG9pbnRzXHJcbiAgICAgICAgICogQHR5cGUge1ZlYzJbXX1cclxuICAgICAgICAgKi9cbiAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnBoeXNpY3MucGh5c2ljc19jb2xsaWRlci5wb2ludHMnLFxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjYy52MigtNTAsIC01MCksIGNjLnYyKDUwLCAtNTApLCBjYy52Mig1MCwgNTApLCBjYy52MigtNTAsIDUwKV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogW2NjLlZlYzJdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXRQb2ludHNCeUNvbnRvdXI6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBQaHlzaWNzVXRpbHMgPSBFZGl0b3IucmVxdWlyZSgnc2NlbmU6Ly91dGlscy9waHlzaWNzJyk7XG4gICAgICAgIFBoeXNpY3NVdGlscy5yZXNldFBvaW50cyh0aGlzLCB7IHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGQgfSk7XG4gICAgfVxufSk7XG5cbi8qKlxyXG4gKiAhI2VuIFBvbHlnb24gQ29sbGlkZXIuXHJcbiAqICEjemgg5aSa6L655b2i56Kw5pKe57uE5Lu2XHJcbiAqIEBjbGFzcyBQb2x5Z29uQ29sbGlkZXJcclxuICogQGV4dGVuZHMgQ29sbGlkZXJcclxuICogQHVzZXMgQ29sbGlkZXIuUG9seWdvblxyXG4gKi9cbnZhciBQb2x5Z29uQ29sbGlkZXIgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLlBvbHlnb25Db2xsaWRlcicsXG4gICAgZXh0ZW5kczogY2MuQ29sbGlkZXIsXG4gICAgbWl4aW5zOiBbY2MuQ29sbGlkZXIuUG9seWdvbl0sXG5cbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQuY29sbGlkZXIvUG9seWdvbiBDb2xsaWRlcicsXG4gICAgICAgIGluc3BlY3RvcjogJ3BhY2thZ2VzOi8vaW5zcGVjdG9yL2luc3BlY3RvcnMvY29tcHMvcGh5c2ljcy9wb2ludHMtYmFzZS1jb2xsaWRlci5qcydcbiAgICB9XG59KTtcblxuY2MuUG9seWdvbkNvbGxpZGVyID0gbW9kdWxlLmV4cG9ydHMgPSBQb2x5Z29uQ29sbGlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EVUc5c2VXZHZia052Ykd4cFpHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTmpJaXdpUTI5c2JHbGtaWElpTENKUWIyeDVaMjl1SWl3aVEyeGhjM01pTENKd2NtOXdaWEowYVdWeklpd2lkR2h5WlhOb2IyeGtJaXdpWkdWbVlYVnNkQ0lzSW5ObGNtbGhiR2w2WVdKc1pTSXNJblpwYzJsaWJHVWlMQ0pmYjJabWMyVjBJaXdpZGpJaUxDSnZabVp6WlhRaUxDSm5aWFFpTENKelpYUWlMQ0oyWVd4MVpTSXNJblI1Y0dVaUxDSldaV015SWl3aWNHOXBiblJ6SWl3aWRHOXZiSFJwY0NJc0lrTkRYMFJGVmlJc0luSmxjMlYwVUc5cGJuUnpRbmxEYjI1MGIzVnlJaXdpUTBOZlJVUkpWRTlTSWl3aVVHaDVjMmxqYzFWMGFXeHpJaXdpUldScGRHOXlJaXdpY21WeGRXbHlaU0lzSW5KbGMyVjBVRzlwYm5Seklpd2lVRzlzZVdkdmJrTnZiR3hwWkdWeUlpd2libUZ0WlNJc0ltVjRkR1Z1WkhNaUxDSnRhWGhwYm5NaUxDSmxaR2wwYjNJaUxDSnRaVzUxSWl3aWFXNXpjR1ZqZEc5eUlpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUV3UWtFN096czdPMEZCUzBGQkxFZEJRVWRETEZGQlFVZ3NRMEZCV1VNc1QwRkJXaXhIUVVGelFrWXNSMEZCUjBjc1MwRkJTQ3hEUVVGVE8wRkJRek5DUXl4blFrRkJXVHRCUVVOU1F5eHRRa0ZCVnp0QlFVTlFReXh4UWtGQlV5eERRVVJHTzBGQlJWQkRMREJDUVVGakxFdEJSbEE3UVVGSFVFTXNjVUpCUVZNN1FVRklSaXhUUVVSSU96dEJRVTlTUXl4cFFrRkJVMVFzUjBGQlIxVXNSVUZCU0N4RFFVRk5MRU5CUVU0c1JVRkJVeXhEUVVGVUxFTkJVRVE3TzBGQlUxSTdPenM3T3p0QlFVMUJReXhuUWtGQlVUdEJRVU5LUXl4cFFrRkJTeXhsUVVGWk8wRkJRMklzZFVKQlFVOHNTMEZCUzBnc1QwRkJXanRCUVVOSUxHRkJTRWM3UVVGSlNra3NhVUpCUVVzc1lVRkJWVU1zUzBGQlZpeEZRVUZwUWp0QlFVTnNRaXh4UWtGQlMwd3NUMEZCVEN4SFFVRmxTeXhMUVVGbU8wRkJRMGdzWVVGT1J6dEJRVTlLUXl4clFrRkJUV1lzUjBGQlIyZENPMEZCVUV3c1UwRm1RVHM3UVVGNVFsSTdPenM3T3p0QlFVMUJReXhuUWtGQlVUdEJRVU5LUXl4eFFrRkJVME1zVlVGQlZTeG5SRUZFWmp0QlFVVktZaXh4UWtGQlV5eHZRa0ZCV1R0QlFVTm9RaXgxUWtGQlR5eERRVUZEVGl4SFFVRkhWU3hGUVVGSUxFTkJRVTBzUTBGQlF5eEZRVUZRTEVWQlFWVXNRMEZCUXl4RlFVRllMRU5CUVVRc1JVRkJhVUpXTEVkQlFVZFZMRVZCUVVnc1EwRkJUU3hGUVVGT0xFVkJRVlVzUTBGQlF5eEZRVUZZTEVOQlFXcENMRVZCUVdsRFZpeEhRVUZIVlN4RlFVRklMRU5CUVUwc1JVRkJUaXhGUVVGVExFVkJRVlFzUTBGQmFrTXNSVUZCSzBOV0xFZEJRVWRWTEVWQlFVZ3NRMEZCVFN4RFFVRkRMRVZCUVZBc1JVRkJWU3hGUVVGV0xFTkJRUzlETEVOQlFWQTdRVUZEU2l4aFFVcEhPMEZCUzBwTExHdENRVUZOTEVOQlFVTm1MRWRCUVVkblFpeEpRVUZLTzBGQlRFWTdRVUV2UWtFc1MwRkVaVHM3UVVGNVF6TkNTU3d3UWtGQmMwSkRMR0ZCUVdFc1dVRkJXVHRCUVVNelF5eFpRVUZKUXl4bFFVRmxReXhQUVVGUFF5eFBRVUZRTEVOQlFXVXNkVUpCUVdZc1EwRkJia0k3UVVGRFFVWXNjVUpCUVdGSExGZEJRV0lzUTBGQmVVSXNTVUZCZWtJc1JVRkJLMElzUlVGQlEzQkNMRmRCUVZjc1MwRkJTMEVzVTBGQmFrSXNSVUZCTDBJN1FVRkRTRHRCUVRWRE1FSXNRMEZCVkN4RFFVRjBRanM3UVVGblJFRTdPenM3T3pzN1FVRlBRU3hKUVVGSmNVSXNhMEpCUVd0Q01VSXNSMEZCUjBjc1MwRkJTQ3hEUVVGVE8wRkJRek5DZDBJc1ZVRkJUU3h2UWtGRWNVSTdRVUZGTTBKRExHRkJRVk0xUWl4SFFVRkhReXhSUVVabE8wRkJSek5DTkVJc1dVRkJVU3hEUVVGRE4wSXNSMEZCUjBNc1VVRkJTQ3hEUVVGWlF5eFBRVUZpTEVOQlNHMUNPenRCUVVzelFqUkNMRmxCUVZGVUxHRkJRV0U3UVVGRGFrSlZMR05CUVUwc2IwUkJSRmM3UVVGRmFrSkRMRzFDUVVGWE8wRkJSazA3UVVGTVRTeERRVUZVTEVOQlFYUkNPenRCUVZkQmFFTXNSMEZCUnpCQ0xHVkJRVWdzUjBGQmNVSlBMRTlCUVU5RExFOUJRVkFzUjBGQmFVSlNMR1ZCUVhSRElpd2labWxzWlNJNklrTkRVRzlzZVdkdmJrTnZiR3hwWkdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNjbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TXkweU1ERTJJRU5vZFd0dmJtY2dWR1ZqYUc1dmJHOW5hV1Z6SUVsdVl5NWNjbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4eVhHNWNjbHh1SUdoMGRIQnpPaTh2ZDNkM0xtTnZZMjl6TG1OdmJTOWNjbHh1WEhKY2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEhKY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNjbHh1SUNCM2IzSnNaSGRwWkdVc0lISnZlV0ZzZEhrdFpuSmxaU3dnYm05dUxXRnpjMmxuYm1GaWJHVXNJSEpsZG05allXSnNaU0JoYm1RZ2JtOXVMV1Y0WTJ4MWMybDJaU0JzYVdObGJuTmxYSEpjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4eVhHNGdJRzV2ZENCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyWjBkMkZ5WlNCbWIzSWdaR1YyWld4dmNHbHVaeUJ2ZEdobGNpQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QjBhR0YwSjNOY2NseHVJQ0IxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYSEpjYmlBZ2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYSEpjYmx4eVhHNGdWR2hsSUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUdsdUlIUm9hWE1nVEdsalpXNXpaU0JCWjNKbFpXMWxiblFnWVhKbElHeHBZMlZ1YzJWa0xDQnViM1FnYzI5c1pDNWNjbHh1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xpQnlaWE5sY25abGN5QmhiR3dnY21sbmFIUnpJRzV2ZENCbGVIQnlaWE56YkhrZ1ozSmhiblJsWkNCMGJ5QjViM1V1WEhKY2JseHlYRzRnVkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVXlCUFVseHlYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEhKY2JpQkdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUaUJPVHlCRlZrVk9WQ0JUU0VGTVRDQlVTRVZjY2x4dUlFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2NseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hISmNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEhKY2JpQlVTRVVnVTA5R1ZGZEJVa1V1WEhKY2JpQXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4eVhHNWNjbHh1THlvcVhISmNiaUFxSUNFalpXNGdSR1ZtYVc1bGN5QmhJRkJ2YkhsbmIyNGdRMjlzYkdsa1pYSWdMbHh5WEc0Z0tpQWhJM3BvSU9lVXFPYWRwZVd1bXVTNWllV2ttdWkrdWVXOW91ZWlzT2FTbnVTOWsxeHlYRzRnS2lCQVkyeGhjM01nUTI5c2JHbGtaWEl1VUc5c2VXZHZibHh5WEc0Z0tpOWNjbHh1WTJNdVEyOXNiR2xrWlhJdVVHOXNlV2R2YmlBOUlHTmpMa05zWVhOektIdGNjbHh1SUNBZ0lIQnliM0JsY25ScFpYTTZJSHRjY2x4dUlDQWdJQ0FnSUNCMGFISmxjMmh2YkdRNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZERvZ01TeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVnlhV0ZzYVhwaFlteGxPaUJtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtbHphV0pzWlRvZ1ptRnNjMlZjY2x4dUlDQWdJQ0FnSUNCOUxGeHlYRzVjY2x4dUlDQWdJQ0FnSUNCZmIyWm1jMlYwT2lCall5NTJNaWd3TENBd0tTeGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdJQ0FnSUNvZ0lTTmxiaUJRYjNOcGRHbHZiaUJ2Wm1aelpYUmNjbHh1SUNBZ0lDQWdJQ0FnS2lBaEkzcG9JT1M5amVlOXJ1V0JqK2VudSttSGoxeHlYRzRnSUNBZ0lDQWdJQ0FxSUVCd2NtOXdaWEowZVNCdlptWnpaWFJjY2x4dUlDQWdJQ0FnSUNBZ0tpQkFkSGx3WlNCN1ZtVmpNbjFjY2x4dUlDQWdJQ0FnSUNBZ0tpOWNjbHh1SUNBZ0lDQWdJQ0J2Wm1aelpYUTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmIyWm1jMlYwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmIyWm1jMlYwSUQwZ2RtRnNkV1U3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVNklHTmpMbFpsWXpKY2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FnSUNBZ0tpQWhJMlZ1SUZCdmJIbG5iMjRnY0c5cGJuUnpYSEpjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhQ0RscEpyb3Zybmx2YUxwb2Jibmdybm1sYkRudTRSY2NseHVJQ0FnSUNBZ0lDQWdLaUJBY0hKdmNHVnlkSGtnY0c5cGJuUnpYSEpjYmlBZ0lDQWdJQ0FnSUNvZ1FIUjVjR1VnZTFabFl6SmJYWDFjY2x4dUlDQWdJQ0FnSUNBZ0tpOWNjbHh1SUNBZ0lDQWdJQ0J3YjJsdWRITTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkRzl2YkhScGNEb2dRME5mUkVWV0lDWW1JQ2RwTVRodU9rTlBUVkJQVGtWT1ZDNXdhSGx6YVdOekxuQm9lWE5wWTNOZlkyOXNiR2xrWlhJdWNHOXBiblJ6Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmJZMk11ZGpJb0xUVXdMQzAxTUNrc0lHTmpMbll5S0RVd0xDQXROVEFwTENCall5NTJNaWcxTUN3MU1Da3NJR05qTG5ZeUtDMDFNQ3cxTUNsZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxPaUJiWTJNdVZtVmpNbDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOUxGeHlYRzVjY2x4dUlDQWdJSEpsYzJWMFVHOXBiblJ6UW5sRGIyNTBiM1Z5T2lCRFExOUZSRWxVVDFJZ0ppWWdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJRYUhsemFXTnpWWFJwYkhNZ1BTQkZaR2wwYjNJdWNtVnhkV2x5WlNnbmMyTmxibVU2THk5MWRHbHNjeTl3YUhsemFXTnpKeWs3WEhKY2JpQWdJQ0FnSUNBZ1VHaDVjMmxqYzFWMGFXeHpMbkpsYzJWMFVHOXBiblJ6S0hSb2FYTXNJSHQwYUhKbGMyaHZiR1E2SUhSb2FYTXVkR2h5WlhOb2IyeGtmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMHBPMXh5WEc1Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lBaEkyVnVJRkJ2YkhsbmIyNGdRMjlzYkdsa1pYSXVYSEpjYmlBcUlDRWplbWdnNWFTYTZMNjU1YjJpNTZLdzVwS2U1N3VFNUx1MlhISmNiaUFxSUVCamJHRnpjeUJRYjJ4NVoyOXVRMjlzYkdsa1pYSmNjbHh1SUNvZ1FHVjRkR1Z1WkhNZ1EyOXNiR2xrWlhKY2NseHVJQ29nUUhWelpYTWdRMjlzYkdsa1pYSXVVRzlzZVdkdmJseHlYRzRnS2k5Y2NseHVkbUZ5SUZCdmJIbG5iMjVEYjJ4c2FXUmxjaUE5SUdOakxrTnNZWE56S0h0Y2NseHVJQ0FnSUc1aGJXVTZJQ2RqWXk1UWIyeDVaMjl1UTI5c2JHbGtaWEluTEZ4eVhHNGdJQ0FnWlhoMFpXNWtjem9nWTJNdVEyOXNiR2xrWlhJc1hISmNiaUFnSUNCdGFYaHBibk02SUZ0all5NURiMnhzYVdSbGNpNVFiMng1WjI5dVhTeGNjbHh1WEhKY2JpQWdJQ0JsWkdsMGIzSTZJRU5EWDBWRVNWUlBVaUFtSmlCN1hISmNiaUFnSUNBZ0lDQWdiV1Z1ZFRvZ0oya3hPRzQ2VFVGSlRsOU5SVTVWTG1OdmJYQnZibVZ1ZEM1amIyeHNhV1JsY2k5UWIyeDVaMjl1SUVOdmJHeHBaR1Z5Snl4Y2NseHVJQ0FnSUNBZ0lDQnBibk53WldOMGIzSTZJQ2R3WVdOcllXZGxjem92TDJsdWMzQmxZM1J2Y2k5cGJuTndaV04wYjNKekwyTnZiWEJ6TDNCb2VYTnBZM012Y0c5cGJuUnpMV0poYzJVdFkyOXNiR2xrWlhJdWFuTW5MRnh5WEc0Z0lDQWdmU3hjY2x4dWZTazdYSEpjYmx4eVhHNWpZeTVRYjJ4NVoyOXVRMjlzYkdsa1pYSWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRkJ2YkhsbmIyNURiMnhzYVdSbGNqdGNjbHh1SWwxOSJdfQ==