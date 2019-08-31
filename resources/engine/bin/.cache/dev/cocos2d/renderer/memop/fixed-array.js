(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/fixed-array.js';
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
        var FixedArray = function () {
            function FixedArray(size) {
                _classCallCheck(this, FixedArray);
                this._count = 0;
                this._data = new Array(size);
            }
            _createClass(FixedArray, [
                {
                    key: '_resize',
                    value: function _resize(size) {
                        if (size > this._data.length) {
                            for (var i = this._data.length; i < size; ++i) {
                                this._data[i] = undefined;
                            }
                        }
                    }
                },
                {
                    key: 'reset',
                    value: function reset() {
                        for (var i = 0; i < this._count; ++i) {
                            this._data[i] = undefined;
                        }
                        this._count = 0;
                    }
                },
                {
                    key: 'push',
                    value: function push(val) {
                        if (this._count >= this._data.length) {
                            this._resize(this._data.length * 2);
                        }
                        this._data[this._count] = val;
                        ++this._count;
                    }
                },
                {
                    key: 'pop',
                    value: function pop() {
                        --this._count;
                        if (this._count < 0) {
                            this._count = 0;
                        }
                        var ret = this._data[this._count];
                        this._data[this._count] = undefined;
                        return ret;
                    }
                },
                {
                    key: 'fastRemove',
                    value: function fastRemove(idx) {
                        if (idx >= this._count || idx < 0) {
                            return;
                        }
                        var last = this._count - 1;
                        this._data[idx] = this._data[last];
                        this._data[last] = undefined;
                        this._count -= 1;
                    }
                },
                {
                    key: 'indexOf',
                    value: function indexOf(val) {
                        return this._data.indexOf(val);
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
            return FixedArray;
        }();
        exports.default = FixedArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpeGVkLWFycmF5LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9tZW1vcC9maXhlZC1hcnJheS5qcyJdLCJuYW1lcyI6WyJGaXhlZEFycmF5Iiwic2l6ZSIsIl9jb3VudCIsIl9kYXRhIiwiQXJyYXkiLCJsZW5ndGgiLCJpIiwidW5kZWZpbmVkIiwidmFsIiwiX3Jlc2l6ZSIsInJldCIsImlkeCIsImxhc3QiLCJpbmRleE9mIiwiY21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBLElBQUEsUUFBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7Ozs7Ozs7Ozs7WUFFcUJBLFVBQUFBO1lBQ25CLFNBQUEsVUFBQSxDQUFZQyxJQUFaLEVBQWtCO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxVQUFBLEVBQUE7QUFBQSxnQkFDaEIsS0FBS0MsTUFBTCxHQUFjLENBQWQsQ0FEZ0I7QUFBQSxnQkFFaEIsS0FBS0MsS0FBTCxHQUFhLElBQUlDLEtBQUosQ0FBVUgsSUFBVixDQUFiLENBRmdCO0FBQUE7Ozs7NENBS1ZBLE1BQU07QUFBQSx3QkFDWixJQUFJQSxJQUFBQSxHQUFPLEtBQUtFLEtBQUwsQ0FBV0UsTUFBdEIsRUFBOEI7QUFBQSw0QkFDNUIsS0FBSyxJQUFJQyxDQUFBQSxHQUFJLEtBQUtILEtBQUwsQ0FBV0UsTUFBbkIsQ0FBTCxDQUFnQ0MsQ0FBQUEsR0FBSUwsSUFBcEMsRUFBMEMsRUFBRUssQ0FBNUMsRUFBK0M7QUFBQSxnQ0FDN0MsS0FBS0gsS0FBTCxDQUFXRyxDQUFYLElBQWdCQyxTQUFoQixDQUQ2QztBQUFBLDZCQURuQjtBQUFBLHlCQURsQjtBQUFBOzs7OzRDQWdCTjtBQUFBLHdCQUNOLEtBQUssSUFBSUQsQ0FBQUEsR0FBSSxDQUFSLENBQUwsQ0FBZ0JBLENBQUFBLEdBQUksS0FBS0osTUFBekIsRUFBaUMsRUFBRUksQ0FBbkMsRUFBc0M7QUFBQSw0QkFDcEMsS0FBS0gsS0FBTCxDQUFXRyxDQUFYLElBQWdCQyxTQUFoQixDQURvQztBQUFBLHlCQURoQztBQUFBLHdCQUtOLEtBQUtMLE1BQUwsR0FBYyxDQUFkLENBTE07QUFBQTs7Ozt5Q0FRSE0sS0FBSztBQUFBLHdCQUNSLElBQUksS0FBS04sTUFBTCxJQUFlLEtBQUtDLEtBQUwsQ0FBV0UsTUFBOUIsRUFBc0M7QUFBQSw0QkFDcEMsS0FBS0ksT0FBTCxDQUFhLEtBQUtOLEtBQUwsQ0FBV0UsTUFBWCxHQUFvQixDQUFqQyxFQURvQztBQUFBLHlCQUQ5QjtBQUFBLHdCQUtSLEtBQUtGLEtBQUwsQ0FBVyxLQUFLRCxNQUFoQixJQUEwQk0sR0FBMUIsQ0FMUTtBQUFBLHdCQU1SLEVBQUUsS0FBS04sTUFBUCxDQU5RO0FBQUE7Ozs7MENBU0o7QUFBQSx3QkFDSixFQUFFLEtBQUtBLE1BQVAsQ0FESTtBQUFBLHdCQUdKLElBQUksS0FBS0EsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQUEsNEJBQ25CLEtBQUtBLE1BQUwsR0FBYyxDQUFkLENBRG1CO0FBQUEseUJBSGpCO0FBQUEsd0JBT0osSUFBSVEsR0FBQUEsR0FBTSxLQUFLUCxLQUFMLENBQVcsS0FBS0QsTUFBaEIsQ0FBVixDQVBJO0FBQUEsd0JBUUosS0FBS0MsS0FBTCxDQUFXLEtBQUtELE1BQWhCLElBQTBCSyxTQUExQixDQVJJO0FBQUEsd0JBVUosT0FBT0csR0FBUCxDQVZJO0FBQUE7Ozs7K0NBYUtDLEtBQUs7QUFBQSx3QkFDZCxJQUFJQSxHQUFBQSxJQUFPLEtBQUtULE1BQVpTLElBQXNCQSxHQUFBQSxHQUFNLENBQWhDLEVBQW1DO0FBQUEsNEJBQ2pDLE9BRGlDO0FBQUEseUJBRHJCO0FBQUEsd0JBS2QsSUFBSUMsSUFBQUEsR0FBTyxLQUFLVixNQUFMLEdBQWMsQ0FBekIsQ0FMYztBQUFBLHdCQU1kLEtBQUtDLEtBQUwsQ0FBV1EsR0FBWCxJQUFrQixLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBbEIsQ0FOYztBQUFBLHdCQU9kLEtBQUtULEtBQUwsQ0FBV1MsSUFBWCxJQUFtQkwsU0FBbkIsQ0FQYztBQUFBLHdCQVFkLEtBQUtMLE1BQUwsSUFBZSxDQUFmLENBUmM7QUFBQTs7Ozs0Q0FXUk0sS0FBSztBQUFBLHdCQUNYLE9BQU8sS0FBS0wsS0FBTCxDQUFXVSxPQUFYLENBQW1CTCxHQUFuQixDQUFQLENBRFc7QUFBQTs7Ozt5Q0FJUk0sS0FBSztBQUFBLHdCQUNSLE9BQU8sSUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLENBQUssS0FBS1gsS0FBVixFQUFpQixDQUFqQixFQUFvQixLQUFLRCxNQUF6QixFQUFpQ1ksR0FBakMsQ0FBUCxDQURRO0FBQUE7Ozs7d0NBckRHO0FBQUEsd0JBQ1gsT0FBTyxLQUFLWixNQUFaLENBRFc7QUFBQTs7Ozt3Q0FJRjtBQUFBLHdCQUNULE9BQU8sS0FBS0MsS0FBWixDQURTO0FBQUE7Ozs7OzBCQWxCUUg7Ozs7Ozs7WUFDRCxRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSIsImZpbGUiOiJmaXhlZC1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb3J0IGZyb20gJy4vdGltc29ydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZEFycmF5IHtcclxuICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5KHNpemUpO1xyXG4gIH1cclxuXHJcbiAgX3Jlc2l6ZShzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9kYXRhLmxlbmd0aDsgaSA8IHNpemU7ICsraSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFbaV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvdW50OyArK2kpIHtcclxuICAgICAgdGhpcy5fZGF0YVtpXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICBwdXNoKHZhbCkge1xyXG4gICAgaWYgKHRoaXMuX2NvdW50ID49IHRoaXMuX2RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3Jlc2l6ZSh0aGlzLl9kYXRhLmxlbmd0aCAqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGFbdGhpcy5fY291bnRdID0gdmFsO1xyXG4gICAgKyt0aGlzLl9jb3VudDtcclxuICB9XHJcblxyXG4gIHBvcCgpIHtcclxuICAgIC0tdGhpcy5fY291bnQ7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvdW50IDwgMCkge1xyXG4gICAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJldCA9IHRoaXMuX2RhdGFbdGhpcy5fY291bnRdO1xyXG4gICAgdGhpcy5fZGF0YVt0aGlzLl9jb3VudF0gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIGZhc3RSZW1vdmUoaWR4KSB7XHJcbiAgICBpZiAoaWR4ID49IHRoaXMuX2NvdW50IHx8IGlkeCA8IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXN0ID0gdGhpcy5fY291bnQgLSAxO1xyXG4gICAgdGhpcy5fZGF0YVtpZHhdID0gdGhpcy5fZGF0YVtsYXN0XTtcclxuICAgIHRoaXMuX2RhdGFbbGFzdF0gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9jb3VudCAtPSAxO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZih2YWwpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhLmluZGV4T2YodmFsKTtcclxuICB9XHJcblxyXG4gIHNvcnQoY21wKSB7XHJcbiAgICByZXR1cm4gc29ydCh0aGlzLl9kYXRhLCAwLCB0aGlzLl9jb3VudCwgY21wKTtcclxuICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdGltc29ydCA9IHJlcXVpcmUoJy4vdGltc29ydCcpO1xuXG52YXIgX3RpbXNvcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltc29ydCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGaXhlZEFycmF5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaXhlZEFycmF5KHNpemUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRml4ZWRBcnJheSk7XG5cbiAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheShzaXplKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaXhlZEFycmF5LCBbe1xuICAgIGtleTogJ19yZXNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzaXplKHNpemUpIHtcbiAgICAgIGlmIChzaXplID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2RhdGEubGVuZ3RoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgdGhpcy5fZGF0YVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fZGF0YVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHZhbCkge1xuICAgICAgaWYgKHRoaXMuX2NvdW50ID49IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZSh0aGlzLl9kYXRhLmxlbmd0aCAqIDIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kYXRhW3RoaXMuX2NvdW50XSA9IHZhbDtcbiAgICAgICsrdGhpcy5fY291bnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9wKCkge1xuICAgICAgLS10aGlzLl9jb3VudDtcblxuICAgICAgaWYgKHRoaXMuX2NvdW50IDwgMCkge1xuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXQgPSB0aGlzLl9kYXRhW3RoaXMuX2NvdW50XTtcbiAgICAgIHRoaXMuX2RhdGFbdGhpcy5fY291bnRdID0gdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zhc3RSZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmYXN0UmVtb3ZlKGlkeCkge1xuICAgICAgaWYgKGlkeCA+PSB0aGlzLl9jb3VudCB8fCBpZHggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhc3QgPSB0aGlzLl9jb3VudCAtIDE7XG4gICAgICB0aGlzLl9kYXRhW2lkeF0gPSB0aGlzLl9kYXRhW2xhc3RdO1xuICAgICAgdGhpcy5fZGF0YVtsYXN0XSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvdW50IC09IDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5kZXhPZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZGV4T2YodmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YS5pbmRleE9mKHZhbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc29ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvcnQoY21wKSB7XG4gICAgICByZXR1cm4gKDAsIF90aW1zb3J0Mi5kZWZhdWx0KSh0aGlzLl9kYXRhLCAwLCB0aGlzLl9jb3VudCwgY21wKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RhdGEnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpeGVkQXJyYXk7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZpeGVkQXJyYXk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWnBlR1ZrTFdGeWNtRjVMbXB6SWwwc0ltNWhiV1Z6SWpwYklrWnBlR1ZrUVhKeVlYa2lMQ0p6YVhwbElpd2lYMk52ZFc1MElpd2lYMlJoZEdFaUxDSkJjbkpoZVNJc0lteGxibWQwYUNJc0lta2lMQ0oxYm1SbFptbHVaV1FpTENKMllXd2lMQ0pmY21WemFYcGxJaXdpY21WMElpd2lhV1I0SWl3aWJHRnpkQ0lzSW1sdVpHVjRUMllpTENKamJYQWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVRkJPenM3T3pzN096dEpRVVZ4UWtFc1ZUdEJRVU51UWl4elFrRkJXVU1zU1VGQldpeEZRVUZyUWp0QlFVRkJPenRCUVVOb1FpeFRRVUZMUXl4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVOQkxGTkJRVXRETEV0QlFVd3NSMEZCWVN4SlFVRkpReXhMUVVGS0xFTkJRVlZJTEVsQlFWWXNRMEZCWWp0QlFVTkVPenM3T3pSQ1FVVlBRU3hKTEVWQlFVMDdRVUZEV2l4VlFVRkpRU3hQUVVGUExFdEJRVXRGTEV0QlFVd3NRMEZCVjBVc1RVRkJkRUlzUlVGQk9FSTdRVUZETlVJc1lVRkJTeXhKUVVGSlF5eEpRVUZKTEV0QlFVdElMRXRCUVV3c1EwRkJWMFVzVFVGQmVFSXNSVUZCWjBORExFbEJRVWxNTEVsQlFYQkRMRVZCUVRCRExFVkJRVVZMTEVOQlFUVkRMRVZCUVN0RE8wRkJRemRETEdWQlFVdElMRXRCUVV3c1EwRkJWMGNzUTBGQldDeEpRVUZuUWtNc1UwRkJhRUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPenMwUWtGVlR6dEJRVU5PTEZkQlFVc3NTVUZCU1VRc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpMRXRCUVV0S0xFMUJRWHBDTEVWQlFXbERMRVZCUVVWSkxFTkJRVzVETEVWQlFYTkRPMEZCUTNCRExHRkJRVXRJTEV0QlFVd3NRMEZCVjBjc1EwRkJXQ3hKUVVGblFrTXNVMEZCYUVJN1FVRkRSRHM3UVVGRlJDeFhRVUZMVEN4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVORU96czdlVUpCUlVsTkxFY3NSVUZCU3p0QlFVTlNMRlZCUVVrc1MwRkJTMDRzVFVGQlRDeEpRVUZsTEV0QlFVdERMRXRCUVV3c1EwRkJWMFVzVFVGQk9VSXNSVUZCYzBNN1FVRkRjRU1zWVVGQlMwa3NUMEZCVEN4RFFVRmhMRXRCUVV0T0xFdEJRVXdzUTBGQlYwVXNUVUZCV0N4SFFVRnZRaXhEUVVGcVF6dEJRVU5FT3p0QlFVVkVMRmRCUVV0R0xFdEJRVXdzUTBGQlZ5eExRVUZMUkN4TlFVRm9RaXhKUVVFd1FrMHNSMEZCTVVJN1FVRkRRU3hSUVVGRkxFdEJRVXRPTEUxQlFWQTdRVUZEUkRzN096QkNRVVZMTzBGQlEwb3NVVUZCUlN4TFFVRkxRU3hOUVVGUU96dEJRVVZCTEZWQlFVa3NTMEZCUzBFc1RVRkJUQ3hIUVVGakxFTkJRV3hDTEVWQlFYRkNPMEZCUTI1Q0xHRkJRVXRCTEUxQlFVd3NSMEZCWXl4RFFVRmtPMEZCUTBRN08wRkJSVVFzVlVGQlNWRXNUVUZCVFN4TFFVRkxVQ3hMUVVGTUxFTkJRVmNzUzBGQlMwUXNUVUZCYUVJc1EwRkJWanRCUVVOQkxGZEJRVXRETEV0QlFVd3NRMEZCVnl4TFFVRkxSQ3hOUVVGb1FpeEpRVUV3UWtzc1UwRkJNVUk3TzBGQlJVRXNZVUZCVDBjc1IwRkJVRHRCUVVORU96czdLMEpCUlZWRExFY3NSVUZCU3p0QlFVTmtMRlZCUVVsQkxFOUJRVThzUzBGQlMxUXNUVUZCV2l4SlFVRnpRbE1zVFVGQlRTeERRVUZvUXl4RlFVRnRRenRCUVVOcVF6dEJRVU5FT3p0QlFVVkVMRlZCUVVsRExFOUJRVThzUzBGQlMxWXNUVUZCVEN4SFFVRmpMRU5CUVhwQ08wRkJRMEVzVjBGQlMwTXNTMEZCVEN4RFFVRlhVU3hIUVVGWUxFbEJRV3RDTEV0QlFVdFNMRXRCUVV3c1EwRkJWMU1zU1VGQldDeERRVUZzUWp0QlFVTkJMRmRCUVV0VUxFdEJRVXdzUTBGQlYxTXNTVUZCV0N4SlFVRnRRa3dzVTBGQmJrSTdRVUZEUVN4WFFVRkxUQ3hOUVVGTUxFbEJRV1VzUTBGQlpqdEJRVU5FT3pzN05FSkJSVTlOTEVjc1JVRkJTenRCUVVOWUxHRkJRVThzUzBGQlMwd3NTMEZCVEN4RFFVRlhWU3hQUVVGWUxFTkJRVzFDVEN4SFFVRnVRaXhEUVVGUU8wRkJRMFE3T3p0NVFrRkZTVTBzUnl4RlFVRkxPMEZCUTFJc1lVRkJUeXgxUWtGQlN5eExRVUZMV0N4TFFVRldMRVZCUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRXRCUVV0RUxFMUJRWHBDTEVWQlFXbERXU3hIUVVGcVF5eERRVUZRTzBGQlEwUTdPenQzUWtGMlJGazdRVUZEV0N4aFFVRlBMRXRCUVV0YUxFMUJRVm83UVVGRFJEczdPM2RDUVVWVk8wRkJRMVFzWVVGQlR5eExRVUZMUXl4TFFVRmFPMEZCUTBRN096czdPenRyUWtGd1FtdENTQ3hWSWl3aVptbHNaU0k2SW1acGVHVmtMV0Z5Y21GNUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSE52Y25RZ1puSnZiU0FuTGk5MGFXMXpiM0owSnp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFWnBlR1ZrUVhKeVlYa2dlMXh5WEc0Z0lHTnZibk4wY25WamRHOXlLSE5wZW1VcElIdGNjbHh1SUNBZ0lIUm9hWE11WDJOdmRXNTBJRDBnTUR0Y2NseHVJQ0FnSUhSb2FYTXVYMlJoZEdFZ1BTQnVaWGNnUVhKeVlYa29jMmw2WlNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCZmNtVnphWHBsS0hOcGVtVXBJSHRjY2x4dUlDQWdJR2xtSUNoemFYcGxJRDRnZEdocGN5NWZaR0YwWVM1c1pXNW5kR2dwSUh0Y2NseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJSFJvYVhNdVgyUmhkR0V1YkdWdVozUm9PeUJwSUR3Z2MybDZaVHNnS3l0cEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaR0YwWVZ0cFhTQTlJSFZ1WkdWbWFXNWxaRHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dVhISmNiaUFnWjJWMElHeGxibWQwYUNncElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlqYjNWdWREdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHZGxkQ0JrWVhSaEtDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJSaGRHRTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWE5sZENncElIdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1ZlkyOTFiblE3SUNzcmFTa2dlMXh5WEc0Z0lDQWdJQ0IwYUdsekxsOWtZWFJoVzJsZElEMGdkVzVrWldacGJtVmtPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVYMk52ZFc1MElEMGdNRHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEIxYzJnb2RtRnNLU0I3WEhKY2JpQWdJQ0JwWmlBb2RHaHBjeTVmWTI5MWJuUWdQajBnZEdocGN5NWZaR0YwWVM1c1pXNW5kR2dwSUh0Y2NseHVJQ0FnSUNBZ2RHaHBjeTVmY21WemFYcGxLSFJvYVhNdVgyUmhkR0V1YkdWdVozUm9JQ29nTWlrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkR2hwY3k1ZlpHRjBZVnQwYUdsekxsOWpiM1Z1ZEYwZ1BTQjJZV3c3WEhKY2JpQWdJQ0FySzNSb2FYTXVYMk52ZFc1ME8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NHOXdLQ2tnZTF4eVhHNGdJQ0FnTFMxMGFHbHpMbDlqYjNWdWREdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2RHaHBjeTVmWTI5MWJuUWdQQ0F3S1NCN1hISmNiaUFnSUNBZ0lIUm9hWE11WDJOdmRXNTBJRDBnTUR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnNaWFFnY21WMElEMGdkR2hwY3k1ZlpHRjBZVnQwYUdsekxsOWpiM1Z1ZEYwN1hISmNiaUFnSUNCMGFHbHpMbDlrWVhSaFczUm9hWE11WDJOdmRXNTBYU0E5SUhWdVpHVm1hVzVsWkR0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVjBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdabUZ6ZEZKbGJXOTJaU2hwWkhncElIdGNjbHh1SUNBZ0lHbG1JQ2hwWkhnZ1BqMGdkR2hwY3k1ZlkyOTFiblFnZkh3Z2FXUjRJRHdnTUNrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiR1YwSUd4aGMzUWdQU0IwYUdsekxsOWpiM1Z1ZENBdElERTdYSEpjYmlBZ0lDQjBhR2x6TGw5a1lYUmhXMmxrZUYwZ1BTQjBhR2x6TGw5a1lYUmhXMnhoYzNSZE8xeHlYRzRnSUNBZ2RHaHBjeTVmWkdGMFlWdHNZWE4wWFNBOUlIVnVaR1ZtYVc1bFpEdGNjbHh1SUNBZ0lIUm9hWE11WDJOdmRXNTBJQzA5SURFN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCcGJtUmxlRTltS0haaGJDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJSaGRHRXVhVzVrWlhoUFppaDJZV3dwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYzI5eWRDaGpiWEFwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJ6YjNKMEtIUm9hWE11WDJSaGRHRXNJREFzSUhSb2FYTXVYMk52ZFc1MExDQmpiWEFwTzF4eVhHNGdJSDFjY2x4dWZTSmRmUT09Il19