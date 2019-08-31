(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/vmath/index.js';
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
        exports.color4 = exports.color3 = exports.mat4 = exports.mat3 = exports.mat23 = exports.mat2 = exports.quat = exports.vec4 = exports.vec3 = exports.vec2 = undefined;
        var _utils = require('./utils');
        Object.keys(_utils).forEach(function (key) {
            if (key === 'default' || key === '__esModule')
                return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _utils[key];
                }
            });
        });
        var _vec = require('./vec2');
        var _vec2 = _interopRequireDefault(_vec);
        var _vec3 = require('./vec3');
        var _vec4 = _interopRequireDefault(_vec3);
        var _vec5 = require('./vec4');
        var _vec6 = _interopRequireDefault(_vec5);
        var _quat = require('./quat');
        var _quat2 = _interopRequireDefault(_quat);
        var _mat = require('./mat2');
        var _mat2 = _interopRequireDefault(_mat);
        var _mat3 = require('./mat23');
        var _mat4 = _interopRequireDefault(_mat3);
        var _mat5 = require('./mat3');
        var _mat6 = _interopRequireDefault(_mat5);
        var _mat7 = require('./mat4');
        var _mat8 = _interopRequireDefault(_mat7);
        var _color = require('./color3');
        var _color2 = _interopRequireDefault(_color);
        var _color3 = require('./color4');
        var _color4 = _interopRequireDefault(_color3);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        exports.vec2 = _vec2.default;
        exports.vec3 = _vec4.default;
        exports.vec4 = _vec6.default;
        exports.quat = _quat2.default;
        exports.mat2 = _mat2.default;
        exports.mat23 = _mat4.default;
        exports.mat3 = _mat6.default;
        exports.mat4 = _mat8.default;
        exports.color3 = _color2.default;
        exports.color4 = _color4.default;
        exports.default = {
            vec2: _vec2.default,
            vec3: _vec4.default,
            vec4: _vec6.default,
            quat: _quat2.default,
            mat2: _mat2.default,
            mat23: _mat4.default,
            mat3: _mat6.default,
            mat4: _mat8.default,
            color3: _color2.default,
            color4: _color4.default
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL3ZtYXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbInZlYzIiLCJ2ZWMzIiwidmVjNCIsInF1YXQiLCJtYXQyIiwibWF0MjMiLCJtYXQzIiwibWF0NCIsImNvbG9yMyIsImNvbG9yNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQUEsU0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUE7QUFBQSxRQUFBLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQSxTQUFBO0FBQUE7Ozs7UUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxPQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFBQSxZQUFBLElBQUEsR0FBQSxLQUFBLFNBQUEsSUFBQSxHQUFBLEtBQUEsWUFBQTtBQUFBLGdCQUFBLE9BQUE7QUFBQSxZQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQTtBQUFBLGdCQUFBLFVBQUEsRUFBQSxJQUFBO0FBQUEsZ0JBQUEsR0FBQSxFQUFBLFNBQUEsR0FBQSxHQUFBO0FBQUEsb0JBQUEsT0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7QUFBQSxpQkFBQTtBQUFBLGFBQUEsRUFBQTtBQUFBLFNBQUE7UUFFQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUE7O1FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQTs7UUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsSUFBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUE7O1FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQTs7UUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUE7O1FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFVBQUEsQ0FBQTs7UUFDQSxJQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxDQUFBOzs7OztnQkFFU0E7Z0JBQU1DO2dCQUFNQztnQkFBTUM7Z0JBQU1DO2dCQUFNQztnQkFBT0M7Z0JBQU1DO2dCQUFNQztnQkFBUUM7MEJBQ25EO0FBQUEsWUFBRVQsSUFBQUEsRUFBQUEsS0FBQUEsQ0FBQUEsT0FBRjtBQUFBLFlBQVFDLElBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BQVI7QUFBQSxZQUFjQyxJQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQUFkO0FBQUEsWUFBb0JDLElBQUFBLEVBQUFBLE1BQUFBLENBQUFBLE9BQXBCO0FBQUEsWUFBMEJDLElBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BQTFCO0FBQUEsWUFBZ0NDLEtBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BQWhDO0FBQUEsWUFBdUNDLElBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BQXZDO0FBQUEsWUFBNkNDLElBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BQTdDO0FBQUEsWUFBbURDLE1BQUFBLEVBQUFBLE9BQUFBLENBQUFBLE9BQW5EO0FBQUEsWUFBMkRDLE1BQUFBLEVBQUFBLE9BQUFBLENBQUFBLE9BQTNEO0FBQUEsVUFkZjtBQUFBO0lBQUEsSUFBQSxPQUFBLEVBQUE7QUFBQSxRQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBQUE7QUFBQSxLQUFBLE1BQUE7QUFBQSxRQUFBLGlCQUFBLENBQUEsa0JBQUEsQ0FBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLDREQUFBO0FBQUEsU0FBQSxFQUFBO0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCB2ZWMyIGZyb20gJy4vdmVjMic7XHJcbmltcG9ydCB2ZWMzIGZyb20gJy4vdmVjMyc7XHJcbmltcG9ydCB2ZWM0IGZyb20gJy4vdmVjNCc7XHJcbmltcG9ydCBxdWF0IGZyb20gJy4vcXVhdCc7XHJcbmltcG9ydCBtYXQyIGZyb20gJy4vbWF0Mic7XHJcbmltcG9ydCBtYXQyMyBmcm9tICcuL21hdDIzJztcclxuaW1wb3J0IG1hdDMgZnJvbSAnLi9tYXQzJztcclxuaW1wb3J0IG1hdDQgZnJvbSAnLi9tYXQ0JztcclxuaW1wb3J0IGNvbG9yMyBmcm9tICcuL2NvbG9yMyc7XHJcbmltcG9ydCBjb2xvcjQgZnJvbSAnLi9jb2xvcjQnO1xyXG5cclxuZXhwb3J0IHsgdmVjMiwgdmVjMywgdmVjNCwgcXVhdCwgbWF0MiwgbWF0MjMsIG1hdDMsIG1hdDQsIGNvbG9yMywgY29sb3I0IH07XHJcbmV4cG9ydCBkZWZhdWx0IHsgdmVjMiwgdmVjMywgdmVjNCwgcXVhdCwgbWF0MiwgbWF0MjMsIG1hdDMsIG1hdDQsIGNvbG9yMywgY29sb3I0IH07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29sb3I0ID0gZXhwb3J0cy5jb2xvcjMgPSBleHBvcnRzLm1hdDQgPSBleHBvcnRzLm1hdDMgPSBleHBvcnRzLm1hdDIzID0gZXhwb3J0cy5tYXQyID0gZXhwb3J0cy5xdWF0ID0gZXhwb3J0cy52ZWM0ID0gZXhwb3J0cy52ZWMzID0gZXhwb3J0cy52ZWMyID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5PYmplY3Qua2V5cyhfdXRpbHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF91dGlsc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF92ZWMgPSByZXF1aXJlKCcuL3ZlYzInKTtcblxudmFyIF92ZWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmVjKTtcblxudmFyIF92ZWMzID0gcmVxdWlyZSgnLi92ZWMzJyk7XG5cbnZhciBfdmVjNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZlYzMpO1xuXG52YXIgX3ZlYzUgPSByZXF1aXJlKCcuL3ZlYzQnKTtcblxudmFyIF92ZWM2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmVjNSk7XG5cbnZhciBfcXVhdCA9IHJlcXVpcmUoJy4vcXVhdCcpO1xuXG52YXIgX3F1YXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcXVhdCk7XG5cbnZhciBfbWF0ID0gcmVxdWlyZSgnLi9tYXQyJyk7XG5cbnZhciBfbWF0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdCk7XG5cbnZhciBfbWF0MyA9IHJlcXVpcmUoJy4vbWF0MjMnKTtcblxudmFyIF9tYXQ0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Myk7XG5cbnZhciBfbWF0NSA9IHJlcXVpcmUoJy4vbWF0MycpO1xuXG52YXIgX21hdDYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXQ1KTtcblxudmFyIF9tYXQ3ID0gcmVxdWlyZSgnLi9tYXQ0Jyk7XG5cbnZhciBfbWF0OCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdDcpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcjMnKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29sb3IzID0gcmVxdWlyZSgnLi9jb2xvcjQnKTtcblxudmFyIF9jb2xvcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcjMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLnZlYzIgPSBfdmVjMi5kZWZhdWx0O1xuZXhwb3J0cy52ZWMzID0gX3ZlYzQuZGVmYXVsdDtcbmV4cG9ydHMudmVjNCA9IF92ZWM2LmRlZmF1bHQ7XG5leHBvcnRzLnF1YXQgPSBfcXVhdDIuZGVmYXVsdDtcbmV4cG9ydHMubWF0MiA9IF9tYXQyLmRlZmF1bHQ7XG5leHBvcnRzLm1hdDIzID0gX21hdDQuZGVmYXVsdDtcbmV4cG9ydHMubWF0MyA9IF9tYXQ2LmRlZmF1bHQ7XG5leHBvcnRzLm1hdDQgPSBfbWF0OC5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvcjMgPSBfY29sb3IyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbG9yNCA9IF9jb2xvcjQuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IHsgdmVjMjogX3ZlYzIuZGVmYXVsdCwgdmVjMzogX3ZlYzQuZGVmYXVsdCwgdmVjNDogX3ZlYzYuZGVmYXVsdCwgcXVhdDogX3F1YXQyLmRlZmF1bHQsIG1hdDI6IF9tYXQyLmRlZmF1bHQsIG1hdDIzOiBfbWF0NC5kZWZhdWx0LCBtYXQzOiBfbWF0Ni5kZWZhdWx0LCBtYXQ0OiBfbWF0OC5kZWZhdWx0LCBjb2xvcjM6IF9jb2xvcjIuZGVmYXVsdCwgY29sb3I0OiBfY29sb3I0LmRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJblpsWXpJaUxDSjJaV016SWl3aWRtVmpOQ0lzSW5GMVlYUWlMQ0p0WVhReUlpd2liV0YwTWpNaUxDSnRZWFF6SWl3aWJXRjBOQ0lzSW1OdmJHOXlNeUlzSW1OdmJHOXlOQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVVZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdVVUZGVTBFc1NUdFJRVUZOUXl4Sk8xRkJRVTFETEVrN1VVRkJUVU1zU1R0UlFVRk5ReXhKTzFGQlFVMURMRXM3VVVGQlQwTXNTVHRSUVVGTlF5eEpPMUZCUVUxRExFMDdVVUZCVVVNc1RUdHJRa0ZEYmtRc1JVRkJSVlFzYlVKQlFVWXNSVUZCVVVNc2JVSkJRVklzUlVGQlkwTXNiVUpCUVdRc1JVRkJiMEpETEc5Q1FVRndRaXhGUVVFd1FrTXNiVUpCUVRGQ0xFVkJRV2REUXl4dlFrRkJhRU1zUlVGQmRVTkRMRzFDUVVGMlF5eEZRVUUyUTBNc2JVSkJRVGRETEVWQlFXMUVReXgxUWtGQmJrUXNSVUZCTWtSRExIVkNRVUV6UkN4Rklpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElDb2dabkp2YlNBbkxpOTFkR2xzY3ljN1hISmNibHh5WEc1cGJYQnZjblFnZG1Wak1pQm1jbTl0SUNjdUwzWmxZekluTzF4eVhHNXBiWEJ2Y25RZ2RtVmpNeUJtY205dElDY3VMM1psWXpNbk8xeHlYRzVwYlhCdmNuUWdkbVZqTkNCbWNtOXRJQ2N1TDNabFl6UW5PMXh5WEc1cGJYQnZjblFnY1hWaGRDQm1jbTl0SUNjdUwzRjFZWFFuTzF4eVhHNXBiWEJ2Y25RZ2JXRjBNaUJtY205dElDY3VMMjFoZERJbk8xeHlYRzVwYlhCdmNuUWdiV0YwTWpNZ1puSnZiU0FuTGk5dFlYUXlNeWM3WEhKY2JtbHRjRzl5ZENCdFlYUXpJR1p5YjIwZ0p5NHZiV0YwTXljN1hISmNibWx0Y0c5eWRDQnRZWFEwSUdaeWIyMGdKeTR2YldGME5DYzdYSEpjYm1sdGNHOXlkQ0JqYjJ4dmNqTWdabkp2YlNBbkxpOWpiMnh2Y2pNbk8xeHlYRzVwYlhCdmNuUWdZMjlzYjNJMElHWnliMjBnSnk0dlkyOXNiM0kwSnp0Y2NseHVYSEpjYm1WNGNHOXlkQ0I3SUhabFl6SXNJSFpsWXpNc0lIWmxZelFzSUhGMVlYUXNJRzFoZERJc0lHMWhkREl6TENCdFlYUXpMQ0J0WVhRMExDQmpiMnh2Y2pNc0lHTnZiRzl5TkNCOU8xeHlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdJSFpsWXpJc0lIWmxZek1zSUhabFl6UXNJSEYxWVhRc0lHMWhkRElzSUcxaGRESXpMQ0J0WVhRekxDQnRZWFEwTENCamIyeHZjak1zSUdOdmJHOXlOQ0I5TzF4eVhHNGlYWDA9Il19