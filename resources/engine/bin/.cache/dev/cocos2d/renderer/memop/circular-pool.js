(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/circular-pool.js';
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var CircularPool = function () {
            function CircularPool(fn, size) {
                _classCallCheck(this, CircularPool);
                this._cursor = 0;
                this._data = new Array(size);
                for (var i = 0; i < size; ++i) {
                    this._data[i] = fn();
                }
            }
            _createClass(CircularPool, [{
                    key: 'request',
                    value: function request() {
                        var item = this._data[this._cursor];
                        this._cursor = (this._cursor + 1) % this._data.length;
                        return item;
                    }
                }]);
            return CircularPool;
        }();
        exports.default = CircularPool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bGFyLXBvb2wuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL21lbW9wL2NpcmN1bGFyLXBvb2wuanMiXSwibmFtZXMiOlsiZm4iLCJzaXplIiwiQ2lyY3VsYXJQb29sIiwiX2N1cnNvciIsIl9kYXRhIiwiQXJyYXkiLCJpIiwiaXRlbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNjQSxJQUFJQyxDQUFBQSxPQUFKRCxFQUFVO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURIRSxZQUFBQTtZQUNuQixTQUFBLFlBQUEsQ0FBWUYsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0I7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFlBQUEsRUFBQTtBQUFBLGdCQUNwQixLQUFLRSxPQUFMLEdBQWUsQ0FBZixDQURvQjtBQUFBLGdCQUVwQixLQUFLQyxLQUFMLEdBQWEsSUFBSUMsS0FBSixDQUFVSixJQUFWLENBQWIsQ0FGb0I7QUFBQSxnQkFJcEIsS0FBSyxJQUFJSyxDQUFBQSxHQUFJLENBQVIsQ0FBTCxDQUFnQkEsQ0FBQUEsR0FBSUwsSUFBcEIsRUFBMEIsRUFBRUssQ0FBNUIsRUFBK0I7QUFBQSxvQkFDN0IsS0FBS0YsS0FBTCxDQUFXRSxDQUFYLElBQWdCTixFQUFBQSxFQUFoQixDQUQ2QjtBQUFBLGlCQUpYO0FBQUE7Ozs4Q0FTWjtBQUFBLHdCQUNSLElBQUlPLElBQUFBLEdBQU8sS0FBS0gsS0FBTCxDQUFXLEtBQUtELE9BQWhCLENBQVgsQ0FEUTtBQUFBLHdCQUVSLEtBQUtBLE9BQUwsR0FBZ0IsTUFBS0EsT0FBTCxHQUFlLENBQWYsQ0FBRCxHQUFxQixLQUFLQyxLQUFMLENBQVdJLE1BQS9DLENBRlE7QUFBQSx3QkFJUixPQUFPRCxJQUFQLENBSlE7QUFBQTs7OzswQkFWU0w7Ozs7UUFFakIsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUE7O1FBR29CRCxpQkFBQUEsQ0FBVyxrQkFBWEEsQ0FBVyxVQUFYQSxFQUFXLFlBQUE7QUFBQSxZQUM3QixRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUQ2QjtBQUFBLFNBQVhBIiwiZmlsZSI6ImNpcmN1bGFyLXBvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjdWxhclBvb2wge1xyXG4gIGNvbnN0cnVjdG9yKGZuLCBzaXplKSB7XHJcbiAgICB0aGlzLl9jdXJzb3IgPSAwO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheShzaXplKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7ICsraSkge1xyXG4gICAgICB0aGlzLl9kYXRhW2ldID0gZm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoKSB7XHJcbiAgICBsZXQgaXRlbSA9IHRoaXMuX2RhdGFbdGhpcy5fY3Vyc29yXTtcclxuICAgIHRoaXMuX2N1cnNvciA9ICh0aGlzLl9jdXJzb3IgKyAxKSAlIHRoaXMuX2RhdGEubGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2lyY3VsYXJQb29sID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDaXJjdWxhclBvb2woZm4sIHNpemUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2lyY3VsYXJQb29sKTtcblxuICAgIHRoaXMuX2N1cnNvciA9IDA7XG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheShzaXplKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGlzLl9kYXRhW2ldID0gZm4oKTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2lyY3VsYXJQb29sLCBbe1xuICAgIGtleTogXCJyZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3QoKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuX2RhdGFbdGhpcy5fY3Vyc29yXTtcbiAgICAgIHRoaXMuX2N1cnNvciA9ICh0aGlzLl9jdXJzb3IgKyAxKSAlIHRoaXMuX2RhdGEubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2lyY3VsYXJQb29sO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDaXJjdWxhclBvb2w7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OcGNtTjFiR0Z5TFhCdmIyd3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVEybHlZM1ZzWVhKUWIyOXNJaXdpWm00aUxDSnphWHBsSWl3aVgyTjFjbk52Y2lJc0lsOWtZWFJoSWl3aVFYSnlZWGtpTENKcElpd2lhWFJsYlNJc0lteGxibWQwYUNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRKUVVGeFFrRXNXVHRCUVVOdVFpeDNRa0ZCV1VNc1JVRkJXaXhGUVVGblFrTXNTVUZCYUVJc1JVRkJjMEk3UVVGQlFUczdRVUZEY0VJc1UwRkJTME1zVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxReXhMUVVGTUxFZEJRV0VzU1VGQlNVTXNTMEZCU2l4RFFVRlZTQ3hKUVVGV0xFTkJRV0k3TzBGQlJVRXNVMEZCU3l4SlFVRkpTU3hKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsS0xFbEJRWEJDTEVWQlFUQkNMRVZCUVVWSkxFTkJRVFZDTEVWQlFTdENPMEZCUXpkQ0xGZEJRVXRHTEV0QlFVd3NRMEZCVjBVc1EwRkJXQ3hKUVVGblFrd3NTVUZCYUVJN1FVRkRSRHRCUVVOR096czdPemhDUVVWVE8wRkJRMUlzVlVGQlNVMHNUMEZCVHl4TFFVRkxTQ3hMUVVGTUxFTkJRVmNzUzBGQlMwUXNUMEZCYUVJc1EwRkJXRHRCUVVOQkxGZEJRVXRCTEU5QlFVd3NSMEZCWlN4RFFVRkRMRXRCUVV0QkxFOUJRVXdzUjBGQlpTeERRVUZvUWl4SlFVRnhRaXhMUVVGTFF5eExRVUZNTEVOQlFWZEpMRTFCUVM5RE96dEJRVVZCTEdGQlFVOUVMRWxCUVZBN1FVRkRSRHM3T3pzN08ydENRV1pyUWxBc1dTSXNJbVpwYkdVaU9pSmphWEpqZFd4aGNpMXdiMjlzTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUTJseVkzVnNZWEpRYjI5c0lIdGNjbHh1SUNCamIyNXpkSEoxWTNSdmNpaG1iaXdnYzJsNlpTa2dlMXh5WEc0Z0lDQWdkR2hwY3k1ZlkzVnljMjl5SUQwZ01EdGNjbHh1SUNBZ0lIUm9hWE11WDJSaGRHRWdQU0J1WlhjZ1FYSnlZWGtvYzJsNlpTazdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCemFYcGxPeUFySzJrcElIdGNjbHh1SUNBZ0lDQWdkR2hwY3k1ZlpHRjBZVnRwWFNBOUlHWnVLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhGMVpYTjBLQ2tnZTF4eVhHNGdJQ0FnYkdWMElHbDBaVzBnUFNCMGFHbHpMbDlrWVhSaFczUm9hWE11WDJOMWNuTnZjbDA3WEhKY2JpQWdJQ0IwYUdsekxsOWpkWEp6YjNJZ1BTQW9kR2hwY3k1ZlkzVnljMjl5SUNzZ01Ta2dKU0IwYUdsekxsOWtZWFJoTG14bGJtZDBhRHRjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnYVhSbGJUdGNjbHh1SUNCOVhISmNibjBpWFgwPSJdfQ==