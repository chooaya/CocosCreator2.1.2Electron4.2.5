(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/technique.js';
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
        var _config = require('../config');
        var _config2 = _interopRequireDefault(_config);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var _genID = 0;
        var Technique = function () {
            function Technique(stages, passes) {
                var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                _classCallCheck(this, Technique);
                this._id = _genID++;
                this._stageIDs = _config2.default.stageIDs(stages);
                this._passes = passes;
                this._layer = layer;
            }
            _createClass(Technique, [
                {
                    key: 'setStages',
                    value: function setStages(stages) {
                        this._stageIDs = _config2.default.stageIDs(stages);
                    }
                },
                {
                    key: 'passes',
                    get: function get() {
                        return this._passes;
                    }
                },
                {
                    key: 'stageIDs',
                    get: function get() {
                        return this._stageIDs;
                    }
                }
            ]);
            return Technique;
        }();
        exports.default = Technique;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2huaXF1ZS5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvY29yZS90ZWNobmlxdWUuanMiXSwibmFtZXMiOlsiX2dlbklEIiwiVGVjaG5pcXVlIiwic3RhZ2VzIiwicGFzc2VzIiwibGF5ZXIiLCJfaWQiLCJfc3RhZ2VJRHMiLCJzdGFnZUlEcyIsIl9wYXNzZXMiLCJfbGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFdBQUEsQ0FBQTs7Ozs7Ozs7OztRQUVBLElBQUlBLE1BQUFBLEdBQVMsQ0FBYjtZQUVxQkMsU0FBQUE7WUFNbkIsU0FBQSxTQUFBLENBQVlDLE1BQVosRUFBb0JDLE1BQXBCLEVBQXVDO0FBQUEsZ0JBQUEsSUFBWEMsS0FBQUEsR0FBVyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUgsQ0FBRyxDQUFBO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxTQUFBLEVBQUE7QUFBQSxnQkFDckMsS0FBS0MsR0FBTCxHQUFXTCxNQUFBQSxFQUFYLENBRHFDO0FBQUEsZ0JBRXJDLEtBQUtNLFNBQUwsR0FBaUIsUUFBQSxDQUFBLE9BQUEsQ0FBT0MsUUFBUCxDQUFnQkwsTUFBaEIsQ0FBakIsQ0FGcUM7QUFBQSxnQkFHckMsS0FBS00sT0FBTCxHQUFlTCxNQUFmLENBSHFDO0FBQUEsZ0JBSXJDLEtBQUtNLE1BQUwsR0FBY0wsS0FBZCxDQUpxQztBQUFBOzs7OzhDQVE3QkYsUUFBUTtBQUFBLHdCQUNoQixLQUFLSSxTQUFMLEdBQWlCLFFBQUEsQ0FBQSxPQUFBLENBQU9DLFFBQVAsQ0FBZ0JMLE1BQWhCLENBQWpCLENBRGdCO0FBQUE7Ozs7d0NBSUw7QUFBQSx3QkFDWCxPQUFPLEtBQUtNLE9BQVosQ0FEVztBQUFBOzs7O3dDQUlFO0FBQUEsd0JBQ2IsT0FBTyxLQUFLRixTQUFaLENBRGE7QUFBQTs7Ozs7MEJBdEJJTDs7Ozs7O1FBRnJCLGlCQUFBLENBQUEsa0JBQUEsQ0FBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLDREQUFBO0FBQUEsU0FBQSIsImZpbGUiOiJ0ZWNobmlxdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmxldCBfZ2VuSUQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVjaG5pcXVlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFnZXNcclxuICAgKiBAcGFyYW0ge0FycmF5fSBwYXNzZXNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbGF5ZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihzdGFnZXMsIHBhc3NlcywgbGF5ZXIgPSAwKSB7XHJcbiAgICB0aGlzLl9pZCA9IF9nZW5JRCsrO1xyXG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBjb25maWcuc3RhZ2VJRHMoc3RhZ2VzKTtcclxuICAgIHRoaXMuX3Bhc3NlcyA9IHBhc3NlcztcclxuICAgIHRoaXMuX2xheWVyID0gbGF5ZXI7XHJcbiAgICAvLyBUT0RPOiB0aGlzLl92ZXJzaW9uID0gJ3dlYmdsJyBvciAnd2ViZ2wyJyAvLyA/Pz8/XHJcbiAgfVxyXG5cclxuICBzZXRTdGFnZXMoc3RhZ2VzKSB7XHJcbiAgICB0aGlzLl9zdGFnZUlEcyA9IGNvbmZpZy5zdGFnZUlEcyhzdGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhZ2VJRHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhZ2VJRHM7XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxudmFyIF9jb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9nZW5JRCA9IDA7XG5cbnZhciBUZWNobmlxdWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN0YWdlc1xyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhc3Nlc1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsYXllclxyXG4gICAqL1xuICBmdW5jdGlvbiBUZWNobmlxdWUoc3RhZ2VzLCBwYXNzZXMpIHtcbiAgICB2YXIgbGF5ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVjaG5pcXVlKTtcblxuICAgIHRoaXMuX2lkID0gX2dlbklEKys7XG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBfY29uZmlnMi5kZWZhdWx0LnN0YWdlSURzKHN0YWdlcyk7XG4gICAgdGhpcy5fcGFzc2VzID0gcGFzc2VzO1xuICAgIHRoaXMuX2xheWVyID0gbGF5ZXI7XG4gICAgLy8gVE9ETzogdGhpcy5fdmVyc2lvbiA9ICd3ZWJnbCcgb3IgJ3dlYmdsMicgLy8gPz8/P1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRlY2huaXF1ZSwgW3tcbiAgICBrZXk6ICdzZXRTdGFnZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdGFnZXMoc3RhZ2VzKSB7XG4gICAgICB0aGlzLl9zdGFnZUlEcyA9IF9jb25maWcyLmRlZmF1bHQuc3RhZ2VJRHMoc3RhZ2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXNzZXMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Bhc3NlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGFnZUlEcycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhZ2VJRHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRlY2huaXF1ZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVjaG5pcXVlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblJsWTJodWFYRjFaUzVxY3lKZExDSnVZVzFsY3lJNld5SmZaMlZ1U1VRaUxDSlVaV05vYm1seGRXVWlMQ0p6ZEdGblpYTWlMQ0p3WVhOelpYTWlMQ0pzWVhsbGNpSXNJbDlwWkNJc0lsOXpkR0ZuWlVsRWN5SXNJbk4wWVdkbFNVUnpJaXdpWDNCaGMzTmxjeUlzSWw5c1lYbGxjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0eGFrSkJRVUU3TzBGQlJVRTdPenM3T3pzN08wRkJSVUVzU1VGQlNVRXNVMEZCVXl4RFFVRmlPenRKUVVWeFFrTXNVenRCUVVOdVFqczdPenM3UVVGTFFTeHhRa0ZCV1VNc1RVRkJXaXhGUVVGdlFrTXNUVUZCY0VJc1JVRkJkVU03UVVGQlFTeFJRVUZZUXl4TFFVRlhMSFZGUVVGSUxFTkJRVWM3TzBGQlFVRTdPMEZCUTNKRExGTkJRVXRETEVkQlFVd3NSMEZCVjB3c1VVRkJXRHRCUVVOQkxGTkJRVXROTEZOQlFVd3NSMEZCYVVJc2FVSkJRVTlETEZGQlFWQXNRMEZCWjBKTUxFMUJRV2hDTEVOQlFXcENPMEZCUTBFc1UwRkJTMDBzVDBGQlRDeEhRVUZsVEN4TlFVRm1PMEZCUTBFc1UwRkJTMDBzVFVGQlRDeEhRVUZqVEN4TFFVRmtPMEZCUTBFN1FVRkRSRHM3T3pzNFFrRkZVMFlzVFN4RlFVRlJPMEZCUTJoQ0xGZEJRVXRKTEZOQlFVd3NSMEZCYVVJc2FVSkJRVTlETEZGQlFWQXNRMEZCWjBKTUxFMUJRV2hDTEVOQlFXcENPMEZCUTBRN096dDNRa0ZGV1R0QlFVTllMR0ZCUVU4c1MwRkJTMDBzVDBGQldqdEJRVU5FT3pzN2QwSkJSV003UVVGRFlpeGhRVUZQTEV0QlFVdEdMRk5CUVZvN1FVRkRSRHM3T3pzN08ydENRWGhDYTBKTUxGTWlMQ0ptYVd4bElqb2lkR1ZqYUc1cGNYVmxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYSEpjYmx4eVhHNXBiWEJ2Y25RZ1kyOXVabWxuSUdaeWIyMGdKeTR1TDJOdmJtWnBaeWM3WEhKY2JseHlYRzVzWlhRZ1gyZGxia2xFSUQwZ01EdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJsWTJodWFYRjFaU0I3WEhKY2JpQWdMeW9xWEhKY2JpQWdJQ29nUUhCaGNtRnRJSHRCY25KaGVYMGdjM1JoWjJWelhISmNiaUFnSUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWDBnY0dGemMyVnpYSEpjYmlBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHeGhlV1Z5WEhKY2JpQWdJQ292WEhKY2JpQWdZMjl1YzNSeWRXTjBiM0lvYzNSaFoyVnpMQ0J3WVhOelpYTXNJR3hoZVdWeUlEMGdNQ2tnZTF4eVhHNGdJQ0FnZEdocGN5NWZhV1FnUFNCZloyVnVTVVFyS3p0Y2NseHVJQ0FnSUhSb2FYTXVYM04wWVdkbFNVUnpJRDBnWTI5dVptbG5Mbk4wWVdkbFNVUnpLSE4wWVdkbGN5azdYSEpjYmlBZ0lDQjBhR2x6TGw5d1lYTnpaWE1nUFNCd1lYTnpaWE03WEhKY2JpQWdJQ0IwYUdsekxsOXNZWGxsY2lBOUlHeGhlV1Z5TzF4eVhHNGdJQ0FnTHk4Z1ZFOUVUem9nZEdocGN5NWZkbVZ5YzJsdmJpQTlJQ2QzWldKbmJDY2diM0lnSjNkbFltZHNNaWNnTHk4Z1B6OC9QMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjMlYwVTNSaFoyVnpLSE4wWVdkbGN5a2dlMXh5WEc0Z0lDQWdkR2hwY3k1ZmMzUmhaMlZKUkhNZ1BTQmpiMjVtYVdjdWMzUmhaMlZKUkhNb2MzUmhaMlZ6S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdkbGRDQndZWE56WlhNb0tTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmY0dGemMyVnpPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdaMlYwSUhOMFlXZGxTVVJ6S0NrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM04wWVdkbFNVUnpPMXh5WEc0Z0lIMWNjbHh1ZlNKZGZRPT0iXX0=