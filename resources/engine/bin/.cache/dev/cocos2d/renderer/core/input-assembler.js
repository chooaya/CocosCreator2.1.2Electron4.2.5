(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/input-assembler.js';
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
        var _gfx = require('../gfx');
        var _gfx2 = _interopRequireDefault(_gfx);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var InputAssembler = function () {
            function InputAssembler(vb, ib) {
                var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _gfx2.default.PT_TRIANGLES;
                _classCallCheck(this, InputAssembler);
                this._vertexBuffer = vb;
                this._indexBuffer = ib;
                this._primitiveType = pt;
                this._start = 0;
                this._count = -1;
            }
            _createClass(InputAssembler, [{
                    key: 'count',
                    get: function get() {
                        if (this._count !== -1) {
                            return this._count;
                        }
                        if (this._indexBuffer) {
                            return this._indexBuffer.count;
                        }
                        return this._vertexBuffer.count;
                    }
                }]);
            return InputAssembler;
        }();
        exports.default = InputAssembler;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWFzc2VtYmxlci5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvY29yZS9pbnB1dC1hc3NlbWJsZXIuanMiXSwibmFtZXMiOlsiSW5wdXRBc3NlbWJsZXIiLCJ2YiIsImliIiwicHQiLCJQVF9UUklBTkdMRVMiLCJfdmVydGV4QnVmZmVyIiwiX2luZGV4QnVmZmVyIiwiX3ByaW1pdGl2ZVR5cGUiLCJfc3RhcnQiLCJfY291bnQiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOzs7Ozs7Ozs7O1lBRXFCQSxjQUFBQTtZQUNuQixTQUFBLGNBQUEsQ0FBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBMkM7QUFBQSxnQkFBQSxJQUF2QkMsRUFBQUEsR0FBdUIsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFsQixLQUFBLENBQUEsT0FBQSxDQUFJQyxZQUFjLENBQUE7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLGNBQUEsRUFBQTtBQUFBLGdCQUN6QyxLQUFLQyxhQUFMLEdBQXFCSixFQUFyQixDQUR5QztBQUFBLGdCQUV6QyxLQUFLSyxZQUFMLEdBQW9CSixFQUFwQixDQUZ5QztBQUFBLGdCQUd6QyxLQUFLSyxjQUFMLEdBQXNCSixFQUF0QixDQUh5QztBQUFBLGdCQUl6QyxLQUFLSyxNQUFMLEdBQWMsQ0FBZCxDQUp5QztBQUFBLGdCQUt6QyxLQUFLQyxNQUFMLEdBQWMsQ0FBQyxDQUFmLENBTHlDO0FBQUE7Ozt3Q0FjL0I7QUFBQSx3QkFDVixJQUFJLEtBQUtBLE1BQUwsS0FBZ0IsQ0FBQyxDQUFyQixFQUF3QjtBQUFBLDRCQUN0QixPQUFPLEtBQUtBLE1BQVosQ0FEc0I7QUFBQSx5QkFEZDtBQUFBLHdCQUtWLElBQUksS0FBS0gsWUFBVCxFQUF1QjtBQUFBLDRCQUNyQixPQUFPLEtBQUtBLFlBQUwsQ0FBa0JJLEtBQXpCLENBRHFCO0FBQUEseUJBTGI7QUFBQSx3QkFTVixPQUFPLEtBQUtMLGFBQUwsQ0FBbUJLLEtBQTFCLENBVFU7QUFBQTs7OzswQkFmT1Y7Ozs7Ozs7WUFDbkIsUUFBQSxDQUEyQyxRQUFBLENBQUEsT0FBM0MsRUFBMkMsU0FBM0MsRUFBMkMsUUFBM0MiLCJmaWxlIjoiaW5wdXQtYXNzZW1ibGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG5pbXBvcnQgZ2Z4IGZyb20gJy4uL2dmeCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEFzc2VtYmxlciB7XHJcbiAgY29uc3RydWN0b3IodmIsIGliLCBwdCA9IGdmeC5QVF9UUklBTkdMRVMpIHtcclxuICAgIHRoaXMuX3ZlcnRleEJ1ZmZlciA9IHZiO1xyXG4gICAgdGhpcy5faW5kZXhCdWZmZXIgPSBpYjtcclxuICAgIHRoaXMuX3ByaW1pdGl2ZVR5cGUgPSBwdDtcclxuICAgIHRoaXMuX3N0YXJ0ID0gMDtcclxuICAgIHRoaXMuX2NvdW50ID0gLTE7XHJcblxyXG4gICAgLy8gVE9ETzogaW5zdGFuY2luZyBkYXRhXHJcbiAgICAvLyB0aGlzLl9zdHJlYW0gPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgaW5kaWNlcyBvciB2ZXJ0aWNlcyB0byBkaXNwYXRjaCBpbiB0aGUgZHJhdyBjYWxsLlxyXG4gICAqL1xyXG4gIGdldCBjb3VudCgpIHtcclxuICAgIGlmICh0aGlzLl9jb3VudCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9pbmRleEJ1ZmZlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5faW5kZXhCdWZmZXIuY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRleEJ1ZmZlci5jb3VudDtcclxuICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG52YXIgX2dmeCA9IHJlcXVpcmUoJy4uL2dmeCcpO1xuXG52YXIgX2dmeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZngpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSW5wdXRBc3NlbWJsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIElucHV0QXNzZW1ibGVyKHZiLCBpYikge1xuICAgIHZhciBwdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogX2dmeDIuZGVmYXVsdC5QVF9UUklBTkdMRVM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXRBc3NlbWJsZXIpO1xuXG4gICAgdGhpcy5fdmVydGV4QnVmZmVyID0gdmI7XG4gICAgdGhpcy5faW5kZXhCdWZmZXIgPSBpYjtcbiAgICB0aGlzLl9wcmltaXRpdmVUeXBlID0gcHQ7XG4gICAgdGhpcy5fc3RhcnQgPSAwO1xuICAgIHRoaXMuX2NvdW50ID0gLTE7XG5cbiAgICAvLyBUT0RPOiBpbnN0YW5jaW5nIGRhdGFcbiAgICAvLyB0aGlzLl9zdHJlYW0gPSAwO1xuICB9XG5cbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgaW5kaWNlcyBvciB2ZXJ0aWNlcyB0byBkaXNwYXRjaCBpbiB0aGUgZHJhdyBjYWxsLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0QXNzZW1ibGVyLCBbe1xuICAgIGtleTogJ2NvdW50JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb3VudCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faW5kZXhCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4QnVmZmVyLmNvdW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fdmVydGV4QnVmZmVyLmNvdW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dEFzc2VtYmxlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXRBc3NlbWJsZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVjSFYwTFdGemMyVnRZbXhsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpKYm5CMWRFRnpjMlZ0WW14bGNpSXNJblppSWl3aWFXSWlMQ0p3ZENJc0lsQlVYMVJTU1VGT1IweEZVeUlzSWw5MlpYSjBaWGhDZFdabVpYSWlMQ0pmYVc1a1pYaENkV1ptWlhJaUxDSmZjSEpwYldsMGFYWmxWSGx3WlNJc0lsOXpkR0Z5ZENJc0lsOWpiM1Z1ZENJc0ltTnZkVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRnFRa0ZCUVRzN1FVRkZRVHM3T3pzN096czdTVUZGY1VKQkxHTTdRVUZEYmtJc01FSkJRVmxETEVWQlFWb3NSVUZCWjBKRExFVkJRV2hDTEVWQlFUSkRPMEZCUVVFc1VVRkJka0pETEVWQlFYVkNMSFZGUVVGc1FpeGpRVUZKUXl4WlFVRmpPenRCUVVGQk96dEJRVU42UXl4VFFVRkxReXhoUVVGTUxFZEJRWEZDU2l4RlFVRnlRanRCUVVOQkxGTkJRVXRMTEZsQlFVd3NSMEZCYjBKS0xFVkJRWEJDTzBGQlEwRXNVMEZCUzBzc1kwRkJUQ3hIUVVGelFrb3NSVUZCZEVJN1FVRkRRU3hUUVVGTFN5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkJMRk5CUVV0RExFMUJRVXdzUjBGQll5eERRVUZETEVOQlFXWTdPMEZCUlVFN1FVRkRRVHRCUVVORU96dEJRVVZFT3pzN096czdPM2RDUVVkWk8wRkJRMVlzVlVGQlNTeExRVUZMUVN4TlFVRk1MRXRCUVdkQ0xFTkJRVU1zUTBGQmNrSXNSVUZCZDBJN1FVRkRkRUlzWlVGQlR5eExRVUZMUVN4TlFVRmFPMEZCUTBRN08wRkJSVVFzVlVGQlNTeExRVUZMU0N4WlFVRlVMRVZCUVhWQ08wRkJRM0pDTEdWQlFVOHNTMEZCUzBFc1dVRkJUQ3hEUVVGclFra3NTMEZCZWtJN1FVRkRSRHM3UVVGRlJDeGhRVUZQTEV0QlFVdE1MR0ZCUVV3c1EwRkJiVUpMTEV0QlFURkNPMEZCUTBRN096czdPenRyUWtGNlFtdENWaXhqSWl3aVptbHNaU0k2SW1sdWNIVjBMV0Z6YzJWdFlteGxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh5WEc1Y2NseHVhVzF3YjNKMElHZG1lQ0JtY205dElDY3VMaTluWm5nbk8xeHlYRzVjY2x4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdTVzV3ZFhSQmMzTmxiV0pzWlhJZ2UxeHlYRzRnSUdOdmJuTjBjblZqZEc5eUtIWmlMQ0JwWWl3Z2NIUWdQU0JuWm5ndVVGUmZWRkpKUVU1SFRFVlRLU0I3WEhKY2JpQWdJQ0IwYUdsekxsOTJaWEowWlhoQ2RXWm1aWElnUFNCMllqdGNjbHh1SUNBZ0lIUm9hWE11WDJsdVpHVjRRblZtWm1WeUlEMGdhV0k3WEhKY2JpQWdJQ0IwYUdsekxsOXdjbWx0YVhScGRtVlVlWEJsSUQwZ2NIUTdYSEpjYmlBZ0lDQjBhR2x6TGw5emRHRnlkQ0E5SURBN1hISmNiaUFnSUNCMGFHbHpMbDlqYjNWdWRDQTlJQzB4TzF4eVhHNWNjbHh1SUNBZ0lDOHZJRlJQUkU4NklHbHVjM1JoYm1OcGJtY2daR0YwWVZ4eVhHNGdJQ0FnTHk4Z2RHaHBjeTVmYzNSeVpXRnRJRDBnTUR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4cUtseHlYRzRnSUNBcUlFQndjbTl3WlhKMGVTQjdUblZ0WW1WeWZTQmpiM1Z1ZENCVWFHVWdiblZ0WW1WeUlHOW1JR2x1WkdsalpYTWdiM0lnZG1WeWRHbGpaWE1nZEc4Z1pHbHpjR0YwWTJnZ2FXNGdkR2hsSUdSeVlYY2dZMkZzYkM1Y2NseHVJQ0FnS2k5Y2NseHVJQ0JuWlhRZ1kyOTFiblFvS1NCN1hISmNiaUFnSUNCcFppQW9kR2hwY3k1ZlkyOTFiblFnSVQwOUlDMHhLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWpiM1Z1ZER0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvZEdocGN5NWZhVzVrWlhoQ2RXWm1aWElwSUh0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMmx1WkdWNFFuVm1abVZ5TG1OdmRXNTBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTJaWEowWlhoQ2RXWm1aWEl1WTI5MWJuUTdYSEpjYmlBZ2ZWeHlYRzU5SWwxOSJdfQ==