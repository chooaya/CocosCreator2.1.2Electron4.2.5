(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/3d/primitive/cone.js';
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
        exports.default = function () {
            var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return (0, _cylinder2.default)(0, radius, height, opts);
        };
        var _cylinder = require('./cylinder');
        var _cylinder2 = _interopRequireDefault(_cylinder);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmUuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL2NvcmUvM2QvcHJpbWl0aXZlL2NvbmUuanMiXSwibmFtZXMiOlsicmFkaXVzIiwiaGVpZ2h0Iiwib3B0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhZSxPQUErQyxPQUFBLENBQUEsT0FBQSxDQUEvQztRQUErQyxVQUFBLE9BQUEsRUFBQTtBQUFBLFFBQUEsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBLENBQUE7QUFBQTs7UUFDckQsSUFBQSxDQUFBLE9BQUEsRUFBWUE7QUFBQUEsWUFBQUEsaUJBQUFBLENBQW5CLGNBQW1CQSxDQUFuQixVQUFtQkEsRUFBbkIsTUFBbUJBLEVBQUFBO0FBQUFBO1FBZHJCO0FBQUEsc0VBQUE7QUFBQSwwQkFhZSxZQUErQztBQUFBLFlBQUEsSUFBckNBLE1BQUFBLEdBQXFDLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBNUIsR0FBNEIsQ0FBQTtBQUFBLFlBQUEsSUFBdkJDLE1BQUFBLEdBQXVCLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBZCxDQUFjLENBQUE7QUFBQSxZQUFBLElBQVhDLElBQUFBLEdBQVcsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFKLEVBQUksQ0FBQTtBQUFBLFlBQzVELE9BQU8sSUFBQSxVQUFBLENBQUEsT0FBQSxDQUFBLENBQVMsQ0FBVCxFQUFZRixNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsSUFBNUIsQ0FBUCxDQUQ0RDtBQUFBLFVBYjlEO0FBQUEsUUFFQSxJQUFBLFNBQUEsR0FBQSxPQUFBLENBQUEsWUFBQSxDQUFBLENBRkE7QUFBQSwyREFBQTtBQUFBOztTQUFBO0FBQUE7OztRQUVBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBIiwiZmlsZSI6ImNvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY3lsaW5kZXIgZnJvbSAnLi9jeWxpbmRlcic7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xyXG4gKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLmhlaWdodFNlZ21lbnRzXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0cy5jYXBwZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmFkaXVzID0gMC41LCBoZWlnaHQgPSAxLCBvcHRzID0ge30pIHtcclxuICByZXR1cm4gY3lsaW5kZXIoMCwgcmFkaXVzLCBoZWlnaHQsIG9wdHMpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmFkaXVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwLjU7XG4gIHZhciBoZWlnaHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICByZXR1cm4gKDAsIF9jeWxpbmRlcjIuZGVmYXVsdCkoMCwgcmFkaXVzLCBoZWlnaHQsIG9wdHMpO1xufTtcblxudmFyIF9jeWxpbmRlciA9IHJlcXVpcmUoJy4vY3lsaW5kZXInKTtcblxudmFyIF9jeWxpbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jeWxpbmRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKipcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xyXG4gKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLmhlaWdodFNlZ21lbnRzXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0cy5jYXBwZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXHJcbiAqL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OdmJtVXVhbk1pWFN3aWJtRnRaWE1pT2xzaWNtRmthWFZ6SWl3aWFHVnBaMmgwSWl3aWIzQjBjeUpkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096dHJRa0ZoWlN4WlFVRXJRenRCUVVGQkxFMUJRWEpEUVN4TlFVRnhReXgxUlVGQk5VSXNSMEZCTkVJN1FVRkJRU3hOUVVGMlFrTXNUVUZCZFVJc2RVVkJRV1FzUTBGQll6dEJRVUZCTEUxQlFWaERMRWxCUVZjc2RVVkJRVW9zUlVGQlNUczdRVUZETlVRc1UwRkJUeXgzUWtGQlV5eERRVUZVTEVWQlFWbEdMRTFCUVZvc1JVRkJiMEpETEUxQlFYQkNMRVZCUVRSQ1F5eEpRVUUxUWl4RFFVRlFPMEZCUTBRc1F6czdRVUZpUkRzN096czdPenM3UVVGRlFTSXNJbVpwYkdVaU9pSmpiMjVsTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lKM1Z6WlNCemRISnBZM1FuTzF4eVhHNWNjbHh1YVcxd2IzSjBJR041YkdsdVpHVnlJR1p5YjIwZ0p5NHZZM2xzYVc1a1pYSW5PMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnlZV1JwZFhOY2NseHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJR2hsYVdkb2RGeHlYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjNCMGMxeHlYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NXlZV1JwWVd4VFpXZHRaVzUwYzF4eVhHNGdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdiM0IwY3k1b1pXbG5hSFJUWldkdFpXNTBjMXh5WEc0Z0tpQkFjR0Z5WVcwZ2UwSnZiMnhsWVc1OUlHOXdkSE11WTJGd2NHVmtYSEpjYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCdmNIUnpMbUZ5WTF4eVhHNGdLaTljY2x4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0hKaFpHbDFjeUE5SURBdU5Td2dhR1ZwWjJoMElEMGdNU3dnYjNCMGN5QTlJSHQ5S1NCN1hISmNiaUFnY21WMGRYSnVJR041YkdsdVpHVnlLREFzSUhKaFpHbDFjeXdnYUdWcFoyaDBMQ0J2Y0hSektUdGNjbHh1ZlZ4eVhHNGlYWDA9Il19