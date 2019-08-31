(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/frame-buffer.js';
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
        var FrameBuffer = function () {
            function FrameBuffer(device, width, height, options) {
                _classCallCheck(this, FrameBuffer);
                this._device = device;
                this._width = width;
                this._height = height;
                this._colors = options.colors || [];
                this._depth = options.depth || null;
                this._stencil = options.stencil || null;
                this._depthStencil = options.depthStencil || null;
                this._glID = device._gl.createFramebuffer();
            }
            _createClass(FrameBuffer, [{
                    key: 'destroy',
                    value: function destroy() {
                        if (this._glID === null) {
                            console.error('The frame-buffer already destroyed');
                            return;
                        }
                        var gl = this._device._gl;
                        gl.deleteFramebuffer(this._glID);
                        this._glID = null;
                    }
                }]);
            return FrameBuffer;
        }();
        exports.default = FrameBuffer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLWJ1ZmZlci5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvZ2Z4L2ZyYW1lLWJ1ZmZlci5qcyJdLCJuYW1lcyI6WyJGcmFtZUJ1ZmZlciIsImRldmljZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsIl9kZXZpY2UiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2NvbG9ycyIsImNvbG9ycyIsIl9kZXB0aCIsImRlcHRoIiwiX3N0ZW5jaWwiLCJzdGVuY2lsIiwiX2RlcHRoU3RlbmNpbCIsImRlcHRoU3RlbmNpbCIsIl9nbElEIiwiX2dsIiwiY3JlYXRlRnJhbWVidWZmZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJnbCIsImRlbGV0ZUZyYW1lYnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBQ0UsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFEbUJBLFdBQUFBO1lBWW5CLFNBQUEsV0FBQSxDQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxXQUFBLEVBQUE7QUFBQSxnQkFDMUMsS0FBS0MsT0FBTCxHQUFlSixNQUFmLENBRDBDO0FBQUEsZ0JBRTFDLEtBQUtLLE1BQUwsR0FBY0osS0FBZCxDQUYwQztBQUFBLGdCQUcxQyxLQUFLSyxPQUFMLEdBQWVKLE1BQWYsQ0FIMEM7QUFBQSxnQkFLMUMsS0FBS0ssT0FBTCxHQUFlSixPQUFBQSxDQUFRSyxNQUFSTCxJQUFrQixFQUFqQyxDQUwwQztBQUFBLGdCQU0xQyxLQUFLTSxNQUFMLEdBQWNOLE9BQUFBLENBQVFPLEtBQVJQLElBQWlCLElBQS9CLENBTjBDO0FBQUEsZ0JBTzFDLEtBQUtRLFFBQUwsR0FBZ0JSLE9BQUFBLENBQVFTLE9BQVJULElBQW1CLElBQW5DLENBUDBDO0FBQUEsZ0JBUTFDLEtBQUtVLGFBQUwsR0FBcUJWLE9BQUFBLENBQVFXLFlBQVJYLElBQXdCLElBQTdDLENBUjBDO0FBQUEsZ0JBVTFDLEtBQUtZLEtBQUwsR0FBYWYsTUFBQUEsQ0FBT2dCLEdBQVBoQixDQUFXaUIsaUJBQVhqQixFQUFiLENBVjBDO0FBQUE7Ozs4Q0FnQmxDO0FBQUEsd0JBQ1IsSUFBSSxLQUFLZSxLQUFMLEtBQWUsSUFBbkIsRUFBeUI7QUFBQSw0QkFDdkJHLE9BQUFBLENBQVFDLEtBQVJELENBQWMsb0NBQWRBLEVBRHVCO0FBQUEsNEJBRXZCLE9BRnVCO0FBQUEseUJBRGpCO0FBQUEsd0JBTVIsSUFBTUUsRUFBQUEsR0FBSyxLQUFLaEIsT0FBTCxDQUFhWSxHQUF4QixDQU5RO0FBQUEsd0JBUVJJLEVBQUFBLENBQUdDLGlCQUFIRCxDQUFxQixLQUFLTCxLQUExQkssRUFSUTtBQUFBLHdCQVVSLEtBQUtMLEtBQUwsR0FBYSxJQUFiLENBVlE7QUFBQTs7OzswQkE1QlNoQiIsImZpbGUiOiJmcmFtZS1idWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUJ1ZmZlciB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtEZXZpY2V9IGRldmljZVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMuY29sb3JzXHJcbiAgICogQHBhcmFtIHtSZW5kZXJCdWZmZXJ8VGV4dHVyZTJEfFRleHR1cmVDdWJlfSBvcHRpb25zLmRlcHRoXHJcbiAgICogQHBhcmFtIHtSZW5kZXJCdWZmZXJ8VGV4dHVyZTJEfFRleHR1cmVDdWJlfSBvcHRpb25zLnN0ZW5jaWxcclxuICAgKiBAcGFyYW0ge1JlbmRlckJ1ZmZlcnxUZXh0dXJlMkR8VGV4dHVyZUN1YmV9IG9wdGlvbnMuZGVwdGhTdGVuY2lsXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZGV2aWNlLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLl9kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuX2NvbG9ycyA9IG9wdGlvbnMuY29sb3JzIHx8IFtdO1xyXG4gICAgdGhpcy5fZGVwdGggPSBvcHRpb25zLmRlcHRoIHx8IG51bGw7XHJcbiAgICB0aGlzLl9zdGVuY2lsID0gb3B0aW9ucy5zdGVuY2lsIHx8IG51bGw7XHJcbiAgICB0aGlzLl9kZXB0aFN0ZW5jaWwgPSBvcHRpb25zLmRlcHRoU3RlbmNpbCB8fCBudWxsO1xyXG5cclxuICAgIHRoaXMuX2dsSUQgPSBkZXZpY2UuX2dsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX2dsSUQgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlIGZyYW1lLWJ1ZmZlciBhbHJlYWR5IGRlc3Ryb3llZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2wgPSB0aGlzLl9kZXZpY2UuX2dsO1xyXG5cclxuICAgIGdsLmRlbGV0ZUZyYW1lYnVmZmVyKHRoaXMuX2dsSUQpO1xyXG5cclxuICAgIHRoaXMuX2dsSUQgPSBudWxsO1xyXG4gIH1cclxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEZyYW1lQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge0RldmljZX0gZGV2aWNlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5jb2xvcnNcclxuICAgKiBAcGFyYW0ge1JlbmRlckJ1ZmZlcnxUZXh0dXJlMkR8VGV4dHVyZUN1YmV9IG9wdGlvbnMuZGVwdGhcclxuICAgKiBAcGFyYW0ge1JlbmRlckJ1ZmZlcnxUZXh0dXJlMkR8VGV4dHVyZUN1YmV9IG9wdGlvbnMuc3RlbmNpbFxyXG4gICAqIEBwYXJhbSB7UmVuZGVyQnVmZmVyfFRleHR1cmUyRHxUZXh0dXJlQ3ViZX0gb3B0aW9ucy5kZXB0aFN0ZW5jaWxcclxuICAgKi9cbiAgZnVuY3Rpb24gRnJhbWVCdWZmZXIoZGV2aWNlLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYW1lQnVmZmVyKTtcblxuICAgIHRoaXMuX2RldmljZSA9IGRldmljZTtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMuX2NvbG9ycyA9IG9wdGlvbnMuY29sb3JzIHx8IFtdO1xuICAgIHRoaXMuX2RlcHRoID0gb3B0aW9ucy5kZXB0aCB8fCBudWxsO1xuICAgIHRoaXMuX3N0ZW5jaWwgPSBvcHRpb25zLnN0ZW5jaWwgfHwgbnVsbDtcbiAgICB0aGlzLl9kZXB0aFN0ZW5jaWwgPSBvcHRpb25zLmRlcHRoU3RlbmNpbCB8fCBudWxsO1xuXG4gICAgdGhpcy5fZ2xJRCA9IGRldmljZS5fZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEZyYW1lQnVmZmVyLCBbe1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgaWYgKHRoaXMuX2dsSUQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIGZyYW1lLWJ1ZmZlciBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBnbCA9IHRoaXMuX2RldmljZS5fZ2w7XG5cbiAgICAgIGdsLmRlbGV0ZUZyYW1lYnVmZmVyKHRoaXMuX2dsSUQpO1xuXG4gICAgICB0aGlzLl9nbElEID0gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRnJhbWVCdWZmZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZyYW1lQnVmZmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVp5WVcxbExXSjFabVpsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpHY21GdFpVSjFabVpsY2lJc0ltUmxkbWxqWlNJc0luZHBaSFJvSWl3aWFHVnBaMmgwSWl3aWIzQjBhVzl1Y3lJc0lsOWtaWFpwWTJVaUxDSmZkMmxrZEdnaUxDSmZhR1ZwWjJoMElpd2lYMk52Ykc5eWN5SXNJbU52Ykc5eWN5SXNJbDlrWlhCMGFDSXNJbVJsY0hSb0lpd2lYM04wWlc1amFXd2lMQ0p6ZEdWdVkybHNJaXdpWDJSbGNIUm9VM1JsYm1OcGJDSXNJbVJsY0hSb1UzUmxibU5wYkNJc0lsOW5iRWxFSWl3aVgyZHNJaXdpWTNKbFlYUmxSbkpoYldWaWRXWm1aWElpTENKamIyNXpiMnhsSWl3aVpYSnliM0lpTENKbmJDSXNJbVJsYkdWMFpVWnlZVzFsWW5WbVptVnlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wbEJRWEZDUVN4WE8wRkJRMjVDT3pzN096czdPenM3T3p0QlFWZEJMSFZDUVVGWlF5eE5RVUZhTEVWQlFXOUNReXhMUVVGd1FpeEZRVUV5UWtNc1RVRkJNMElzUlVGQmJVTkRMRTlCUVc1RExFVkJRVFJETzBGQlFVRTdPMEZCUXpGRExGTkJRVXRETEU5QlFVd3NSMEZCWlVvc1RVRkJaanRCUVVOQkxGTkJRVXRMTEUxQlFVd3NSMEZCWTBvc1MwRkJaRHRCUVVOQkxGTkJRVXRMTEU5QlFVd3NSMEZCWlVvc1RVRkJaanM3UVVGRlFTeFRRVUZMU3l4UFFVRk1MRWRCUVdWS0xGRkJRVkZMTEUxQlFWSXNTVUZCYTBJc1JVRkJha003UVVGRFFTeFRRVUZMUXl4TlFVRk1MRWRCUVdOT0xGRkJRVkZQTEV0QlFWSXNTVUZCYVVJc1NVRkJMMEk3UVVGRFFTeFRRVUZMUXl4UlFVRk1MRWRCUVdkQ1VpeFJRVUZSVXl4UFFVRlNMRWxCUVcxQ0xFbEJRVzVETzBGQlEwRXNVMEZCUzBNc1lVRkJUQ3hIUVVGeFFsWXNVVUZCVVZjc1dVRkJVaXhKUVVGM1FpeEpRVUUzUXpzN1FVRkZRU3hUUVVGTFF5eExRVUZNTEVkQlFXRm1MRTlCUVU5blFpeEhRVUZRTEVOQlFWZERMR2xDUVVGWUxFVkJRV0k3UVVGRFJEczdRVUZGUkRzN096czdPenM0UWtGSFZUdEJRVU5TTEZWQlFVa3NTMEZCUzBZc1MwRkJUQ3hMUVVGbExFbEJRVzVDTEVWQlFYbENPMEZCUTNaQ1J5eG5Ra0ZCVVVNc1MwRkJVaXhEUVVGakxHOURRVUZrTzBGQlEwRTdRVUZEUkRzN1FVRkZSQ3hWUVVGTlF5eExRVUZMTEV0QlFVdG9RaXhQUVVGTUxFTkJRV0ZaTEVkQlFYaENPenRCUVVWQlNTeFRRVUZIUXl4cFFrRkJTQ3hEUVVGeFFpeExRVUZMVGl4TFFVRXhRanM3UVVGRlFTeFhRVUZMUVN4TFFVRk1MRWRCUVdFc1NVRkJZanRCUVVORU96czdPenM3YTBKQmRrTnJRbWhDTEZjaUxDSm1hV3hsSWpvaVpuSmhiV1V0WW5WbVptVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdSbkpoYldWQ2RXWm1aWElnZTF4eVhHNGdJQzhxS2x4eVhHNGdJQ0FxSUVCamIyNXpkSEoxWTNSdmNseHlYRzRnSUNBcUlFQndZWEpoYlNCN1JHVjJhV05sZlNCa1pYWnBZMlZjY2x4dUlDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdkMmxrZEdoY2NseHVJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYUdWcFoyaDBYSEpjYmlBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOXdkR2x2Ym5OY2NseHVJQ0FnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0J2Y0hScGIyNXpMbU52Ykc5eWMxeHlYRzRnSUNBcUlFQndZWEpoYlNCN1VtVnVaR1Z5UW5WbVptVnlmRlJsZUhSMWNtVXlSSHhVWlhoMGRYSmxRM1ZpWlgwZ2IzQjBhVzl1Y3k1a1pYQjBhRnh5WEc0Z0lDQXFJRUJ3WVhKaGJTQjdVbVZ1WkdWeVFuVm1abVZ5ZkZSbGVIUjFjbVV5Ukh4VVpYaDBkWEpsUTNWaVpYMGdiM0IwYVc5dWN5NXpkR1Z1WTJsc1hISmNiaUFnSUNvZ1FIQmhjbUZ0SUh0U1pXNWtaWEpDZFdabVpYSjhWR1Y0ZEhWeVpUSkVmRlJsZUhSMWNtVkRkV0psZlNCdmNIUnBiMjV6TG1SbGNIUm9VM1JsYm1OcGJGeHlYRzRnSUNBcUwxeHlYRzRnSUdOdmJuTjBjblZqZEc5eUtHUmxkbWxqWlN3Z2QybGtkR2dzSUdobGFXZG9kQ3dnYjNCMGFXOXVjeWtnZTF4eVhHNGdJQ0FnZEdocGN5NWZaR1YyYVdObElEMGdaR1YyYVdObE8xeHlYRzRnSUNBZ2RHaHBjeTVmZDJsa2RHZ2dQU0IzYVdSMGFEdGNjbHh1SUNBZ0lIUm9hWE11WDJobGFXZG9kQ0E5SUdobGFXZG9kRHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbDlqYjJ4dmNuTWdQU0J2Y0hScGIyNXpMbU52Ykc5eWN5QjhmQ0JiWFR0Y2NseHVJQ0FnSUhSb2FYTXVYMlJsY0hSb0lEMGdiM0IwYVc5dWN5NWtaWEIwYUNCOGZDQnVkV3hzTzF4eVhHNGdJQ0FnZEdocGN5NWZjM1JsYm1OcGJDQTlJRzl3ZEdsdmJuTXVjM1JsYm1OcGJDQjhmQ0J1ZFd4c08xeHlYRzRnSUNBZ2RHaHBjeTVmWkdWd2RHaFRkR1Z1WTJsc0lEMGdiM0IwYVc5dWN5NWtaWEIwYUZOMFpXNWphV3dnZkh3Z2JuVnNiRHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbDluYkVsRUlEMGdaR1YyYVdObExsOW5iQzVqY21WaGRHVkdjbUZ0WldKMVptWmxjaWdwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnTHlvcVhISmNiaUFnSUNvZ1FHMWxkR2h2WkNCa1pYTjBjbTk1WEhKY2JpQWdJQ292WEhKY2JpQWdaR1Z6ZEhKdmVTZ3BJSHRjY2x4dUlDQWdJR2xtSUNoMGFHbHpMbDluYkVsRUlEMDlQU0J1ZFd4c0tTQjdYSEpjYmlBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0oxUm9aU0JtY21GdFpTMWlkV1ptWlhJZ1lXeHlaV0ZrZVNCa1pYTjBjbTk1WldRbktUdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR052Ym5OMElHZHNJRDBnZEdocGN5NWZaR1YyYVdObExsOW5iRHRjY2x4dVhISmNiaUFnSUNCbmJDNWtaV3hsZEdWR2NtRnRaV0oxWm1abGNpaDBhR2x6TGw5bmJFbEVLVHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbDluYkVsRUlEMGdiblZzYkR0Y2NseHVJQ0I5WEhKY2JuMGlYWDA9Il19