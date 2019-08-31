(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/material/custom-properties.js';
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
        var _types = require('../../../renderer/types');
        var _murmurhash2_gc = require('./murmurhash2_gc');
        var _murmurhash2_gc2 = _interopRequireDefault(_murmurhash2_gc);
        var _utils = require('./utils');
        var _utils2 = _interopRequireDefault(_utils);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var CustomProperties = function () {
            function CustomProperties() {
                _classCallCheck(this, CustomProperties);
                this._properties = {};
                this._defines = {};
                this._dirty = false;
            }
            _createClass(CustomProperties, [
                {
                    key: 'setProperty',
                    value: function setProperty(name, value) {
                        var uniform = this._properties[name];
                        if (!uniform) {
                            uniform = Object.create(null);
                            uniform.name = name;
                            uniform.type = _types.ctor2enums[value.constructor];
                            this._properties[name] = uniform;
                        } else if (uniform.value === value)
                            return;
                        this._dirty = true;
                        uniform.value = value;
                    }
                },
                {
                    key: 'getProperty',
                    value: function getProperty(name) {
                        var prop = this._properties[name];
                        if (prop)
                            return prop.value;
                        return null;
                    }
                },
                {
                    key: 'define',
                    value: function define(name, value) {
                        if (this._defines[name] === value)
                            return;
                        this._dirty = true;
                        this._defines[name] = value;
                    }
                },
                {
                    key: 'getDefine',
                    value: function getDefine(name) {
                        return this._defines[name];
                    }
                },
                {
                    key: 'extractProperties',
                    value: function extractProperties() {
                        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        Object.assign(out, this._properties);
                        return out;
                    }
                },
                {
                    key: 'extractDefines',
                    value: function extractDefines() {
                        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        Object.assign(out, this._defines);
                        return out;
                    }
                },
                {
                    key: 'getHash',
                    value: function getHash() {
                        if (!this._dirty)
                            return this._hash;
                        this._dirty = false;
                        var hash = '';
                        hash += _utils2.default.serializeDefines(this._defines);
                        hash += _utils2.default.serializeUniforms(this._properties);
                        return this._hash = (0, _murmurhash2_gc2.default)(hash, 666);
                    }
                }
            ]);
            return CustomProperties;
        }();
        exports.default = CustomProperties;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1wcm9wZXJ0aWVzLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2Fzc2V0cy9tYXRlcmlhbC9jdXN0b20tcHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJDdXN0b21Qcm9wZXJ0aWVzIiwiX3Byb3BlcnRpZXMiLCJfZGVmaW5lcyIsIl9kaXJ0eSIsIm5hbWUiLCJ2YWx1ZSIsInVuaWZvcm0iLCJPYmplY3QiLCJjcmVhdGUiLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJwcm9wIiwib3V0IiwiYXNzaWduIiwiX2hhc2giLCJoYXNoIiwic2VyaWFsaXplRGVmaW5lcyIsInNlcmlhbGl6ZVVuaWZvcm1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBQ0EsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQURBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBO1FBQ0EsSUFBQSxlQUFBLEdBQUEsT0FBQSxDQUFBLGtCQUFBLENBQUE7O1FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQTs7Ozs7Ozs7OztZQUVxQkEsZ0JBQUFBO1lBQ2pCLFNBQUEsZ0JBQUEsR0FBZTtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsZ0JBQUEsRUFBQTtBQUFBLGdCQUNYLEtBQUtDLFdBQUwsR0FBbUIsRUFBbkIsQ0FEVztBQUFBLGdCQUVYLEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FGVztBQUFBLGdCQUdYLEtBQUtDLE1BQUwsR0FBYyxLQUFkLENBSFc7QUFBQTs7OztnREFNRkMsTUFBTUMsT0FBTztBQUFBLHdCQUN0QixJQUFJQyxPQUFBQSxHQUFVLEtBQUtMLFdBQUwsQ0FBaUJHLElBQWpCLENBQWQsQ0FEc0I7QUFBQSx3QkFF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cG9ydCB7IGN0b3IyZW51bXMgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJlci90eXBlcyc7XHJcbmltcG9ydCBtdXJtdXJoYXNoMiBmcm9tICcuL211cm11cmhhc2gyX2djJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUHJvcGVydGllcyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RlZmluZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BlcnR5IChuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCB1bmlmb3JtID0gdGhpcy5fcHJvcGVydGllc1tuYW1lXTtcclxuICAgICAgICBpZiAoIXVuaWZvcm0pIHtcclxuICAgICAgICAgICAgdW5pZm9ybSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgICAgIHVuaWZvcm0ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHVuaWZvcm0udHlwZSA9IGN0b3IyZW51bXNbdmFsdWUuY29uc3RydWN0b3JdO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdID0gdW5pZm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodW5pZm9ybS52YWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgdW5pZm9ybS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3BlcnR5KG5hbWUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9IHRoaXMuX3Byb3BlcnRpZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKHByb3ApIHJldHVybiBwcm9wLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZSAobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVmaW5lc1tuYW1lXSA9PT0gdmFsdWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZGVmaW5lc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmluZSAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZpbmVzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3RQcm9wZXJ0aWVzKG91dCA9IHt9KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvdXQsIHRoaXMuX3Byb3BlcnRpZXMpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdERlZmluZXMob3V0ID0ge30pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKG91dCwgdGhpcy5fZGVmaW5lcyk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIYXNoICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RpcnR5KSByZXR1cm4gdGhpcy5faGFzaDtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoYXNoID0gJyc7XHJcbiAgICAgICAgaGFzaCArPSB1dGlscy5zZXJpYWxpemVEZWZpbmVzKHRoaXMuX2RlZmluZXMpO1xyXG4gICAgICAgIGhhc2ggKz0gdXRpbHMuc2VyaWFsaXplVW5pZm9ybXModGhpcy5fcHJvcGVydGllcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNoID0gbXVybXVyaGFzaDIoaGFzaCwgNjY2KTtcclxuICAgIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3JlbmRlcmVyL3R5cGVzJyk7XG5cbnZhciBfbXVybXVyaGFzaDJfZ2MgPSByZXF1aXJlKCcuL211cm11cmhhc2gyX2djJyk7XG5cbnZhciBfbXVybXVyaGFzaDJfZ2MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbXVybXVyaGFzaDJfZ2MpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEN1c3RvbVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ3VzdG9tUHJvcGVydGllcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1c3RvbVByb3BlcnRpZXMpO1xuXG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fZGVmaW5lcyA9IHt9O1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDdXN0b21Qcm9wZXJ0aWVzLCBbe1xuICAgICAgICBrZXk6ICdzZXRQcm9wZXJ0eScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHVuaWZvcm0gPSB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICAgICAgaWYgKCF1bmlmb3JtKSB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLnR5cGUgPSBfdHlwZXMuY3RvcjJlbnVtc1t2YWx1ZS5jb25zdHJ1Y3Rvcl07XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllc1tuYW1lXSA9IHVuaWZvcm07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVuaWZvcm0udmFsdWUgPT09IHZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHVuaWZvcm0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UHJvcGVydHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHkobmFtZSkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICAgICAgaWYgKHByb3ApIHJldHVybiBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlZmluZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZpbmUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWZpbmVzW25hbWVdID09PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZGVmaW5lc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREZWZpbmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVmaW5lKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZpbmVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdleHRyYWN0UHJvcGVydGllcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllcygpIHtcbiAgICAgICAgICAgIHZhciBvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dCwgdGhpcy5fcHJvcGVydGllcyk7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdleHRyYWN0RGVmaW5lcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0RGVmaW5lcygpIHtcbiAgICAgICAgICAgIHZhciBvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dCwgdGhpcy5fZGVmaW5lcyk7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRIYXNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhhc2goKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RpcnR5KSByZXR1cm4gdGhpcy5faGFzaDtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciBoYXNoID0gJyc7XG4gICAgICAgICAgICBoYXNoICs9IF91dGlsczIuZGVmYXVsdC5zZXJpYWxpemVEZWZpbmVzKHRoaXMuX2RlZmluZXMpO1xuICAgICAgICAgICAgaGFzaCArPSBfdXRpbHMyLmRlZmF1bHQuc2VyaWFsaXplVW5pZm9ybXModGhpcy5fcHJvcGVydGllcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoID0gKDAsIF9tdXJtdXJoYXNoMl9nYzIuZGVmYXVsdCkoaGFzaCwgNjY2KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDdXN0b21Qcm9wZXJ0aWVzO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDdXN0b21Qcm9wZXJ0aWVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU4xYzNSdmJTMXdjbTl3WlhKMGFXVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYklrTjFjM1J2YlZCeWIzQmxjblJwWlhNaUxDSmZjSEp2Y0dWeWRHbGxjeUlzSWw5a1pXWnBibVZ6SWl3aVgyUnBjblI1SWl3aWJtRnRaU0lzSW5aaGJIVmxJaXdpZFc1cFptOXliU0lzSWs5aWFtVmpkQ0lzSW1OeVpXRjBaU0lzSW5SNWNHVWlMQ0pqYjI1emRISjFZM1J2Y2lJc0luQnliM0FpTENKdmRYUWlMQ0poYzNOcFoyNGlMQ0pmYUdGemFDSXNJbWhoYzJnaUxDSnpaWEpwWVd4cGVtVkVaV1pwYm1Weklpd2ljMlZ5YVdGc2FYcGxWVzVwWm05eWJYTWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3TzBsQlJYRkNRU3huUWp0QlFVTnFRaXhuUTBGQlpUdEJRVUZCT3p0QlFVTllMR0ZCUVV0RExGZEJRVXdzUjBGQmJVSXNSVUZCYmtJN1FVRkRRU3hoUVVGTFF5eFJRVUZNTEVkQlFXZENMRVZCUVdoQ08wRkJRMEVzWVVGQlMwTXNUVUZCVEN4SFFVRmpMRXRCUVdRN1FVRkRTRHM3T3p0dlEwRkZXVU1zU1N4RlFVRk5ReXhMTEVWQlFVODdRVUZEZEVJc1owSkJRVWxETEZWQlFWVXNTMEZCUzB3c1YwRkJUQ3hEUVVGcFFrY3NTVUZCYWtJc1EwRkJaRHRCUVVOQkxHZENRVUZKTEVOQlFVTkZMRTlCUVV3c1JVRkJZenRCUVVOV1FTd3dRa0ZCVlVNc1QwRkJUME1zVFVGQlVDeERRVUZqTEVsQlFXUXNRMEZCVmp0QlFVTkJSaXgzUWtGQlVVWXNTVUZCVWl4SFFVRmxRU3hKUVVGbU8wRkJRMEZGTEhkQ1FVRlJSeXhKUVVGU0xFZEJRV1VzYTBKQlFWZEtMRTFCUVUxTExGZEJRV3BDTEVOQlFXWTdRVUZEUVN4eFFrRkJTMVFzVjBGQlRDeERRVUZwUWtjc1NVRkJha0lzU1VGQmVVSkZMRTlCUVhwQ08wRkJRMGdzWVVGTVJDeE5RVTFMTEVsQlFVbEJMRkZCUVZGRUxFdEJRVklzUzBGQmEwSkJMRXRCUVhSQ0xFVkJRVFpDT3p0QlFVVnNReXhwUWtGQlMwWXNUVUZCVEN4SFFVRmpMRWxCUVdRN1FVRkRRVWNzYjBKQlFWRkVMRXRCUVZJc1IwRkJaMEpCTEV0QlFXaENPMEZCUTBnN096dHZRMEZGVjBRc1NTeEZRVUZOTzBGQlEyUXNaMEpCUVVsUExFOUJRVThzUzBGQlMxWXNWMEZCVEN4RFFVRnBRa2NzU1VGQmFrSXNRMEZCV0R0QlFVTkJMR2RDUVVGSlR5eEpRVUZLTEVWQlFWVXNUMEZCVDBFc1MwRkJTMDRzUzBGQldqdEJRVU5XTEcxQ1FVRlBMRWxCUVZBN1FVRkRTRHM3T3l0Q1FVVlBSQ3hKTEVWQlFVMURMRXNzUlVGQlR6dEJRVU5xUWl4blFrRkJTU3hMUVVGTFNDeFJRVUZNTEVOQlFXTkZMRWxCUVdRc1RVRkJkMEpETEV0QlFUVkNMRVZCUVcxRE8wRkJRMjVETEdsQ1FVRkxSaXhOUVVGTUxFZEJRV01zU1VGQlpEdEJRVU5CTEdsQ1FVRkxSQ3hSUVVGTUxFTkJRV05GTEVsQlFXUXNTVUZCYzBKRExFdEJRWFJDTzBGQlEwZzdPenRyUTBGRlZVUXNTU3hGUVVGTk8wRkJRMklzYlVKQlFVOHNTMEZCUzBZc1VVRkJUQ3hEUVVGalJTeEpRVUZrTEVOQlFWQTdRVUZEU0RzN096UkRRVVV5UWp0QlFVRkJMR2RDUVVGV1VTeEhRVUZWTEhWRlFVRktMRVZCUVVrN08wRkJRM2hDVEN4dFFrRkJUMDBzVFVGQlVDeERRVUZqUkN4SFFVRmtMRVZCUVcxQ0xFdEJRVXRZTEZkQlFYaENPMEZCUTBFc2JVSkJRVTlYTEVkQlFWQTdRVUZEU0RzN08zbERRVVYzUWp0QlFVRkJMR2RDUVVGV1FTeEhRVUZWTEhWRlFVRktMRVZCUVVrN08wRkJRM0pDVEN4dFFrRkJUMDBzVFVGQlVDeERRVUZqUkN4SFFVRmtMRVZCUVcxQ0xFdEJRVXRXTEZGQlFYaENPMEZCUTBFc2JVSkJRVTlWTEVkQlFWQTdRVUZEU0RzN08ydERRVVZWTzBGQlExQXNaMEpCUVVrc1EwRkJReXhMUVVGTFZDeE5RVUZXTEVWQlFXdENMRTlCUVU4c1MwRkJTMWNzUzBGQldqdEJRVU5zUWl4cFFrRkJTMWdzVFVGQlRDeEhRVUZqTEV0QlFXUTdPMEZCUlVFc1owSkJRVWxaTEU5QlFVOHNSVUZCV0R0QlFVTkJRU3h2UWtGQlVTeG5Ra0ZCVFVNc1owSkJRVTRzUTBGQmRVSXNTMEZCUzJRc1VVRkJOVUlzUTBGQlVqdEJRVU5CWVN4dlFrRkJVU3huUWtGQlRVVXNhVUpCUVU0c1EwRkJkMElzUzBGQlMyaENMRmRCUVRkQ0xFTkJRVkk3TzBGQlJVRXNiVUpCUVU4c1MwRkJTMkVzUzBGQlRDeEhRVUZoTERoQ1FVRlpReXhKUVVGYUxFVkJRV3RDTEVkQlFXeENMRU5CUVhCQ08wRkJRMGc3T3pzN096dHJRa0Y0UkdkQ1ppeG5RaUlzSW1acGJHVWlPaUpqZFhOMGIyMHRjSEp2Y0dWeWRHbGxjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHTjBiM0l5Wlc1MWJYTWdmU0JtY205dElDY3VMaTh1TGk4dUxpOXlaVzVrWlhKbGNpOTBlWEJsY3ljN1hISmNibWx0Y0c5eWRDQnRkWEp0ZFhKb1lYTm9NaUJtY205dElDY3VMMjExY20xMWNtaGhjMmd5WDJkakp6dGNjbHh1YVcxd2IzSjBJSFYwYVd4eklHWnliMjBnSnk0dmRYUnBiSE1uTzF4eVhHNWNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1EzVnpkRzl0VUhKdmNHVnlkR2xsY3lCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY0hKdmNHVnlkR2xsY3lBOUlIdDlPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlJsWm1sdVpYTWdQU0I3ZlR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5a2FYSjBlU0E5SUdaaGJITmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhObGRGQnliM0JsY25SNUlDaHVZVzFsTENCMllXeDFaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0IxYm1sbWIzSnRJRDBnZEdocGN5NWZjSEp2Y0dWeWRHbGxjMXR1WVcxbFhUdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lYVnVhV1p2Y20wcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RXNXBabTl5YlNBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhV1p2Y20wdWJtRnRaU0E5SUc1aGJXVTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhV1p2Y20wdWRIbHdaU0E5SUdOMGIzSXlaVzUxYlhOYmRtRnNkV1V1WTI5dWMzUnlkV04wYjNKZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl3Y205d1pYSjBhV1Z6VzI1aGJXVmRJRDBnZFc1cFptOXliVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9kVzVwWm05eWJTNTJZV3gxWlNBOVBUMGdkbUZzZFdVcElISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOWthWEowZVNBOUlIUnlkV1U3WEhKY2JpQWdJQ0FnSUNBZ2RXNXBabTl5YlM1MllXeDFaU0E5SUhaaGJIVmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdkbGRGQnliM0JsY25SNUtHNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnY0hKdmNDQTlJSFJvYVhNdVgzQnliM0JsY25ScFpYTmJibUZ0WlYwN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQXBJSEpsZEhWeWJpQndjbTl3TG5aaGJIVmxPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1JsWm1sdVpTQW9ibUZ0WlN3Z2RtRnNkV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWZaR1ZtYVc1bGMxdHVZVzFsWFNBOVBUMGdkbUZzZFdVcElISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5a2FYSjBlU0E5SUhSeWRXVTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaR1ZtYVc1bGMxdHVZVzFsWFNBOUlIWmhiSFZsTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHZGxkRVJsWm1sdVpTQW9ibUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5a1pXWnBibVZ6VzI1aGJXVmRPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdWNGRISmhZM1JRY205d1pYSjBhV1Z6S0c5MWRDQTlJSHQ5S1NCN1hISmNiaUFnSUNBZ0lDQWdUMkpxWldOMExtRnpjMmxuYmlodmRYUXNJSFJvYVhNdVgzQnliM0JsY25ScFpYTXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ2ZFhRN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdaWGgwY21GamRFUmxabWx1WlhNb2IzVjBJRDBnZTMwcElIdGNjbHh1SUNBZ0lDQWdJQ0JQWW1wbFkzUXVZWE56YVdkdUtHOTFkQ3dnZEdocGN5NWZaR1ZtYVc1bGN5azdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzkxZER0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm5aWFJJWVhOb0lDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVgyUnBjblI1S1NCeVpYUjFjbTRnZEdocGN5NWZhR0Z6YUR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5a2FYSjBlU0E5SUdaaGJITmxPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JvWVhOb0lEMGdKeWM3WEhKY2JpQWdJQ0FnSUNBZ2FHRnphQ0FyUFNCMWRHbHNjeTV6WlhKcFlXeHBlbVZFWldacGJtVnpLSFJvYVhNdVgyUmxabWx1WlhNcE8xeHlYRzRnSUNBZ0lDQWdJR2hoYzJnZ0t6MGdkWFJwYkhNdWMyVnlhV0ZzYVhwbFZXNXBabTl5YlhNb2RHaHBjeTVmY0hKdmNHVnlkR2xsY3lrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOW9ZWE5vSUQwZ2JYVnliWFZ5YUdGemFESW9hR0Z6YUN3Z05qWTJLVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzRpWFgwPSJdfQ==