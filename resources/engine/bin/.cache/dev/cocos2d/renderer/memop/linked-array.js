(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/linked-array.js';
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
        var _pool = require('./pool');
        var _pool2 = _interopRequireDefault(_pool);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var LinkedArray = function () {
            function LinkedArray(fn, size) {
                _classCallCheck(this, LinkedArray);
                this._fn = fn;
                this._count = 0;
                this._head = null;
                this._tail = null;
                this._pool = new _pool2.default(fn, size);
            }
            _createClass(LinkedArray, [
                {
                    key: 'add',
                    value: function add() {
                        var node = this._pool.alloc();
                        if (!this._tail) {
                            this._head = node;
                        } else {
                            this._tail._next = node;
                            node._prev = this._tail;
                        }
                        this._tail = node;
                        this._count += 1;
                        return node;
                    }
                },
                {
                    key: 'remove',
                    value: function remove(node) {
                        if (node._prev) {
                            node._prev._next = node._next;
                        } else {
                            this._head = node._next;
                        }
                        if (node._next) {
                            node._next._prev = node._prev;
                        } else {
                            this._tail = node._prev;
                        }
                        node._next = null;
                        node._prev = null;
                        this._pool.free(node);
                        this._count -= 1;
                    }
                },
                {
                    key: 'forEach',
                    value: function forEach(fn, binder) {
                        var cursor = this._head;
                        if (!cursor) {
                            return;
                        }
                        if (binder) {
                            fn = fn.bind(binder);
                        }
                        var idx = 0;
                        var next = cursor;
                        while (cursor) {
                            next = cursor._next;
                            fn(cursor, idx, this);
                            cursor = next;
                            ++idx;
                        }
                    }
                },
                {
                    key: 'head',
                    get: function get() {
                        return this._head;
                    }
                },
                {
                    key: 'tail',
                    get: function get() {
                        return this._tail;
                    }
                },
                {
                    key: 'length',
                    get: function get() {
                        return this._count;
                    }
                }
            ]);
            return LinkedArray;
        }();
        exports.default = LinkedArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtlZC1hcnJheS5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvbWVtb3AvbGlua2VkLWFycmF5LmpzIl0sIm5hbWVzIjpbIkxpbmtlZEFycmF5IiwiZm4iLCJzaXplIiwiX2ZuIiwiX2NvdW50IiwiX2hlYWQiLCJfdGFpbCIsIl9wb29sIiwibm9kZSIsImFsbG9jIiwiX25leHQiLCJfcHJldiIsImZyZWUiLCJiaW5kZXIiLCJjdXJzb3IiLCJiaW5kIiwiaWR4IiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOzs7Ozs7Ozs7O1lBSXFCQSxXQUFBQTtZQUNuQixTQUFBLFdBQUEsQ0FBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0I7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFdBQUEsRUFBQTtBQUFBLGdCQUNwQixLQUFLQyxHQUFMLEdBQVdGLEVBQVgsQ0FEb0I7QUFBQSxnQkFFcEIsS0FBS0csTUFBTCxHQUFjLENBQWQsQ0FGb0I7QUFBQSxnQkFHcEIsS0FBS0MsS0FBTCxHQUFhLElBQWIsQ0FIb0I7QUFBQSxnQkFJcEIsS0FBS0MsS0FBTCxHQUFhLElBQWIsQ0FKb0I7QUFBQSxnQkFNcEIsS0FBS0MsS0FBTCxHQUFhLElBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBU04sRUFBVCxFQUFhQyxJQUFiLENBQWIsQ0FOb0I7QUFBQTs7OzswQ0FxQmhCO0FBQUEsd0JBQ0osSUFBSU0sSUFBQUEsR0FBTyxLQUFLRCxLQUFMLENBQVdFLEtBQVgsRUFBWCxDQURJO0FBQUEsd0JBR0osSUFBSSxDQUFDLEtBQUtILEtBQVYsRUFBaUI7QUFBQSw0QkFDZixLQUFLRCxLQUFMLEdBQWFHLElBQWIsQ0FEZTtBQUFBLHlCQUFqQixNQUVPO0FBQUEsNEJBQ0wsS0FBS0YsS0FBTCxDQUFXSSxLQUFYLEdBQW1CRixJQUFuQixDQURLO0FBQUEsNEJBRUxBLElBQUFBLENBQUtHLEtBQUxILEdBQWEsS0FBS0YsS0FBbEJFLENBRks7QUFBQSx5QkFMSDtBQUFBLHdCQVNKLEtBQUtGLEtBQUwsR0FBYUUsSUFBYixDQVRJO0FBQUEsd0JBVUosS0FBS0osTUFBTCxJQUFlLENBQWYsQ0FWSTtBQUFBLHdCQVlKLE9BQU9JLElBQVAsQ0FaSTtBQUFBOzs7OzJDQWVDQSxNQUFNO0FBQUEsd0JBQ1gsSUFBSUEsSUFBQUEsQ0FBS0csS0FBVCxFQUFnQjtBQUFBLDRCQUNkSCxJQUFBQSxDQUFLRyxLQUFMSCxDQUFXRSxLQUFYRixHQUFtQkEsSUFBQUEsQ0FBS0UsS0FBeEJGLENBRGM7QUFBQSx5QkFBaEIsTUFFTztBQUFBLDRCQUNMLEtBQUtILEtBQUwsR0FBYUcsSUFBQUEsQ0FBS0UsS0FBbEIsQ0FESztBQUFBLHlCQUhJO0FBQUEsd0JBT1gsSUFBSUYsSUFBQUEsQ0FBS0UsS0FBVCxFQUFnQjtBQUFBLDRCQUNkRixJQUFBQSxDQUFLRSxLQUFMRixDQUFXRyxLQUFYSCxHQUFtQkEsSUFBQUEsQ0FBS0csS0FBeEJILENBRGM7QUFBQSx5QkFBaEIsTUFFTztBQUFBLDRCQUNMLEtBQUtGLEtBQUwsR0FBYUUsSUFBQUEsQ0FBS0csS0FBbEIsQ0FESztBQUFBLHlCQVRJO0FBQUEsd0JBYVhILElBQUFBLENBQUtFLEtBQUxGLEdBQWEsSUFBYkEsQ0FiVztBQUFBLHdCQWNYQSxJQUFBQSxDQUFLRyxLQUFMSCxHQUFhLElBQWJBLENBZFc7QUFBQSx3QkFlWCxLQUFLRCxLQUFMLENBQVdLLElBQVgsQ0FBZ0JKLElBQWhCLEVBZlc7QUFBQSx3QkFnQlgsS0FBS0osTUFBTCxJQUFlLENBQWYsQ0FoQlc7QUFBQTs7Ozs0Q0FtQkxILElBQUlZLFFBQVE7QUFBQSx3QkFDbEIsSUFBSUMsTUFBQUEsR0FBUyxLQUFLVCxLQUFsQixDQURrQjtBQUFBLHdCQUVsQixJQUFJLENBQUNTLE1BQUwsRUFBYTtBQUFBLDRCQUNYLE9BRFc7QUFBQSx5QkFGSztBQUFBLHdCQU1sQixJQUFJRCxNQUFKLEVBQVk7QUFBQSw0QkFDVlosRUFBQUEsR0FBS0EsRUFBQUEsQ0FBR2MsSUFBSGQsQ0FBUVksTUFBUlosQ0FBTEEsQ0FEVTtBQUFBLHlCQU5NO0FBQUEsd0JBVWxCLElBQUllLEdBQUFBLEdBQU0sQ0FBVixDQVZrQjtBQUFBLHdCQVdsQixJQUFJQyxJQUFBQSxHQUFPSCxNQUFYLENBWGtCO0FBQUEsd0JBYWxCLE9BQU9BLE1BQVAsRUFBZTtBQUFBLDRCQUNiRyxJQUFBQSxHQUFPSCxNQUFBQSxDQUFPSixLQUFkTyxDQURhO0FBQUEsNEJBRWJoQixFQUFBQSxDQUFHYSxNQUFIYixFQUFXZSxHQUFYZixFQUFnQixJQUFoQkEsRUFGYTtBQUFBLDRCQUliYSxNQUFBQSxHQUFTRyxJQUFUSCxDQUphO0FBQUEsNEJBS2IsRUFBRUUsR0FBRixDQUxhO0FBQUEseUJBYkc7QUFBQTs7Ozt3Q0E5Q1Q7QUFBQSx3QkFDVCxPQUFPLEtBQUtYLEtBQVosQ0FEUztBQUFBOzs7O3dDQUlBO0FBQUEsd0JBQ1QsT0FBTyxLQUFLQyxLQUFaLENBRFM7QUFBQTs7Ozt3Q0FJRTtBQUFBLHdCQUNYLE9BQU8sS0FBS0YsTUFBWixDQURXO0FBQUE7Ozs7OzBCQWxCTUo7Ozs7OztRQUZyQixpQkFBQSxDQUFBLGtCQUFBLENBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSw0REFBQTtBQUFBLFNBQUEiLCJmaWxlIjoibGlua2VkLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvb2wgZnJvbSAnLi9wb29sJztcclxuXHJcbi8vIE5PVEU6IHlvdSBtdXN0IGhhdmUgYF9wcmV2YCBhbmQgYF9uZXh0YCBmaWVsZCBpbiB0aGUgb2JqZWN0IHJldHVybnMgYnkgYGZuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua2VkQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKGZuLCBzaXplKSB7XHJcbiAgICB0aGlzLl9mbiA9IGZuO1xyXG4gICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgdGhpcy5faGVhZCA9IG51bGw7XHJcbiAgICB0aGlzLl90YWlsID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9wb29sID0gbmV3IFBvb2woZm4sIHNpemUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhlYWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZDtcclxuICB9XHJcblxyXG4gIGdldCB0YWlsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RhaWw7XHJcbiAgfVxyXG5cclxuICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgbGV0IG5vZGUgPSB0aGlzLl9wb29sLmFsbG9jKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl90YWlsKSB7XHJcbiAgICAgIHRoaXMuX2hlYWQgPSBub2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdGFpbC5fbmV4dCA9IG5vZGU7XHJcbiAgICAgIG5vZGUuX3ByZXYgPSB0aGlzLl90YWlsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGFpbCA9IG5vZGU7XHJcbiAgICB0aGlzLl9jb3VudCArPSAxO1xyXG5cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKG5vZGUpIHtcclxuICAgIGlmIChub2RlLl9wcmV2KSB7XHJcbiAgICAgIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGVhZCA9IG5vZGUuX25leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vZGUuX25leHQpIHtcclxuICAgICAgbm9kZS5fbmV4dC5fcHJldiA9IG5vZGUuX3ByZXY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90YWlsID0gbm9kZS5fcHJldjtcclxuICAgIH1cclxuXHJcbiAgICBub2RlLl9uZXh0ID0gbnVsbDtcclxuICAgIG5vZGUuX3ByZXYgPSBudWxsO1xyXG4gICAgdGhpcy5fcG9vbC5mcmVlKG5vZGUpO1xyXG4gICAgdGhpcy5fY291bnQgLT0gMTtcclxuICB9XHJcblxyXG4gIGZvckVhY2goZm4sIGJpbmRlcikge1xyXG4gICAgbGV0IGN1cnNvciA9IHRoaXMuX2hlYWQ7XHJcbiAgICBpZiAoIWN1cnNvcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRlcikge1xyXG4gICAgICBmbiA9IGZuLmJpbmQoYmluZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWR4ID0gMDtcclxuICAgIGxldCBuZXh0ID0gY3Vyc29yO1xyXG5cclxuICAgIHdoaWxlIChjdXJzb3IpIHtcclxuICAgICAgbmV4dCA9IGN1cnNvci5fbmV4dDtcclxuICAgICAgZm4oY3Vyc29yLCBpZHgsIHRoaXMpO1xyXG5cclxuICAgICAgY3Vyc29yID0gbmV4dDtcclxuICAgICAgKytpZHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3Bvb2wgPSByZXF1aXJlKCcuL3Bvb2wnKTtcblxudmFyIF9wb29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvb2wpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBOT1RFOiB5b3UgbXVzdCBoYXZlIGBfcHJldmAgYW5kIGBfbmV4dGAgZmllbGQgaW4gdGhlIG9iamVjdCByZXR1cm5zIGJ5IGBmbmBcblxudmFyIExpbmtlZEFycmF5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaW5rZWRBcnJheShmbiwgc2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rZWRBcnJheSk7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB0aGlzLl9oZWFkID0gbnVsbDtcbiAgICB0aGlzLl90YWlsID0gbnVsbDtcblxuICAgIHRoaXMuX3Bvb2wgPSBuZXcgX3Bvb2wyLmRlZmF1bHQoZm4sIHNpemUpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmtlZEFycmF5LCBbe1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5fcG9vbC5hbGxvYygpO1xuXG4gICAgICBpZiAoIXRoaXMuX3RhaWwpIHtcbiAgICAgICAgdGhpcy5faGVhZCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5fcHJldiA9IHRoaXMuX3RhaWw7XG4gICAgICB9XG4gICAgICB0aGlzLl90YWlsID0gbm9kZTtcbiAgICAgIHRoaXMuX2NvdW50ICs9IDE7XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5fcHJldikge1xuICAgICAgICBub2RlLl9wcmV2Ll9uZXh0ID0gbm9kZS5fbmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5fbmV4dCkge1xuICAgICAgICBub2RlLl9uZXh0Ll9wcmV2ID0gbm9kZS5fcHJldjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgfVxuXG4gICAgICBub2RlLl9uZXh0ID0gbnVsbDtcbiAgICAgIG5vZGUuX3ByZXYgPSBudWxsO1xuICAgICAgdGhpcy5fcG9vbC5mcmVlKG5vZGUpO1xuICAgICAgdGhpcy5fY291bnQgLT0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb3JFYWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaChmbiwgYmluZGVyKSB7XG4gICAgICB2YXIgY3Vyc29yID0gdGhpcy5faGVhZDtcbiAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpbmRlcikge1xuICAgICAgICBmbiA9IGZuLmJpbmQoYmluZGVyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICB2YXIgbmV4dCA9IGN1cnNvcjtcblxuICAgICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgICBuZXh0ID0gY3Vyc29yLl9uZXh0O1xuICAgICAgICBmbihjdXJzb3IsIGlkeCwgdGhpcyk7XG5cbiAgICAgICAgY3Vyc29yID0gbmV4dDtcbiAgICAgICAgKytpZHg7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGVhZCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faGVhZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0YWlsJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWlsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xlbmd0aCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbmtlZEFycmF5O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rZWRBcnJheTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW14cGJtdGxaQzFoY25KaGVTNXFjeUpkTENKdVlXMWxjeUk2V3lKTWFXNXJaV1JCY25KaGVTSXNJbVp1SWl3aWMybDZaU0lzSWw5bWJpSXNJbDlqYjNWdWRDSXNJbDlvWldGa0lpd2lYM1JoYVd3aUxDSmZjRzl2YkNJc0ltNXZaR1VpTENKaGJHeHZZeUlzSWw5dVpYaDBJaXdpWDNCeVpYWWlMQ0ptY21WbElpd2lZbWx1WkdWeUlpd2lZM1Z5YzI5eUlpd2lZbWx1WkNJc0ltbGtlQ0lzSW01bGVIUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVRkJPenM3T3pzN096dEJRVVZCT3p0SlFVVnhRa0VzVnp0QlFVTnVRaXgxUWtGQldVTXNSVUZCV2l4RlFVRm5Ra01zU1VGQmFFSXNSVUZCYzBJN1FVRkJRVHM3UVVGRGNFSXNVMEZCUzBNc1IwRkJUQ3hIUVVGWFJpeEZRVUZZTzBGQlEwRXNVMEZCUzBjc1RVRkJUQ3hIUVVGakxFTkJRV1E3UVVGRFFTeFRRVUZMUXl4TFFVRk1MRWRCUVdFc1NVRkJZanRCUVVOQkxGTkJRVXRETEV0QlFVd3NSMEZCWVN4SlFVRmlPenRCUVVWQkxGTkJRVXRETEV0QlFVd3NSMEZCWVN4dFFrRkJVMDRzUlVGQlZDeEZRVUZoUXl4SlFVRmlMRU5CUVdJN1FVRkRSRHM3T3pzd1FrRmpTenRCUVVOS0xGVkJRVWxOTEU5QlFVOHNTMEZCUzBRc1MwRkJUQ3hEUVVGWFJTeExRVUZZTEVWQlFWZzdPMEZCUlVFc1ZVRkJTU3hEUVVGRExFdEJRVXRJTEV0QlFWWXNSVUZCYVVJN1FVRkRaaXhoUVVGTFJDeExRVUZNTEVkQlFXRkhMRWxCUVdJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGhRVUZMUml4TFFVRk1MRU5CUVZkSkxFdEJRVmdzUjBGQmJVSkdMRWxCUVc1Q08wRkJRMEZCTEdGQlFVdEhMRXRCUVV3c1IwRkJZU3hMUVVGTFRDeExRVUZzUWp0QlFVTkVPMEZCUTBRc1YwRkJTMEVzUzBGQlRDeEhRVUZoUlN4SlFVRmlPMEZCUTBFc1YwRkJTMG9zVFVGQlRDeEpRVUZsTEVOQlFXWTdPMEZCUlVFc1lVRkJUMGtzU1VGQlVEdEJRVU5FT3pzN01rSkJSVTFCTEVrc1JVRkJUVHRCUVVOWUxGVkJRVWxCTEV0QlFVdEhMRXRCUVZRc1JVRkJaMEk3UVVGRFpFZ3NZVUZCUzBjc1MwRkJUQ3hEUVVGWFJDeExRVUZZTEVkQlFXMUNSaXhMUVVGTFJTeExRVUY0UWp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTUxHRkJRVXRNTEV0QlFVd3NSMEZCWVVjc1MwRkJTMFVzUzBGQmJFSTdRVUZEUkRzN1FVRkZSQ3hWUVVGSlJpeExRVUZMUlN4TFFVRlVMRVZCUVdkQ08wRkJRMlJHTEdGQlFVdEZMRXRCUVV3c1EwRkJWME1zUzBGQldDeEhRVUZ0UWtnc1MwRkJTMGNzUzBGQmVFSTdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hoUVVGTFRDeExRVUZNTEVkQlFXRkZMRXRCUVV0SExFdEJRV3hDTzBGQlEwUTdPMEZCUlVSSUxGZEJRVXRGTEV0QlFVd3NSMEZCWVN4SlFVRmlPMEZCUTBGR0xGZEJRVXRITEV0QlFVd3NSMEZCWVN4SlFVRmlPMEZCUTBFc1YwRkJTMG9zUzBGQlRDeERRVUZYU3l4SlFVRllMRU5CUVdkQ1NpeEpRVUZvUWp0QlFVTkJMRmRCUVV0S0xFMUJRVXdzU1VGQlpTeERRVUZtTzBGQlEwUTdPenMwUWtGRlQwZ3NSU3hGUVVGSldTeE5MRVZCUVZFN1FVRkRiRUlzVlVGQlNVTXNVMEZCVXl4TFFVRkxWQ3hMUVVGc1FqdEJRVU5CTEZWQlFVa3NRMEZCUTFNc1RVRkJUQ3hGUVVGaE8wRkJRMWc3UVVGRFJEczdRVUZGUkN4VlFVRkpSQ3hOUVVGS0xFVkJRVms3UVVGRFZsb3NZVUZCUzBFc1IwRkJSMk1zU1VGQlNDeERRVUZSUml4TlFVRlNMRU5CUVV3N1FVRkRSRHM3UVVGRlJDeFZRVUZKUnl4TlFVRk5MRU5CUVZZN1FVRkRRU3hWUVVGSlF5eFBRVUZQU0N4TlFVRllPenRCUVVWQkxHRkJRVTlCTEUxQlFWQXNSVUZCWlR0QlFVTmlSeXhsUVVGUFNDeFBRVUZQU2l4TFFVRmtPMEZCUTBGVUxGZEJRVWRoTEUxQlFVZ3NSVUZCVjBVc1IwRkJXQ3hGUVVGblFpeEpRVUZvUWpzN1FVRkZRVVlzYVVKQlFWTkhMRWxCUVZRN1FVRkRRU3hWUVVGRlJDeEhRVUZHTzBGQlEwUTdRVUZEUmpzN08zZENRV3hGVlR0QlFVTlVMR0ZCUVU4c1MwRkJTMWdzUzBGQldqdEJRVU5FT3pzN2QwSkJSVlU3UVVGRFZDeGhRVUZQTEV0QlFVdERMRXRCUVZvN1FVRkRSRHM3TzNkQ1FVVlpPMEZCUTFnc1lVRkJUeXhMUVVGTFJpeE5RVUZhTzBGQlEwUTdPenM3T3p0clFrRndRbXRDU2l4WElpd2labWxzWlNJNklteHBibXRsWkMxaGNuSmhlUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCUWIyOXNJR1p5YjIwZ0p5NHZjRzl2YkNjN1hISmNibHh5WEc0dkx5Qk9UMVJGT2lCNWIzVWdiWFZ6ZENCb1lYWmxJR0JmY0hKbGRtQWdZVzVrSUdCZmJtVjRkR0FnWm1sbGJHUWdhVzRnZEdobElHOWlhbVZqZENCeVpYUjFjbTV6SUdKNUlHQm1ibUJjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUV4cGJtdGxaRUZ5Y21GNUlIdGNjbHh1SUNCamIyNXpkSEoxWTNSdmNpaG1iaXdnYzJsNlpTa2dlMXh5WEc0Z0lDQWdkR2hwY3k1ZlptNGdQU0JtYmp0Y2NseHVJQ0FnSUhSb2FYTXVYMk52ZFc1MElEMGdNRHRjY2x4dUlDQWdJSFJvYVhNdVgyaGxZV1FnUFNCdWRXeHNPMXh5WEc0Z0lDQWdkR2hwY3k1ZmRHRnBiQ0E5SUc1MWJHdzdYSEpjYmx4eVhHNGdJQ0FnZEdocGN5NWZjRzl2YkNBOUlHNWxkeUJRYjI5c0tHWnVMQ0J6YVhwbEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHZGxkQ0JvWldGa0tDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJobFlXUTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQm5aWFFnZEdGcGJDZ3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5MFlXbHNPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdaMlYwSUd4bGJtZDBhQ2dwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWpiM1Z1ZER0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdGa1pDZ3BJSHRjY2x4dUlDQWdJR3hsZENCdWIyUmxJRDBnZEdocGN5NWZjRzl2YkM1aGJHeHZZeWdwTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2doZEdocGN5NWZkR0ZwYkNrZ2UxeHlYRzRnSUNBZ0lDQjBhR2x6TGw5b1pXRmtJRDBnYm05a1pUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lIUm9hWE11WDNSaGFXd3VYMjVsZUhRZ1BTQnViMlJsTzF4eVhHNGdJQ0FnSUNCdWIyUmxMbDl3Y21WMklEMGdkR2hwY3k1ZmRHRnBiRHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJSFJvYVhNdVgzUmhhV3dnUFNCdWIyUmxPMXh5WEc0Z0lDQWdkR2hwY3k1ZlkyOTFiblFnS3owZ01UdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdibTlrWlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGJXOTJaU2h1YjJSbEtTQjdYSEpjYmlBZ0lDQnBaaUFvYm05a1pTNWZjSEpsZGlrZ2UxeHlYRzRnSUNBZ0lDQnViMlJsTGw5d2NtVjJMbDl1WlhoMElEMGdibTlrWlM1ZmJtVjRkRHRjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJSFJvYVhNdVgyaGxZV1FnUFNCdWIyUmxMbDl1WlhoME8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNodWIyUmxMbDl1WlhoMEtTQjdYSEpjYmlBZ0lDQWdJRzV2WkdVdVgyNWxlSFF1WDNCeVpYWWdQU0J1YjJSbExsOXdjbVYyTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnZEdocGN5NWZkR0ZwYkNBOUlHNXZaR1V1WDNCeVpYWTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYm05a1pTNWZibVY0ZENBOUlHNTFiR3c3WEhKY2JpQWdJQ0J1YjJSbExsOXdjbVYySUQwZ2JuVnNiRHRjY2x4dUlDQWdJSFJvYVhNdVgzQnZiMnd1Wm5KbFpTaHViMlJsS1R0Y2NseHVJQ0FnSUhSb2FYTXVYMk52ZFc1MElDMDlJREU3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JtYjNKRllXTm9LR1p1TENCaWFXNWtaWElwSUh0Y2NseHVJQ0FnSUd4bGRDQmpkWEp6YjNJZ1BTQjBhR2x6TGw5b1pXRmtPMXh5WEc0Z0lDQWdhV1lnS0NGamRYSnpiM0lwSUh0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2hpYVc1a1pYSXBJSHRjY2x4dUlDQWdJQ0FnWm00Z1BTQm1iaTVpYVc1a0tHSnBibVJsY2lrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiR1YwSUdsa2VDQTlJREE3WEhKY2JpQWdJQ0JzWlhRZ2JtVjRkQ0E5SUdOMWNuTnZjanRjY2x4dVhISmNiaUFnSUNCM2FHbHNaU0FvWTNWeWMyOXlLU0I3WEhKY2JpQWdJQ0FnSUc1bGVIUWdQU0JqZFhKemIzSXVYMjVsZUhRN1hISmNiaUFnSUNBZ0lHWnVLR04xY25OdmNpd2dhV1I0TENCMGFHbHpLVHRjY2x4dVhISmNiaUFnSUNBZ0lHTjFjbk52Y2lBOUlHNWxlSFE3WEhKY2JpQWdJQ0FnSUNzcmFXUjRPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1ZlNKZGZRPT0iXX0=