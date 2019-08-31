(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/assemblers/label/3d/bmfont.js';
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
        var js = require('../../../../../platform/js');
        var assembler = require('../2d/bmfont');
        var fillMeshVertices3D = require('../../utils').fillMeshVertices3D;
        module.exports = js.addon({
            fillBuffers: function fillBuffers(comp, renderer) {
                var node = comp.node;
                fillMeshVertices3D(node, renderer._meshBuffer3D, comp._renderData, node._color._val);
            }
        }, assembler);
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJtZm9udC5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci93ZWJnbC9hc3NlbWJsZXJzL2xhYmVsLzNkL2JtZm9udC5qcyJdLCJuYW1lcyI6WyJqcyIsInJlcXVpcmUiLCJhc3NlbWJsZXIiLCJmaWxsTWVzaFZlcnRpY2VzM0QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkb24iLCJmaWxsQnVmZmVycyIsImNvbXAiLCJyZW5kZXJlciIsIm5vZGUiLCJfbWVzaEJ1ZmZlcjNEIiwiX3JlbmRlckRhdGEiLCJfY29sb3IiLCJfdmFsIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUF5QkEsSUFBTUEsRUFBQUEsR0FBS0MsT0FBQUEsQ0FBUSw0QkFBUkEsQ0FBWDtRQUNBLElBQU1DLFNBQUFBLEdBQVlELE9BQUFBLENBQVEsY0FBUkEsQ0FBbEI7UUFDQSxJQUFNRSxrQkFBQUEsR0FBcUJGLE9BQUFBLENBQVEsYUFBUkEsRUFBdUJFLGtCQUFsRDtRQUVBQyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQkosRUFBQUEsQ0FBR00sS0FBSE4sQ0FBUztBQUFBLFlBQ3RCTyxXQUFBQSxFQURzQixTQUFBLFdBQUEsQ0FDVEMsSUFEUyxFQUNIQyxRQURHLEVBQ087QUFBQSxnQkFDekIsSUFBSUMsSUFBQUEsR0FBT0YsSUFBQUEsQ0FBS0UsSUFBaEIsQ0FEeUI7QUFBQSxnQkFFekJQLGtCQUFBQSxDQUFtQk8sSUFBbkJQLEVBQXlCTSxRQUFBQSxDQUFTRSxhQUFsQ1IsRUFBaURLLElBQUFBLENBQUtJLFdBQXREVCxFQUFtRU8sSUFBQUEsQ0FBS0csTUFBTEgsQ0FBWUksSUFBL0VYLEVBRnlCO0FBQUEsYUFEUDtBQUFBLFNBQVRILEVBS2RFLFNBTGNGLENBQWpCSSIsImZpbGUiOiJibWZvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxyXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNvbnN0IGpzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm0vanMnKTtcclxuY29uc3QgYXNzZW1ibGVyID0gcmVxdWlyZSgnLi4vMmQvYm1mb250Jyk7XHJcbmNvbnN0IGZpbGxNZXNoVmVydGljZXMzRCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJykuZmlsbE1lc2hWZXJ0aWNlczNEO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBqcy5hZGRvbih7XHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCwgcmVuZGVyZXIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNvbXAubm9kZTtcclxuICAgICAgICBmaWxsTWVzaFZlcnRpY2VzM0Qobm9kZSwgcmVuZGVyZXIuX21lc2hCdWZmZXIzRCwgY29tcC5fcmVuZGVyRGF0YSwgbm9kZS5fY29sb3IuX3ZhbCk7XHJcbiAgICB9LFxyXG59LCBhc3NlbWJsZXIpO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIganMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybS9qcycpO1xudmFyIGFzc2VtYmxlciA9IHJlcXVpcmUoJy4uLzJkL2JtZm9udCcpO1xudmFyIGZpbGxNZXNoVmVydGljZXMzRCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJykuZmlsbE1lc2hWZXJ0aWNlczNEO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzLmFkZG9uKHtcbiAgZmlsbEJ1ZmZlcnM6IGZ1bmN0aW9uIGZpbGxCdWZmZXJzKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgdmFyIG5vZGUgPSBjb21wLm5vZGU7XG4gICAgZmlsbE1lc2hWZXJ0aWNlczNEKG5vZGUsIHJlbmRlcmVyLl9tZXNoQnVmZmVyM0QsIGNvbXAuX3JlbmRlckRhdGEsIG5vZGUuX2NvbG9yLl92YWwpO1xuICB9XG59LCBhc3NlbWJsZXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1KdFptOXVkQzVxY3lKZExDSnVZVzFsY3lJNld5SnFjeUlzSW5KbGNYVnBjbVVpTENKaGMzTmxiV0pzWlhJaUxDSm1hV3hzVFdWemFGWmxjblJwWTJWek0wUWlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJaXdpWVdSa2IyNGlMQ0ptYVd4c1FuVm1abVZ5Y3lJc0ltTnZiWEFpTENKeVpXNWtaWEpsY2lJc0ltNXZaR1VpTENKZmJXVnphRUoxWm1abGNqTkVJaXdpWDNKbGJtUmxja1JoZEdFaUxDSmZZMjlzYjNJaUxDSmZkbUZzSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQmVVSkJMRWxCUVUxQkxFdEJRVXRETEZGQlFWRXNORUpCUVZJc1EwRkJXRHRCUVVOQkxFbEJRVTFETEZsQlFWbEVMRkZCUVZFc1kwRkJVaXhEUVVGc1FqdEJRVU5CTEVsQlFVMUZMSEZDUVVGeFFrWXNVVUZCVVN4aFFVRlNMRVZCUVhWQ1JTeHJRa0ZCYkVRN08wRkJSVUZETEU5QlFVOURMRTlCUVZBc1IwRkJhVUpNTEVkQlFVZE5MRXRCUVVnc1EwRkJVenRCUVVOMFFrTXNZVUZFYzBJc2RVSkJRMVJETEVsQlJGTXNSVUZEU0VNc1VVRkVSeXhGUVVOUE8wRkJRM3BDTEZGQlFVbERMRTlCUVU5R0xFdEJRVXRGTEVsQlFXaENPMEZCUTBGUUxIVkNRVUZ0UWs4c1NVRkJia0lzUlVGQmVVSkVMRk5CUVZORkxHRkJRV3hETEVWQlFXbEVTQ3hMUVVGTFNTeFhRVUYwUkN4RlFVRnRSVVlzUzBGQlMwY3NUVUZCVEN4RFFVRlpReXhKUVVFdlJUdEJRVU5JTzBGQlNuRkNMRU5CUVZRc1JVRkxaRm9zVTBGTVl5eERRVUZxUWlJc0ltWnBiR1VpT2lKaWJXWnZiblF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4eVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYSEpjYmx4eVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4eVhHNWNjbHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNjbHh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4eVhHNGdkMjl5YkdSM2FXUmxMQ0J5YjNsaGJIUjVMV1p5WldVc0lHNXZiaTFoYzNOcFoyNWhZbXhsTENCeVpYWnZZMkZpYkdVZ1lXNWtJRzV2YmkxbGVHTnNkWE5wZG1VZ2JHbGpaVzV6WlZ4eVhHNGdkRzhnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5c1pXeDVJSFJ2SUdSbGRtVnNiM0FnWjJGdFpYTWdiMjRnZVc5MWNpQjBZWEpuWlhRZ2NHeGhkR1p2Y20xekxpQlpiM1VnYzJoaGJHeGNjbHh1SUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNjbHh1SUhWelpXUWdabTl5SUdSbGRtVnNiM0JwYm1jZ1oyRnRaWE11SUZsdmRTQmhjbVVnYm05MElHZHlZVzUwWldRZ2RHOGdjSFZpYkdsemFDd2daR2x6ZEhKcFluVjBaU3hjY2x4dUlITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCRGIyTnZjeUJEY21WaGRHOXlMbHh5WEc1Y2NseHVJRlJvWlNCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCcGJpQjBhR2x6SUV4cFkyVnVjMlVnUVdkeVpXVnRaVzUwSUdGeVpTQnNhV05sYm5ObFpDd2dibTkwSUhOdmJHUXVYSEpjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4eVhHNWNjbHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNjbHh1SUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBZZ1RVVlNRMGhCVGxSQlFrbE1TVlJaTEZ4eVhHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEhKY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hISmNiaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxGeHlYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4eVhHNGdWRWhGSUZOUFJsUlhRVkpGTGx4eVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2NseHVYSEpjYm1OdmJuTjBJR3B6SUQwZ2NtVnhkV2x5WlNnbkxpNHZMaTR2TGk0dkxpNHZMaTR2Y0d4aGRHWnZjbTB2YW5NbktUdGNjbHh1WTI5dWMzUWdZWE56WlcxaWJHVnlJRDBnY21WeGRXbHlaU2duTGk0dk1tUXZZbTFtYjI1MEp5azdYSEpjYm1OdmJuTjBJR1pwYkd4TlpYTm9WbVZ5ZEdsalpYTXpSQ0E5SUhKbGNYVnBjbVVvSnk0dUx5NHVMM1YwYVd4ekp5a3VabWxzYkUxbGMyaFdaWEowYVdObGN6TkVPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnFjeTVoWkdSdmJpaDdYSEpjYmlBZ0lDQm1hV3hzUW5WbVptVnljeUFvWTI5dGNDd2djbVZ1WkdWeVpYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdibTlrWlNBOUlHTnZiWEF1Ym05a1pUdGNjbHh1SUNBZ0lDQWdJQ0JtYVd4c1RXVnphRlpsY25ScFkyVnpNMFFvYm05a1pTd2djbVZ1WkdWeVpYSXVYMjFsYzJoQ2RXWm1aWEl6UkN3Z1kyOXRjQzVmY21WdVpHVnlSR0YwWVN3Z2JtOWtaUzVmWTI5c2IzSXVYM1poYkNrN1hISmNiaUFnSUNCOUxGeHlYRzU5TENCaGMzTmxiV0pzWlhJcE8xeHlYRzRpWFgwPSJdfQ==