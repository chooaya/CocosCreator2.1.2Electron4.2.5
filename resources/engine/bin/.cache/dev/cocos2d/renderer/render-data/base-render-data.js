(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/render-data/base-render-data.js';
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
        Object.defineProperty(exports, '__esModule', { value: true });
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var BaseRenderData = function BaseRenderData() {
            _classCallCheck(this, BaseRenderData);
            this.material = null;
            this.vertexCount = 0;
            this.indiceCount = 0;
        };
        exports.default = BaseRenderData;
        module.exports = exports['default'];
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtcmVuZGVyLWRhdGEuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL3JlbmRlci1kYXRhL2Jhc2UtcmVuZGVyLWRhdGEuanMiXSwibmFtZXMiOlsiQmFzZVJlbmRlckRhdGEiLCJtYXRlcmlhbCIsInZlcnRleENvdW50IiwiaW5kaWNlQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFBQSxPQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBQUE7O0lBRUEsU0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7U0FBQTtBQUFBOzs7Ozs7O1lBS3FCQSxjQUFBQSxHQUNuQixTQUFBLGNBQUEsR0FBZTtBQUFBLFlBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxjQUFBLEVBQUE7QUFBQSxZQUNYLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEIsQ0FEVztBQUFBLFlBRVgsS0FBS0MsV0FBTCxHQUFtQixDQUFuQixDQUZXO0FBQUEsWUFHWCxLQUFLQyxXQUFMLEdBQW1CLENBQW5CLENBSFc7QUFBQTswQkFESUg7NENBTHJCO0FBQUE7OztXQU1pQjtBQUFBO1lBQ1gsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUE7V0FEVztBQUFBIiwiZmlsZSI6ImJhc2UtcmVuZGVyLWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuICBcclxuXHJcbi8qKlxyXG4gKiBCYXNlUmVuZGVyRGF0YSBpcyBhIGNvcmUgZGF0YSBhYnN0cmFjdGlvbiBmb3IgcmVuZGVyZXIsIHRoaXMgaXMgYSBhYnN0cmFjdCBjbGFzcy5cclxuICogQW4gaW5oZXJpdGVkIHJlbmRlciBkYXRhIHR5cGUgc2hvdWxkIGRlZmluZSByYXcgdmVydGV4IGRhdGFzLlxyXG4gKiBVc2VyIHNob3VsZCBhbHNvIGRlZmluZSB0aGUgZWZmZWN0LCB2ZXJ0ZXggY291bnQgYW5kIGluZGV4IGNvdW50LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVJlbmRlckRhdGEge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMudmVydGV4Q291bnQgPSAwO1xyXG4gICAgICB0aGlzLmluZGljZUNvdW50ID0gMDtcclxuICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gQ29weXJpZ2h0IChjKSAyMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiAgXG5cbi8qKlxyXG4gKiBCYXNlUmVuZGVyRGF0YSBpcyBhIGNvcmUgZGF0YSBhYnN0cmFjdGlvbiBmb3IgcmVuZGVyZXIsIHRoaXMgaXMgYSBhYnN0cmFjdCBjbGFzcy5cclxuICogQW4gaW5oZXJpdGVkIHJlbmRlciBkYXRhIHR5cGUgc2hvdWxkIGRlZmluZSByYXcgdmVydGV4IGRhdGFzLlxyXG4gKiBVc2VyIHNob3VsZCBhbHNvIGRlZmluZSB0aGUgZWZmZWN0LCB2ZXJ0ZXggY291bnQgYW5kIGluZGV4IGNvdW50LlxyXG4gKi9cbnZhciBCYXNlUmVuZGVyRGF0YSA9IGZ1bmN0aW9uIEJhc2VSZW5kZXJEYXRhKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzZVJlbmRlckRhdGEpO1xuXG4gIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xuICB0aGlzLnZlcnRleENvdW50ID0gMDtcbiAgdGhpcy5pbmRpY2VDb3VudCA9IDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXNlUmVuZGVyRGF0YTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUpoYzJVdGNtVnVaR1Z5TFdSaGRHRXVhbk1pWFN3aWJtRnRaWE1pT2xzaVFtRnpaVkpsYm1SbGNrUmhkR0VpTENKdFlYUmxjbWxoYkNJc0luWmxjblJsZUVOdmRXNTBJaXdpYVc1a2FXTmxRMjkxYm5RaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPMEZCUVVFN08wRkJSVUU3T3pzN08wbEJTM0ZDUVN4akxFZEJRMjVDTERCQ1FVRmxPMEZCUVVFN08wRkJRMWdzVDBGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEU5QlFVdERMRmRCUVV3c1IwRkJiVUlzUTBGQmJrSTdRVUZEUVN4UFFVRkxReXhYUVVGTUxFZEJRVzFDTEVOQlFXNUNPMEZCUTBnc1F6czdhMEpCVEd0Q1NDeGpJaXdpWm1sc1pTSTZJbUpoYzJVdGNtVnVaR1Z5TFdSaGRHRXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkRiM0I1Y21sbmFIUWdLR01wSURJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUNCY2NseHVYSEpjYmk4cUtseHlYRzRnS2lCQ1lYTmxVbVZ1WkdWeVJHRjBZU0JwY3lCaElHTnZjbVVnWkdGMFlTQmhZbk4wY21GamRHbHZiaUJtYjNJZ2NtVnVaR1Z5WlhJc0lIUm9hWE1nYVhNZ1lTQmhZbk4wY21GamRDQmpiR0Z6Y3k1Y2NseHVJQ29nUVc0Z2FXNW9aWEpwZEdWa0lISmxibVJsY2lCa1lYUmhJSFI1Y0dVZ2MyaHZkV3hrSUdSbFptbHVaU0J5WVhjZ2RtVnlkR1Y0SUdSaGRHRnpMbHh5WEc0Z0tpQlZjMlZ5SUhOb2IzVnNaQ0JoYkhOdklHUmxabWx1WlNCMGFHVWdaV1ptWldOMExDQjJaWEowWlhnZ1kyOTFiblFnWVc1a0lHbHVaR1Y0SUdOdmRXNTBMbHh5WEc0Z0tpOWNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FtRnpaVkpsYm1SbGNrUmhkR0VnZTF4eVhHNGdJR052Ym5OMGNuVmpkRzl5SUNncElIdGNjbHh1SUNBZ0lDQWdkR2hwY3k1dFlYUmxjbWxoYkNBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUhSb2FYTXVkbVZ5ZEdWNFEyOTFiblFnUFNBd08xeHlYRzRnSUNBZ0lDQjBhR2x6TG1sdVpHbGpaVU52ZFc1MElEMGdNRHRjY2x4dUlDQjlYSEpjYm4waVhYMD0iXX0=