(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/assemblers/sprite/3d/radial-filled.js';
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
        var assembler = require('../2d/radial-filled');
        var fillVertices3D = require('../../utils').fillVertices3D;
        module.exports = js.addon({
            fillBuffers: function fillBuffers(comp, renderer) {
                var node = comp.node, color = node._color._val, buffer = renderer._meshBuffer3D, renderData = comp._renderData;
                var offsetInfo = fillVertices3D(node, buffer, renderData, color);
                var indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
                var ibuf = buffer._iData;
                for (var i = 0; i < renderData.dataLength; i++) {
                    ibuf[indiceOffset + i] = vertexId + i;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlhbC1maWxsZWQuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvd2ViZ2wvYXNzZW1ibGVycy9zcHJpdGUvM2QvcmFkaWFsLWZpbGxlZC5qcyJdLCJuYW1lcyI6WyJqcyIsInJlcXVpcmUiLCJhc3NlbWJsZXIiLCJmaWxsVmVydGljZXMzRCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhZGRvbiIsImZpbGxCdWZmZXJzIiwiY29tcCIsInJlbmRlcmVyIiwibm9kZSIsImNvbG9yIiwiX2NvbG9yIiwiX3ZhbCIsImJ1ZmZlciIsIl9tZXNoQnVmZmVyM0QiLCJyZW5kZXJEYXRhIiwiX3JlbmRlckRhdGEiLCJvZmZzZXRJbmZvIiwiaW5kaWNlT2Zmc2V0IiwidmVydGV4SWQiLCJ2ZXJ0ZXhPZmZzZXQiLCJpYnVmIiwiX2lEYXRhIiwiaSIsImRhdGFMZW5ndGgiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQXlCQSxJQUFNQSxFQUFBQSxHQUFLQyxPQUFBQSxDQUFRLDRCQUFSQSxDQUFYO1FBQ0EsSUFBTUMsU0FBQUEsR0FBWUQsT0FBQUEsQ0FBUSxxQkFBUkEsQ0FBbEI7UUFDQSxJQUFNRSxjQUFBQSxHQUFpQkYsT0FBQUEsQ0FBUSxhQUFSQSxFQUF1QkUsY0FBOUM7UUFFQUMsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJKLEVBQUFBLENBQUdNLEtBQUhOLENBQVM7QUFBQSxZQUN0Qk8sV0FBQUEsRUFEc0IsU0FBQSxXQUFBLENBQ1RDLElBRFMsRUFDSEMsUUFERyxFQUNPO0FBQUEsZ0JBQ3pCLElBQUlDLElBQUFBLEdBQU9GLElBQUFBLENBQUtFLElBQWhCLEVBQ0lDLEtBQUFBLEdBQVFELElBQUFBLENBQUtFLE1BQUxGLENBQVlHLElBRHhCLEVBRUlDLE1BQUFBLEdBQVNMLFFBQUFBLENBQVNNLGFBRnRCLEVBR0lDLFVBQUFBLEdBQWFSLElBQUFBLENBQUtTLFdBSHRCLENBRHlCO0FBQUEsZ0JBTXpCLElBQUlDLFVBQUFBLEdBQWFmLGNBQUFBLENBQWVPLElBQWZQLEVBQXFCVyxNQUFyQlgsRUFBNkJhLFVBQTdCYixFQUF5Q1EsS0FBekNSLENBQWpCLENBTnlCO0FBQUEsZ0JBT3pCLElBQUlnQixZQUFBQSxHQUFlRCxVQUFBQSxDQUFXQyxZQUE5QixFQUNJQyxRQUFBQSxHQUFXRixVQUFBQSxDQUFXRyxZQUQxQixDQVB5QjtBQUFBLGdCQVd6QixJQUFJQyxJQUFBQSxHQUFPUixNQUFBQSxDQUFPUyxNQUFsQixDQVh5QjtBQUFBLGdCQVl6QixLQUFLLElBQUlDLENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJUixVQUFBQSxDQUFXUyxVQUEvQixFQUEyQ0QsQ0FBQUEsRUFBM0MsRUFBZ0Q7QUFBQSxvQkFDNUNGLElBQUFBLENBQUtILFlBQUFBLEdBQWVLLENBQXBCRixJQUF5QkYsUUFBQUEsR0FBV0ksQ0FBcENGLENBRDRDO0FBQUEsaUJBWnZCO0FBQUEsYUFEUDtBQUFBLFNBQVR0QixFQWlCZEUsU0FqQmNGLENBQWpCSSIsImZpbGUiOiJyYWRpYWwtZmlsbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5jb25zdCBqcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3BsYXRmb3JtL2pzJyk7XHJcbmNvbnN0IGFzc2VtYmxlciA9IHJlcXVpcmUoJy4uLzJkL3JhZGlhbC1maWxsZWQnKTtcclxuY29uc3QgZmlsbFZlcnRpY2VzM0QgPSByZXF1aXJlKCcuLi8uLi91dGlscycpLmZpbGxWZXJ0aWNlczNEO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBqcy5hZGRvbih7XHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCwgcmVuZGVyZXIpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNvbXAubm9kZSxcclxuICAgICAgICAgICAgY29sb3IgPSBub2RlLl9jb2xvci5fdmFsLFxyXG4gICAgICAgICAgICBidWZmZXIgPSByZW5kZXJlci5fbWVzaEJ1ZmZlcjNELFxyXG4gICAgICAgICAgICByZW5kZXJEYXRhID0gY29tcC5fcmVuZGVyRGF0YTtcclxuXHJcbiAgICAgICAgbGV0IG9mZnNldEluZm8gPSBmaWxsVmVydGljZXMzRChub2RlLCBidWZmZXIsIHJlbmRlckRhdGEsIGNvbG9yKTtcclxuICAgICAgICBsZXQgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXHJcbiAgICAgICAgICAgIHZlcnRleElkID0gb2Zmc2V0SW5mby52ZXJ0ZXhPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIGJ1ZmZlciBkYXRhIG1heSBiZSByZWFsbG9jLCBuZWVkIGdldCByZWZlcmVuY2UgYWZ0ZXIgcmVxdWVzdC5cclxuICAgICAgICBsZXQgaWJ1ZiA9IGJ1ZmZlci5faURhdGE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJEYXRhLmRhdGFMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpYnVmW2luZGljZU9mZnNldCArIGldID0gdmVydGV4SWQgKyBpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0sIGFzc2VtYmxlcik7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBqcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3BsYXRmb3JtL2pzJyk7XG52YXIgYXNzZW1ibGVyID0gcmVxdWlyZSgnLi4vMmQvcmFkaWFsLWZpbGxlZCcpO1xudmFyIGZpbGxWZXJ0aWNlczNEID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKS5maWxsVmVydGljZXMzRDtcblxubW9kdWxlLmV4cG9ydHMgPSBqcy5hZGRvbih7XG4gIGZpbGxCdWZmZXJzOiBmdW5jdGlvbiBmaWxsQnVmZmVycyhjb21wLCByZW5kZXJlcikge1xuICAgIHZhciBub2RlID0gY29tcC5ub2RlLFxuICAgICAgICBjb2xvciA9IG5vZGUuX2NvbG9yLl92YWwsXG4gICAgICAgIGJ1ZmZlciA9IHJlbmRlcmVyLl9tZXNoQnVmZmVyM0QsXG4gICAgICAgIHJlbmRlckRhdGEgPSBjb21wLl9yZW5kZXJEYXRhO1xuXG4gICAgdmFyIG9mZnNldEluZm8gPSBmaWxsVmVydGljZXMzRChub2RlLCBidWZmZXIsIHJlbmRlckRhdGEsIGNvbG9yKTtcbiAgICB2YXIgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXG4gICAgICAgIHZlcnRleElkID0gb2Zmc2V0SW5mby52ZXJ0ZXhPZmZzZXQ7XG5cbiAgICAvLyBidWZmZXIgZGF0YSBtYXkgYmUgcmVhbGxvYywgbmVlZCBnZXQgcmVmZXJlbmNlIGFmdGVyIHJlcXVlc3QuXG4gICAgdmFyIGlidWYgPSBidWZmZXIuX2lEYXRhO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVuZGVyRGF0YS5kYXRhTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlidWZbaW5kaWNlT2Zmc2V0ICsgaV0gPSB2ZXJ0ZXhJZCArIGk7XG4gICAgfVxuICB9XG59LCBhc3NlbWJsZXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5KaFpHbGhiQzFtYVd4c1pXUXVhbk1pWFN3aWJtRnRaWE1pT2xzaWFuTWlMQ0p5WlhGMWFYSmxJaXdpWVhOelpXMWliR1Z5SWl3aVptbHNiRlpsY25ScFkyVnpNMFFpTENKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWl3aVlXUmtiMjRpTENKbWFXeHNRblZtWm1WeWN5SXNJbU52YlhBaUxDSnlaVzVrWlhKbGNpSXNJbTV2WkdVaUxDSmpiMnh2Y2lJc0lsOWpiMnh2Y2lJc0lsOTJZV3dpTENKaWRXWm1aWElpTENKZmJXVnphRUoxWm1abGNqTkVJaXdpY21WdVpHVnlSR0YwWVNJc0lsOXlaVzVrWlhKRVlYUmhJaXdpYjJabWMyVjBTVzVtYnlJc0ltbHVaR2xqWlU5bVpuTmxkQ0lzSW5abGNuUmxlRWxrSWl3aWRtVnlkR1Y0VDJabWMyVjBJaXdpYVdKMVppSXNJbDlwUkdGMFlTSXNJbWtpTENKa1lYUmhUR1Z1WjNSb0lsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJlVUpCTEVsQlFVMUJMRXRCUVV0RExGRkJRVkVzTkVKQlFWSXNRMEZCV0R0QlFVTkJMRWxCUVUxRExGbEJRVmxFTEZGQlFWRXNjVUpCUVZJc1EwRkJiRUk3UVVGRFFTeEpRVUZOUlN4cFFrRkJhVUpHTEZGQlFWRXNZVUZCVWl4RlFVRjFRa1VzWTBGQk9VTTdPMEZCUlVGRExFOUJRVTlETEU5QlFWQXNSMEZCYVVKTUxFZEJRVWROTEV0QlFVZ3NRMEZCVXp0QlFVTjBRa01zWVVGRWMwSXNkVUpCUTFSRExFbEJSRk1zUlVGRFNFTXNVVUZFUnl4RlFVTlBPMEZCUTNwQ0xGRkJRVWxETEU5QlFVOUdMRXRCUVV0RkxFbEJRV2hDTzBGQlFVRXNVVUZEU1VNc1VVRkJVVVFzUzBGQlMwVXNUVUZCVEN4RFFVRlpReXhKUVVSNFFqdEJRVUZCTEZGQlJVbERMRk5CUVZOTUxGTkJRVk5OTEdGQlJuUkNPMEZCUVVFc1VVRkhTVU1zWVVGQllWSXNTMEZCUzFNc1YwRklkRUk3TzBGQlMwRXNVVUZCU1VNc1lVRkJZV1lzWlVGQlpVOHNTVUZCWml4RlFVRnhRa2tzVFVGQmNrSXNSVUZCTmtKRkxGVkJRVGRDTEVWQlFYbERUQ3hMUVVGNlF5eERRVUZxUWp0QlFVTkJMRkZCUVVsUkxHVkJRV1ZFTEZkQlFWZERMRmxCUVRsQ08wRkJRVUVzVVVGRFNVTXNWMEZCVjBZc1YwRkJWMGNzV1VGRU1VSTdPMEZCUjBFN1FVRkRRU3hSUVVGSlF5eFBRVUZQVWl4UFFVRlBVeXhOUVVGc1FqdEJRVU5CTEZOQlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpVaXhYUVVGWFV5eFZRVUV2UWl4RlFVRXlRMFFzUjBGQk0wTXNSVUZCWjBRN1FVRkROVU5HTEZkQlFVdElMR1ZCUVdWTExFTkJRWEJDTEVsQlFYbENTaXhYUVVGWFNTeERRVUZ3UXp0QlFVTklPMEZCUTBvN1FVRm9RbkZDTEVOQlFWUXNSVUZwUW1SMFFpeFRRV3BDWXl4RFFVRnFRaUlzSW1acGJHVWlPaUp5WVdScFlXd3RabWxzYkdWa0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNjbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4eVhHNWNjbHh1SUdoMGRIQnpPaTh2ZDNkM0xtTnZZMjl6TG1OdmJTOWNjbHh1WEhKY2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEhKY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNjbHh1SUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNCdWIyNHRaWGhqYkhWemFYWmxJR3hwWTJWdWMyVmNjbHh1SUhSdklIVnpaU0JEYjJOdmN5QkRjbVZoZEc5eUlITnZiR1ZzZVNCMGJ5QmtaWFpsYkc5d0lHZGhiV1Z6SUc5dUlIbHZkWElnZEdGeVoyVjBJSEJzWVhSbWIzSnRjeTRnV1c5MUlITm9ZV3hzWEhKY2JpQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEhKY2JpQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hISmNiaUJ6ZFdKc2FXTmxibk5sTENCaGJtUXZiM0lnYzJWc2JDQmpiM0JwWlhNZ2IyWWdRMjlqYjNNZ1EzSmxZWFJ2Y2k1Y2NseHVYSEpjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4eVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNjbHh1WEhKY2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEhKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNjbHh1SUVaSlZFNUZVMU1nUms5U0lFRWdVRUZTVkVsRFZVeEJVaUJRVlZKUVQxTkZJRUZPUkNCT1QwNUpUa1pTU1U1SFJVMUZUbFF1SUVsT0lFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJWeHlYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh5WEc0Z1RFbEJRa2xNU1ZSWkxDQlhTRVZVU0VWU0lFbE9JRUZPSUVGRFZFbFBUaUJQUmlCRFQwNVVVa0ZEVkN3Z1ZFOVNWQ0JQVWlCUFZFaEZVbGRKVTBVc0lFRlNTVk5KVGtjZ1JsSlBUU3hjY2x4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNjbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNjbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYSEpjYmx4eVhHNWpiMjV6ZENCcWN5QTlJSEpsY1hWcGNtVW9KeTR1THk0dUx5NHVMeTR1THk0dUwzQnNZWFJtYjNKdEwycHpKeWs3WEhKY2JtTnZibk4wSUdGemMyVnRZbXhsY2lBOUlISmxjWFZwY21Vb0p5NHVMekprTDNKaFpHbGhiQzFtYVd4c1pXUW5LVHRjY2x4dVkyOXVjM1FnWm1sc2JGWmxjblJwWTJWek0wUWdQU0J5WlhGMWFYSmxLQ2N1TGk4dUxpOTFkR2xzY3ljcExtWnBiR3hXWlhKMGFXTmxjek5FTzF4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JxY3k1aFpHUnZiaWg3WEhKY2JpQWdJQ0JtYVd4c1FuVm1abVZ5Y3lBb1kyOXRjQ3dnY21WdVpHVnlaWElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJR052YlhBdWJtOWtaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNJZ1BTQnViMlJsTGw5amIyeHZjaTVmZG1Gc0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRXWm1aWElnUFNCeVpXNWtaWEpsY2k1ZmJXVnphRUoxWm1abGNqTkVMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaVzVrWlhKRVlYUmhJRDBnWTI5dGNDNWZjbVZ1WkdWeVJHRjBZVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdiR1YwSUc5bVpuTmxkRWx1Wm04Z1BTQm1hV3hzVm1WeWRHbGpaWE16UkNodWIyUmxMQ0JpZFdabVpYSXNJSEpsYm1SbGNrUmhkR0VzSUdOdmJHOXlLVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdhVzVrYVdObFQyWm1jMlYwSUQwZ2IyWm1jMlYwU1c1bWJ5NXBibVJwWTJWUFptWnpaWFFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25SbGVFbGtJRDBnYjJabWMyVjBTVzVtYnk1MlpYSjBaWGhQWm1aelpYUTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHZJR0oxWm1abGNpQmtZWFJoSUcxaGVTQmlaU0J5WldGc2JHOWpMQ0J1WldWa0lHZGxkQ0J5WldabGNtVnVZMlVnWVdaMFpYSWdjbVZ4ZFdWemRDNWNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2FXSjFaaUE5SUdKMVptWmxjaTVmYVVSaGRHRTdYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCeVpXNWtaWEpFWVhSaExtUmhkR0ZNWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFluVm1XMmx1WkdsalpVOW1abk5sZENBcklHbGRJRDBnZG1WeWRHVjRTV1FnS3lCcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBzWEhKY2JuMHNJR0Z6YzJWdFlteGxjaWs3WEhKY2JpSmRmUT09Il19