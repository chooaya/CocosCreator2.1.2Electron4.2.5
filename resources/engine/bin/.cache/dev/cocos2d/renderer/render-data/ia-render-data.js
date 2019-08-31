(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/render-data/ia-render-data.js';
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
        exports.default = undefined;
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _baseRenderData = require('./base-render-data');
        var _baseRenderData2 = _interopRequireDefault(_baseRenderData);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var IARenderData = function (_BaseRenderData) {
            _inherits(IARenderData, _BaseRenderData);
            function IARenderData() {
                _classCallCheck(this, IARenderData);
                var _this = _possibleConstructorReturn(this, (IARenderData.__proto__ || Object.getPrototypeOf(IARenderData)).call(this));
                _this.ia = null;
                return _this;
            }
            _createClass(IARenderData, [{
                    key: 'type',
                    get: function get() {
                        return IARenderData.type;
                    }
                }]);
            return IARenderData;
        }(_baseRenderData2.default);
        exports.default = IARenderData;
        IARenderData.type = 'IARenderData';
        cc.IARenderData = IARenderData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlhLXJlbmRlci1kYXRhLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9yZW5kZXItZGF0YS9pYS1yZW5kZXItZGF0YS5qcyJdLCJuYW1lcyI6WyJJQVJlbmRlckRhdGEiLCJpYSIsInR5cGUiLCJjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFQSxJQUFBLGVBQUEsR0FBQSxPQUFBLENBQUEsb0JBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9xQkEsWUFBQUE7O1lBQ2pCLFNBQUEsWUFBQSxHQUFlO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLEVBQUE7QUFBQSxnQkFBQSxJQUFBLEtBQUEsR0FBQSwwQkFBQSxDQUFBLElBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsZ0JBRVgsS0FBQSxDQUFLQyxFQUFMLEdBQVUsSUFBVixDQUZXO0FBQUEsZ0JBQUEsT0FBQSxLQUFBLENBQUE7QUFBQTs7O3dDQUtIO0FBQUEsd0JBQ1IsT0FBT0QsWUFBQUEsQ0FBYUUsSUFBcEIsQ0FEUTtBQUFBOzs7OzBCQU5LRjtRQVdyQkEsWUFBQUEsQ0FBYUUsSUFBYkYsR0FBb0IsY0FBcEJBO1FBQ0FHLEVBQUFBLENBQUdILFlBQUhHLEdBQWtCSCxZQUFsQkciLCJmaWxlIjoiaWEtcmVuZGVyLWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuICBcclxuIFxyXG5pbXBvcnQgQmFzZVJlbmRlckRhdGEgZnJvbSAnLi9iYXNlLXJlbmRlci1kYXRhJztcclxuXHJcbi8qKlxyXG4gKiBJQVJlbmRlckRhdGEgaXMgdXNlciBjdXN0b21pemVkIHJlbmRlciBkYXRhIHR5cGUsIHVzZXIgc2hvdWxkIHByb3ZpZGUgdGhlIGVudGllciBpbnB1dCBhc3NlbWJsZXIuXHJcbiAqIElBUmVuZGVyRGF0YSBqdXN0IGRlZmluZXMgYSBwcm9wZXJ0eSBgaWFgIGZvciBhY2Nlc3NpbmcgdGhlIGlucHV0IGFzc2VtYmxlci5cclxuICogSXQgZG9lc24ndCBtYW5hZ2UgbWVtb3J5IHNvIHVzZXJzIHNob3VsZCBtYW5hZ2UgdGhlIG1lbW9yeSBvZiBpbnB1dCBhc3NlbWJsZXIgYnkgdGhlbXNlbHZlcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElBUmVuZGVyRGF0YSBleHRlbmRzIEJhc2VSZW5kZXJEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaWEgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0eXBlICgpIHtcclxuICAgICAgICByZXR1cm4gSUFSZW5kZXJEYXRhLnR5cGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbklBUmVuZGVyRGF0YS50eXBlID0gJ0lBUmVuZGVyRGF0YSc7XHJcbmNjLklBUmVuZGVyRGF0YSA9IElBUmVuZGVyRGF0YTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9iYXNlUmVuZGVyRGF0YSA9IHJlcXVpcmUoJy4vYmFzZS1yZW5kZXItZGF0YScpO1xuXG52YXIgX2Jhc2VSZW5kZXJEYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jhc2VSZW5kZXJEYXRhKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuICBcblxuLyoqXHJcbiAqIElBUmVuZGVyRGF0YSBpcyB1c2VyIGN1c3RvbWl6ZWQgcmVuZGVyIGRhdGEgdHlwZSwgdXNlciBzaG91bGQgcHJvdmlkZSB0aGUgZW50aWVyIGlucHV0IGFzc2VtYmxlci5cclxuICogSUFSZW5kZXJEYXRhIGp1c3QgZGVmaW5lcyBhIHByb3BlcnR5IGBpYWAgZm9yIGFjY2Vzc2luZyB0aGUgaW5wdXQgYXNzZW1ibGVyLlxyXG4gKiBJdCBkb2Vzbid0IG1hbmFnZSBtZW1vcnkgc28gdXNlcnMgc2hvdWxkIG1hbmFnZSB0aGUgbWVtb3J5IG9mIGlucHV0IGFzc2VtYmxlciBieSB0aGVtc2VsdmVzLlxyXG4gKi9cbnZhciBJQVJlbmRlckRhdGEgPSBmdW5jdGlvbiAoX0Jhc2VSZW5kZXJEYXRhKSB7XG4gICAgX2luaGVyaXRzKElBUmVuZGVyRGF0YSwgX0Jhc2VSZW5kZXJEYXRhKTtcblxuICAgIGZ1bmN0aW9uIElBUmVuZGVyRGF0YSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElBUmVuZGVyRGF0YSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElBUmVuZGVyRGF0YS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElBUmVuZGVyRGF0YSkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmlhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJQVJlbmRlckRhdGEsIFt7XG4gICAgICAgIGtleTogJ3R5cGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBJQVJlbmRlckRhdGEudHlwZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJQVJlbmRlckRhdGE7XG59KF9iYXNlUmVuZGVyRGF0YTIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElBUmVuZGVyRGF0YTtcblxuXG5JQVJlbmRlckRhdGEudHlwZSA9ICdJQVJlbmRlckRhdGEnO1xuY2MuSUFSZW5kZXJEYXRhID0gSUFSZW5kZXJEYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWxoTFhKbGJtUmxjaTFrWVhSaExtcHpJbDBzSW01aGJXVnpJanBiSWtsQlVtVnVaR1Z5UkdGMFlTSXNJbWxoSWl3aWRIbHdaU0lzSW1OaklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3UVVGRlFUczdPenM3T3pzN096c3JaVUZHUVRzN1FVRkpRVHM3T3pzN1NVRkxjVUpCTEZrN096dEJRVU5xUWl3MFFrRkJaVHRCUVVGQk96dEJRVUZCT3p0QlFVVllMR05CUVV0RExFVkJRVXdzUjBGQlZTeEpRVUZXTzBGQlJsYzdRVUZIWkRzN096czBRa0ZGVnp0QlFVTlNMRzFDUVVGUFJDeGhRVUZoUlN4SlFVRndRanRCUVVOSU96czdPenM3YTBKQlVtZENSaXhaT3pzN1FVRlhja0pCTEdGQlFXRkZMRWxCUVdJc1IwRkJiMElzWTBGQmNFSTdRVUZEUVVNc1IwRkJSMGdzV1VGQlNDeEhRVUZyUWtFc1dVRkJiRUlpTENKbWFXeGxJam9pYVdFdGNtVnVaR1Z5TFdSaGRHRXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkRiM0I1Y21sbmFIUWdLR01wSURJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUNCY2NseHVJRnh5WEc1cGJYQnZjblFnUW1GelpWSmxibVJsY2tSaGRHRWdabkp2YlNBbkxpOWlZWE5sTFhKbGJtUmxjaTFrWVhSaEp6dGNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQkpRVkpsYm1SbGNrUmhkR0VnYVhNZ2RYTmxjaUJqZFhOMGIyMXBlbVZrSUhKbGJtUmxjaUJrWVhSaElIUjVjR1VzSUhWelpYSWdjMmh2ZFd4a0lIQnliM1pwWkdVZ2RHaGxJR1Z1ZEdsbGNpQnBibkIxZENCaGMzTmxiV0pzWlhJdVhISmNiaUFxSUVsQlVtVnVaR1Z5UkdGMFlTQnFkWE4wSUdSbFptbHVaWE1nWVNCd2NtOXdaWEowZVNCZ2FXRmdJR1p2Y2lCaFkyTmxjM05wYm1jZ2RHaGxJR2x1Y0hWMElHRnpjMlZ0WW14bGNpNWNjbHh1SUNvZ1NYUWdaRzlsYzI0bmRDQnRZVzVoWjJVZ2JXVnRiM0o1SUhOdklIVnpaWEp6SUhOb2IzVnNaQ0J0WVc1aFoyVWdkR2hsSUcxbGJXOXllU0J2WmlCcGJuQjFkQ0JoYzNObGJXSnNaWElnWW5rZ2RHaGxiWE5sYkhabGN5NWNjbHh1SUNvdlhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVsQlVtVnVaR1Z5UkdGMFlTQmxlSFJsYm1SeklFSmhjMlZTWlc1a1pYSkVZWFJoSUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVdFZ1BTQnVkV3hzTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHZGxkQ0IwZVhCbElDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnU1VGU1pXNWtaWEpFWVhSaExuUjVjR1U3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JrbEJVbVZ1WkdWeVJHRjBZUzUwZVhCbElEMGdKMGxCVW1WdVpHVnlSR0YwWVNjN1hISmNibU5qTGtsQlVtVnVaR1Z5UkdGMFlTQTlJRWxCVW1WdVpHVnlSR0YwWVRzaVhYMD0iXX0=