(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/index.js';
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
        var _circularPool = require('./circular-pool');
        Object.defineProperty(exports, 'CircularPool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_circularPool).default;
            }
        });
        var _fixedArray = require('./fixed-array');
        Object.defineProperty(exports, 'FixedArray', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_fixedArray).default;
            }
        });
        var _linkedArray = require('./linked-array');
        Object.defineProperty(exports, 'LinkedArray', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_linkedArray).default;
            }
        });
        var _pool = require('./pool');
        Object.defineProperty(exports, 'Pool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_pool).default;
            }
        });
        var _recyclePool = require('./recycle-pool');
        Object.defineProperty(exports, 'RecyclePool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_recyclePool).default;
            }
        });
        var _typedArrayPool = require('./typed-array-pool');
        Object.defineProperty(exports, 'TypedArrayPool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_typedArrayPool).default;
            }
        });
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9tZW1vcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFTQTs7Ozs7OzsyREFDQUE7Ozs7Ozs7NERBQ0FBOzs7Ozs7O3FEQUNBQTs7Ozs7Ozs0REFDQUE7Ozs7Ozs7K0RBQ0FBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBDaXJjdWxhclBvb2wgfSBmcm9tICcuL2NpcmN1bGFyLXBvb2wnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpeGVkQXJyYXkgfSBmcm9tICcuL2ZpeGVkLWFycmF5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRBcnJheSB9IGZyb20gJy4vbGlua2VkLWFycmF5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb29sIH0gZnJvbSAnLi9wb29sJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWN5Y2xlUG9vbCB9IGZyb20gJy4vcmVjeWNsZS1wb29sJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBlZEFycmF5UG9vbCB9IGZyb20gJy4vdHlwZWQtYXJyYXktcG9vbCc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NpcmN1bGFyUG9vbCA9IHJlcXVpcmUoJy4vY2lyY3VsYXItcG9vbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NpcmN1bGFyUG9vbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmN1bGFyUG9vbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZml4ZWRBcnJheSA9IHJlcXVpcmUoJy4vZml4ZWQtYXJyYXknKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaXhlZEFycmF5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZml4ZWRBcnJheSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbGlua2VkQXJyYXkgPSByZXF1aXJlKCcuL2xpbmtlZC1hcnJheScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtlZEFycmF5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlua2VkQXJyYXkpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3Bvb2wgPSByZXF1aXJlKCcuL3Bvb2wnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQb29sJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9vbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfcmVjeWNsZVBvb2wgPSByZXF1aXJlKCcuL3JlY3ljbGUtcG9vbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlY3ljbGVQb29sJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjeWNsZVBvb2wpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3R5cGVkQXJyYXlQb29sID0gcmVxdWlyZSgnLi90eXBlZC1hcnJheS1wb29sJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnVHlwZWRBcnJheVBvb2wnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlZEFycmF5UG9vbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPMmxFUVVGVFFTeFBPenM3T3pzN096czdLME5CUTBGQkxFODdPenM3T3pzN096dG5SRUZEUVVFc1R6czdPenM3T3pzN08zbERRVU5CUVN4UE96czdPenM3T3pzN1owUkJRMEZCTEU4N096czdPenM3T3p0dFJFRkRRVUVzVHlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdRMmx5WTNWc1lYSlFiMjlzSUgwZ1puSnZiU0FuTGk5amFYSmpkV3hoY2kxd2IyOXNKenRjY2x4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QkdhWGhsWkVGeWNtRjVJSDBnWm5KdmJTQW5MaTltYVhobFpDMWhjbkpoZVNjN1hISmNibVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nVEdsdWEyVmtRWEp5WVhrZ2ZTQm1jbTl0SUNjdUwyeHBibXRsWkMxaGNuSmhlU2M3WEhKY2JtVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdVRzl2YkNCOUlHWnliMjBnSnk0dmNHOXZiQ2M3WEhKY2JtVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdVbVZqZVdOc1pWQnZiMndnZlNCbWNtOXRJQ2N1TDNKbFkzbGpiR1V0Y0c5dmJDYzdYSEpjYm1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1ZIbHdaV1JCY25KaGVWQnZiMndnZlNCbWNtOXRJQ2N1TDNSNWNHVmtMV0Z5Y21GNUxYQnZiMnduT3lKZGZRPT0iXX0=