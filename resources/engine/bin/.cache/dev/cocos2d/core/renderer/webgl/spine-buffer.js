(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/spine-buffer.js';
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
        var SpineBuffer = cc.Class({
            name: 'cc.SpineBuffer',
            extends: require('./mesh-buffer'),
            requestStatic: function requestStatic(vertexCount, indiceCount) {
                this.checkAndSwitchBuffer(vertexCount);
                var byteOffset = this.byteOffset + vertexCount * this._vertexBytes;
                var indiceOffset = this.indiceOffset + indiceCount;
                var byteLength = this._vData.byteLength;
                var indiceLength = this._iData.length;
                if (byteOffset > byteLength || indiceOffset > indiceLength) {
                    while (byteLength < byteOffset || indiceLength < indiceOffset) {
                        this._initVDataCount *= 2;
                        this._initIDataCount *= 2;
                        byteLength = this._initVDataCount * 4;
                        indiceLength = this._initIDataCount;
                    }
                    this._reallocBuffer();
                }
                var offsetInfo = this._offsetInfo;
                offsetInfo.vertexOffset = this.vertexOffset;
                offsetInfo.indiceOffset = this.indiceOffset;
                offsetInfo.byteOffset = this.byteOffset;
            },
            adjust: function adjust(vertexCount, indiceCount) {
                this.vertexOffset += vertexCount;
                this.indiceOffset += indiceCount;
                this.byteOffset = this.byteOffset + vertexCount * this._vertexBytes;
                this._dirty = true;
            }
        });
        cc.SpineBuffer = module.exports = SpineBuffer;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5lLWJ1ZmZlci5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci93ZWJnbC9zcGluZS1idWZmZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJjaGVja0FuZFN3aXRjaEJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJ2ZXJ0ZXhDb3VudCIsIl92ZXJ0ZXhCeXRlcyIsImluZGljZU9mZnNldCIsImluZGljZUNvdW50IiwiU3BpbmVCdWZmZXIiLCJuYW1lIiwiZXh0ZW5kcyIsInJlcXVlc3RTdGF0aWMiLCJieXRlTGVuZ3RoIiwiX3ZEYXRhIiwiaW5kaWNlTGVuZ3RoIiwiX2lEYXRhIiwibGVuZ3RoIiwiX2luaXRWRGF0YUNvdW50IiwiX2luaXRJRGF0YUNvdW50IiwiX3JlYWxsb2NCdWZmZXIiLCJvZmZzZXRJbmZvIiwiX29mZnNldEluZm8iLCJ2ZXJ0ZXhPZmZzZXQiLCJhZGp1c3QiLCJfZGlydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQWtCQSxJQUFHQyxPQUFBQSxHQUFNLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFURDtJQUNSLElBQUEsUUFBQSxHQURpQixPQUFBLEdBQUEsTUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEVBQUEsRUFDakI7SUFDR0UsSUFBUSxVQUFBLEdBRk0sd0RBRWRBOztRQUZjLE9BQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTs7UUFNZEMsT0FBQUEsaUJBQUFBLENBQUwsT0FBS0EsQ0FBTCxPQUFLQSxFQUFMLFVBQUtBLENBQUFBOztJQUVEQyxTQUFhLFFBQWJBLENBQWtCQSxPQUFsQkEsRUFBK0JDLE9BQS9CRCxFQUE2QyxNQUE3Q0EsRUFBa0RFO0FBQUFBLFFBQ2xEQyxJQUFlLENBQUEsT0FBZkEsRUFBb0JBO0FBQUFBLFlBQUFBLGlCQUFBQSxDQUFlQyxjQUFmRCxD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cmNlc0NvbnRlbnQiOlsidmFyIFNwaW5lQnVmZmVyID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZTogJ2NjLlNwaW5lQnVmZmVyJyxcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoJy4vbWVzaC1idWZmZXInKSxcclxuXHJcbiAgICByZXF1ZXN0U3RhdGljICh2ZXJ0ZXhDb3VudCwgaW5kaWNlQ291bnQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNoZWNrQW5kU3dpdGNoQnVmZmVyKHZlcnRleENvdW50KTtcclxuXHJcbiAgICAgICAgbGV0IGJ5dGVPZmZzZXQgPSB0aGlzLmJ5dGVPZmZzZXQgKyB2ZXJ0ZXhDb3VudCAqIHRoaXMuX3ZlcnRleEJ5dGVzO1xyXG4gICAgICAgIGxldCBpbmRpY2VPZmZzZXQgPSB0aGlzLmluZGljZU9mZnNldCArIGluZGljZUNvdW50O1xyXG5cclxuICAgICAgICBsZXQgYnl0ZUxlbmd0aCA9IHRoaXMuX3ZEYXRhLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgbGV0IGluZGljZUxlbmd0aCA9IHRoaXMuX2lEYXRhLmxlbmd0aDtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCA+IGJ5dGVMZW5ndGggfHwgaW5kaWNlT2Zmc2V0ID4gaW5kaWNlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCB8fCBpbmRpY2VMZW5ndGggPCBpbmRpY2VPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRWRGF0YUNvdW50ICo9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0SURhdGFDb3VudCAqPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0aGlzLl9pbml0VkRhdGFDb3VudCAqIDQ7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VMZW5ndGggPSB0aGlzLl9pbml0SURhdGFDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVhbGxvY0J1ZmZlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9mZnNldEluZm8gPSB0aGlzLl9vZmZzZXRJbmZvO1xyXG4gICAgICAgIG9mZnNldEluZm8udmVydGV4T2Zmc2V0ID0gdGhpcy52ZXJ0ZXhPZmZzZXQ7XHJcbiAgICAgICAgb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQgPSB0aGlzLmluZGljZU9mZnNldDtcclxuICAgICAgICBvZmZzZXRJbmZvLmJ5dGVPZmZzZXQgPSB0aGlzLmJ5dGVPZmZzZXQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkanVzdCAodmVydGV4Q291bnQsIGluZGljZUNvdW50KSB7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXhPZmZzZXQgKz0gdmVydGV4Q291bnQ7XHJcbiAgICAgICAgdGhpcy5pbmRpY2VPZmZzZXQgKz0gaW5kaWNlQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ID0gdGhpcy5ieXRlT2Zmc2V0ICsgdmVydGV4Q291bnQgKiB0aGlzLl92ZXJ0ZXhCeXRlcztcclxuXHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNjLlNwaW5lQnVmZmVyID0gbW9kdWxlLmV4cG9ydHMgPSBTcGluZUJ1ZmZlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTcGluZUJ1ZmZlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuU3BpbmVCdWZmZXInLFxuICAgIGV4dGVuZHM6IHJlcXVpcmUoJy4vbWVzaC1idWZmZXInKSxcblxuICAgIHJlcXVlc3RTdGF0aWM6IGZ1bmN0aW9uIHJlcXVlc3RTdGF0aWModmVydGV4Q291bnQsIGluZGljZUNvdW50KSB7XG5cbiAgICAgICAgdGhpcy5jaGVja0FuZFN3aXRjaEJ1ZmZlcih2ZXJ0ZXhDb3VudCk7XG5cbiAgICAgICAgdmFyIGJ5dGVPZmZzZXQgPSB0aGlzLmJ5dGVPZmZzZXQgKyB2ZXJ0ZXhDb3VudCAqIHRoaXMuX3ZlcnRleEJ5dGVzO1xuICAgICAgICB2YXIgaW5kaWNlT2Zmc2V0ID0gdGhpcy5pbmRpY2VPZmZzZXQgKyBpbmRpY2VDb3VudDtcblxuICAgICAgICB2YXIgYnl0ZUxlbmd0aCA9IHRoaXMuX3ZEYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBpbmRpY2VMZW5ndGggPSB0aGlzLl9pRGF0YS5sZW5ndGg7XG4gICAgICAgIGlmIChieXRlT2Zmc2V0ID4gYnl0ZUxlbmd0aCB8fCBpbmRpY2VPZmZzZXQgPiBpbmRpY2VMZW5ndGgpIHtcbiAgICAgICAgICAgIHdoaWxlIChieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCB8fCBpbmRpY2VMZW5ndGggPCBpbmRpY2VPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0VkRhdGFDb3VudCAqPSAyO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRJRGF0YUNvdW50ICo9IDI7XG5cbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoID0gdGhpcy5faW5pdFZEYXRhQ291bnQgKiA0O1xuICAgICAgICAgICAgICAgIGluZGljZUxlbmd0aCA9IHRoaXMuX2luaXRJRGF0YUNvdW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9yZWFsbG9jQnVmZmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0SW5mbyA9IHRoaXMuX29mZnNldEluZm87XG4gICAgICAgIG9mZnNldEluZm8udmVydGV4T2Zmc2V0ID0gdGhpcy52ZXJ0ZXhPZmZzZXQ7XG4gICAgICAgIG9mZnNldEluZm8uaW5kaWNlT2Zmc2V0ID0gdGhpcy5pbmRpY2VPZmZzZXQ7XG4gICAgICAgIG9mZnNldEluZm8uYnl0ZU9mZnNldCA9IHRoaXMuYnl0ZU9mZnNldDtcbiAgICB9LFxuICAgIGFkanVzdDogZnVuY3Rpb24gYWRqdXN0KHZlcnRleENvdW50LCBpbmRpY2VDb3VudCkge1xuICAgICAgICB0aGlzLnZlcnRleE9mZnNldCArPSB2ZXJ0ZXhDb3VudDtcbiAgICAgICAgdGhpcy5pbmRpY2VPZmZzZXQgKz0gaW5kaWNlQ291bnQ7XG5cbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ID0gdGhpcy5ieXRlT2Zmc2V0ICsgdmVydGV4Q291bnQgKiB0aGlzLl92ZXJ0ZXhCeXRlcztcblxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxufSk7XG5cbmNjLlNwaW5lQnVmZmVyID0gbW9kdWxlLmV4cG9ydHMgPSBTcGluZUJ1ZmZlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTndhVzVsTFdKMVptWmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlRjR2x1WlVKMVptWmxjaUlzSW1Oaklpd2lRMnhoYzNNaUxDSnVZVzFsSWl3aVpYaDBaVzVrY3lJc0luSmxjWFZwY21VaUxDSnlaWEYxWlhOMFUzUmhkR2xqSWl3aWRtVnlkR1Y0UTI5MWJuUWlMQ0pwYm1ScFkyVkRiM1Z1ZENJc0ltTm9aV05yUVc1a1UzZHBkR05vUW5WbVptVnlJaXdpWW5sMFpVOW1abk5sZENJc0lsOTJaWEowWlhoQ2VYUmxjeUlzSW1sdVpHbGpaVTltWm5ObGRDSXNJbUo1ZEdWTVpXNW5kR2dpTENKZmRrUmhkR0VpTENKcGJtUnBZMlZNWlc1bmRHZ2lMQ0pmYVVSaGRHRWlMQ0pzWlc1bmRHZ2lMQ0pmYVc1cGRGWkVZWFJoUTI5MWJuUWlMQ0pmYVc1cGRFbEVZWFJoUTI5MWJuUWlMQ0pmY21WaGJHeHZZMEoxWm1abGNpSXNJbTltWm5ObGRFbHVabThpTENKZmIyWm1jMlYwU1c1bWJ5SXNJblpsY25SbGVFOW1abk5sZENJc0ltRmthblZ6ZENJc0lsOWthWEowZVNJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNTVUZCU1VFc1kwRkJZME1zUjBGQlIwTXNTMEZCU0N4RFFVRlRPMEZCUTNaQ1F5eFZRVUZOTEdkQ1FVUnBRanRCUVVWMlFrTXNZVUZCVTBNc1VVRkJVU3hsUVVGU0xFTkJSbU03TzBGQlNYWkNReXhwUWtGS2RVSXNlVUpCU1ZKRExGZEJTbEVzUlVGSlMwTXNWMEZLVEN4RlFVbHJRanM3UVVGRmNrTXNZVUZCUzBNc2IwSkJRVXdzUTBGQk1FSkdMRmRCUVRGQ096dEJRVVZCTEZsQlFVbEhMR0ZCUVdFc1MwRkJTMEVzVlVGQlRDeEhRVUZyUWtnc1kwRkJZeXhMUVVGTFNTeFpRVUYwUkR0QlFVTkJMRmxCUVVsRExHVkJRV1VzUzBGQlMwRXNXVUZCVEN4SFFVRnZRa29zVjBGQmRrTTdPMEZCUlVFc1dVRkJTVXNzWVVGQllTeExRVUZMUXl4TlFVRk1MRU5CUVZsRUxGVkJRVGRDTzBGQlEwRXNXVUZCU1VVc1pVRkJaU3hMUVVGTFF5eE5RVUZNTEVOQlFWbERMRTFCUVM5Q08wRkJRMEVzV1VGQlNWQXNZVUZCWVVjc1ZVRkJZaXhKUVVFeVFrUXNaVUZCWlVjc1dVRkJPVU1zUlVGQk5FUTdRVUZEZUVRc2JVSkJRVTlHTEdGQlFXRklMRlZCUVdJc1NVRkJNa0pMTEdWQlFXVklMRmxCUVdwRUxFVkJRU3RFTzBGQlF6TkVMSEZDUVVGTFRTeGxRVUZNTEVsQlFYZENMRU5CUVhoQ08wRkJRMEVzY1VKQlFVdERMR1ZCUVV3c1NVRkJkMElzUTBGQmVFSTdPMEZCUlVGT0xEWkNRVUZoTEV0QlFVdExMR1ZCUVV3c1IwRkJkVUlzUTBGQmNFTTdRVUZEUVVnc0swSkJRV1VzUzBGQlMwa3NaVUZCY0VJN1FVRkRTRHM3UVVGRlJDeHBRa0ZCUzBNc1kwRkJURHRCUVVOSU96dEJRVVZFTEZsQlFVbERMR0ZCUVdFc1MwRkJTME1zVjBGQmRFSTdRVUZEUVVRc2JVSkJRVmRGTEZsQlFWZ3NSMEZCTUVJc1MwRkJTMEVzV1VGQkwwSTdRVUZEUVVZc2JVSkJRVmRVTEZsQlFWZ3NSMEZCTUVJc1MwRkJTMEVzV1VGQkwwSTdRVUZEUVZNc2JVSkJRVmRZTEZWQlFWZ3NSMEZCZDBJc1MwRkJTMEVzVlVGQk4wSTdRVUZEU0N4TFFUZENjMEk3UVVFclFuWkNZeXhWUVM5Q2RVSXNhMEpCSzBKbWFrSXNWMEV2UW1Vc1JVRXJRa1pETEZkQkwwSkZMRVZCSzBKWE8wRkJRemxDTEdGQlFVdGxMRmxCUVV3c1NVRkJjVUpvUWl4WFFVRnlRanRCUVVOQkxHRkJRVXRMTEZsQlFVd3NTVUZCY1VKS0xGZEJRWEpDT3p0QlFVVkJMR0ZCUVV0RkxGVkJRVXdzUjBGQmEwSXNTMEZCUzBFc1ZVRkJUQ3hIUVVGclFrZ3NZMEZCWXl4TFFVRkxTU3haUVVGMlJEczdRVUZGUVN4aFFVRkxZeXhOUVVGTUxFZEJRV01zU1VGQlpEdEJRVU5JTzBGQmRFTnpRaXhEUVVGVUxFTkJRV3hDT3p0QlFYbERRWGhDTEVkQlFVZEVMRmRCUVVnc1IwRkJhVUl3UWl4UFFVRlBReXhQUVVGUUxFZEJRV2xDTTBJc1YwRkJiRU1pTENKbWFXeGxJam9pYzNCcGJtVXRZblZtWm1WeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlGTndhVzVsUW5WbVptVnlJRDBnWTJNdVEyeGhjM01vZTF4eVhHNGdJQ0FnYm1GdFpUb2dKMk5qTGxOd2FXNWxRblZtWm1WeUp5eGNjbHh1SUNBZ0lHVjRkR1Z1WkhNNklISmxjWFZwY21Vb0p5NHZiV1Z6YUMxaWRXWm1aWEluS1N4Y2NseHVYSEpjYmlBZ0lDQnlaWEYxWlhOMFUzUmhkR2xqSUNoMlpYSjBaWGhEYjNWdWRDd2dhVzVrYVdObFEyOTFiblFwSUh0Y2NseHVJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTm9aV05yUVc1a1UzZHBkR05vUW5WbVptVnlLSFpsY25SbGVFTnZkVzUwS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHSjVkR1ZQWm1aelpYUWdQU0IwYUdsekxtSjVkR1ZQWm1aelpYUWdLeUIyWlhKMFpYaERiM1Z1ZENBcUlIUm9hWE11WDNabGNuUmxlRUo1ZEdWek8xeHlYRzRnSUNBZ0lDQWdJR3hsZENCcGJtUnBZMlZQWm1aelpYUWdQU0IwYUdsekxtbHVaR2xqWlU5bVpuTmxkQ0FySUdsdVpHbGpaVU52ZFc1ME8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCc1pYUWdZbmwwWlV4bGJtZDBhQ0E5SUhSb2FYTXVYM1pFWVhSaExtSjVkR1ZNWlc1bmRHZzdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHbHVaR2xqWlV4bGJtZDBhQ0E5SUhSb2FYTXVYMmxFWVhSaExteGxibWQwYUR0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWW5sMFpVOW1abk5sZENBK0lHSjVkR1ZNWlc1bmRHZ2dmSHdnYVc1a2FXTmxUMlptYzJWMElENGdhVzVrYVdObFRHVnVaM1JvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhkb2FXeGxJQ2hpZVhSbFRHVnVaM1JvSUR3Z1lubDBaVTltWm5ObGRDQjhmQ0JwYm1ScFkyVk1aVzVuZEdnZ1BDQnBibVJwWTJWUFptWnpaWFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJsdWFYUldSR0YwWVVOdmRXNTBJQ285SURJN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5cGJtbDBTVVJoZEdGRGIzVnVkQ0FxUFNBeU8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKNWRHVk1aVzVuZEdnZ1BTQjBhR2x6TGw5cGJtbDBWa1JoZEdGRGIzVnVkQ0FxSURRN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibVJwWTJWTVpXNW5kR2dnUFNCMGFHbHpMbDlwYm1sMFNVUmhkR0ZEYjNWdWREdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmNtVmhiR3h2WTBKMVptWmxjaWdwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJRzltWm5ObGRFbHVabThnUFNCMGFHbHpMbDl2Wm1aelpYUkpibVp2TzF4eVhHNGdJQ0FnSUNBZ0lHOW1abk5sZEVsdVptOHVkbVZ5ZEdWNFQyWm1jMlYwSUQwZ2RHaHBjeTUyWlhKMFpYaFBabVp6WlhRN1hISmNiaUFnSUNBZ0lDQWdiMlptYzJWMFNXNW1ieTVwYm1ScFkyVlBabVp6WlhRZ1BTQjBhR2x6TG1sdVpHbGpaVTltWm5ObGREdGNjbHh1SUNBZ0lDQWdJQ0J2Wm1aelpYUkpibVp2TG1KNWRHVlBabVp6WlhRZ1BTQjBhR2x6TG1KNWRHVlBabVp6WlhRN1hISmNiaUFnSUNCOUxGeHlYRzVjY2x4dUlDQWdJR0ZrYW5WemRDQW9kbVZ5ZEdWNFEyOTFiblFzSUdsdVpHbGpaVU52ZFc1MEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTJaWEowWlhoUFptWnpaWFFnS3owZ2RtVnlkR1Y0UTI5MWJuUTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibVJwWTJWUFptWnpaWFFnS3owZ2FXNWthV05sUTI5MWJuUTdYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZVhSbFQyWm1jMlYwSUQwZ2RHaHBjeTVpZVhSbFQyWm1jMlYwSUNzZ2RtVnlkR1Y0UTI5MWJuUWdLaUIwYUdsekxsOTJaWEowWlhoQ2VYUmxjenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlpHbHlkSGtnUFNCMGNuVmxPMXh5WEc0Z0lDQWdmVnh5WEc1OUtUdGNjbHh1WEhKY2JtTmpMbE53YVc1bFFuVm1abVZ5SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCVGNHbHVaVUoxWm1abGNqc2lYWDA9Il19