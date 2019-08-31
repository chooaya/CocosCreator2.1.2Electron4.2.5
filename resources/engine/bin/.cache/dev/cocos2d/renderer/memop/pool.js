(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/pool.js';
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
        var Pool = function () {
            function Pool(fn, size) {
                _classCallCheck(this, Pool);
                this._fn = fn;
                this._idx = size - 1;
                this._frees = new Array(size);
                for (var i = 0; i < size; ++i) {
                    this._frees[i] = fn();
                }
            }
            _createClass(Pool, [
                {
                    key: '_expand',
                    value: function _expand(size) {
                        var old = this._frees;
                        this._frees = new Array(size);
                        var len = size - old.length;
                        for (var i = 0; i < len; ++i) {
                            this._frees[i] = this._fn();
                        }
                        for (var _i = len, j = 0; _i < size; ++_i, ++j) {
                            this._frees[_i] = old[j];
                        }
                        this._idx += len;
                    }
                },
                {
                    key: 'alloc',
                    value: function alloc() {
                        if (this._idx < 0) {
                            this._expand(Math.round(this._frees.length * 1.2) + 1);
                        }
                        var ret = this._frees[this._idx];
                        this._frees[this._idx] = null;
                        --this._idx;
                        return ret;
                    }
                },
                {
                    key: 'free',
                    value: function free(obj) {
                        ++this._idx;
                        this._frees[this._idx] = obj;
                    }
                }
            ]);
            return Pool;
        }();
        exports.default = Pool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvb2wuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL21lbW9wL3Bvb2wuanMiXSwibmFtZXMiOlsiUG9vbCIsImZuIiwic2l6ZSIsIl9mbiIsIl9pZHgiLCJfZnJlZXMiLCJBcnJheSIsImkiLCJvbGQiLCJsZW4iLCJsZW5ndGgiLCJqIiwiX2V4cGFuZCIsIk1hdGgiLCJyb3VuZCIsInJldCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNFLElBQXNCLENBQUEsT0FBdEIsRUFBc0I7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBREhBLElBQUFBO1lBQ25CLFNBQUEsSUFBQSxDQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQjtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO0FBQUEsZ0JBQ3BCLEtBQUtDLEdBQUwsR0FBV0YsRUFBWCxDQURvQjtBQUFBLGdCQUVwQixLQUFLRyxJQUFMLEdBQVlGLElBQUFBLEdBQU8sQ0FBbkIsQ0FGb0I7QUFBQSxnQkFHcEIsS0FBS0csTUFBTCxHQUFjLElBQUlDLEtBQUosQ0FBVUosSUFBVixDQUFkLENBSG9CO0FBQUEsZ0JBS3BCLEtBQUssSUFBSUssQ0FBQUEsR0FBSSxDQUFSLENBQUwsQ0FBZ0JBLENBQUFBLEdBQUlMLElBQXBCLEVBQTBCLEVBQUVLLENBQTVCLEVBQStCO0FBQUEsb0JBQzdCLEtBQUtGLE1BQUwsQ0FBWUUsQ0FBWixJQUFpQk4sRUFBQUEsRUFBakIsQ0FENkI7QUFBQSxpQkFMWDtBQUFBOzs7OzRDQVVkQyxNQUFNO0FBQUEsd0JBQ1osSUFBSU0sR0FBQUEsR0FBTSxLQUFLSCxNQUFmLENBRFk7QUFBQSx3QkFFWixLQUFLQSxNQUFMLEdBQWMsSUFBSUMsS0FBSixDQUFVSixJQUFWLENBQWQsQ0FGWTtBQUFBLHdCQUlaLElBQUlPLEdBQUFBLEdBQU1QLElBQUFBLEdBQU9NLEdBQUFBLENBQUlFLE1BQXJCLENBSlk7QUFBQSx3QkFLWixLQUFLLElBQUlILENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJRSxHQUFwQixFQUF5QixFQUFFRixDQUEzQixFQUE4QjtBQUFBLDRCQUM1QixLQUFLRixNQUFMLENBQVlFLENBQVosSUFBaUIsS0FBS0osR0FBTCxFQUFqQixDQUQ0QjtBQUFBLHlCQUxsQjtBQUFBLHdCQVNaLEtBQUssSUFBSUksRUFBQUEsR0FBSUUsR0FBUixFQUFhRSxDQUFBQSxHQUFJLENBQWpCLENBQUwsQ0FBeUJKLEVBQUFBLEdBQUlMLElBQTdCLEVBQW1DLEVBQUVLLEVBQUYsRUFBSyxFQUFFSSxDQUExQyxFQUE2QztBQUFBLDRCQUMzQyxLQUFLTixNQUFMLENBQVlFLEVBQVosSUFBaUJDLEdBQUFBLENBQUlHLENBQUpILENBQWpCLENBRDJDO0FBQUEseUJBVGpDO0FBQUEsd0JBYVosS0FBS0osSUFBTCxJQUFhSyxHQUFiLENBYlk7QUFBQTs7Ozs0Q0FnQk47QUFBQSx3QkFFTixJQUFJLEtBQUtMLElBQUwsR0FBWSxDQUFoQixFQUFtQjtBQUFBLDRCQUNqQixLQUFLUSxPQUFMLENBQWFDLElBQUFBLENBQUtDLEtBQUxELENBQVcsS0FBS1IsTUFBTCxDQUFZSyxNQUFaLEdBQXFCLEdBQWhDRyxJQUF1QyxDQUFwRCxFQURpQjtBQUFBLHlCQUZiO0FBQUEsd0JBTU4sSUFBSUUsR0FBQUEsR0FBTSxLQUFLVixNQUFMLENBQVksS0FBS0QsSUFBakIsQ0FBVixDQU5NO0FBQUEsd0JBT04sS0FBS0MsTUFBTCxDQUFZLEtBQUtELElBQWpCLElBQXlCLElBQXpCLENBUE07QUFBQSx3QkFRTixFQUFFLEtBQUtBLElBQVAsQ0FSTTtBQUFBLHdCQVVOLE9BQU9XLEdBQVAsQ0FWTTtBQUFBOzs7O3lDQWFIQyxLQUFLO0FBQUEsd0JBQ1IsRUFBRSxLQUFLWixJQUFQLENBRFE7QUFBQSx3QkFFUixLQUFLQyxNQUFMLENBQVksS0FBS0QsSUFBakIsSUFBeUJZLEdBQXpCLENBRlE7QUFBQTs7Ozs7MEJBeENTaEI7Ozs7UUFFakIsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUE7V0FFa0JNO0FBQUFBO1lBRWxCLFFBQUEsQ0FBK0IsUUFBQSxDQUFBLE9BQS9CLEVBQStCLFNBQS9CLEVBQStCLFFBQS9CO1dBRmtCQTtBQUFBQSIsImZpbGUiOiJwb29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbCB7XHJcbiAgY29uc3RydWN0b3IoZm4sIHNpemUpIHtcclxuICAgIHRoaXMuX2ZuID0gZm47XHJcbiAgICB0aGlzLl9pZHggPSBzaXplIC0gMTtcclxuICAgIHRoaXMuX2ZyZWVzID0gbmV3IEFycmF5KHNpemUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XHJcbiAgICAgIHRoaXMuX2ZyZWVzW2ldID0gZm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9leHBhbmQoc2l6ZSkge1xyXG4gICAgbGV0IG9sZCA9IHRoaXMuX2ZyZWVzO1xyXG4gICAgdGhpcy5fZnJlZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcblxyXG4gICAgbGV0IGxlbiA9IHNpemUgLSBvbGQubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICB0aGlzLl9mcmVlc1tpXSA9IHRoaXMuX2ZuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGxlbiwgaiA9IDA7IGkgPCBzaXplOyArK2ksICsraikge1xyXG4gICAgICB0aGlzLl9mcmVlc1tpXSA9IG9sZFtqXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pZHggKz0gbGVuO1xyXG4gIH1cclxuXHJcbiAgYWxsb2MoKSB7XHJcbiAgICAvLyBjcmVhdGUgc29tZSBtb3JlIHNwYWNlIChleHBhbmQgYnkgMjAlLCBtaW5pbXVtIDEpXHJcbiAgICBpZiAodGhpcy5faWR4IDwgMCkge1xyXG4gICAgICB0aGlzLl9leHBhbmQoTWF0aC5yb3VuZCh0aGlzLl9mcmVlcy5sZW5ndGggKiAxLjIpICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJldCA9IHRoaXMuX2ZyZWVzW3RoaXMuX2lkeF07XHJcbiAgICB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdID0gbnVsbDtcclxuICAgIC0tdGhpcy5faWR4O1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBmcmVlKG9iaikge1xyXG4gICAgKyt0aGlzLl9pZHg7XHJcbiAgICB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdID0gb2JqO1xyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUG9vbChmbiwgc2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb29sKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5faWR4ID0gc2l6ZSAtIDE7XG4gICAgdGhpcy5fZnJlZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZnJlZXNbaV0gPSBmbigpO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb29sLCBbe1xuICAgIGtleTogXCJfZXhwYW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9leHBhbmQoc2l6ZSkge1xuICAgICAgdmFyIG9sZCA9IHRoaXMuX2ZyZWVzO1xuICAgICAgdGhpcy5fZnJlZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICAgIHZhciBsZW4gPSBzaXplIC0gb2xkLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdGhpcy5fZnJlZXNbaV0gPSB0aGlzLl9mbigpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IGxlbiwgaiA9IDA7IF9pIDwgc2l6ZTsgKytfaSwgKytqKSB7XG4gICAgICAgIHRoaXMuX2ZyZWVzW19pXSA9IG9sZFtqXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faWR4ICs9IGxlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb2NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsb2MoKSB7XG4gICAgICAvLyBjcmVhdGUgc29tZSBtb3JlIHNwYWNlIChleHBhbmQgYnkgMjAlLCBtaW5pbXVtIDEpXG4gICAgICBpZiAodGhpcy5faWR4IDwgMCkge1xuICAgICAgICB0aGlzLl9leHBhbmQoTWF0aC5yb3VuZCh0aGlzLl9mcmVlcy5sZW5ndGggKiAxLjIpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXQgPSB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdO1xuICAgICAgdGhpcy5fZnJlZXNbdGhpcy5faWR4XSA9IG51bGw7XG4gICAgICAtLXRoaXMuX2lkeDtcblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZnJlZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmVlKG9iaikge1xuICAgICAgKyt0aGlzLl9pZHg7XG4gICAgICB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdID0gb2JqO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb29sO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQnZiMnd1YW5NaVhTd2libUZ0WlhNaU9sc2lVRzl2YkNJc0ltWnVJaXdpYzJsNlpTSXNJbDltYmlJc0lsOXBaSGdpTENKZlpuSmxaWE1pTENKQmNuSmhlU0lzSW1raUxDSnZiR1FpTENKc1pXNGlMQ0pzWlc1bmRHZ2lMQ0pxSWl3aVgyVjRjR0Z1WkNJc0lrMWhkR2dpTENKeWIzVnVaQ0lzSW5KbGRDSXNJbTlpYWlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRKUVVGeFFrRXNTVHRCUVVOdVFpeG5Ra0ZCV1VNc1JVRkJXaXhGUVVGblFrTXNTVUZCYUVJc1JVRkJjMEk3UVVGQlFUczdRVUZEY0VJc1UwRkJTME1zUjBGQlRDeEhRVUZYUml4RlFVRllPMEZCUTBFc1UwRkJTMGNzU1VGQlRDeEhRVUZaUml4UFFVRlBMRU5CUVc1Q08wRkJRMEVzVTBGQlMwY3NUVUZCVEN4SFFVRmpMRWxCUVVsRExFdEJRVW9zUTBGQlZVb3NTVUZCVml4RFFVRmtPenRCUVVWQkxGTkJRVXNzU1VGQlNVc3NTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKVEN4SlFVRndRaXhGUVVFd1FpeEZRVUZGU3l4RFFVRTFRaXhGUVVFclFqdEJRVU0zUWl4WFFVRkxSaXhOUVVGTUxFTkJRVmxGTEVOQlFWb3NTVUZCYVVKT0xFbEJRV3BDTzBGQlEwUTdRVUZEUmpzN096czBRa0ZGVDBNc1NTeEZRVUZOTzBGQlExb3NWVUZCU1Uwc1RVRkJUU3hMUVVGTFNDeE5RVUZtTzBGQlEwRXNWMEZCUzBFc1RVRkJUQ3hIUVVGakxFbEJRVWxETEV0QlFVb3NRMEZCVlVvc1NVRkJWaXhEUVVGa096dEJRVVZCTEZWQlFVbFBMRTFCUVUxUUxFOUJRVTlOTEVsQlFVbEZMRTFCUVhKQ08wRkJRMEVzVjBGQlN5eEpRVUZKU0N4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbEZMRWRCUVhCQ0xFVkJRWGxDTEVWQlFVVkdMRU5CUVROQ0xFVkJRVGhDTzBGQlF6VkNMR0ZCUVV0R0xFMUJRVXdzUTBGQldVVXNRMEZCV2l4SlFVRnBRaXhMUVVGTFNpeEhRVUZNTEVWQlFXcENPMEZCUTBRN08wRkJSVVFzVjBGQlN5eEpRVUZKU1N4TFFVRkpSU3hIUVVGU0xFVkJRV0ZGTEVsQlFVa3NRMEZCZEVJc1JVRkJlVUpLTEV0QlFVbE1MRWxCUVRkQ0xFVkJRVzFETEVWQlFVVkxMRVZCUVVZc1JVRkJTeXhGUVVGRlNTeERRVUV4UXl4RlFVRTJRenRCUVVNelF5eGhRVUZMVGl4TlFVRk1MRU5CUVZsRkxFVkJRVm9zU1VGQmFVSkRMRWxCUVVsSExFTkJRVW9zUTBGQmFrSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTFVDeEpRVUZNTEVsQlFXRkxMRWRCUVdJN1FVRkRSRHM3T3pSQ1FVVlBPMEZCUTA0N1FVRkRRU3hWUVVGSkxFdEJRVXRNTEVsQlFVd3NSMEZCV1N4RFFVRm9RaXhGUVVGdFFqdEJRVU5xUWl4aFFVRkxVU3hQUVVGTUxFTkJRV0ZETEV0QlFVdERMRXRCUVV3c1EwRkJWeXhMUVVGTFZDeE5RVUZNTEVOQlFWbExMRTFCUVZvc1IwRkJjVUlzUjBGQmFFTXNTVUZCZFVNc1EwRkJjRVE3UVVGRFJEczdRVUZGUkN4VlFVRkpTeXhOUVVGTkxFdEJRVXRXTEUxQlFVd3NRMEZCV1N4TFFVRkxSQ3hKUVVGcVFpeERRVUZXTzBGQlEwRXNWMEZCUzBNc1RVRkJUQ3hEUVVGWkxFdEJRVXRFTEVsQlFXcENMRWxCUVhsQ0xFbEJRWHBDTzBGQlEwRXNVVUZCUlN4TFFVRkxRU3hKUVVGUU96dEJRVVZCTEdGQlFVOVhMRWRCUVZBN1FVRkRSRHM3TzNsQ1FVVkpReXhITEVWQlFVczdRVUZEVWl4UlFVRkZMRXRCUVV0YUxFbEJRVkE3UVVGRFFTeFhRVUZMUXl4TlFVRk1MRU5CUVZrc1MwRkJTMFFzU1VGQmFrSXNTVUZCZVVKWkxFZEJRWHBDTzBGQlEwUTdPenM3T3p0clFrRXpRMnRDYUVJc1NTSXNJbVpwYkdVaU9pSndiMjlzTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUc5dmJDQjdYSEpjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9abTRzSUhOcGVtVXBJSHRjY2x4dUlDQWdJSFJvYVhNdVgyWnVJRDBnWm00N1hISmNiaUFnSUNCMGFHbHpMbDlwWkhnZ1BTQnphWHBsSUMwZ01UdGNjbHh1SUNBZ0lIUm9hWE11WDJaeVpXVnpJRDBnYm1WM0lFRnljbUY1S0hOcGVtVXBPMXh5WEc1Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2MybDZaVHNnS3l0cEtTQjdYSEpjYmlBZ0lDQWdJSFJvYVhNdVgyWnlaV1Z6VzJsZElEMGdabTRvS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUY5bGVIQmhibVFvYzJsNlpTa2dlMXh5WEc0Z0lDQWdiR1YwSUc5c1pDQTlJSFJvYVhNdVgyWnlaV1Z6TzF4eVhHNGdJQ0FnZEdocGN5NWZabkpsWlhNZ1BTQnVaWGNnUVhKeVlYa29jMmw2WlNrN1hISmNibHh5WEc0Z0lDQWdiR1YwSUd4bGJpQTlJSE5wZW1VZ0xTQnZiR1F1YkdWdVozUm9PMXh5WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JzWlc0N0lDc3JhU2tnZTF4eVhHNGdJQ0FnSUNCMGFHbHpMbDltY21WbGMxdHBYU0E5SUhSb2FYTXVYMlp1S0NrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SUd4bGJpd2dhaUE5SURBN0lHa2dQQ0J6YVhwbE95QXJLMmtzSUNzcmFpa2dlMXh5WEc0Z0lDQWdJQ0IwYUdsekxsOW1jbVZsYzF0cFhTQTlJRzlzWkZ0cVhUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IwYUdsekxsOXBaSGdnS3owZ2JHVnVPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdZV3hzYjJNb0tTQjdYSEpjYmlBZ0lDQXZMeUJqY21WaGRHVWdjMjl0WlNCdGIzSmxJSE53WVdObElDaGxlSEJoYm1RZ1lua2dNakFsTENCdGFXNXBiWFZ0SURFcFhISmNiaUFnSUNCcFppQW9kR2hwY3k1ZmFXUjRJRHdnTUNrZ2UxeHlYRzRnSUNBZ0lDQjBhR2x6TGw5bGVIQmhibVFvVFdGMGFDNXliM1Z1WkNoMGFHbHpMbDltY21WbGN5NXNaVzVuZEdnZ0tpQXhMaklwSUNzZ01TazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYkdWMElISmxkQ0E5SUhSb2FYTXVYMlp5WldWelczUm9hWE11WDJsa2VGMDdYSEpjYmlBZ0lDQjBhR2x6TGw5bWNtVmxjMXQwYUdsekxsOXBaSGhkSUQwZ2JuVnNiRHRjY2x4dUlDQWdJQzB0ZEdocGN5NWZhV1I0TzF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpYUTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQm1jbVZsS0c5aWFpa2dlMXh5WEc0Z0lDQWdLeXQwYUdsekxsOXBaSGc3WEhKY2JpQWdJQ0IwYUdsekxsOW1jbVZsYzF0MGFHbHpMbDlwWkhoZElEMGdiMkpxTzF4eVhHNGdJSDFjY2x4dWZTSmRmUT09Il19