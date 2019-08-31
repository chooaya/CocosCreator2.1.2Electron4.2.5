(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/renderers/sprite/tiled.js';
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
        var utils = require('../utils');
        var renderer = {
            createData: function createData(sprite) {
                var renderData = sprite.requestRenderData();
                return renderData;
            },
            updateRenderData: function updateRenderData(sprite) {
                if (!sprite._material) {
                    sprite._activateMaterial();
                }
            },
            draw: function draw(ctx, sprite) {
                var node = sprite.node;
                var matrix = node._worldMatrix;
                var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
                ctx.transform(a, b, c, d, tx, ty);
                ctx.scale(1, -1);
                utils.context.setGlobalAlpha(ctx, node.opacity / 255);
                var frame = sprite.spriteFrame;
                var rect = frame._rect;
                var tex = frame._texture;
                var sx = rect.x;
                var sy = rect.y;
                var sw = frame._rotated ? rect.height : rect.width;
                var sh = frame._rotated ? rect.width : rect.height;
                var image = utils.getFrameCache(tex, node._color, sx, sy, sw, sh);
                var w = node.width, h = node.height, x = -node.anchorX * w, y = -node.anchorY * h;
                y = -y - h;
                ctx.translate(x, y);
                ctx.fillStyle = ctx.createPattern(image, 'repeat');
                ctx.fillRect(0, 0, w, h);
                return 1;
            }
        };
        module.exports = renderer;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGVkLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL3JlbmRlcmVyL2NhbnZhcy9yZW5kZXJlcnMvc3ByaXRlL3RpbGVkLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwicmVxdWlyZSIsInJlbmRlcmVyIiwiY3JlYXRlRGF0YSIsInNwcml0ZSIsInJlbmRlckRhdGEiLCJyZXF1ZXN0UmVuZGVyRGF0YSIsInVwZGF0ZVJlbmRlckRhdGEiLCJfbWF0ZXJpYWwiLCJfYWN0aXZhdGVNYXRlcmlhbCIsImRyYXciLCJjdHgiLCJub2RlIiwibWF0cml4IiwiX3dvcmxkTWF0cml4IiwiYSIsIm0wMCIsImIiLCJtMDEiLCJjIiwibTA0IiwiZCIsIm0wNSIsInR4IiwibTEyIiwidHkiLCJtMTMiLCJ0cmFuc2Zvcm0iLCJzY2FsZSIsImNvbnRleHQiLCJzZXRHbG9iYWxBbHBoYSIsIm9wYWNpdHkiLCJmcmFtZSIsInNwcml0ZUZyYW1lIiwicmVjdCIsIl9yZWN0IiwidGV4IiwiX3RleHR1cmUiLCJzeCIsIngiLCJzeSIsInkiLCJzdyIsIl9yb3RhdGVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJzaCIsImltYWdlIiwiZ2V0RnJhbWVDYWNoZSIsIl9jb2xvciIsInciLCJoIiwiYW5jaG9yWCIsImFuY2hvclkiLCJ0cmFuc2xhdGUiLCJmaWxsU3R5bGUiLCJjcmVhdGVQYXR0ZXJuIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUF5QkEsSUFBTUEsS0FBQUEsR0FBUUMsT0FBQUEsQ0FBUSxVQUFSQSxDQUFkO1FBRUEsSUFBSUMsUUFBQUEsR0FBVztBQUFBLFlBQ1hDLFVBQUFBLEVBRFcsU0FBQSxVQUFBLENBQ0NDLE1BREQsRUFDUztBQUFB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QUFBQSxHQUFJLENBQUVBLENBQUYsR0FBTVUsQ0FBVlYsQ0E1QmU7QUFBQSxnQkE4QmY5QixHQUFBQSxDQUFJMkMsU0FBSjNDLENBQWM0QixDQUFkNUIsRUFBaUI4QixDQUFqQjlCLEVBOUJlO0FBQUEsZ0JBK0JmQSxHQUFBQSxDQUFJNEMsU0FBSjVDLEdBQWdCQSxHQUFBQSxDQUFJNkMsYUFBSjdDLENBQWtCb0MsS0FBbEJwQyxFQUF5QixRQUF6QkEsQ0FBaEJBLENBL0JlO0FBQUEsZ0JBZ0NmQSxHQUFBQSxDQUFJOEMsUUFBSjlDLENBQWEsQ0FBYkEsRUFBZ0IsQ0FBaEJBLEVBQW1CdUMsQ0FBbkJ2QyxFQUFzQndDLENBQXRCeEMsRUFoQ2U7QUFBQSxnQkFpQ2YsT0FBTyxDQUFQLENBakNlO0FBQUEsYUFaUjtBQUFBLFNBQWY7UUFpREErQyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQnhELFFBQWpCd0QiLCJmaWxlIjoidGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XHJcblxyXG5sZXQgcmVuZGVyZXIgPSB7XHJcbiAgICBjcmVhdGVEYXRhIChzcHJpdGUpIHtcclxuICAgICAgICBsZXQgcmVuZGVyRGF0YSA9IHNwcml0ZS5yZXF1ZXN0UmVuZGVyRGF0YSgpO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJEYXRhO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdXBkYXRlUmVuZGVyRGF0YSAoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKCFzcHJpdGUuX21hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5fYWN0aXZhdGVNYXRlcmlhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZHJhdyAoY3R4LCBzcHJpdGUpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHNwcml0ZS5ub2RlO1xyXG4gICAgICAgIC8vIFRyYW5zZm9ybVxyXG4gICAgICAgIGxldCBtYXRyaXggPSBub2RlLl93b3JsZE1hdHJpeDtcclxuICAgICAgICBsZXQgYSA9IG1hdHJpeC5tMDAsIGIgPSBtYXRyaXgubTAxLCBjID0gbWF0cml4Lm0wNCwgZCA9IG1hdHJpeC5tMDUsXHJcbiAgICAgICAgICAgIHR4ID0gbWF0cml4Lm0xMiwgdHkgPSBtYXRyaXgubTEzO1xyXG4gICAgICAgIGN0eC50cmFuc2Zvcm0oYSwgYiwgYywgZCwgdHgsIHR5KTtcclxuICAgICAgICBjdHguc2NhbGUoMSwgLTEpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgYmxlbmQgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgLy8gb3BhY2l0eVxyXG4gICAgICAgIHV0aWxzLmNvbnRleHQuc2V0R2xvYmFsQWxwaGEoY3R4LCBub2RlLm9wYWNpdHkgLyAyNTUpO1xyXG5cclxuICAgICAgICBsZXQgZnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBmcmFtZS5fcmVjdDtcclxuICAgICAgICBsZXQgdGV4ID0gZnJhbWUuX3RleHR1cmU7XHJcbiAgICAgICAgbGV0IHN4ID0gcmVjdC54O1xyXG4gICAgICAgIGxldCBzeSA9IHJlY3QueTtcclxuICAgICAgICBsZXQgc3cgPSBmcmFtZS5fcm90YXRlZCA/IHJlY3QuaGVpZ2h0IDogcmVjdC53aWR0aDtcclxuICAgICAgICBsZXQgc2ggPSBmcmFtZS5fcm90YXRlZCA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gdXRpbHMuZ2V0RnJhbWVDYWNoZSh0ZXgsIG5vZGUuX2NvbG9yLCBzeCwgc3ksIHN3LCBzaCk7XHJcblxyXG4gICAgICAgIGxldCB3ID0gbm9kZS53aWR0aCxcclxuICAgICAgICAgICAgaCA9IG5vZGUuaGVpZ2h0LFxyXG4gICAgICAgICAgICB4ID0gLW5vZGUuYW5jaG9yWCAqIHcsXHJcbiAgICAgICAgICAgIHkgPSAtbm9kZS5hbmNob3JZICogaDtcclxuICAgICAgICB5ID0gLSB5IC0gaDtcclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsICdyZXBlYXQnKTtcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyZXIiLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxyXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIHJlbmRlcmVyID0ge1xuICAgIGNyZWF0ZURhdGE6IGZ1bmN0aW9uIGNyZWF0ZURhdGEoc3ByaXRlKSB7XG4gICAgICAgIHZhciByZW5kZXJEYXRhID0gc3ByaXRlLnJlcXVlc3RSZW5kZXJEYXRhKCk7XG4gICAgICAgIHJldHVybiByZW5kZXJEYXRhO1xuICAgIH0sXG4gICAgdXBkYXRlUmVuZGVyRGF0YTogZnVuY3Rpb24gdXBkYXRlUmVuZGVyRGF0YShzcHJpdGUpIHtcbiAgICAgICAgaWYgKCFzcHJpdGUuX21hdGVyaWFsKSB7XG4gICAgICAgICAgICBzcHJpdGUuX2FjdGl2YXRlTWF0ZXJpYWwoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZHJhdzogZnVuY3Rpb24gZHJhdyhjdHgsIHNwcml0ZSkge1xuICAgICAgICB2YXIgbm9kZSA9IHNwcml0ZS5ub2RlO1xuICAgICAgICAvLyBUcmFuc2Zvcm1cbiAgICAgICAgdmFyIG1hdHJpeCA9IG5vZGUuX3dvcmxkTWF0cml4O1xuICAgICAgICB2YXIgYSA9IG1hdHJpeC5tMDAsXG4gICAgICAgICAgICBiID0gbWF0cml4Lm0wMSxcbiAgICAgICAgICAgIGMgPSBtYXRyaXgubTA0LFxuICAgICAgICAgICAgZCA9IG1hdHJpeC5tMDUsXG4gICAgICAgICAgICB0eCA9IG1hdHJpeC5tMTIsXG4gICAgICAgICAgICB0eSA9IG1hdHJpeC5tMTM7XG4gICAgICAgIGN0eC50cmFuc2Zvcm0oYSwgYiwgYywgZCwgdHgsIHR5KTtcbiAgICAgICAgY3R4LnNjYWxlKDEsIC0xKTtcblxuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgYmxlbmQgZnVuY3Rpb25cblxuICAgICAgICAvLyBvcGFjaXR5XG4gICAgICAgIHV0aWxzLmNvbnRleHQuc2V0R2xvYmFsQWxwaGEoY3R4LCBub2RlLm9wYWNpdHkgLyAyNTUpO1xuXG4gICAgICAgIHZhciBmcmFtZSA9IHNwcml0ZS5zcHJpdGVGcmFtZTtcbiAgICAgICAgdmFyIHJlY3QgPSBmcmFtZS5fcmVjdDtcbiAgICAgICAgdmFyIHRleCA9IGZyYW1lLl90ZXh0dXJlO1xuICAgICAgICB2YXIgc3ggPSByZWN0Lng7XG4gICAgICAgIHZhciBzeSA9IHJlY3QueTtcbiAgICAgICAgdmFyIHN3ID0gZnJhbWUuX3JvdGF0ZWQgPyByZWN0LmhlaWdodCA6IHJlY3Qud2lkdGg7XG4gICAgICAgIHZhciBzaCA9IGZyYW1lLl9yb3RhdGVkID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIHZhciBpbWFnZSA9IHV0aWxzLmdldEZyYW1lQ2FjaGUodGV4LCBub2RlLl9jb2xvciwgc3gsIHN5LCBzdywgc2gpO1xuXG4gICAgICAgIHZhciB3ID0gbm9kZS53aWR0aCxcbiAgICAgICAgICAgIGggPSBub2RlLmhlaWdodCxcbiAgICAgICAgICAgIHggPSAtbm9kZS5hbmNob3JYICogdyxcbiAgICAgICAgICAgIHkgPSAtbm9kZS5hbmNob3JZICogaDtcbiAgICAgICAgeSA9IC15IC0gaDtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsICdyZXBlYXQnKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5ScGJHVmtMbXB6SWwwc0ltNWhiV1Z6SWpwYkluVjBhV3h6SWl3aWNtVnhkV2x5WlNJc0luSmxibVJsY21WeUlpd2lZM0psWVhSbFJHRjBZU0lzSW5Od2NtbDBaU0lzSW5KbGJtUmxja1JoZEdFaUxDSnlaWEYxWlhOMFVtVnVaR1Z5UkdGMFlTSXNJblZ3WkdGMFpWSmxibVJsY2tSaGRHRWlMQ0pmYldGMFpYSnBZV3dpTENKZllXTjBhWFpoZEdWTllYUmxjbWxoYkNJc0ltUnlZWGNpTENKamRIZ2lMQ0p1YjJSbElpd2liV0YwY21sNElpd2lYM2R2Y214a1RXRjBjbWw0SWl3aVlTSXNJbTB3TUNJc0ltSWlMQ0p0TURFaUxDSmpJaXdpYlRBMElpd2laQ0lzSW0wd05TSXNJblI0SWl3aWJURXlJaXdpZEhraUxDSnRNVE1pTENKMGNtRnVjMlp2Y20waUxDSnpZMkZzWlNJc0ltTnZiblJsZUhRaUxDSnpaWFJIYkc5aVlXeEJiSEJvWVNJc0ltOXdZV05wZEhraUxDSm1jbUZ0WlNJc0luTndjbWwwWlVaeVlXMWxJaXdpY21WamRDSXNJbDl5WldOMElpd2lkR1Y0SWl3aVgzUmxlSFIxY21VaUxDSnplQ0lzSW5naUxDSnplU0lzSW5raUxDSnpkeUlzSWw5eWIzUmhkR1ZrSWl3aWFHVnBaMmgwSWl3aWQybGtkR2dpTENKemFDSXNJbWx0WVdkbElpd2laMlYwUm5KaGJXVkRZV05vWlNJc0lsOWpiMnh2Y2lJc0luY2lMQ0pvSWl3aVlXNWphRzl5V0NJc0ltRnVZMmh2Y2xraUxDSjBjbUZ1YzJ4aGRHVWlMQ0ptYVd4c1UzUjViR1VpTENKamNtVmhkR1ZRWVhSMFpYSnVJaXdpWm1sc2JGSmxZM1FpTENKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQmVVSkJMRWxCUVUxQkxGRkJRVkZETEZGQlFWRXNWVUZCVWl4RFFVRmtPenRCUVVWQkxFbEJRVWxETEZkQlFWYzdRVUZEV0VNc1kwRkVWeXh6UWtGRFEwTXNUVUZFUkN4RlFVTlRPMEZCUTJoQ0xGbEJRVWxETEdGQlFXRkVMRTlCUVU5RkxHbENRVUZRTEVWQlFXcENPMEZCUTBFc1pVRkJUMFFzVlVGQlVEdEJRVU5JTEV0QlNsVTdRVUZOV0VVc2IwSkJUbGNzTkVKQlRVOUlMRTFCVGxBc1JVRk5aVHRCUVVOMFFpeFpRVUZKTEVOQlFVTkJMRTlCUVU5SkxGTkJRVm9zUlVGQmRVSTdRVUZEYmtKS0xHMUNRVUZQU3l4cFFrRkJVRHRCUVVOSU8wRkJRMG9zUzBGV1ZUdEJRVmxZUXl4UlFWcFhMR2RDUVZsTVF5eEhRVnBMTEVWQldVRlFMRTFCV2tFc1JVRlpVVHRCUVVObUxGbEJRVWxSTEU5QlFVOVNMRTlCUVU5UkxFbEJRV3hDTzBGQlEwRTdRVUZEUVN4WlFVRkpReXhUUVVGVFJDeExRVUZMUlN4WlFVRnNRanRCUVVOQkxGbEJRVWxETEVsQlFVbEdMRTlCUVU5SExFZEJRV1k3UVVGQlFTeFpRVUZ2UWtNc1NVRkJTVW9zVDBGQlQwc3NSMEZCTDBJN1FVRkJRU3haUVVGdlEwTXNTVUZCU1U0c1QwRkJUMDhzUjBGQkwwTTdRVUZCUVN4WlFVRnZSRU1zU1VGQlNWSXNUMEZCVDFNc1IwRkJMMFE3UVVGQlFTeFpRVU5KUXl4TFFVRkxWaXhQUVVGUFZ5eEhRVVJvUWp0QlFVRkJMRmxCUTNGQ1F5eExRVUZMV2l4UFFVRlBZU3hIUVVScVF6dEJRVVZCWml4WlFVRkpaMElzVTBGQlNpeERRVUZqV2l4RFFVRmtMRVZCUVdsQ1JTeERRVUZxUWl4RlFVRnZRa1VzUTBGQmNFSXNSVUZCZFVKRkxFTkJRWFpDTEVWQlFUQkNSU3hGUVVFeFFpeEZRVUU0UWtVc1JVRkJPVUk3UVVGRFFXUXNXVUZCU1dsQ0xFdEJRVW9zUTBGQlZTeERRVUZXTEVWQlFXRXNRMEZCUXl4RFFVRmtPenRCUVVWQk96dEJRVVZCTzBGQlEwRTFRaXhqUVVGTk5rSXNUMEZCVGl4RFFVRmpReXhqUVVGa0xFTkJRVFpDYmtJc1IwRkJOMElzUlVGQmEwTkRMRXRCUVV0dFFpeFBRVUZNTEVkQlFXVXNSMEZCYWtRN08wRkJSVUVzV1VGQlNVTXNVVUZCVVRWQ0xFOUJRVTgyUWl4WFFVRnVRanRCUVVOQkxGbEJRVWxETEU5QlFVOUdMRTFCUVUxSExFdEJRV3BDTzBGQlEwRXNXVUZCU1VNc1RVRkJUVW9zVFVGQlRVc3NVVUZCYUVJN1FVRkRRU3haUVVGSlF5eExRVUZMU2l4TFFVRkxTeXhEUVVGa08wRkJRMEVzV1VGQlNVTXNTMEZCUzA0c1MwRkJTMDhzUTBGQlpEdEJRVU5CTEZsQlFVbERMRXRCUVV0V0xFMUJRVTFYTEZGQlFVNHNSMEZCYVVKVUxFdEJRVXRWTEUxQlFYUkNMRWRCUVN0Q1ZpeExRVUZMVnl4TFFVRTNRenRCUVVOQkxGbEJRVWxETEV0QlFVdGtMRTFCUVUxWExGRkJRVTRzUjBGQmFVSlVMRXRCUVV0WExFdEJRWFJDTEVkQlFUaENXQ3hMUVVGTFZTeE5RVUUxUXpzN1FVRkZRU3haUVVGSlJ5eFJRVUZSTDBNc1RVRkJUV2RFTEdGQlFVNHNRMEZCYjBKYUxFZEJRWEJDTEVWQlFYbENlRUlzUzBGQlMzRkRMRTFCUVRsQ0xFVkJRWE5EV0N4RlFVRjBReXhGUVVFd1EwVXNSVUZCTVVNc1JVRkJPRU5GTEVWQlFUbERMRVZCUVd0RVNTeEZRVUZzUkN4RFFVRmFPenRCUVVWQkxGbEJRVWxKTEVsQlFVbDBReXhMUVVGTGFVTXNTMEZCWWp0QlFVRkJMRmxCUTBsTkxFbEJRVWwyUXl4TFFVRkxaME1zVFVGRVlqdEJRVUZCTEZsQlJVbE1MRWxCUVVrc1EwRkJRek5DTEV0QlFVdDNReXhQUVVGT0xFZEJRV2RDUml4RFFVWjRRanRCUVVGQkxGbEJSMGxVTEVsQlFVa3NRMEZCUXpkQ0xFdEJRVXQ1UXl4UFFVRk9MRWRCUVdkQ1JpeERRVWg0UWp0QlFVbEJWaXhaUVVGSkxFTkJRVVZCTEVOQlFVWXNSMEZCVFZVc1EwRkJWanM3UVVGRlFYaERMRmxCUVVreVF5eFRRVUZLTEVOQlFXTm1MRU5CUVdRc1JVRkJhVUpGTEVOQlFXcENPMEZCUTBFNVFpeFpRVUZKTkVNc1UwRkJTaXhIUVVGblFqVkRMRWxCUVVrMlF5eGhRVUZLTEVOQlFXdENWQ3hMUVVGc1FpeEZRVUY1UWl4UlFVRjZRaXhEUVVGb1FqdEJRVU5CY0VNc1dVRkJTVGhETEZGQlFVb3NRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVWQlFXMUNVQ3hEUVVGdVFpeEZRVUZ6UWtNc1EwRkJkRUk3UVVGRFFTeGxRVUZQTEVOQlFWQTdRVUZEU0R0QlFUbERWU3hEUVVGbU96dEJRV2xFUVU4c1QwRkJUME1zVDBGQlVDeEhRVUZwUW5wRUxGRkJRV3BDSWl3aVptbHNaU0k2SW5ScGJHVmtMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjY2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjY2x4dVhISmNiaUJvZEhSd2N6b3ZMM2QzZHk1amIyTnZjeTVqYjIwdlhISmNibHh5WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh5WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hISmNiaUIzYjNKc1pIZHBaR1VzSUhKdmVXRnNkSGt0Wm5KbFpTd2dibTl1TFdGemMybG5ibUZpYkdVc0lISmxkbTlqWVdKc1pTQmhibVFnYm05dUxXVjRZMngxYzJsMlpTQnNhV05sYm5ObFhISmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh5WEc0Z2JtOTBJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52Wm5SM1lYSmxJR1p2Y2lCa1pYWmxiRzl3YVc1bklHOTBhR1Z5SUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUhSb1lYUW5jMXh5WEc0Z2RYTmxaQ0JtYjNJZ1pHVjJaV3h2Y0dsdVp5Qm5ZVzFsY3k0Z1dXOTFJR0Z5WlNCdWIzUWdaM0poYm5SbFpDQjBieUJ3ZFdKc2FYTm9MQ0JrYVhOMGNtbGlkWFJsTEZ4eVhHNGdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEhKY2JseHlYRzRnVkdobElITnZablIzWVhKbElHOXlJSFJ2YjJ4eklHbHVJSFJvYVhNZ1RHbGpaVzV6WlNCQlozSmxaVzFsYm5RZ1lYSmxJR3hwWTJWdWMyVmtMQ0J1YjNRZ2MyOXNaQzVjY2x4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhISmNibHh5WEc0Z1ZFaEZJRk5QUmxSWFFWSkZJRWxUSUZCU1QxWkpSRVZFSUZ3aVFWTWdTVk5jSWl3Z1YwbFVTRTlWVkNCWFFWSlNRVTVVV1NCUFJpQkJUbGtnUzBsT1JDd2dSVmhRVWtWVFV5QlBVbHh5WEc0Z1NVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hISmNiaUJHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2NseHVJRUZWVkVoUFVsTWdUMUlnUTA5UVdWSkpSMGhVSUVoUFRFUkZVbE1nUWtVZ1RFbEJRa3hGSUVaUFVpQkJUbGtnUTB4QlNVMHNJRVJCVFVGSFJWTWdUMUlnVDFSSVJWSmNjbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYSEpjYmlCUFZWUWdUMFlnVDFJZ1NVNGdRMDlPVGtWRFZFbFBUaUJYU1ZSSUlGUklSU0JUVDBaVVYwRlNSU0JQVWlCVVNFVWdWVk5GSUU5U0lFOVVTRVZTSUVSRlFVeEpUa2RUSUVsT1hISmNiaUJVU0VVZ1UwOUdWRmRCVWtVdVhISmNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHlYRzVjY2x4dVkyOXVjM1FnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1TGk5MWRHbHNjeWNwTzF4eVhHNWNjbHh1YkdWMElISmxibVJsY21WeUlEMGdlMXh5WEc0Z0lDQWdZM0psWVhSbFJHRjBZU0FvYzNCeWFYUmxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYm1SbGNrUmhkR0VnUFNCemNISnBkR1V1Y21WeGRXVnpkRkpsYm1SbGNrUmhkR0VvS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnVaR1Z5UkdGMFlUdGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lIVndaR0YwWlZKbGJtUmxja1JoZEdFZ0tITndjbWwwWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNnaGMzQnlhWFJsTGw5dFlYUmxjbWxoYkNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCemNISnBkR1V1WDJGamRHbDJZWFJsVFdGMFpYSnBZV3dvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlMRnh5WEc1Y2NseHVJQ0FnSUdSeVlYY2dLR04wZUN3Z2MzQnlhWFJsS1NCN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUc1dlpHVWdQU0J6Y0hKcGRHVXVibTlrWlR0Y2NseHVJQ0FnSUNBZ0lDQXZMeUJVY21GdWMyWnZjbTFjY2x4dUlDQWdJQ0FnSUNCc1pYUWdiV0YwY21sNElEMGdibTlrWlM1ZmQyOXliR1JOWVhSeWFYZzdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHRWdQU0J0WVhSeWFYZ3ViVEF3TENCaUlEMGdiV0YwY21sNExtMHdNU3dnWXlBOUlHMWhkSEpwZUM1dE1EUXNJR1FnUFNCdFlYUnlhWGd1YlRBMUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGVDQTlJRzFoZEhKcGVDNXRNVElzSUhSNUlEMGdiV0YwY21sNExtMHhNenRjY2x4dUlDQWdJQ0FnSUNCamRIZ3VkSEpoYm5ObWIzSnRLR0VzSUdJc0lHTXNJR1FzSUhSNExDQjBlU2s3WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbk5qWVd4bEtERXNJQzB4S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHk4Z1ZFOUVUem9nYUdGdVpHeGxJR0pzWlc1a0lHWjFibU4wYVc5dVhISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklHOXdZV05wZEhsY2NseHVJQ0FnSUNBZ0lDQjFkR2xzY3k1amIyNTBaWGgwTG5ObGRFZHNiMkpoYkVGc2NHaGhLR04wZUN3Z2JtOWtaUzV2Y0dGamFYUjVJQzhnTWpVMUtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR1p5WVcxbElEMGdjM0J5YVhSbExuTndjbWwwWlVaeVlXMWxPMXh5WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaV04wSUQwZ1puSmhiV1V1WDNKbFkzUTdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElIUmxlQ0E5SUdaeVlXMWxMbDkwWlhoMGRYSmxPMXh5WEc0Z0lDQWdJQ0FnSUd4bGRDQnplQ0E5SUhKbFkzUXVlRHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdjM2tnUFNCeVpXTjBMbms3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJSE4zSUQwZ1puSmhiV1V1WDNKdmRHRjBaV1FnUHlCeVpXTjBMbWhsYVdkb2RDQTZJSEpsWTNRdWQybGtkR2c3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJSE5vSUQwZ1puSmhiV1V1WDNKdmRHRjBaV1FnUHlCeVpXTjBMbmRwWkhSb0lEb2djbVZqZEM1b1pXbG5hSFE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR3hsZENCcGJXRm5aU0E5SUhWMGFXeHpMbWRsZEVaeVlXMWxRMkZqYUdVb2RHVjRMQ0J1YjJSbExsOWpiMnh2Y2l3Z2MzZ3NJSE41TENCemR5d2djMmdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2R5QTlJRzV2WkdVdWQybGtkR2dzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2dnUFNCdWIyUmxMbWhsYVdkb2RDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VDQTlJQzF1YjJSbExtRnVZMmh2Y2xnZ0tpQjNMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVJRDBnTFc1dlpHVXVZVzVqYUc5eVdTQXFJR2c3WEhKY2JpQWdJQ0FnSUNBZ2VTQTlJQzBnZVNBdElHZzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTjBlQzUwY21GdWMyeGhkR1VvZUN3Z2VTazdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtWnBiR3hUZEhsc1pTQTlJR04wZUM1amNtVmhkR1ZRWVhSMFpYSnVLR2x0WVdkbExDQW5jbVZ3WldGMEp5azdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtWnBiR3hTWldOMEtEQXNJREFzSUhjc0lHZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxibVJsY21WeUlsMTkiXX0=