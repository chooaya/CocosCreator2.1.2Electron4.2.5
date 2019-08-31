(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/value-types/value-type.js';
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
        var js = require('../platform/js');
        function ValueType() {
        }
        js.setClassName('cc.ValueType', ValueType);
        var proto = ValueType.prototype;
        if (CC_EDITOR) {
            proto.clone = function () {
                cc.errorID('0100', js.getClassName(this) + '.clone');
                return null;
            };
            proto.equals = function (other) {
                cc.errorID('0100', js.getClassName(this) + '.equals');
                return false;
            };
            proto.lerp = function (to, ratio) {
                cc.errorID('0100', js.getClassName(this) + '.lerp');
                return this.clone();
            };
            proto.set = function (source) {
                cc.errorID('0100', js.getClassName(this) + '.set');
            };
        }
        proto.toString = function () {
            return '' + {};
        };
        cc.ValueType = module.exports = ValueType;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLXR5cGUuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL2NvcmUvdmFsdWUtdHlwZXMvdmFsdWUtdHlwZS5qcyJdLCJuYW1lcyI6WyJqcyIsInJlcXVpcmUiLCJWYWx1ZVR5cGUiLCJzZXRDbGFzc05hbWUiLCJwcm90byIsInByb3RvdHlwZSIsIkNDX0VESVRPUiIsImNsb25lIiwiY2MiLCJlcnJvcklEIiwiZ2V0Q2xhc3NOYW1lIiwiZXF1YWxzIiwib3RoZXIiLCJsZXJwIiwidG8iLCJyYXRpbyIsInNldCIsInNvdXJjZSIsInRvU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBMEJBLElBQUlBLEVBQUFBLEdBQUtDLE9BQUFBLENBQVEsZ0JBQVJBLENBQVQ7UUFRQSxTQUFTQyxTQUFULEdBQXNCO0FBQUE7UUFDdEJGLEVBQUFBLENBQUdHLFlBQUhILENBQWdCLGNBQWhCQSxFQUFnQ0UsU0FBaENGO1FBRUEsSUFBSUksS0FBQUEsR0FBUUYsU0FBQUEsQ0FBVUcsU0FBdEI7UUFFQSxJQUFJQyxTQUFKLEVBQWU7QUFBQSxZQU9YRixLQUFBQSxDQUFNRyxLQUFOSCxHQUFjLFlBQVk7QUFBQSxnQkFDdEJJLEVBQUFBLENBQUdDLE9BQUhELENBQVcsTUFBWEEsRUFBbUJSLEVBQUFBLENBQUdVLFlBQUhWLENBQWdCLElBQWhCQSxJQUF3QixRQUEzQ1EsRUFEc0I7QUFBQSxnQkFFdEIsT0FBTyxJQUFQLENBRnNCO0FBQUEsYUFBMUJKLENBUFc7QUFBQSxZQW1CWEEsS0FBQUEsQ0FBTU8sTUFBTlAsR0FBZSxVQUFVUSxLQUFWLEVBQWlCO0FBQUEsZ0JBQzVCSixFQUFBQSxDQUFHQyxPQUFIRCxDQUFXLE1BQVhBLEVBQW1CUixFQUFBQSxDQUFHVSxZQUFIVixDQUFnQixJQUFoQkEsSUFBd0IsU0FBM0NRLEVBRDRCO0FBQUEsZ0JBRTVCLE9BQU8sS0FBUCxDQUY0QjtBQUFBLGFBQWhDSixDQW5CVztBQUFBLFlBb0NYQSxLQUFBQSxDQUFNUyxJQUFOVCxHQUFhLFVBQVVVLEVBQVYsRUFBY0MsS0FBZCxFQUFxQjtBQUFBLGdCQUM5QlAsRUFBQUEsQ0FBR0MsT0FBSEQsQ0FBVyxNQUFYQSxFQUFtQlIsRUFBQUEsQ0FBR1UsWUFBSFYsQ0FBZ0IsSUFBaEJBLElBQXdCLE9BQTNDUSxFQUQ4QjtBQUFBLGdCQUU5QixPQUFPLEtBQUtELEtBQUwsRUFBUCxDQUY4QjtBQUFBLGFBQWxDSCxDQXBDVztBQUFBLFlBaURYQSxLQUFBQSxDQUFNWSxHQUFOWixHQUFZLFVBQVVhLE1BQVYsRUFBa0I7QUFBQSxnQkFDMUJULEVBQUFBLENBQUdDLE9BQUhELENBQVcsTUFBWEEsRUFBbUJSLEVBQUFBLENBQUdVLFlBQUhWLENBQWdCLElBQWhCQSxJQUF3QixNQUEzQ1EsRUFEMEI7QUFBQSxhQUE5QkosQ0FqRFc7QUFBQTtRQTREZkEsS0FBQUEsQ0FBTWMsUUFBTmQsR0FBaUIsWUFBWTtBQUFBLFlBQ3pCLE9BQU8sS0FBSyxFQUFaLENBRHlCO0FBQUEsU0FBN0JBO1FBSUFJLEVBQUFBLENBQUdOLFNBQUhNLEdBQWVXLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCakIsU0FBaENNIiwiZmlsZSI6InZhbHVlLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxyXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxyXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG52YXIganMgPSByZXF1aXJlKCcuLi9wbGF0Zm9ybS9qcycpO1xyXG5cclxuLyoqXHJcbiAqICEjZW4gVGhlIGJhc2UgY2xhc3Mgb2YgYWxsIHZhbHVlIHR5cGVzLlxyXG4gKiAhI3poIOaJgOacieWAvOexu+Wei+eahOWfuuexu+OAglxyXG4gKiBAY2xhc3MgVmFsdWVUeXBlXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBWYWx1ZVR5cGUgKCkge31cclxuanMuc2V0Q2xhc3NOYW1lKCdjYy5WYWx1ZVR5cGUnLCBWYWx1ZVR5cGUpO1xyXG5cclxudmFyIHByb3RvID0gVmFsdWVUeXBlLnByb3RvdHlwZTtcclxuXHJcbmlmIChDQ19FRElUT1IpIHtcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIGV4YWN0IGNvcHkgb2YgY3VycmVudCB2YWx1ZS5cclxuICAgICAqICEjemgg5YWL6ZqG5b2T5YmN5YC877yM6K+l5pa55rOV6L+U5Zue5LiA5Liq5paw5a+56LGh77yM5paw5a+56LGh55qE5YC85ZKM5Y6f5a+56LGh55u4562J44CCXHJcbiAgICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICAgKiBAcmV0dXJuIHtWYWx1ZVR5cGV9XHJcbiAgICAgKi9cclxuICAgIHByb3RvLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmVycm9ySUQoJzAxMDAnLCBqcy5nZXRDbGFzc05hbWUodGhpcykgKyAnLmNsb25lJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogISNlbiBDb21wYXJlcyB0aGlzIG9iamVjdCB3aXRoIHRoZSBvdGhlciBvbmUuXHJcbiAgICAgKiAhI3poIOW9k+WJjeWvueixoeaYr+WQpuetieS6juaMh+WumuWvueixoeOAglxyXG4gICAgICogQG1ldGhvZCBlcXVhbHNcclxuICAgICAqIEBwYXJhbSB7VmFsdWVUeXBlfSBvdGhlclxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgY2MuZXJyb3JJRCgnMDEwMCcsIGpzLmdldENsYXNzTmFtZSh0aGlzKSArICcuZXF1YWxzJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW5cclxuICAgICAqIExpbmVhcmx5IGludGVycG9sYXRlcyBiZXR3ZWVuIHRoaXMgdmFsdWUgdG8gdG8gdmFsdWUgYnkgcmF0aW8gd2hpY2ggaXMgaW4gdGhlIHJhbmdlIFswLCAxXS5cclxuICAgICAqIFdoZW4gcmF0aW8gPSAwIHJldHVybnMgdGhpcy4gV2hlbiByYXRpbyA9IDEgcmV0dXJuIHRvLiBXaGVuIHJhdGlvID0gMC41IHJldHVybnMgdGhlIGF2ZXJhZ2Ugb2YgdGhpcyBhbmQgdG8uXHJcbiAgICAgKiAhI3poXHJcbiAgICAgKiDnur/mgKfmj5LlgLzjgII8YnIvPlxyXG4gICAgICog5b2TIHJhdGlvID0gMCDml7bov5Tlm57oh6rouqvvvIxyYXRpbyA9IDEg5pe26L+U5Zue55uu5qCH77yMcmF0aW8gPSAwLjUg6L+U5Zue6Ieq6Lqr5ZKM55uu5qCH55qE5bmz5Z2H5YC844CC44CCXHJcbiAgICAgKiBAbWV0aG9kIGxlcnBcclxuICAgICAqIEBwYXJhbSB7VmFsdWVUeXBlfSB0byAtIHRoZSB0byB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gdGhlIGludGVycG9sYXRpb24gY29lZmZpY2llbnRcclxuICAgICAqIEByZXR1cm4ge1ZhbHVlVHlwZX1cclxuICAgICAqL1xyXG4gICAgcHJvdG8ubGVycCA9IGZ1bmN0aW9uICh0bywgcmF0aW8pIHtcclxuICAgICAgICBjYy5lcnJvcklEKCcwMTAwJywganMuZ2V0Q2xhc3NOYW1lKHRoaXMpICsgJy5sZXJwJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuXHJcbiAgICAgKiBDb3B5cyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBhbm90aGVyIGdpdmVuIG9iamVjdCB0byB0aGlzIHZhbHVlLlxyXG4gICAgICogISN6aFxyXG4gICAgICog5LuO5YW25a6D5a+56LGh5oqK5omA5pyJ5bGe5oCn5aSN5Yi25Yiw5b2T5YmN5a+56LGh44CCXHJcbiAgICAgKiBAbWV0aG9kIHNldFxyXG4gICAgICogQHBhcmFtIHtWYWx1ZVR5cGV9IHNvdXJjZSAtIHRoZSBzb3VyY2UgdG8gY29weVxyXG4gICAgICovXHJcbiAgICBwcm90by5zZXQgPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgY2MuZXJyb3JJRCgnMDEwMCcsIGpzLmdldENsYXNzTmFtZSh0aGlzKSArICcuc2V0Jyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogISNlbiBUT0RPXHJcbiAqICEjemgg6L2s5o2i5Li65pa55L6/6ZiF6K+755qE5a2X56ym5Liy44CCXHJcbiAqIEBtZXRob2QgdG9TdHJpbmdcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxucHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJycgKyB7fTtcclxufTtcclxuXHJcbmNjLlZhbHVlVHlwZSA9IG1vZHVsZS5leHBvcnRzID0gVmFsdWVUeXBlO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIGpzID0gcmVxdWlyZSgnLi4vcGxhdGZvcm0vanMnKTtcblxuLyoqXHJcbiAqICEjZW4gVGhlIGJhc2UgY2xhc3Mgb2YgYWxsIHZhbHVlIHR5cGVzLlxyXG4gKiAhI3poIOaJgOacieWAvOexu+Wei+eahOWfuuexu+OAglxyXG4gKiBAY2xhc3MgVmFsdWVUeXBlXHJcbiAqXHJcbiAqL1xuZnVuY3Rpb24gVmFsdWVUeXBlKCkge31cbmpzLnNldENsYXNzTmFtZSgnY2MuVmFsdWVUeXBlJywgVmFsdWVUeXBlKTtcblxudmFyIHByb3RvID0gVmFsdWVUeXBlLnByb3RvdHlwZTtcblxuaWYgKENDX0VESVRPUikge1xuICAvKipcclxuICAgKiAhI2VuIFRoaXMgbWV0aG9kIHJldHVybnMgYW4gZXhhY3QgY29weSBvZiBjdXJyZW50IHZhbHVlLlxyXG4gICAqICEjemgg5YWL6ZqG5b2T5YmN5YC877yM6K+l5pa55rOV6L+U5Zue5LiA5Liq5paw5a+56LGh77yM5paw5a+56LGh55qE5YC85ZKM5Y6f5a+56LGh55u4562J44CCXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIEByZXR1cm4ge1ZhbHVlVHlwZX1cclxuICAgKi9cbiAgcHJvdG8uY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2MuZXJyb3JJRCgnMDEwMCcsIGpzLmdldENsYXNzTmFtZSh0aGlzKSArICcuY2xvbmUnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcclxuICAgKiAhI2VuIENvbXBhcmVzIHRoaXMgb2JqZWN0IHdpdGggdGhlIG90aGVyIG9uZS5cclxuICAgKiAhI3poIOW9k+WJjeWvueixoeaYr+WQpuetieS6juaMh+WumuWvueixoeOAglxyXG4gICAqIEBtZXRob2QgZXF1YWxzXHJcbiAgICogQHBhcmFtIHtWYWx1ZVR5cGV9IG90aGVyXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgKi9cbiAgcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgY2MuZXJyb3JJRCgnMDEwMCcsIGpzLmdldENsYXNzTmFtZSh0aGlzKSArICcuZXF1YWxzJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqICEjZW5cclxuICAgKiBMaW5lYXJseSBpbnRlcnBvbGF0ZXMgYmV0d2VlbiB0aGlzIHZhbHVlIHRvIHRvIHZhbHVlIGJ5IHJhdGlvIHdoaWNoIGlzIGluIHRoZSByYW5nZSBbMCwgMV0uXHJcbiAgICogV2hlbiByYXRpbyA9IDAgcmV0dXJucyB0aGlzLiBXaGVuIHJhdGlvID0gMSByZXR1cm4gdG8uIFdoZW4gcmF0aW8gPSAwLjUgcmV0dXJucyB0aGUgYXZlcmFnZSBvZiB0aGlzIGFuZCB0by5cclxuICAgKiAhI3poXHJcbiAgICog57q/5oCn5o+S5YC844CCPGJyLz5cclxuICAgKiDlvZMgcmF0aW8gPSAwIOaXtui/lOWbnuiHqui6q++8jHJhdGlvID0gMSDml7bov5Tlm57nm67moIfvvIxyYXRpbyA9IDAuNSDov5Tlm57oh6rouqvlkoznm67moIfnmoTlubPlnYflgLzjgILjgIJcclxuICAgKiBAbWV0aG9kIGxlcnBcclxuICAgKiBAcGFyYW0ge1ZhbHVlVHlwZX0gdG8gLSB0aGUgdG8gdmFsdWVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSB0aGUgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudFxyXG4gICAqIEByZXR1cm4ge1ZhbHVlVHlwZX1cclxuICAgKi9cbiAgcHJvdG8ubGVycCA9IGZ1bmN0aW9uICh0bywgcmF0aW8pIHtcbiAgICBjYy5lcnJvcklEKCcwMTAwJywganMuZ2V0Q2xhc3NOYW1lKHRoaXMpICsgJy5sZXJwJyk7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcbiAgfTtcblxuICAvKipcclxuICAgKiAhI2VuXHJcbiAgICogQ29weXMgYWxsIHRoZSBwcm9wZXJ0aWVzIGZyb20gYW5vdGhlciBnaXZlbiBvYmplY3QgdG8gdGhpcyB2YWx1ZS5cclxuICAgKiAhI3poXHJcbiAgICog5LuO5YW25a6D5a+56LGh5oqK5omA5pyJ5bGe5oCn5aSN5Yi25Yiw5b2T5YmN5a+56LGh44CCXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAcGFyYW0ge1ZhbHVlVHlwZX0gc291cmNlIC0gdGhlIHNvdXJjZSB0byBjb3B5XHJcbiAgICovXG4gIHByb3RvLnNldCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBjYy5lcnJvcklEKCcwMTAwJywganMuZ2V0Q2xhc3NOYW1lKHRoaXMpICsgJy5zZXQnKTtcbiAgfTtcbn1cblxuLyoqXHJcbiAqICEjZW4gVE9ET1xyXG4gKiAhI3poIOi9rOaNouS4uuaWueS+v+mYheivu+eahOWtl+espuS4suOAglxyXG4gKiBAbWV0aG9kIHRvU3RyaW5nXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXG5wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnICsge307XG59O1xuXG5jYy5WYWx1ZVR5cGUgPSBtb2R1bGUuZXhwb3J0cyA9IFZhbHVlVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluWmhiSFZsTFhSNWNHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaWFuTWlMQ0p5WlhGMWFYSmxJaXdpVm1Gc2RXVlVlWEJsSWl3aWMyVjBRMnhoYzNOT1lXMWxJaXdpY0hKdmRHOGlMQ0p3Y205MGIzUjVjR1VpTENKRFExOUZSRWxVVDFJaUxDSmpiRzl1WlNJc0ltTmpJaXdpWlhKeWIzSkpSQ0lzSW1kbGRFTnNZWE56VG1GdFpTSXNJbVZ4ZFdGc2N5SXNJbTkwYUdWeUlpd2liR1Z5Y0NJc0luUnZJaXdpY21GMGFXOGlMQ0p6WlhRaUxDSnpiM1Z5WTJVaUxDSjBiMU4wY21sdVp5SXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCTUVKQkxFbEJRVWxCTEV0QlFVdERMRkZCUVZFc1owSkJRVklzUTBGQlZEczdRVUZGUVRzN096czdPMEZCVFVFc1UwRkJVME1zVTBGQlZDeEhRVUZ6UWl4RFFVRkZPMEZCUTNoQ1JpeEhRVUZIUnl4WlFVRklMRU5CUVdkQ0xHTkJRV2hDTEVWQlFXZERSQ3hUUVVGb1F6czdRVUZGUVN4SlFVRkpSU3hSUVVGUlJpeFZRVUZWUnl4VFFVRjBRanM3UVVGRlFTeEpRVUZKUXl4VFFVRktMRVZCUVdVN1FVRkRXRHM3T3pzN08wRkJUVUZHTEZGQlFVMUhMRXRCUVU0c1IwRkJZeXhaUVVGWk8wRkJRM1JDUXl4UFFVRkhReXhQUVVGSUxFTkJRVmNzVFVGQldDeEZRVUZ0UWxRc1IwRkJSMVVzV1VGQlNDeERRVUZuUWl4SlFVRm9RaXhKUVVGM1FpeFJRVUV6UXp0QlFVTkJMRmRCUVU4c1NVRkJVRHRCUVVOSUxFZEJTRVE3TzBGQlMwRTdPenM3T3pzN1FVRlBRVTRzVVVGQlRVOHNUVUZCVGl4SFFVRmxMRlZCUVZWRExFdEJRVllzUlVGQmFVSTdRVUZETlVKS0xFOUJRVWRETEU5QlFVZ3NRMEZCVnl4TlFVRllMRVZCUVcxQ1ZDeEhRVUZIVlN4WlFVRklMRU5CUVdkQ0xFbEJRV2hDTEVsQlFYZENMRk5CUVRORE8wRkJRMEVzVjBGQlR5eExRVUZRTzBGQlEwZ3NSMEZJUkRzN1FVRkxRVHM3T3pzN096czdPenM3TzBGQldVRk9MRkZCUVUxVExFbEJRVTRzUjBGQllTeFZRVUZWUXl4RlFVRldMRVZCUVdORExFdEJRV1FzUlVGQmNVSTdRVUZET1VKUUxFOUJRVWRETEU5QlFVZ3NRMEZCVnl4TlFVRllMRVZCUVcxQ1ZDeEhRVUZIVlN4WlFVRklMRU5CUVdkQ0xFbEJRV2hDTEVsQlFYZENMRTlCUVRORE8wRkJRMEVzVjBGQlR5eExRVUZMU0N4TFFVRk1MRVZCUVZBN1FVRkRTQ3hIUVVoRU96dEJRVXRCT3pzN096czdPenRCUVZGQlNDeFJRVUZOV1N4SFFVRk9MRWRCUVZrc1ZVRkJWVU1zVFVGQlZpeEZRVUZyUWp0QlFVTXhRbFFzVDBGQlIwTXNUMEZCU0N4RFFVRlhMRTFCUVZnc1JVRkJiVUpVTEVkQlFVZFZMRmxCUVVnc1EwRkJaMElzU1VGQmFFSXNTVUZCZDBJc1RVRkJNME03UVVGRFNDeEhRVVpFTzBGQlIwZzdPMEZCUlVRN096czdPenRCUVUxQlRpeE5RVUZOWXl4UlFVRk9MRWRCUVdsQ0xGbEJRVms3UVVGRGVrSXNVMEZCVHl4TFFVRkxMRVZCUVZvN1FVRkRTQ3hEUVVaRU96dEJRVWxCVml4SFFVRkhUaXhUUVVGSUxFZEJRV1ZwUWl4UFFVRlBReXhQUVVGUUxFZEJRV2xDYkVJc1UwRkJhRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhISmNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVE10TWpBeE5pQkRhSFZyYjI1bklGUmxZMmh1YjJ4dloybGxjeUJKYm1NdVhISmNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjY2x4dVhISmNiaUJvZEhSd2N6b3ZMM2QzZHk1amIyTnZjeTVqYjIwdlhISmNibHh5WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh5WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hISmNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHlYRzRnZEc4Z2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOXNaV3g1SUhSdklHUmxkbVZzYjNBZ1oyRnRaWE1nYjI0Z2VXOTFjaUIwWVhKblpYUWdjR3hoZEdadmNtMXpMaUJaYjNVZ2MyaGhiR3hjY2x4dUlDQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEhKY2JpQWdkWE5sWkNCbWIzSWdaR1YyWld4dmNHbHVaeUJuWVcxbGN5NGdXVzkxSUdGeVpTQnViM1FnWjNKaGJuUmxaQ0IwYnlCd2RXSnNhWE5vTENCa2FYTjBjbWxpZFhSbExGeHlYRzRnSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUJEYjJOdmN5QkRjbVZoZEc5eUxseHlYRzVjY2x4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhISmNiaUJZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM0Z2NtVnpaWEoyWlhNZ1lXeHNJSEpwWjJoMGN5QnViM1FnWlhod2NtVnpjMng1SUdkeVlXNTBaV1FnZEc4Z2VXOTFMbHh5WEc1Y2NseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2NseHVJRWxOVUV4SlJVUXNJRWxPUTB4VlJFbE9SeUJDVlZRZ1RrOVVJRXhKVFVsVVJVUWdWRThnVkVoRklGZEJVbEpCVGxSSlJWTWdUMFlnVFVWU1EwaEJUbFJCUWtsTVNWUlpMRnh5WEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYSEpjYmlCQlZWUklUMUpUSUU5U0lFTlBVRmxTU1VkSVZDQklUMHhFUlZKVElFSkZJRXhKUVVKTVJTQkdUMUlnUVU1WklFTk1RVWxOTENCRVFVMUJSMFZUSUU5U0lFOVVTRVZTWEhKY2JpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U0lFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTEZ4eVhHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh5WEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh5WEc0Z0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaTljY2x4dVhISmNiblpoY2lCcWN5QTlJSEpsY1hWcGNtVW9KeTR1TDNCc1lYUm1iM0p0TDJwekp5azdYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dJU05sYmlCVWFHVWdZbUZ6WlNCamJHRnpjeUJ2WmlCaGJHd2dkbUZzZFdVZ2RIbHdaWE11WEhKY2JpQXFJQ0VqZW1nZzVvbUE1cHlKNVlDODU3Rzc1WjZMNTVxRTVaKzY1N0c3NDRDQ1hISmNiaUFxSUVCamJHRnpjeUJXWVd4MVpWUjVjR1ZjY2x4dUlDcGNjbHh1SUNvdlhISmNibVoxYm1OMGFXOXVJRlpoYkhWbFZIbHdaU0FvS1NCN2ZWeHlYRzVxY3k1elpYUkRiR0Z6YzA1aGJXVW9KMk5qTGxaaGJIVmxWSGx3WlNjc0lGWmhiSFZsVkhsd1pTazdYSEpjYmx4eVhHNTJZWElnY0hKdmRHOGdQU0JXWVd4MVpWUjVjR1V1Y0hKdmRHOTBlWEJsTzF4eVhHNWNjbHh1YVdZZ0tFTkRYMFZFU1ZSUFVpa2dlMXh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lBaEkyVnVJRlJvYVhNZ2JXVjBhRzlrSUhKbGRIVnlibk1nWVc0Z1pYaGhZM1FnWTI5d2VTQnZaaUJqZFhKeVpXNTBJSFpoYkhWbExseHlYRzRnSUNBZ0lDb2dJU042YUNEbGhZdnBtb2JsdlpQbGlZM2xnTHp2dkl6b3I2WG1scm5tczVYb3Y1VGxtNTdrdUlEa3VLcm1sckRscjdub3NhSHZ2SXptbHJEbHI3bm9zYUhubW9UbGdMemxrb3psanAvbHI3bm9zYUhubTdqbnJZbmpnSUpjY2x4dUlDQWdJQ0FxSUVCdFpYUm9iMlFnWTJ4dmJtVmNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVpoYkhWbFZIbHdaWDFjY2x4dUlDQWdJQ0FxTDF4eVhHNGdJQ0FnY0hKdmRHOHVZMnh2Ym1VZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyTXVaWEp5YjNKSlJDZ25NREV3TUNjc0lHcHpMbWRsZEVOc1lYTnpUbUZ0WlNoMGFHbHpLU0FySUNjdVkyeHZibVVuS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnNiRHRjY2x4dUlDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUFoSTJWdUlFTnZiWEJoY21WeklIUm9hWE1nYjJKcVpXTjBJSGRwZEdnZ2RHaGxJRzkwYUdWeUlHOXVaUzVjY2x4dUlDQWdJQ0FxSUNFamVtZ2c1YjJUNVltTjVhKzU2TEdoNXBpdjVaQ201NjJKNUxxTzVveUg1YTZhNWErNTZMR2g0NENDWEhKY2JpQWdJQ0FnS2lCQWJXVjBhRzlrSUdWeGRXRnNjMXh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRXWVd4MVpWUjVjR1Y5SUc5MGFHVnlYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J3Y205MGJ5NWxjWFZoYkhNZ1BTQm1kVzVqZEdsdmJpQW9iM1JvWlhJcElIdGNjbHh1SUNBZ0lDQWdJQ0JqWXk1bGNuSnZja2xFS0Njd01UQXdKeXdnYW5NdVoyVjBRMnhoYzNOT1lXMWxLSFJvYVhNcElDc2dKeTVsY1hWaGJITW5LVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQjlPMXh5WEc1Y2NseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dJU05sYmx4eVhHNGdJQ0FnSUNvZ1RHbHVaV0Z5YkhrZ2FXNTBaWEp3YjJ4aGRHVnpJR0psZEhkbFpXNGdkR2hwY3lCMllXeDFaU0IwYnlCMGJ5QjJZV3gxWlNCaWVTQnlZWFJwYnlCM2FHbGphQ0JwY3lCcGJpQjBhR1VnY21GdVoyVWdXekFzSURGZExseHlYRzRnSUNBZ0lDb2dWMmhsYmlCeVlYUnBieUE5SURBZ2NtVjBkWEp1Y3lCMGFHbHpMaUJYYUdWdUlISmhkR2x2SUQwZ01TQnlaWFIxY200Z2RHOHVJRmRvWlc0Z2NtRjBhVzhnUFNBd0xqVWdjbVYwZFhKdWN5QjBhR1VnWVhabGNtRm5aU0J2WmlCMGFHbHpJR0Z1WkNCMGJ5NWNjbHh1SUNBZ0lDQXFJQ0VqZW1oY2NseHVJQ0FnSUNBcUlPZTZ2K2FBcCthUGt1V0F2T09BZ2p4aWNpOCtYSEpjYmlBZ0lDQWdLaURsdlpNZ2NtRjBhVzhnUFNBd0lPYVh0dWkvbE9XYm51aUhxdWk2cSsrOGpISmhkR2x2SUQwZ01TRG1sN2JvdjVUbG01N25tNjdtb0lmdnZJeHlZWFJwYnlBOUlEQXVOU0RvdjVUbG01N29oNnJvdXF2bGtvem5tNjdtb0lmbm1vVGx1YlBsbllmbGdMempnSUxqZ0lKY2NseHVJQ0FnSUNBcUlFQnRaWFJvYjJRZ2JHVnljRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRXWVd4MVpWUjVjR1Y5SUhSdklDMGdkR2hsSUhSdklIWmhiSFZsWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnY21GMGFXOGdMU0IwYUdVZ2FXNTBaWEp3YjJ4aGRHbHZiaUJqYjJWbVptbGphV1Z1ZEZ4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtRnNkV1ZVZVhCbGZWeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQndjbTkwYnk1c1pYSndJRDBnWm5WdVkzUnBiMjRnS0hSdkxDQnlZWFJwYnlrZ2UxeHlYRzRnSUNBZ0lDQWdJR05qTG1WeWNtOXlTVVFvSnpBeE1EQW5MQ0JxY3k1blpYUkRiR0Z6YzA1aGJXVW9kR2hwY3lrZ0t5QW5MbXhsY25BbktUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amJHOXVaU2dwTzF4eVhHNGdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUNFalpXNWNjbHh1SUNBZ0lDQXFJRU52Y0hseklHRnNiQ0IwYUdVZ2NISnZjR1Z5ZEdsbGN5Qm1jbTl0SUdGdWIzUm9aWElnWjJsMlpXNGdiMkpxWldOMElIUnZJSFJvYVhNZ2RtRnNkV1V1WEhKY2JpQWdJQ0FnS2lBaEkzcG9YSEpjYmlBZ0lDQWdLaURrdTQ3bGhiYmxyb1Bscjdub3NhSG1pb3JtaVlEbW5JbmxzWjdtZ0tmbHBJM2xpTGJsaUxEbHZaUGxpWTNscjdub3NhSGpnSUpjY2x4dUlDQWdJQ0FxSUVCdFpYUm9iMlFnYzJWMFhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxWmhiSFZsVkhsd1pYMGdjMjkxY21ObElDMGdkR2hsSUhOdmRYSmpaU0IwYnlCamIzQjVYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJSEJ5YjNSdkxuTmxkQ0E5SUdaMWJtTjBhVzl1SUNoemIzVnlZMlVwSUh0Y2NseHVJQ0FnSUNBZ0lDQmpZeTVsY25KdmNrbEVLQ2N3TVRBd0p5d2dhbk11WjJWMFEyeGhjM05PWVcxbEtIUm9hWE1wSUNzZ0p5NXpaWFFuS1R0Y2NseHVJQ0FnSUgwN1hISmNibjFjY2x4dVhISmNiaThxS2x4eVhHNGdLaUFoSTJWdUlGUlBSRTljY2x4dUlDb2dJU042YUNEb3Zhem1qYUxrdUxybWxybmt2ci9wbUlYb3I3dm5tb1RsclpmbnJLYmt1TExqZ0lKY2NseHVJQ29nUUcxbGRHaHZaQ0IwYjFOMGNtbHVaMXh5WEc0Z0tpQkFjbVYwZFhKdUlIdHpkSEpwYm1kOVhISmNiaUFxTDF4eVhHNXdjbTkwYnk1MGIxTjBjbWx1WnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQW5KeUFySUh0OU8xeHlYRzU5TzF4eVhHNWNjbHh1WTJNdVZtRnNkV1ZVZVhCbElEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQldZV3gxWlZSNWNHVTdYSEpjYmlKZGZRPT0iXX0=