(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/assemblers/sprite/3d/bar-filled.js';
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
        var assembler = require('../2d/bar-filled');
        var fillVerticesWithoutCalc3D = require('../../utils').fillVerticesWithoutCalc3D;
        var vec3 = cc.vmath.vec3;
        module.exports = js.addon({
            updateWorldVerts: function updateWorldVerts(sprite) {
                var node = sprite.node, data = sprite._renderData._data;
                var matrix = node._worldMatrix;
                for (var i = 0; i < 4; i++) {
                    var local = data[i + 4];
                    var world = data[i];
                    vec3.transformMat4(world, local, matrix);
                }
            },
            fillBuffers: function fillBuffers(sprite, renderer) {
                if (renderer.worldMatDirty) {
                    this.updateWorldVerts(sprite);
                }
                var buffer = renderer._meshBuffer3D;
                var node = sprite.node;
                var offsetInfo = fillVerticesWithoutCalc3D(node, buffer, sprite._renderData, node._color._val);
                var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
                ibuf[indiceOffset++] = vertexId;
                ibuf[indiceOffset++] = vertexId + 1;
                ibuf[indiceOffset++] = vertexId + 2;
                ibuf[indiceOffset++] = vertexId + 1;
                ibuf[indiceOffset++] = vertexId + 3;
                ibuf[indiceOffset++] = vertexId + 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1maWxsZWQuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvd2ViZ2wvYXNzZW1ibGVycy9zcHJpdGUvM2QvYmFyLWZpbGxlZC5qcyJdLCJuYW1lcyI6WyJqcyIsInJlcXVpcmUiLCJhc3NlbWJsZXIiLCJmaWxsVmVydGljZXNXaXRob3V0Q2FsYzNEIiwidmVjMyIsImNjIiwidm1hdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkb24iLCJ1cGRhdGVXb3JsZFZlcnRzIiwic3ByaXRlIiwibm9kZSIsImRhdGEiLCJfcmVuZGVyRGF0YSIsIl9kYXRhIiwibWF0cml4IiwiX3dvcmxkTWF0cml4IiwiaSIsImxvY2FsIiwid29ybGQiLCJ0cmFuc2Zvcm1NYXQ0IiwiZmlsbEJ1ZmZlcnMiLCJyZW5kZXJlciIsIndvcmxkTWF0RGlydHkiLCJidWZmZXIiLCJfbWVzaEJ1ZmZlcjNEIiwib2Zmc2V0SW5mbyIsIl9jb2xvciIsIl92YWwiLCJpYnVmIiwiX2lEYXRhIiwiaW5kaWNlT2Zmc2V0IiwidmVydGV4SWQiLCJ2ZXJ0ZXhPZmZzZXQiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQXlCQSxJQUFNQSxFQUFBQSxHQUFLQyxPQUFBQSxDQUFRLDRCQUFSQSxDQUFYO1FBQ0EsSUFBTUMsU0FBQUEsR0FBWUQsT0FBQUEsQ0FBUSxrQkFBUkEsQ0FBbEI7UUFDQSxJQUFNRSx5QkFBQUEsR0FBNEJGLE9BQUFBLENBQVEsYUFBUkEsRUFBdUJFLHlCQUF6RDtRQUVBLElBQU1DLElBQUFBLEdBQU9DLEVBQUFBLENBQUdDLEtBQUhELENBQVNELElBQXRCO1FBRUFHLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCUCxFQUFBQSxDQUFHUyxLQUFIVCxDQUFTO0FBQUEsWUFDdEJVLGdCQUFBQSxFQURzQixTQUFBLGdCQUFBLENBQ0pDLE1BREksRUFDSTtBQUFBLGdCQUN0QixJQUFJQyxJQUFBQSxHQUFPRCxNQUFBQSxDQUFPQyxJQUFsQixFQUNJQyxJQUFBQSxHQUFPRixNQUFBQSxDQUFPRyxXQUFQSCxDQUFtQkksS0FEOUIsQ0FEc0I7QUFBQSxnQkFJdEIsSUFBSUMsTUFBQUEsR0FBU0osSUFBQUEsQ0FBS0ssWUFBbEIsQ0FKc0I7QUFBQSxnQkFLdEIsS0FBSyxJQUFJQyxDQUFBQSxHQUFJLENBQVIsQ0FBTCxDQUFnQkEsQ0FBQUEsR0FBSSxDQUFwQixFQUF1QkEsQ0FBQUEsRUFBdkIsRUFBNEI7QUFBQSxvQkFDeEIsSUFBSUMsS0FBQUEsR0FBUU4sSUFBQUEsQ0FBS0ssQ0FBQUEsR0FBSSxDQUFUTCxDQUFaLENBRHdCO0FBQUEsb0JBRXhCLElBQUlPLEtBQUFBLEdBQVFQLElBQUFBLENBQUtLLENBQUxMLENBQVosQ0FGd0I7QUFBQSxvQkFHeEJULElBQUFBLENBQUtpQixhQUFMakIsQ0FBbUJnQixLQUFuQmhCLEVBQTBCZSxLQUExQmYsRUFBaUNZLE1BQWpDWixFQUh3QjtBQUFBLGlCQUxOO0FBQUEsYUFESjtBQUFBLFlBYXRCa0IsV0FBQUEsRUFic0IsU0FBQSxXQUFBLENBYVRYLE1BYlMsRUFhRFksUUFiQyxFQWFTO0FBQUEsZ0JBQzNCLElBQUlBLFFBQUFBLENBQVNDLGFBQWIsRUFBNEI7QUFBQSxvQkFDeEIsS0FBS2QsZ0JBQUwsQ0FBc0JDLE1BQXRCLEVBRHdCO0FBQUEsaUJBREQ7QUFBQSxnQkFNM0IsSUFBSWMsTUFBQUEsR0FBU0YsUUFBQUEsQ0FBU0csYUFBdEIsQ0FOMkI7QUFBQSxnQkFPM0IsSUFBSWQsSUFBQUEsR0FBT0QsTUFBQUEsQ0FBT0MsSUFBbEIsQ0FQMkI7QUFBQSxnQkFRM0IsSUFBSWUsVUFBQUEsR0FBYXhCLHlCQUFBQSxDQUEwQlMsSUFBMUJULEVBQWdDc0IsTUFBaEN0QixFQUF3Q1EsTUFBQUEsQ0FBT0csV0FBL0NYLEVBQTREUyxJQUFBQSxDQUFLZ0IsTUFBTGhCLENBQVlpQixJQUF4RTFCLENBQWpCLENBUjJCO0FBQUEsZ0JBVTNCLElBQUkyQixJQUFBQSxHQUFPTCxNQUFBQSxDQUFPTSxNQUFsQixFQUNJQyxZQUFBQSxHQUFlTCxVQUFBQSxDQUFXSyxZQUQ5QixFQUVJQyxRQUFBQSxHQUFXTixVQUFBQSxDQUFXTyxZQUYxQixDQVYyQjtBQUFBLGdCQWMzQkosSUFBQUEsQ0FBS0UsWUFBQUEsRUFBTEYsSUFBdUJHLFFBQXZCSCxDQWQyQjtBQUFBLGdCQWUzQkEsSUFBQUEsQ0FBS0UsWUFBQUEsRUFBTEYsSUFBdUJHLFFBQUFBLEdBQVcsQ0FBbENILENBZjJCO0FBQUEsZ0JBZ0IzQkEsSUFBQUEsQ0FBS0UsWUFBQUEsRUFBTEYsSUFBdUJHLFFBQUFBLEdBQVcsQ0FBbENILENBaEIyQjtBQUFBLGdCQWlCM0JBLElBQUFBLENBQUtFLFlBQUFBLEVBQUxGLElBQXVCRyxRQUFBQSxHQUFXLENBQWxDSCxDQWpCMkI7QUFBQSxnQkFrQjNCQSxJQUFBQSxDQUFLRSxZQUFBQSxFQUFMRixJQUF1QkcsUUFBQUEsR0FBVyxDQUFsQ0gsQ0FsQjJCO0FBQUEsZ0JBbUIzQkEsSUFBQUEsQ0FBS0UsWUFBQUEsRUFBTEYsSUFBdUJHLFFBQUFBLEdBQVcsQ0FBbENILENBbkIyQjtBQUFBLGFBYlQ7QUFBQSxTQUFUOUIsRUFrQ2RFLFNBbENjRixDQUFqQk8iLCJmaWxlIjoiYmFyLWZpbGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuY29uc3QganMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybS9qcycpO1xyXG5jb25zdCBhc3NlbWJsZXIgPSByZXF1aXJlKCcuLi8yZC9iYXItZmlsbGVkJyk7XHJcbmNvbnN0IGZpbGxWZXJ0aWNlc1dpdGhvdXRDYWxjM0QgPSByZXF1aXJlKCcuLi8uLi91dGlscycpLmZpbGxWZXJ0aWNlc1dpdGhvdXRDYWxjM0Q7XHJcblxyXG5jb25zdCB2ZWMzID0gY2Mudm1hdGgudmVjMztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ganMuYWRkb24oe1xyXG4gICAgdXBkYXRlV29ybGRWZXJ0cyAoc3ByaXRlKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBzcHJpdGUubm9kZSxcclxuICAgICAgICAgICAgZGF0YSA9IHNwcml0ZS5fcmVuZGVyRGF0YS5fZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IG1hdHJpeCA9IG5vZGUuX3dvcmxkTWF0cml4O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbCA9IGRhdGFbaSArIDRdO1xyXG4gICAgICAgICAgICBsZXQgd29ybGQgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybU1hdDQod29ybGQsIGxvY2FsLCBtYXRyaXgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZmlsbEJ1ZmZlcnMgKHNwcml0ZSwgcmVuZGVyZXIpIHtcclxuICAgICAgICBpZiAocmVuZGVyZXIud29ybGRNYXREaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkVmVydHMoc3ByaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGJ1ZmZlclxyXG4gICAgICAgIGxldCBidWZmZXIgPSByZW5kZXJlci5fbWVzaEJ1ZmZlcjNEO1xyXG4gICAgICAgIGxldCBub2RlID0gc3ByaXRlLm5vZGU7XHJcbiAgICAgICAgbGV0IG9mZnNldEluZm8gPSBmaWxsVmVydGljZXNXaXRob3V0Q2FsYzNEKG5vZGUsIGJ1ZmZlciwgc3ByaXRlLl9yZW5kZXJEYXRhLCBub2RlLl9jb2xvci5fdmFsKTtcclxuXHJcbiAgICAgICAgbGV0IGlidWYgPSBidWZmZXIuX2lEYXRhLFxyXG4gICAgICAgICAgICBpbmRpY2VPZmZzZXQgPSBvZmZzZXRJbmZvLmluZGljZU9mZnNldCxcclxuICAgICAgICAgICAgdmVydGV4SWQgPSBvZmZzZXRJbmZvLnZlcnRleE9mZnNldDtcclxuXHJcbiAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZDtcclxuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMTtcclxuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMjtcclxuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMTtcclxuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMztcclxuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMjtcclxuICAgIH1cclxufSwgYXNzZW1ibGVyKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxyXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIGpzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm0vanMnKTtcbnZhciBhc3NlbWJsZXIgPSByZXF1aXJlKCcuLi8yZC9iYXItZmlsbGVkJyk7XG52YXIgZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJykuZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRDtcblxudmFyIHZlYzMgPSBjYy52bWF0aC52ZWMzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzLmFkZG9uKHtcbiAgICB1cGRhdGVXb3JsZFZlcnRzOiBmdW5jdGlvbiB1cGRhdGVXb3JsZFZlcnRzKHNwcml0ZSkge1xuICAgICAgICB2YXIgbm9kZSA9IHNwcml0ZS5ub2RlLFxuICAgICAgICAgICAgZGF0YSA9IHNwcml0ZS5fcmVuZGVyRGF0YS5fZGF0YTtcblxuICAgICAgICB2YXIgbWF0cml4ID0gbm9kZS5fd29ybGRNYXRyaXg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWwgPSBkYXRhW2kgKyA0XTtcbiAgICAgICAgICAgIHZhciB3b3JsZCA9IGRhdGFbaV07XG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybU1hdDQod29ybGQsIGxvY2FsLCBtYXRyaXgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmaWxsQnVmZmVyczogZnVuY3Rpb24gZmlsbEJ1ZmZlcnMoc3ByaXRlLCByZW5kZXJlcikge1xuICAgICAgICBpZiAocmVuZGVyZXIud29ybGRNYXREaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKHNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWZmZXJcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHJlbmRlcmVyLl9tZXNoQnVmZmVyM0Q7XG4gICAgICAgIHZhciBub2RlID0gc3ByaXRlLm5vZGU7XG4gICAgICAgIHZhciBvZmZzZXRJbmZvID0gZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRChub2RlLCBidWZmZXIsIHNwcml0ZS5fcmVuZGVyRGF0YSwgbm9kZS5fY29sb3IuX3ZhbCk7XG5cbiAgICAgICAgdmFyIGlidWYgPSBidWZmZXIuX2lEYXRhLFxuICAgICAgICAgICAgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXG4gICAgICAgICAgICB2ZXJ0ZXhJZCA9IG9mZnNldEluZm8udmVydGV4T2Zmc2V0O1xuXG4gICAgICAgIGlidWZbaW5kaWNlT2Zmc2V0KytdID0gdmVydGV4SWQ7XG4gICAgICAgIGlidWZbaW5kaWNlT2Zmc2V0KytdID0gdmVydGV4SWQgKyAxO1xuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMjtcbiAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIDE7XG4gICAgICAgIGlidWZbaW5kaWNlT2Zmc2V0KytdID0gdmVydGV4SWQgKyAzO1xuICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgMjtcbiAgICB9XG59LCBhc3NlbWJsZXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1KaGNpMW1hV3hzWldRdWFuTWlYU3dpYm1GdFpYTWlPbHNpYW5NaUxDSnlaWEYxYVhKbElpd2lZWE56WlcxaWJHVnlJaXdpWm1sc2JGWmxjblJwWTJWelYybDBhRzkxZEVOaGJHTXpSQ0lzSW5abFl6TWlMQ0pqWXlJc0luWnRZWFJvSWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lJc0ltRmtaRzl1SWl3aWRYQmtZWFJsVjI5eWJHUldaWEowY3lJc0luTndjbWwwWlNJc0ltNXZaR1VpTENKa1lYUmhJaXdpWDNKbGJtUmxja1JoZEdFaUxDSmZaR0YwWVNJc0ltMWhkSEpwZUNJc0lsOTNiM0pzWkUxaGRISnBlQ0lzSW1raUxDSnNiMk5oYkNJc0luZHZjbXhrSWl3aWRISmhibk5tYjNKdFRXRjBOQ0lzSW1acGJHeENkV1ptWlhKeklpd2ljbVZ1WkdWeVpYSWlMQ0ozYjNKc1pFMWhkRVJwY25SNUlpd2lZblZtWm1WeUlpd2lYMjFsYzJoQ2RXWm1aWEl6UkNJc0ltOW1abk5sZEVsdVptOGlMQ0pmWTI5c2IzSWlMQ0pmZG1Gc0lpd2lhV0oxWmlJc0lsOXBSR0YwWVNJc0ltbHVaR2xqWlU5bVpuTmxkQ0lzSW5abGNuUmxlRWxrSWl3aWRtVnlkR1Y0VDJabWMyVjBJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCZVVKQkxFbEJRVTFCTEV0QlFVdERMRkZCUVZFc05FSkJRVklzUTBGQldEdEJRVU5CTEVsQlFVMURMRmxCUVZsRUxGRkJRVkVzYTBKQlFWSXNRMEZCYkVJN1FVRkRRU3hKUVVGTlJTdzBRa0ZCTkVKR0xGRkJRVkVzWVVGQlVpeEZRVUYxUWtVc2VVSkJRWHBFT3p0QlFVVkJMRWxCUVUxRExFOUJRVTlETEVkQlFVZERMRXRCUVVnc1EwRkJVMFlzU1VGQmRFSTdPMEZCUlVGSExFOUJRVTlETEU5QlFWQXNSMEZCYVVKU0xFZEJRVWRUTEV0QlFVZ3NRMEZCVXp0QlFVTjBRa01zYjBKQlJITkNMRFJDUVVOS1F5eE5RVVJKTEVWQlEwazdRVUZEZEVJc1dVRkJTVU1zVDBGQlQwUXNUMEZCVDBNc1NVRkJiRUk3UVVGQlFTeFpRVU5KUXl4UFFVRlBSaXhQUVVGUFJ5eFhRVUZRTEVOQlFXMUNReXhMUVVRNVFqczdRVUZIUVN4WlFVRkpReXhUUVVGVFNpeExRVUZMU3l4WlFVRnNRanRCUVVOQkxHRkJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKTEVOQlFYQkNMRVZCUVhWQ1FTeEhRVUYyUWl4RlFVRTBRanRCUVVONFFpeG5Ra0ZCU1VNc1VVRkJVVTRzUzBGQlMwc3NTVUZCU1N4RFFVRlVMRU5CUVZvN1FVRkRRU3huUWtGQlNVVXNVVUZCVVZBc1MwRkJTMHNzUTBGQlRDeERRVUZhTzBGQlEwRmtMR2xDUVVGTGFVSXNZVUZCVEN4RFFVRnRRa1FzUzBGQmJrSXNSVUZCTUVKRUxFdEJRVEZDTEVWQlFXbERTQ3hOUVVGcVF6dEJRVU5JTzBGQlEwb3NTMEZZY1VJN1FVRmhkRUpOTEdWQlluTkNMSFZDUVdGVVdDeE5RV0pUTEVWQllVUlpMRkZCWWtNc1JVRmhVenRCUVVNelFpeFpRVUZKUVN4VFFVRlRReXhoUVVGaUxFVkJRVFJDTzBGQlEzaENMR2xDUVVGTFpDeG5Ra0ZCVEN4RFFVRnpRa01zVFVGQmRFSTdRVUZEU0RzN1FVRkZSRHRCUVVOQkxGbEJRVWxqTEZOQlFWTkdMRk5CUVZOSExHRkJRWFJDTzBGQlEwRXNXVUZCU1dRc1QwRkJUMFFzVDBGQlQwTXNTVUZCYkVJN1FVRkRRU3haUVVGSlpTeGhRVUZoZUVJc01FSkJRVEJDVXl4SlFVRXhRaXhGUVVGblEyRXNUVUZCYUVNc1JVRkJkME5rTEU5QlFVOUhMRmRCUVM5RExFVkJRVFJFUml4TFFVRkxaMElzVFVGQlRDeERRVUZaUXl4SlFVRjRSU3hEUVVGcVFqczdRVUZGUVN4WlFVRkpReXhQUVVGUFRDeFBRVUZQVFN4TlFVRnNRanRCUVVGQkxGbEJRMGxETEdWQlFXVk1MRmRCUVZkTExGbEJSRGxDTzBGQlFVRXNXVUZGU1VNc1YwRkJWMDRzVjBGQlYwOHNXVUZHTVVJN08wRkJTVUZLTEdGQlFVdEZMR05CUVV3c1NVRkJkVUpETEZGQlFYWkNPMEZCUTBGSUxHRkJRVXRGTEdOQlFVd3NTVUZCZFVKRExGZEJRVmNzUTBGQmJFTTdRVUZEUVVnc1lVRkJTMFVzWTBGQlRDeEpRVUYxUWtNc1YwRkJWeXhEUVVGc1F6dEJRVU5CU0N4aFFVRkxSU3hqUVVGTUxFbEJRWFZDUXl4WFFVRlhMRU5CUVd4RE8wRkJRMEZJTEdGQlFVdEZMR05CUVV3c1NVRkJkVUpETEZkQlFWY3NRMEZCYkVNN1FVRkRRVWdzWVVGQlMwVXNZMEZCVEN4SlFVRjFRa01zVjBGQlZ5eERRVUZzUXp0QlFVTklPMEZCYWtOeFFpeERRVUZVTEVWQmEwTmtMMElzVTBGc1EyTXNRMEZCYWtJaUxDSm1hV3hsSWpvaVltRnlMV1pwYkd4bFpDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYSEpjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2NseHVYSEpjYmlCb2RIUndjem92TDNkM2R5NWpiMk52Y3k1amIyMHZYSEpjYmx4eVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4eVhHNGdiMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCbGJtZHBibVVnYzI5MWNtTmxJR052WkdVZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQmhJR3hwYldsMFpXUXNYSEpjYmlCM2IzSnNaSGRwWkdVc0lISnZlV0ZzZEhrdFpuSmxaU3dnYm05dUxXRnpjMmxuYm1GaWJHVXNJSEpsZG05allXSnNaU0JoYm1RZ2JtOXVMV1Y0WTJ4MWMybDJaU0JzYVdObGJuTmxYSEpjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4eVhHNGdibTkwSUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdlpuUjNZWEpsSUdadmNpQmtaWFpsYkc5d2FXNW5JRzkwYUdWeUlITnZablIzWVhKbElHOXlJSFJ2YjJ4eklIUm9ZWFFuYzF4eVhHNGdkWE5sWkNCbWIzSWdaR1YyWld4dmNHbHVaeUJuWVcxbGN5NGdXVzkxSUdGeVpTQnViM1FnWjNKaGJuUmxaQ0IwYnlCd2RXSnNhWE5vTENCa2FYTjBjbWxpZFhSbExGeHlYRzRnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JRU52WTI5eklFTnlaV0YwYjNJdVhISmNibHh5WEc0Z1ZHaGxJSE52Wm5SM1lYSmxJRzl5SUhSdmIyeHpJR2x1SUhSb2FYTWdUR2xqWlc1elpTQkJaM0psWlcxbGJuUWdZWEpsSUd4cFkyVnVjMlZrTENCdWIzUWdjMjlzWkM1Y2NseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYSEpjYmx4eVhHNGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4eVhHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYSEpjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNjbHh1SUVGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjY2x4dUlFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEhKY2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YSEpjYmlCVVNFVWdVMDlHVkZkQlVrVXVYSEpjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh5WEc1Y2NseHVZMjl1YzNRZ2FuTWdQU0J5WlhGMWFYSmxLQ2N1TGk4dUxpOHVMaTh1TGk4dUxpOXdiR0YwWm05eWJTOXFjeWNwTzF4eVhHNWpiMjV6ZENCaGMzTmxiV0pzWlhJZ1BTQnlaWEYxYVhKbEtDY3VMaTh5WkM5aVlYSXRabWxzYkdWa0p5azdYSEpjYm1OdmJuTjBJR1pwYkd4V1pYSjBhV05sYzFkcGRHaHZkWFJEWVd4ak0wUWdQU0J5WlhGMWFYSmxLQ2N1TGk4dUxpOTFkR2xzY3ljcExtWnBiR3hXWlhKMGFXTmxjMWRwZEdodmRYUkRZV3hqTTBRN1hISmNibHh5WEc1amIyNXpkQ0IyWldNeklEMGdZMk11ZG0xaGRHZ3VkbVZqTXp0Y2NseHVYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYW5NdVlXUmtiMjRvZTF4eVhHNGdJQ0FnZFhCa1lYUmxWMjl5YkdSV1pYSjBjeUFvYzNCeWFYUmxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQnpjSEpwZEdVdWJtOWtaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVNBOUlITndjbWwwWlM1ZmNtVnVaR1Z5UkdGMFlTNWZaR0YwWVR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHMWhkSEpwZUNBOUlHNXZaR1V1WDNkdmNteGtUV0YwY21sNE8xeHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnTkRzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCc2IyTmhiQ0E5SUdSaGRHRmJhU0FySURSZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdkMjl5YkdRZ1BTQmtZWFJoVzJsZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpXTXpMblJ5WVc1elptOXliVTFoZERRb2QyOXliR1FzSUd4dlkyRnNMQ0J0WVhSeWFYZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgwc1hISmNibHh5WEc0Z0lDQWdabWxzYkVKMVptWmxjbk1nS0hOd2NtbDBaU3dnY21WdVpHVnlaWElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvY21WdVpHVnlaWEl1ZDI5eWJHUk5ZWFJFYVhKMGVTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Wd1pHRjBaVmR2Y214a1ZtVnlkSE1vYzNCeWFYUmxLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklHSjFabVpsY2x4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JpZFdabVpYSWdQU0J5Wlc1a1pYSmxjaTVmYldWemFFSjFabVpsY2pORU8xeHlYRzRnSUNBZ0lDQWdJR3hsZENCdWIyUmxJRDBnYzNCeWFYUmxMbTV2WkdVN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUc5bVpuTmxkRWx1Wm04Z1BTQm1hV3hzVm1WeWRHbGpaWE5YYVhSb2IzVjBRMkZzWXpORUtHNXZaR1VzSUdKMVptWmxjaXdnYzNCeWFYUmxMbDl5Wlc1a1pYSkVZWFJoTENCdWIyUmxMbDlqYjJ4dmNpNWZkbUZzS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHbGlkV1lnUFNCaWRXWm1aWEl1WDJsRVlYUmhMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibVJwWTJWUFptWnpaWFFnUFNCdlptWnpaWFJKYm1adkxtbHVaR2xqWlU5bVpuTmxkQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZ5ZEdWNFNXUWdQU0J2Wm1aelpYUkpibVp2TG5abGNuUmxlRTltWm5ObGREdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXSjFabHRwYm1ScFkyVlBabVp6WlhRcksxMGdQU0IyWlhKMFpYaEpaRHRjY2x4dUlDQWdJQ0FnSUNCcFluVm1XMmx1WkdsalpVOW1abk5sZENzclhTQTlJSFpsY25SbGVFbGtJQ3NnTVR0Y2NseHVJQ0FnSUNBZ0lDQnBZblZtVzJsdVpHbGpaVTltWm5ObGRDc3JYU0E5SUhabGNuUmxlRWxrSUNzZ01qdGNjbHh1SUNBZ0lDQWdJQ0JwWW5WbVcybHVaR2xqWlU5bVpuTmxkQ3NyWFNBOUlIWmxjblJsZUVsa0lDc2dNVHRjY2x4dUlDQWdJQ0FnSUNCcFluVm1XMmx1WkdsalpVOW1abk5sZENzclhTQTlJSFpsY25SbGVFbGtJQ3NnTXp0Y2NseHVJQ0FnSUNBZ0lDQnBZblZtVzJsdVpHbGpaVTltWm5ObGRDc3JYU0E5SUhabGNuUmxlRWxrSUNzZ01qdGNjbHh1SUNBZ0lIMWNjbHh1ZlN3Z1lYTnpaVzFpYkdWeUtUdGNjbHh1SWwxOSJdfQ==