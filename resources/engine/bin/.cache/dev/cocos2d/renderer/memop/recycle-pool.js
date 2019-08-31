(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/recycle-pool.js';
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
        var _timsort = require('./timsort');
        var _timsort2 = _interopRequireDefault(_timsort);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var RecyclePool = function () {
            function RecyclePool(fn, size) {
                _classCallCheck(this, RecyclePool);
                this._fn = fn;
                this._count = 0;
                this._data = new Array(size);
                for (var i = 0; i < size; ++i) {
                    this._data[i] = fn();
                }
            }
            _createClass(RecyclePool, [
                {
                    key: 'reset',
                    value: function reset() {
                        this._count = 0;
                    }
                },
                {
                    key: 'resize',
                    value: function resize(size) {
                        if (size > this._data.length) {
                            for (var i = this._data.length; i < size; ++i) {
                                this._data[i] = this._fn();
                            }
                        }
                    }
                },
                {
                    key: 'add',
                    value: function add() {
                        if (this._count >= this._data.length) {
                            this.resize(this._data.length * 2);
                        }
                        return this._data[this._count++];
                    }
                },
                {
                    key: 'remove',
                    value: function remove(idx) {
                        if (idx >= this._count) {
                            return;
                        }
                        var last = this._count - 1;
                        var tmp = this._data[idx];
                        this._data[idx] = this._data[last];
                        this._data[last] = tmp;
                        this._count -= 1;
                    }
                },
                {
                    key: 'sort',
                    value: function sort(cmp) {
                        return (0, _timsort2.default)(this._data, 0, this._count, cmp);
                    }
                },
                {
                    key: 'length',
                    get: function get() {
                        return this._count;
                    }
                },
                {
                    key: 'data',
                    get: function get() {
                        return this._data;
                    }
                }
            ]);
            return RecyclePool;
        }();
        exports.default = RecyclePool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3ljbGUtcG9vbC5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvbWVtb3AvcmVjeWNsZS1wb29sLmpzIl0sIm5hbWVzIjpbIlJlY3ljbGVQb29sIiwiZm4iLCJzaXplIiwiX2ZuIiwiX2NvdW50IiwiX2RhdGEiLCJBcnJheSIsImkiLCJsZW5ndGgiLCJyZXNpemUiLCJpZHgiLCJsYXN0IiwidG1wIiwiY21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBLElBQUEsUUFBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7Ozs7Ozs7Ozs7WUFFcUJBLFdBQUFBO1lBQ25CLFNBQUEsV0FBQSxDQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQjtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsV0FBQSxFQUFBO0FBQUEsZ0JBQ3BCLEtBQUtDLEdBQUwsR0FBV0YsRUFBWCxDQURvQjtBQUFBLGdCQUVwQixLQUFLRyxNQUFMLEdBQWMsQ0FBZCxDQUZvQjtBQUFBLGdCQUdwQixLQUFLQyxLQUFMLEdBQWEsSUFBSUMsS0FBSixDQUFVSixJQUFWLENBQWIsQ0FIb0I7QUFBQSxnQkFLcEIsS0FBSyxJQUFJSyxDQUFBQSxHQUFJLENBQVIsQ0FBTCxDQUFnQkEsQ0FBQUEsR0FBSUwsSUFBcEIsRUFBMEIsRUFBRUssQ0FBNUIsRUFBK0I7QUFBQSxvQkFDN0IsS0FBS0YsS0FBTCxDQUFXRSxDQUFYLElBQWdCTixFQUFBQSxFQUFoQixDQUQ2QjtBQUFBLGlCQUxYO0FBQUE7Ozs7NENBa0JkO0FBQUEsd0JBQ04sS0FBS0csTUFBTCxHQUFjLENBQWQsQ0FETTtBQUFBOzs7OzJDQUlERixNQUFNO0FBQUEsd0JBQ1gsSUFBSUEsSUFBQUEsR0FBTyxLQUFLRyxLQUFMLENBQVdHLE1BQXRCLEVBQThCO0FBQUEsNEJBQzVCLEtBQUssSUFBSUQsQ0FBQUEsR0FBSSxLQUFLRixLQUFMLENBQVdHLE1BQW5CLENBQUwsQ0FBZ0NELENBQUFBLEdBQUlMLElBQXBDLEVBQTBDLEVBQUVLLENBQTVDLEVBQStDO0FBQUEsZ0NBQzdDLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBWCxJQUFnQixLQUFLSixHQUFMLEVBQWhCLENBRDZDO0FBQUEsNkJBRG5CO0FBQUEseUJBRG5CO0FBQUE7Ozs7MENBUVA7QUFBQSx3QkFDSixJQUFJLEtBQUtDLE1BQUwsSUFBZSxLQUFLQyxLQUFMLENBQVdHLE1BQTlCLEVBQXNDO0FBQUEsNEJBQ3BDLEtBQUtDLE1BQUwsQ0FBWSxLQUFLSixLQUFMLENBQVdHLE1BQVgsR0FBb0IsQ0FBaEMsRUFEb0M7QUFBQSx5QkFEbEM7QUFBQSx3QkFLSixPQUFPLEtBQUtILEtBQUwsQ0FBVyxLQUFLRCxNQUFMLEVBQVgsQ0FBUCxDQUxJO0FBQUE7Ozs7MkNBUUNNLEtBQUs7QUFBQSx3QkFDVixJQUFJQSxHQUFBQSxJQUFPLEtBQUtOLE1BQWhCLEVBQXdCO0FBQUEsNEJBQ3RCLE9BRHNCO0FBQUEseUJBRGQ7QUFBQSx3QkFLVixJQUFJTyxJQUFBQSxHQUFPLEtBQUtQLE1BQUwsR0FBYyxDQUF6QixDQUxVO0FBQUEsd0JBTVYsSUFBSVEsR0FBQUEsR0FBTSxLQUFLUCxLQUFMLENBQVdLLEdBQVgsQ0FBVixDQU5VO0FBQUEsd0JBT1YsS0FBS0wsS0FBTCxDQUFXSyxHQUFYLElBQWtCLEtBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFsQixDQVBVO0FBQUEsd0JBUVYsS0FBS04sS0FBTCxDQUFXTSxJQUFYLElBQW1CQyxHQUFuQixDQVJVO0FBQUEsd0JBU1YsS0FBS1IsTUFBTCxJQUFlLENBQWYsQ0FUVTtBQUFBOzs7O3lDQVlQUyxLQUFLO0FBQUEsd0JBQ1IsT0FBTyxJQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBSyxLQUFLUixLQUFWLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtELE1BQXpCLEVBQWlDUyxHQUFqQyxDQUFQLENBRFE7QUFBQTs7Ozt3Q0F4Q0c7QUFBQSx3QkFDWCxPQUFPLEtBQUtULE1BQVosQ0FEVztBQUFBOzs7O3dDQUlGO0FBQUEsd0JBQ1QsT0FBTyxLQUFLQyxLQUFaLENBRFM7QUFBQTs7Ozs7MEJBZlFMOzs7Ozs7O1lBQ0hFLFFBQUFBLENBQU0sUUFBQSxDQUFBLE9BQU5BLEVBQU0sU0FBTkEsRUFBTSxRQUFOQSIsImZpbGUiOiJyZWN5Y2xlLXBvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ydCBmcm9tICcuL3RpbXNvcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjeWNsZVBvb2wge1xyXG4gIGNvbnN0cnVjdG9yKGZuLCBzaXplKSB7XHJcbiAgICB0aGlzLl9mbiA9IGZuO1xyXG4gICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheShzaXplKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7ICsraSkge1xyXG4gICAgICB0aGlzLl9kYXRhW2ldID0gZm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICByZXNpemUoc2l6ZSkge1xyXG4gICAgaWYgKHNpemUgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5fZGF0YS5sZW5ndGg7IGkgPCBzaXplOyArK2kpIHtcclxuICAgICAgICB0aGlzLl9kYXRhW2ldID0gdGhpcy5fZm4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgaWYgKHRoaXMuX2NvdW50ID49IHRoaXMuX2RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucmVzaXplKHRoaXMuX2RhdGEubGVuZ3RoICogMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFbdGhpcy5fY291bnQrK107XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWR4KSB7XHJcbiAgICBpZiAoaWR4ID49IHRoaXMuX2NvdW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGFzdCA9IHRoaXMuX2NvdW50IC0gMTtcclxuICAgIGxldCB0bXAgPSB0aGlzLl9kYXRhW2lkeF07XHJcbiAgICB0aGlzLl9kYXRhW2lkeF0gPSB0aGlzLl9kYXRhW2xhc3RdO1xyXG4gICAgdGhpcy5fZGF0YVtsYXN0XSA9IHRtcDtcclxuICAgIHRoaXMuX2NvdW50IC09IDE7XHJcbiAgfVxyXG5cclxuICBzb3J0KGNtcCkge1xyXG4gICAgcmV0dXJuIHNvcnQodGhpcy5fZGF0YSwgMCwgdGhpcy5fY291bnQsIGNtcCk7XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RpbXNvcnQgPSByZXF1aXJlKCcuL3RpbXNvcnQnKTtcblxudmFyIF90aW1zb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbXNvcnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVjeWNsZVBvb2wgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlY3ljbGVQb29sKGZuLCBzaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY3ljbGVQb29sKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZGF0YVtpXSA9IGZuKCk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlY3ljbGVQb29sLCBbe1xuICAgIGtleTogJ3Jlc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKHNpemUpIHtcbiAgICAgIGlmIChzaXplID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2RhdGEubGVuZ3RoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgdGhpcy5fZGF0YVtpXSA9IHRoaXMuX2ZuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBpZiAodGhpcy5fY291bnQgPj0gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUodGhpcy5fZGF0YS5sZW5ndGggKiAyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbdGhpcy5fY291bnQrK107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGlkeCkge1xuICAgICAgaWYgKGlkeCA+PSB0aGlzLl9jb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0ID0gdGhpcy5fY291bnQgLSAxO1xuICAgICAgdmFyIHRtcCA9IHRoaXMuX2RhdGFbaWR4XTtcbiAgICAgIHRoaXMuX2RhdGFbaWR4XSA9IHRoaXMuX2RhdGFbbGFzdF07XG4gICAgICB0aGlzLl9kYXRhW2xhc3RdID0gdG1wO1xuICAgICAgdGhpcy5fY291bnQgLT0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzb3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ydChjbXApIHtcbiAgICAgIHJldHVybiAoMCwgX3RpbXNvcnQyLmRlZmF1bHQpKHRoaXMuX2RhdGEsIDAsIHRoaXMuX2NvdW50LCBjbXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xlbmd0aCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGF0YScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVjeWNsZVBvb2w7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY3ljbGVQb29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkpsWTNsamJHVXRjRzl2YkM1cWN5SmRMQ0p1WVcxbGN5STZXeUpTWldONVkyeGxVRzl2YkNJc0ltWnVJaXdpYzJsNlpTSXNJbDltYmlJc0lsOWpiM1Z1ZENJc0lsOWtZWFJoSWl3aVFYSnlZWGtpTENKcElpd2liR1Z1WjNSb0lpd2ljbVZ6YVhwbElpd2lhV1I0SWl3aWJHRnpkQ0lzSW5SdGNDSXNJbU50Y0NKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVVFN096czdPenM3TzBsQlJYRkNRU3hYTzBGQlEyNUNMSFZDUVVGWlF5eEZRVUZhTEVWQlFXZENReXhKUVVGb1FpeEZRVUZ6UWp0QlFVRkJPenRCUVVOd1FpeFRRVUZMUXl4SFFVRk1MRWRCUVZkR0xFVkJRVmc3UVVGRFFTeFRRVUZMUnl4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVOQkxGTkJRVXRETEV0QlFVd3NSMEZCWVN4SlFVRkpReXhMUVVGS0xFTkJRVlZLTEVsQlFWWXNRMEZCWWpzN1FVRkZRU3hUUVVGTExFbEJRVWxMTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVd3NTVUZCY0VJc1JVRkJNRUlzUlVGQlJVc3NRMEZCTlVJc1JVRkJLMEk3UVVGRE4wSXNWMEZCUzBZc1MwRkJUQ3hEUVVGWFJTeERRVUZZTEVsQlFXZENUaXhKUVVGb1FqdEJRVU5FTzBGQlEwWTdPenM3TkVKQlZVODdRVUZEVGl4WFFVRkxSeXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5FT3pzN01rSkJSVTFHTEVrc1JVRkJUVHRCUVVOWUxGVkJRVWxCTEU5QlFVOHNTMEZCUzBjc1MwRkJUQ3hEUVVGWFJ5eE5RVUYwUWl4RlFVRTRRanRCUVVNMVFpeGhRVUZMTEVsQlFVbEVMRWxCUVVrc1MwRkJTMFlzUzBGQlRDeERRVUZYUnl4TlFVRjRRaXhGUVVGblEwUXNTVUZCU1V3c1NVRkJjRU1zUlVGQk1FTXNSVUZCUlVzc1EwRkJOVU1zUlVGQkswTTdRVUZETjBNc1pVRkJTMFlzUzBGQlRDeERRVUZYUlN4RFFVRllMRWxCUVdkQ0xFdEJRVXRLTEVkQlFVd3NSVUZCYUVJN1FVRkRSRHRCUVVOR08wRkJRMFk3T3pzd1FrRkZTenRCUVVOS0xGVkJRVWtzUzBGQlMwTXNUVUZCVEN4SlFVRmxMRXRCUVV0RExFdEJRVXdzUTBGQlYwY3NUVUZCT1VJc1JVRkJjME03UVVGRGNFTXNZVUZCUzBNc1RVRkJUQ3hEUVVGWkxFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1RVRkJXQ3hIUVVGdlFpeERRVUZvUXp0QlFVTkVPenRCUVVWRUxHRkJRVThzUzBGQlMwZ3NTMEZCVEN4RFFVRlhMRXRCUVV0RUxFMUJRVXdzUlVGQldDeERRVUZRTzBGQlEwUTdPenN5UWtGRlRVMHNSeXhGUVVGTE8wRkJRMVlzVlVGQlNVRXNUMEZCVHl4TFFVRkxUaXhOUVVGb1FpeEZRVUYzUWp0QlFVTjBRanRCUVVORU96dEJRVVZFTEZWQlFVbFBMRTlCUVU4c1MwRkJTMUFzVFVGQlRDeEhRVUZqTEVOQlFYcENPMEZCUTBFc1ZVRkJTVkVzVFVGQlRTeExRVUZMVUN4TFFVRk1MRU5CUVZkTExFZEJRVmdzUTBGQlZqdEJRVU5CTEZkQlFVdE1MRXRCUVV3c1EwRkJWMHNzUjBGQldDeEpRVUZyUWl4TFFVRkxUQ3hMUVVGTUxFTkJRVmROTEVsQlFWZ3NRMEZCYkVJN1FVRkRRU3hYUVVGTFRpeExRVUZNTEVOQlFWZE5MRWxCUVZnc1NVRkJiVUpETEVkQlFXNUNPMEZCUTBFc1YwRkJTMUlzVFVGQlRDeEpRVUZsTEVOQlFXWTdRVUZEUkRzN08zbENRVVZKVXl4SExFVkJRVXM3UVVGRFVpeGhRVUZQTEhWQ1FVRkxMRXRCUVV0U0xFdEJRVllzUlVGQmFVSXNRMEZCYWtJc1JVRkJiMElzUzBGQlMwUXNUVUZCZWtJc1JVRkJhVU5UTEVkQlFXcERMRU5CUVZBN1FVRkRSRHM3TzNkQ1FURkRXVHRCUVVOWUxHRkJRVThzUzBGQlMxUXNUVUZCV2p0QlFVTkVPenM3ZDBKQlJWVTdRVUZEVkN4aFFVRlBMRXRCUVV0RExFdEJRVm83UVVGRFJEczdPenM3TzJ0Q1FXcENhMEpNTEZjaUxDSm1hV3hsSWpvaWNtVmplV05zWlMxd2IyOXNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhOdmNuUWdabkp2YlNBbkxpOTBhVzF6YjNKMEp6dGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkpsWTNsamJHVlFiMjlzSUh0Y2NseHVJQ0JqYjI1emRISjFZM1J2Y2lobWJpd2djMmw2WlNrZ2UxeHlYRzRnSUNBZ2RHaHBjeTVmWm00Z1BTQm1ianRjY2x4dUlDQWdJSFJvYVhNdVgyTnZkVzUwSUQwZ01EdGNjbHh1SUNBZ0lIUm9hWE11WDJSaGRHRWdQU0J1WlhjZ1FYSnlZWGtvYzJsNlpTazdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCemFYcGxPeUFySzJrcElIdGNjbHh1SUNBZ0lDQWdkR2hwY3k1ZlpHRjBZVnRwWFNBOUlHWnVLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JuWlhRZ2JHVnVaM1JvS0NrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMk52ZFc1ME8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ1oyVjBJR1JoZEdFb0tTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWkdGMFlUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxjMlYwS0NrZ2UxeHlYRzRnSUNBZ2RHaHBjeTVmWTI5MWJuUWdQU0F3TzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WemFYcGxLSE5wZW1VcElIdGNjbHh1SUNBZ0lHbG1JQ2h6YVhwbElENGdkR2hwY3k1ZlpHRjBZUzVzWlc1bmRHZ3BJSHRjY2x4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlIUm9hWE11WDJSaGRHRXViR1Z1WjNSb095QnBJRHdnYzJsNlpUc2dLeXRwS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlpHRjBZVnRwWFNBOUlIUm9hWE11WDJadUtDazdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR0ZrWkNncElIdGNjbHh1SUNBZ0lHbG1JQ2gwYUdsekxsOWpiM1Z1ZENBK1BTQjBhR2x6TGw5a1lYUmhMbXhsYm1kMGFDa2dlMXh5WEc0Z0lDQWdJQ0IwYUdsekxuSmxjMmw2WlNoMGFHbHpMbDlrWVhSaExteGxibWQwYUNBcUlESXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWtZWFJoVzNSb2FYTXVYMk52ZFc1MEt5dGRPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVZ0YjNabEtHbGtlQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tHbGtlQ0ErUFNCMGFHbHpMbDlqYjNWdWRDa2dlMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYkdWMElHeGhjM1FnUFNCMGFHbHpMbDlqYjNWdWRDQXRJREU3WEhKY2JpQWdJQ0JzWlhRZ2RHMXdJRDBnZEdocGN5NWZaR0YwWVZ0cFpIaGRPMXh5WEc0Z0lDQWdkR2hwY3k1ZlpHRjBZVnRwWkhoZElEMGdkR2hwY3k1ZlpHRjBZVnRzWVhOMFhUdGNjbHh1SUNBZ0lIUm9hWE11WDJSaGRHRmJiR0Z6ZEYwZ1BTQjBiWEE3WEhKY2JpQWdJQ0IwYUdsekxsOWpiM1Z1ZENBdFBTQXhPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjMjl5ZENoamJYQXBJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQnpiM0owS0hSb2FYTXVYMlJoZEdFc0lEQXNJSFJvYVhNdVgyTnZkVzUwTENCamJYQXBPMXh5WEc0Z0lIMWNjbHh1ZlNKZGZRPT0iXX0=