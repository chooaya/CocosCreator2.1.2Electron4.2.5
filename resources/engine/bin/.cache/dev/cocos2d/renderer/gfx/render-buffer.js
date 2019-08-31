(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/render-buffer.js';
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
        var RenderBuffer = function () {
            function RenderBuffer(device, format, width, height) {
                _classCallCheck(this, RenderBuffer);
                this._device = device;
                this._format = format;
                this._glID = device._gl.createRenderbuffer();
                this.update(width, height);
            }
            _createClass(RenderBuffer, [
                {
                    key: 'update',
                    value: function update(width, height) {
                        this._width = width;
                        this._height = height;
                        var gl = this._device._gl;
                        gl.bindRenderbuffer(gl.RENDERBUFFER, this._glID);
                        gl.renderbufferStorage(gl.RENDERBUFFER, this._format, width, height);
                        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
                    }
                },
                {
                    key: 'destroy',
                    value: function destroy() {
                        if (this._glID === null) {
                            console.error('The render-buffer already destroyed');
                            return;
                        }
                        var gl = this._device._gl;
                        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
                        gl.deleteRenderbuffer(this._glID);
                        this._glID = null;
                    }
                }
            ]);
            return RenderBuffer;
        }();
        exports.default = RenderBuffer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci1idWZmZXIuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2dmeC9yZW5kZXItYnVmZmVyLmpzIl0sIm5hbWVzIjpbIlJlbmRlckJ1ZmZlciIsImRldmljZSIsImZvcm1hdCIsIndpZHRoIiwiaGVpZ2h0IiwiX2RldmljZSIsIl9mb3JtYXQiLCJfZ2xJRCIsIl9nbCIsImNyZWF0ZVJlbmRlcmJ1ZmZlciIsInVwZGF0ZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJnbCIsImJpbmRSZW5kZXJidWZmZXIiLCJSRU5ERVJCVUZGRVIiLCJyZW5kZXJidWZmZXJTdG9yYWdlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlUmVuZGVyYnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBQ0UsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFEbUJBLFlBQUFBO1lBUW5CLFNBQUEsWUFBQSxDQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLEVBQUE7QUFBQSxnQkFDekMsS0FBS0MsT0FBTCxHQUFlSixNQUFmLENBRHlDO0FBQUEsZ0JBRXpDLEtBQUtLLE9BQUwsR0FBZUosTUFBZixDQUZ5QztBQUFBLGdCQUl6QyxLQUFLSyxLQUFMLEdBQWFOLE1BQUFBLENBQU9PLEdBQVBQLENBQVdRLGtCQUFYUixFQUFiLENBSnlDO0FBQUEsZ0JBS3pDLEtBQUtTLE1BQUwsQ0FBWVAsS0FBWixFQUFtQkMsTUFBbkIsRUFMeUM7QUFBQTs7OzsyQ0FRbkNELE9BQU9DLFFBQVE7QUFBQSx3QkFDckIsS0FBS08sTUFBTCxHQUFjUixLQUFkLENBRHFCO0FBQUEsd0JBRXJCLEtBQUtTLE9BQUwsR0FBZVIsTUFBZixDQUZxQjtBQUFBLHdCQUlyQixJQUFNUyxFQUFBQSxHQUFLLEtBQUtSLE9BQUwsQ0FBYUcsR0FBeEIsQ0FKcUI7QUFBQSx3QkFLckJLLEVBQUFBLENBQUdDLGdCQUFIRCxDQUFvQkEsRUFBQUEsQ0FBR0UsWUFBdkJGLEVBQXFDLEtBQUtOLEtBQTFDTSxFQUxxQjtBQUFBLHdCQU1yQkEsRUFBQUEsQ0FBR0csbUJBQUhILENBQXVCQSxFQUFBQSxDQUFHRSxZQUExQkYsRUFBd0MsS0FBS1AsT0FBN0NPLEVBQXNEVixLQUF0RFUsRUFBNkRULE1BQTdEUyxFQU5xQjtBQUFBLHdCQU9yQkEsRUFBQUEsQ0FBR0MsZ0JBQUhELENBQW9CQSxFQUFBQSxDQUFHRSxZQUF2QkYsRUFBcUMsSUFBckNBLEVBUHFCO0FBQUE7Ozs7OENBYWI7QUFBQSx3QkFDUixJQUFJLEtBQUtOLEtBQUwsS0FBZSxJQUFuQixFQUF5QjtBQUFBLDRCQUN2QlUsT0FBQUEsQ0FBUUMsS0FBUkQsQ0FBYyxxQ0FBZEEsRUFEdUI7QUFBQSw0QkFFdkIsT0FGdUI7QUFBQSx5QkFEakI7QUFBQSx3QkFNUixJQUFNSixFQUFBQSxHQUFLLEtBQUtSLE9BQUwsQ0FBYUcsR0FBeEIsQ0FOUTtBQUFBLHdCQVFSSyxFQUFBQSxDQUFHQyxnQkFBSEQsQ0FBb0JBLEVBQUFBLENBQUdFLFlBQXZCRixFQUFxQyxJQUFyQ0EsRUFSUTtBQUFBLHdCQVNSQSxFQUFBQSxDQUFHTSxrQkFBSE4sQ0FBc0IsS0FBS04sS0FBM0JNLEVBVFE7QUFBQSx3QkFXUixLQUFLTixLQUFMLEdBQWEsSUFBYixDQVhRO0FBQUE7Ozs7OzBCQTdCU1A7Ozs7Ozs7WUFRUEMsUUFBQUEsQ0FBUUMsUUFBQUEsQ0FBcEIsT0FBWUQsRUFBK0IsU0FBL0JBLEVBQStCLFFBQS9CQSIsImZpbGUiOiJyZW5kZXItYnVmZmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyQnVmZmVyIHtcclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge0RldmljZX0gZGV2aWNlXHJcbiAgICogQHBhcmFtIHtSQl9GTVRfKn0gZm9ybWF0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRldmljZSwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLl9kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XHJcbiAgICBcclxuICAgIHRoaXMuX2dsSUQgPSBkZXZpY2UuX2dsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xyXG4gICAgdGhpcy51cGRhdGUod2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUgKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgZ2wgPSB0aGlzLl9kZXZpY2UuX2dsO1xyXG4gICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIHRoaXMuX2dsSUQpO1xyXG4gICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShnbC5SRU5ERVJCVUZGRVIsIHRoaXMuX2Zvcm1hdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX2dsSUQgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlIHJlbmRlci1idWZmZXIgYWxyZWFkeSBkZXN0cm95ZWQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdsID0gdGhpcy5fZGV2aWNlLl9nbDtcclxuXHJcbiAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XHJcbiAgICBnbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5fZ2xJRCk7XHJcblxyXG4gICAgdGhpcy5fZ2xJRCA9IG51bGw7XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge0RldmljZX0gZGV2aWNlXHJcbiAgICogQHBhcmFtIHtSQl9GTVRfKn0gZm9ybWF0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xuICBmdW5jdGlvbiBSZW5kZXJCdWZmZXIoZGV2aWNlLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyQnVmZmVyKTtcblxuICAgIHRoaXMuX2RldmljZSA9IGRldmljZTtcbiAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG5cbiAgICB0aGlzLl9nbElEID0gZGV2aWNlLl9nbC5jcmVhdGVSZW5kZXJidWZmZXIoKTtcbiAgICB0aGlzLnVwZGF0ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZW5kZXJCdWZmZXIsIFt7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgIHZhciBnbCA9IHRoaXMuX2RldmljZS5fZ2w7XG4gICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5fZ2xJRCk7XG4gICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5fZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgaWYgKHRoaXMuX2dsSUQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHJlbmRlci1idWZmZXIgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ2wgPSB0aGlzLl9kZXZpY2UuX2dsO1xuXG4gICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XG4gICAgICBnbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5fZ2xJRCk7XG5cbiAgICAgIHRoaXMuX2dsSUQgPSBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZW5kZXJCdWZmZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlckJ1ZmZlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5KbGJtUmxjaTFpZFdabVpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVtVnVaR1Z5UW5WbVptVnlJaXdpWkdWMmFXTmxJaXdpWm05eWJXRjBJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0pmWkdWMmFXTmxJaXdpWDJadmNtMWhkQ0lzSWw5bmJFbEVJaXdpWDJkc0lpd2lZM0psWVhSbFVtVnVaR1Z5WW5WbVptVnlJaXdpZFhCa1lYUmxJaXdpWDNkcFpIUm9JaXdpWDJobGFXZG9kQ0lzSW1kc0lpd2lZbWx1WkZKbGJtUmxjbUoxWm1abGNpSXNJbEpGVGtSRlVrSlZSa1pGVWlJc0luSmxibVJsY21KMVptWmxjbE4wYjNKaFoyVWlMQ0pqYjI1emIyeGxJaXdpWlhKeWIzSWlMQ0prWld4bGRHVlNaVzVrWlhKaWRXWm1aWElpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdTVUZCY1VKQkxGazdRVUZEYmtJN096czdPenM3UVVGUFFTeDNRa0ZCV1VNc1RVRkJXaXhGUVVGdlFrTXNUVUZCY0VJc1JVRkJORUpETEV0QlFUVkNMRVZCUVcxRFF5eE5RVUZ1UXl4RlFVRXlRenRCUVVGQk96dEJRVU42UXl4VFFVRkxReXhQUVVGTUxFZEJRV1ZLTEUxQlFXWTdRVUZEUVN4VFFVRkxTeXhQUVVGTUxFZEJRV1ZLTEUxQlFXWTdPMEZCUlVFc1UwRkJTMHNzUzBGQlRDeEhRVUZoVGl4UFFVRlBUeXhIUVVGUUxFTkJRVmRETEd0Q1FVRllMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eE5RVUZNTEVOQlFWbFFMRXRCUVZvc1JVRkJiVUpETEUxQlFXNUNPMEZCUTBRN096czdNa0pCUlU5RUxFc3NSVUZCVDBNc1RTeEZRVUZSTzBGQlEzSkNMRmRCUVV0UExFMUJRVXdzUjBGQlkxSXNTMEZCWkR0QlFVTkJMRmRCUVV0VExFOUJRVXdzUjBGQlpWSXNUVUZCWmpzN1FVRkZRU3hWUVVGTlV5eExRVUZMTEV0QlFVdFNMRTlCUVV3c1EwRkJZVWNzUjBGQmVFSTdRVUZEUVVzc1UwRkJSME1zWjBKQlFVZ3NRMEZCYjBKRUxFZEJRVWRGTEZsQlFYWkNMRVZCUVhGRExFdEJRVXRTTEV0QlFURkRPMEZCUTBGTkxGTkJRVWRITEcxQ1FVRklMRU5CUVhWQ1NDeEhRVUZIUlN4WlFVRXhRaXhGUVVGM1F5eExRVUZMVkN4UFFVRTNReXhGUVVGelJFZ3NTMEZCZEVRc1JVRkJOa1JETEUxQlFUZEVPMEZCUTBGVExGTkJRVWRETEdkQ1FVRklMRU5CUVc5Q1JDeEhRVUZIUlN4WlFVRjJRaXhGUVVGeFF5eEpRVUZ5UXp0QlFVTkVPenRCUVVWRU96czdPenM3T0VKQlIxVTdRVUZEVWl4VlFVRkpMRXRCUVV0U0xFdEJRVXdzUzBGQlpTeEpRVUZ1UWl4RlFVRjVRanRCUVVOMlFsVXNaMEpCUVZGRExFdEJRVklzUTBGQll5eHhRMEZCWkR0QlFVTkJPMEZCUTBRN08wRkJSVVFzVlVGQlRVd3NTMEZCU3l4TFFVRkxVaXhQUVVGTUxFTkJRV0ZITEVkQlFYaENPenRCUVVWQlN5eFRRVUZIUXl4blFrRkJTQ3hEUVVGdlFrUXNSMEZCUjBVc1dVRkJka0lzUlVGQmNVTXNTVUZCY2tNN1FVRkRRVVlzVTBGQlIwMHNhMEpCUVVnc1EwRkJjMElzUzBGQlMxb3NTMEZCTTBJN08wRkJSVUVzVjBGQlMwRXNTMEZCVEN4SFFVRmhMRWxCUVdJN1FVRkRSRHM3T3pzN08ydENRWHBEYTBKUUxGa2lMQ0ptYVd4bElqb2ljbVZ1WkdWeUxXSjFabVpsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZKbGJtUmxja0oxWm1abGNpQjdYSEpjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dRR052Ym5OMGNuVmpkRzl5WEhKY2JpQWdJQ29nUUhCaGNtRnRJSHRFWlhacFkyVjlJR1JsZG1salpWeHlYRzRnSUNBcUlFQndZWEpoYlNCN1VrSmZSazFVWHlwOUlHWnZjbTFoZEZ4eVhHNGdJQ0FxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0IzYVdSMGFGeHlYRzRnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCb1pXbG5hSFJjY2x4dUlDQWdLaTljY2x4dUlDQmpiMjV6ZEhKMVkzUnZjaWhrWlhacFkyVXNJR1p2Y20xaGRDd2dkMmxrZEdnc0lHaGxhV2RvZENrZ2UxeHlYRzRnSUNBZ2RHaHBjeTVmWkdWMmFXTmxJRDBnWkdWMmFXTmxPMXh5WEc0Z0lDQWdkR2hwY3k1ZlptOXliV0YwSUQwZ1ptOXliV0YwTzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0IwYUdsekxsOW5iRWxFSUQwZ1pHVjJhV05sTGw5bmJDNWpjbVZoZEdWU1pXNWtaWEppZFdabVpYSW9LVHRjY2x4dUlDQWdJSFJvYVhNdWRYQmtZWFJsS0hkcFpIUm9MQ0JvWldsbmFIUXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdkWEJrWVhSbElDaDNhV1IwYUN3Z2FHVnBaMmgwS1NCN1hISmNiaUFnSUNCMGFHbHpMbDkzYVdSMGFDQTlJSGRwWkhSb08xeHlYRzRnSUNBZ2RHaHBjeTVmYUdWcFoyaDBJRDBnYUdWcFoyaDBPMXh5WEc1Y2NseHVJQ0FnSUdOdmJuTjBJR2RzSUQwZ2RHaHBjeTVmWkdWMmFXTmxMbDluYkR0Y2NseHVJQ0FnSUdkc0xtSnBibVJTWlc1a1pYSmlkV1ptWlhJb1oyd3VVa1ZPUkVWU1FsVkdSa1ZTTENCMGFHbHpMbDluYkVsRUtUdGNjbHh1SUNBZ0lHZHNMbkpsYm1SbGNtSjFabVpsY2xOMGIzSmhaMlVvWjJ3dVVrVk9SRVZTUWxWR1JrVlNMQ0IwYUdsekxsOW1iM0p0WVhRc0lIZHBaSFJvTENCb1pXbG5hSFFwTzF4eVhHNGdJQ0FnWjJ3dVltbHVaRkpsYm1SbGNtSjFabVpsY2lobmJDNVNSVTVFUlZKQ1ZVWkdSVklzSUc1MWJHd3BPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMeW9xWEhKY2JpQWdJQ29nUUcxbGRHaHZaQ0JrWlhOMGNtOTVYSEpjYmlBZ0lDb3ZYSEpjYmlBZ1pHVnpkSEp2ZVNncElIdGNjbHh1SUNBZ0lHbG1JQ2gwYUdsekxsOW5iRWxFSUQwOVBTQnVkV3hzS1NCN1hISmNiaUFnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSjFSb1pTQnlaVzVrWlhJdFluVm1abVZ5SUdGc2NtVmhaSGtnWkdWemRISnZlV1ZrSnlrN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmpiMjV6ZENCbmJDQTlJSFJvYVhNdVgyUmxkbWxqWlM1ZloydzdYSEpjYmx4eVhHNGdJQ0FnWjJ3dVltbHVaRkpsYm1SbGNtSjFabVpsY2lobmJDNVNSVTVFUlZKQ1ZVWkdSVklzSUc1MWJHd3BPMXh5WEc0Z0lDQWdaMnd1WkdWc1pYUmxVbVZ1WkdWeVluVm1abVZ5S0hSb2FYTXVYMmRzU1VRcE8xeHlYRzVjY2x4dUlDQWdJSFJvYVhNdVgyZHNTVVFnUFNCdWRXeHNPMXh5WEc0Z0lIMWNjbHh1ZlNKZGZRPT0iXX0=