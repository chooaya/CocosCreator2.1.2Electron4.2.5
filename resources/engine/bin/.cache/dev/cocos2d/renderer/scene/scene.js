(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/scene/scene.js';
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
        var _memop = require('../memop');
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var Scene = function () {
            function Scene(app) {
                _classCallCheck(this, Scene);
                this._lights = new _memop.FixedArray(16);
                this._models = new _memop.FixedArray(16);
                this._cameras = new _memop.FixedArray(16);
                this._debugCamera = null;
                this._app = app;
                this._views = [];
            }
            _createClass(Scene, [
                {
                    key: '_add',
                    value: function _add(pool, item) {
                        if (item._poolID !== -1) {
                            return;
                        }
                        pool.push(item);
                        item._poolID = pool.length - 1;
                    }
                },
                {
                    key: '_remove',
                    value: function _remove(pool, item) {
                        if (item._poolID === -1) {
                            return;
                        }
                        pool.data[pool.length - 1]._poolID = item._poolID;
                        pool.fastRemove(item._poolID);
                        item._poolID = -1;
                    }
                },
                {
                    key: 'tick',
                    value: function tick() {
                        for (var i = 0; i < this._models.length; ++i) {
                            var model = this._models.data[i];
                            model._updateTransform();
                        }
                    }
                },
                {
                    key: 'reset',
                    value: function reset() {
                        for (var i = 0; i < this._models.length; ++i) {
                            var model = this._models.data[i];
                            model._viewID = -1;
                        }
                    }
                },
                {
                    key: 'setDebugCamera',
                    value: function setDebugCamera(cam) {
                        this._debugCamera = cam;
                    }
                },
                {
                    key: 'getCameraCount',
                    value: function getCameraCount() {
                        return this._cameras.length;
                    }
                },
                {
                    key: 'getCamera',
                    value: function getCamera(idx) {
                        return this._cameras.data[idx];
                    }
                },
                {
                    key: 'addCamera',
                    value: function addCamera(camera) {
                        this._add(this._cameras, camera);
                    }
                },
                {
                    key: 'removeCamera',
                    value: function removeCamera(camera) {
                        this._remove(this._cameras, camera);
                    }
                },
                {
                    key: 'getModelCount',
                    value: function getModelCount() {
                        return this._models.length;
                    }
                },
                {
                    key: 'getModel',
                    value: function getModel(idx) {
                        return this._models.data[idx];
                    }
                },
                {
                    key: 'addModel',
                    value: function addModel(model) {
                        this._add(this._models, model);
                    }
                },
                {
                    key: 'removeModel',
                    value: function removeModel(model) {
                        this._remove(this._models, model);
                    }
                },
                {
                    key: 'getLightCount',
                    value: function getLightCount() {
                        return this._lights.length;
                    }
                },
                {
                    key: 'getLight',
                    value: function getLight(idx) {
                        return this._lights.data[idx];
                    }
                },
                {
                    key: 'addLight',
                    value: function addLight(light) {
                        this._add(this._lights, light);
                    }
                },
                {
                    key: 'removeLight',
                    value: function removeLight(light) {
                        this._remove(this._lights, light);
                    }
                },
                {
                    key: 'addView',
                    value: function addView(view) {
                        if (this._views.indexOf(view) === -1) {
                            this._views.push(view);
                        }
                    }
                },
                {
                    key: 'removeView',
                    value: function removeView(view) {
                        var idx = this._views.indexOf(view);
                        if (idx !== -1) {
                            this._views.splice(idx, 1);
                        }
                    }
                }
            ]);
            return Scene;
        }();
        exports.default = Scene;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9zY2VuZS9zY2VuZS5qcyJdLCJuYW1lcyI6WyJTY2VuZSIsImFwcCIsIl9saWdodHMiLCJfbW9kZWxzIiwiX2NhbWVyYXMiLCJfZGVidWdDYW1lcmEiLCJfYXBwIiwiX3ZpZXdzIiwicG9vbCIsIml0ZW0iLCJfcG9vbElEIiwicHVzaCIsImxlbmd0aCIsImRhdGEiLCJmYXN0UmVtb3ZlIiwiaSIsIm1vZGVsIiwiX3VwZGF0ZVRyYW5zZm9ybSIsIl92aWV3SUQiLCJjYW0iLCJpZHgiLCJjYW1lcmEiLCJfYWRkIiwiX3JlbW92ZSIsImxpZ2h0IiwidmlldyIsImluZGV4T2YiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFFQSxPQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUE7Ozs7OztZQUtNQSxLQUFBQTtZQUlKLFNBQUEsS0FBQSxDQUFZQyxHQUFaLEVBQWlCO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLEVBQUE7QUFBQSxnQkFDZixLQUFLQyxPQUFMLEdBQWUsSUFBQSxNQUFBLENBQUEsVUFBQSxDQUFlLEVBQWYsQ0FBZixDQURlO0FBQUEsZ0JBRWYsS0FBS0MsT0FBTCxHQUFlLElBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBZSxFQUFmLENBQWYsQ0FGZTtBQUFBLGdCQUdmLEtBQUtDLFFBQUwsR0FBZ0IsSUFBQSxNQUFBLENBQUEsVUFBQSxDQUFlLEVBQWYsQ0FBaEIsQ0FIZTtBQUFBLGdCQUlmLEtBQUtDLFlBQUwsR0FBb0IsSUFBcEIsQ0FKZTtBQUFBLGdCQUtmLEtBQUtDLElBQUwsR0FBWUwsR0FBWixDQUxlO0FBQUEsZ0JBUWYsS0FBS00s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S2QsT0FBTCxDQUFhVSxNQUFwQixDQURjO0FBQUE7Ozs7NkNBU1BRLEtBQUs7QUFBQSx3QkFDWixPQUFPLEtBQUtsQixPQUFMLENBQWFXLElBQWIsQ0FBa0JPLEdBQWxCLENBQVAsQ0FEWTtBQUFBOzs7OzZDQVFMSSxPQUFPO0FBQUEsd0JBQ2QsS0FBS0YsSUFBTCxDQUFVLEtBQUtwQixPQUFmLEVBQXdCc0IsS0FBeEIsRUFEYztBQUFBOzs7O2dEQVFKQSxPQUFPO0FBQUEsd0JBQ2pCLEtBQUtELE9BQUwsQ0FBYSxLQUFLckIsT0FBbEIsRUFBMkJzQixLQUEzQixFQURpQjtBQUFBOzs7OzRDQVFYQyxNQUFNO0FBQUEsd0JBQ1osSUFBSSxLQUFLbEIsTUFBTCxDQUFZbUIsT0FBWixDQUFvQkQsSUFBcEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUFBLDRCQUNwQyxLQUFLbEIsTUFBTCxDQUFZSSxJQUFaLENBQWlCYyxJQUFqQixFQURvQztBQUFBLHlCQUQxQjtBQUFBOzs7OytDQVVIQSxNQUFNO0FBQUEsd0JBQ2YsSUFBSUwsR0FBQUEsR0FBTSxLQUFLYixNQUFMLENBQVltQixPQUFaLENBQW9CRCxJQUFwQixDQUFWLENBRGU7QUFBQSx3QkFFZixJQUFJTCxHQUFBQSxLQUFRLENBQUMsQ0FBYixFQUFnQjtBQUFBLDRCQUNkLEtBQUtiLE1BQUwsQ0FBWW9CLE1BQVosQ0FBbUJQLEdBQW5CLEVBQXdCLENBQXhCLEVBRGM7QUFBQSx5QkFGRDtBQUFBOzs7OzswQkFRSnBCOzs7OztXQXZMYjtBQUFBOztXQUFBO0FBQUEiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbmltcG9ydCB7IEZpeGVkQXJyYXkgfSBmcm9tICcuLi9tZW1vcCc7XHJcblxyXG4vKipcclxuICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2NlbmVcclxuICovXHJcbmNsYXNzIFNjZW5lIHtcclxuICAvKipcclxuICAgKiBTZXR1cCBhIGRlZmF1bHQgZW1wdHkgc2NlbmVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuX2xpZ2h0cyA9IG5ldyBGaXhlZEFycmF5KDE2KTtcclxuICAgIHRoaXMuX21vZGVscyA9IG5ldyBGaXhlZEFycmF5KDE2KTtcclxuICAgIHRoaXMuX2NhbWVyYXMgPSBuZXcgRml4ZWRBcnJheSgxNik7XHJcbiAgICB0aGlzLl9kZWJ1Z0NhbWVyYSA9IG51bGw7XHJcbiAgICB0aGlzLl9hcHAgPSBhcHA7XHJcblxyXG4gICAgLy8gTk9URTogd2UgZG9uJ3QgdXNlIHBvb2wgZm9yIHZpZXdzIChiZWNhdXNlIGl0J3MgbGVzcyBjaGFuZ2VkIGFuZCBpdCBkb2Vzbid0IGhhdmUgcG9vbElEKVxyXG4gICAgdGhpcy5fdmlld3MgPSBbXTtcclxuICB9XHJcblxyXG4gIF9hZGQocG9vbCwgaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uX3Bvb2xJRCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBvb2wucHVzaChpdGVtKTtcclxuICAgIGl0ZW0uX3Bvb2xJRCA9IHBvb2wubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIF9yZW1vdmUocG9vbCwgaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uX3Bvb2xJRCA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBvb2wuZGF0YVtwb29sLmxlbmd0aC0xXS5fcG9vbElEID0gaXRlbS5fcG9vbElEO1xyXG4gICAgcG9vbC5mYXN0UmVtb3ZlKGl0ZW0uX3Bvb2xJRCk7XHJcbiAgICBpdGVtLl9wb29sSUQgPSAtMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHVwZGF0ZSBidWlsdC1pbiBib3VuZGluZyBzaGFwZXMgaWYgbmVlZGVkLFxyXG4gICAqIHVzZWQgaW4gdGhlIGZydXN0dW0gY3VsbGluZyBwcm9jZXNzXHJcbiAgICovXHJcbiAgdGljaygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGxldCBtb2RlbCA9IHRoaXMuX21vZGVscy5kYXRhW2ldO1xyXG4gICAgICBtb2RlbC5fdXBkYXRlVHJhbnNmb3JtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCB0aGUgbW9kZWwgdmlld0lEc1xyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgbGV0IG1vZGVsID0gdGhpcy5fbW9kZWxzLmRhdGFbaV07XHJcbiAgICAgIG1vZGVsLl92aWV3SUQgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZGVidWcgY2FtZXJhXHJcbiAgICogQHBhcmFtIHtDYW1lcmF9IGNhbSB0aGUgZGVidWcgY2FtZXJhXHJcbiAgICovXHJcbiAgc2V0RGVidWdDYW1lcmEoY2FtKSB7XHJcbiAgICB0aGlzLl9kZWJ1Z0NhbWVyYSA9IGNhbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY291bnQgb2YgcmVnaXN0ZXJlZCBjYW1lcmFzXHJcbiAgICogQHJldHVybnMge251bWJlcn0gY2FtZXJhIGNvdW50XHJcbiAgICovXHJcbiAgZ2V0Q2FtZXJhQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FtZXJhcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHNwZWNpZmllZCBjYW1lcmFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IGNhbWVyYSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDYW1lcmF9IHRoZSBzcGVjaWZpZWQgY2FtZXJhXHJcbiAgICovXHJcbiAgZ2V0Q2FtZXJhKGlkeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbWVyYXMuZGF0YVtpZHhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVnaXN0ZXIgYSBjYW1lcmFcclxuICAgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIHRoZSBuZXcgY2FtZXJhXHJcbiAgICovXHJcbiAgYWRkQ2FtZXJhKGNhbWVyYSkge1xyXG4gICAgdGhpcy5fYWRkKHRoaXMuX2NhbWVyYXMsIGNhbWVyYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYSBjYW1lcmFcclxuICAgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIHRoZSBjYW1lcmEgdG8gYmUgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIHJlbW92ZUNhbWVyYShjYW1lcmEpIHtcclxuICAgIHRoaXMuX3JlbW92ZSh0aGlzLl9jYW1lcmFzLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjb3VudCBvZiByZWdpc3RlcmVkIG1vZGVsXHJcbiAgICogQHJldHVybnMge251bWJlcn0gbW9kZWwgY291bnRcclxuICAgKi9cclxuICBnZXRNb2RlbENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGVscy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHNwZWNpZmllZCBtb2RlbFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggbW9kZWwgaW5kZXhcclxuICAgKiBAcmV0dXJucyB7TW9kZWx9IHRoZSBzcGVjaWZpZWQgbW9kZWxcclxuICAgKi9cclxuICBnZXRNb2RlbChpZHgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlbHMuZGF0YVtpZHhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVnaXN0ZXIgYSBtb2RlbFxyXG4gICAqIEBwYXJhbSB7TW9kZWx9IG1vZGVsIHRoZSBuZXcgbW9kZWxcclxuICAgKi9cclxuICBhZGRNb2RlbChtb2RlbCkge1xyXG4gICAgdGhpcy5fYWRkKHRoaXMuX21vZGVscywgbW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGEgbW9kZWxcclxuICAgKiBAcGFyYW0ge01vZGVsfSBtb2RlbCB0aGUgbW9kZWwgdG8gYmUgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIHJlbW92ZU1vZGVsKG1vZGVsKSB7XHJcbiAgICB0aGlzLl9yZW1vdmUodGhpcy5fbW9kZWxzLCBtb2RlbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGNvdW50IG9mIHJlZ2lzdGVyZWQgbGlnaHRcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBsaWdodCBjb3VudFxyXG4gICAqL1xyXG4gIGdldExpZ2h0Q291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlnaHRzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3BlY2lmaWVkIGxpZ2h0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBsaWdodCBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtMaWdodH0gdGhlIHNwZWNpZmllZCBsaWdodFxyXG4gICAqL1xyXG4gIGdldExpZ2h0KGlkeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpZ2h0cy5kYXRhW2lkeF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZWdpc3RlciBhIGxpZ2h0XHJcbiAgICogQHBhcmFtIHtMaWdodH0gbGlnaHQgdGhlIG5ldyBsaWdodFxyXG4gICAqL1xyXG4gIGFkZExpZ2h0KGxpZ2h0KSB7XHJcbiAgICB0aGlzLl9hZGQodGhpcy5fbGlnaHRzLCBsaWdodCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYSBsaWdodFxyXG4gICAqIEBwYXJhbSB7TGlnaHR9IGxpZ2h0IHRoZSBsaWdodCB0byBiZSByZW1vdmVkXHJcbiAgICovXHJcbiAgcmVtb3ZlTGlnaHQobGlnaHQpIHtcclxuICAgIHRoaXMuX3JlbW92ZSh0aGlzLl9saWdodHMsIGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlZ2lzdGVyIGEgdmlld1xyXG4gICAqIEBwYXJhbSB7Vmlld30gdmlldyB0aGUgbmV3IHZpZXdcclxuICAgKi9cclxuICBhZGRWaWV3KHZpZXcpIHtcclxuICAgIGlmICh0aGlzLl92aWV3cy5pbmRleE9mKHZpZXcpID09PSAtMSkge1xyXG4gICAgICB0aGlzLl92aWV3cy5wdXNoKHZpZXcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGEgdmlld1xyXG4gICAqIEBwYXJhbSB7Vmlld30gdmlldyB0aGUgdmlldyB0byBiZSByZW1vdmVkXHJcbiAgICovXHJcbiAgcmVtb3ZlVmlldyh2aWV3KSB7XHJcbiAgICBsZXQgaWR4ID0gdGhpcy5fdmlld3MuaW5kZXhPZih2aWV3KTtcclxuICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuX3ZpZXdzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbnZhciBfbWVtb3AgPSByZXF1aXJlKCcuLi9tZW1vcCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2NlbmVcclxuICovXG52YXIgU2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIFNldHVwIGEgZGVmYXVsdCBlbXB0eSBzY2VuZVxyXG4gICAqL1xuICBmdW5jdGlvbiBTY2VuZShhcHApIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NlbmUpO1xuXG4gICAgdGhpcy5fbGlnaHRzID0gbmV3IF9tZW1vcC5GaXhlZEFycmF5KDE2KTtcbiAgICB0aGlzLl9tb2RlbHMgPSBuZXcgX21lbW9wLkZpeGVkQXJyYXkoMTYpO1xuICAgIHRoaXMuX2NhbWVyYXMgPSBuZXcgX21lbW9wLkZpeGVkQXJyYXkoMTYpO1xuICAgIHRoaXMuX2RlYnVnQ2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAvLyBOT1RFOiB3ZSBkb24ndCB1c2UgcG9vbCBmb3Igdmlld3MgKGJlY2F1c2UgaXQncyBsZXNzIGNoYW5nZWQgYW5kIGl0IGRvZXNuJ3QgaGF2ZSBwb29sSUQpXG4gICAgdGhpcy5fdmlld3MgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY2VuZSwgW3tcbiAgICBrZXk6ICdfYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZChwb29sLCBpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5fcG9vbElEICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBvb2wucHVzaChpdGVtKTtcbiAgICAgIGl0ZW0uX3Bvb2xJRCA9IHBvb2wubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZShwb29sLCBpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5fcG9vbElEID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBvb2wuZGF0YVtwb29sLmxlbmd0aCAtIDFdLl9wb29sSUQgPSBpdGVtLl9wb29sSUQ7XG4gICAgICBwb29sLmZhc3RSZW1vdmUoaXRlbS5fcG9vbElEKTtcbiAgICAgIGl0ZW0uX3Bvb2xJRCA9IC0xO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlIGJ1aWx0LWluIGJvdW5kaW5nIHNoYXBlcyBpZiBuZWVkZWQsXHJcbiAgICAgKiB1c2VkIGluIHRoZSBmcnVzdHVtIGN1bGxpbmcgcHJvY2Vzc1xyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5fbW9kZWxzLmRhdGFbaV07XG4gICAgICAgIG1vZGVsLl91cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIHJlc2V0IHRoZSBtb2RlbCB2aWV3SURzXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX21vZGVscy5kYXRhW2ldO1xuICAgICAgICBtb2RlbC5fdmlld0lEID0gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGRlYnVnIGNhbWVyYVxyXG4gICAgICogQHBhcmFtIHtDYW1lcmF9IGNhbSB0aGUgZGVidWcgY2FtZXJhXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0RGVidWdDYW1lcmEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWJ1Z0NhbWVyYShjYW0pIHtcbiAgICAgIHRoaXMuX2RlYnVnQ2FtZXJhID0gY2FtO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb3VudCBvZiByZWdpc3RlcmVkIGNhbWVyYXNcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGNhbWVyYSBjb3VudFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENhbWVyYUNvdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2FtZXJhQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FtZXJhcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNwZWNpZmllZCBjYW1lcmFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggY2FtZXJhIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7Q2FtZXJhfSB0aGUgc3BlY2lmaWVkIGNhbWVyYVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENhbWVyYScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhbWVyYShpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW1lcmFzLmRhdGFbaWR4XTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIHJlZ2lzdGVyIGEgY2FtZXJhXHJcbiAgICAgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIHRoZSBuZXcgY2FtZXJhXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkQ2FtZXJhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2FtZXJhKGNhbWVyYSkge1xuICAgICAgdGhpcy5fYWRkKHRoaXMuX2NhbWVyYXMsIGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgYSBjYW1lcmFcclxuICAgICAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgdGhlIGNhbWVyYSB0byBiZSByZW1vdmVkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQ2FtZXJhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2FtZXJhKGNhbWVyYSkge1xuICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX2NhbWVyYXMsIGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvdW50IG9mIHJlZ2lzdGVyZWQgbW9kZWxcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IG1vZGVsIGNvdW50XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW9kZWxDb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vZGVsQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kZWxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3BlY2lmaWVkIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IG1vZGVsIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7TW9kZWx9IHRoZSBzcGVjaWZpZWQgbW9kZWxcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNb2RlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vZGVsKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vZGVscy5kYXRhW2lkeF07XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiByZWdpc3RlciBhIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0ge01vZGVsfSBtb2RlbCB0aGUgbmV3IG1vZGVsXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkTW9kZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRNb2RlbChtb2RlbCkge1xuICAgICAgdGhpcy5fYWRkKHRoaXMuX21vZGVscywgbW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGEgbW9kZWxcclxuICAgICAqIEBwYXJhbSB7TW9kZWx9IG1vZGVsIHRoZSBtb2RlbCB0byBiZSByZW1vdmVkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlTW9kZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVNb2RlbChtb2RlbCkge1xuICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX21vZGVscywgbW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb3VudCBvZiByZWdpc3RlcmVkIGxpZ2h0XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBsaWdodCBjb3VudFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldExpZ2h0Q291bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMaWdodENvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNwZWNpZmllZCBsaWdodFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBsaWdodCBpbmRleFxyXG4gICAgICogQHJldHVybnMge0xpZ2h0fSB0aGUgc3BlY2lmaWVkIGxpZ2h0XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TGlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMaWdodChpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saWdodHMuZGF0YVtpZHhdO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogcmVnaXN0ZXIgYSBsaWdodFxyXG4gICAgICogQHBhcmFtIHtMaWdodH0gbGlnaHQgdGhlIG5ldyBsaWdodFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZExpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlnaHQobGlnaHQpIHtcbiAgICAgIHRoaXMuX2FkZCh0aGlzLl9saWdodHMsIGxpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBhIGxpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge0xpZ2h0fSBsaWdodCB0aGUgbGlnaHQgdG8gYmUgcmVtb3ZlZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUxpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlnaHQobGlnaHQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZSh0aGlzLl9saWdodHMsIGxpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIHJlZ2lzdGVyIGEgdmlld1xyXG4gICAgICogQHBhcmFtIHtWaWV3fSB2aWV3IHRoZSBuZXcgdmlld1xyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZFZpZXcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRWaWV3KHZpZXcpIHtcbiAgICAgIGlmICh0aGlzLl92aWV3cy5pbmRleE9mKHZpZXcpID09PSAtMSkge1xuICAgICAgICB0aGlzLl92aWV3cy5wdXNoKHZpZXcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGEgdmlld1xyXG4gICAgICogQHBhcmFtIHtWaWV3fSB2aWV3IHRoZSB2aWV3IHRvIGJlIHJlbW92ZWRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVWaWV3JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmlldyh2aWV3KSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5fdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTY2VuZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2NlbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTmpaVzVsTG1weklsMHNJbTVoYldWeklqcGJJbE5qWlc1bElpd2lZWEJ3SWl3aVgyeHBaMmgwY3lJc0lsOXRiMlJsYkhNaUxDSmZZMkZ0WlhKaGN5SXNJbDlrWldKMVowTmhiV1Z5WVNJc0lsOWhjSEFpTENKZmRtbGxkM01pTENKd2IyOXNJaXdpYVhSbGJTSXNJbDl3YjI5c1NVUWlMQ0p3ZFhOb0lpd2liR1Z1WjNSb0lpd2laR0YwWVNJc0ltWmhjM1JTWlcxdmRtVWlMQ0pwSWl3aWJXOWtaV3dpTENKZmRYQmtZWFJsVkhKaGJuTm1iM0p0SWl3aVgzWnBaWGRKUkNJc0ltTmhiU0lzSW1sa2VDSXNJbU5oYldWeVlTSXNJbDloWkdRaUxDSmZjbVZ0YjNabElpd2liR2xuYUhRaUxDSjJhV1YzSWl3aWFXNWtaWGhQWmlJc0luTndiR2xqWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08zRnFRa0ZCUVRzN1FVRkZRVHM3T3p0QlFVVkJPenM3U1VGSFRVRXNTenRCUVVOS096czdRVUZIUVN4cFFrRkJXVU1zUjBGQldpeEZRVUZwUWp0QlFVRkJPenRCUVVObUxGTkJRVXRETEU5QlFVd3NSMEZCWlN4elFrRkJaU3hGUVVGbUxFTkJRV1k3UVVGRFFTeFRRVUZMUXl4UFFVRk1MRWRCUVdVc2MwSkJRV1VzUlVGQlppeERRVUZtTzBGQlEwRXNVMEZCUzBNc1VVRkJUQ3hIUVVGblFpeHpRa0ZCWlN4RlFVRm1MRU5CUVdoQ08wRkJRMEVzVTBGQlMwTXNXVUZCVEN4SFFVRnZRaXhKUVVGd1FqdEJRVU5CTEZOQlFVdERMRWxCUVV3c1IwRkJXVXdzUjBGQldqczdRVUZGUVR0QlFVTkJMRk5CUVV0TkxFMUJRVXdzUjBGQll5eEZRVUZrTzBGQlEwUTdPenM3ZVVKQlJVbERMRWtzUlVGQlRVTXNTU3hGUVVGTk8wRkJRMllzVlVGQlNVRXNTMEZCUzBNc1QwRkJUQ3hMUVVGcFFpeERRVUZETEVOQlFYUkNMRVZCUVhsQ08wRkJRM1pDTzBGQlEwUTdPMEZCUlVSR0xGZEJRVXRITEVsQlFVd3NRMEZCVlVZc1NVRkJWanRCUVVOQlFTeFhRVUZMUXl4UFFVRk1MRWRCUVdWR0xFdEJRVXRKTEUxQlFVd3NSMEZCWXl4RFFVRTNRanRCUVVORU96czdORUpCUlU5S0xFa3NSVUZCVFVNc1NTeEZRVUZOTzBGQlEyeENMRlZCUVVsQkxFdEJRVXRETEU5QlFVd3NTMEZCYVVJc1EwRkJReXhEUVVGMFFpeEZRVUY1UWp0QlFVTjJRanRCUVVORU96dEJRVVZFUml4WFFVRkxTeXhKUVVGTUxFTkJRVlZNTEV0QlFVdEpMRTFCUVV3c1IwRkJXU3hEUVVGMFFpeEZRVUY1UWtZc1QwRkJla0lzUjBGQmJVTkVMRXRCUVV0RExFOUJRWGhETzBGQlEwRkdMRmRCUVV0TkxGVkJRVXdzUTBGQlowSk1MRXRCUVV0RExFOUJRWEpDTzBGQlEwRkVMRmRCUVV0RExFOUJRVXdzUjBGQlpTeERRVUZETEVOQlFXaENPMEZCUTBRN08wRkJSVVE3T3pzN096czdNa0pCU1U4N1FVRkRUQ3hYUVVGTExFbEJRVWxMTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNTeExRVUZMV2l4UFFVRk1MRU5CUVdGVExFMUJRV3BETEVWQlFYbERMRVZCUVVWSExFTkJRVE5ETEVWQlFUaERPMEZCUXpWRExGbEJRVWxETEZGQlFWRXNTMEZCUzJJc1QwRkJUQ3hEUVVGaFZTeEpRVUZpTEVOQlFXdENSU3hEUVVGc1FpeERRVUZhTzBGQlEwRkRMR05CUVUxRExHZENRVUZPTzBGQlEwUTdRVUZEUmpzN1FVRkZSRHM3T3pzN096UkNRVWRSTzBGQlEwNHNWMEZCU3l4SlFVRkpSaXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVrc1MwRkJTMW9zVDBGQlRDeERRVUZoVXl4TlFVRnFReXhGUVVGNVF5eEZRVUZGUnl4RFFVRXpReXhGUVVFNFF6dEJRVU0xUXl4WlFVRkpReXhSUVVGUkxFdEJRVXRpTEU5QlFVd3NRMEZCWVZVc1NVRkJZaXhEUVVGclFrVXNRMEZCYkVJc1EwRkJXanRCUVVOQlF5eGpRVUZOUlN4UFFVRk9MRWRCUVdkQ0xFTkJRVU1zUTBGQmFrSTdRVUZEUkR0QlFVTkdPenRCUVVWRU96czdPenM3TzIxRFFVbGxReXhITEVWQlFVczdRVUZEYkVJc1YwRkJTMlFzV1VGQlRDeEhRVUZ2UW1Nc1IwRkJjRUk3UVVGRFJEczdRVUZGUkRzN096czdPenR4UTBGSmFVSTdRVUZEWml4aFFVRlBMRXRCUVV0bUxGRkJRVXdzUTBGQlkxRXNUVUZCY2tJN1FVRkRSRHM3UVVGRlJEczdPenM3T3pzN09FSkJTMVZSTEVjc1JVRkJTenRCUVVOaUxHRkJRVThzUzBGQlMyaENMRkZCUVV3c1EwRkJZMU1zU1VGQlpDeERRVUZ0UWs4c1IwRkJia0lzUTBGQlVEdEJRVU5FT3p0QlFVVkVPenM3T3pzN096aENRVWxWUXl4TkxFVkJRVkU3UVVGRGFFSXNWMEZCUzBNc1NVRkJUQ3hEUVVGVkxFdEJRVXRzUWl4UlFVRm1MRVZCUVhsQ2FVSXNUVUZCZWtJN1FVRkRSRHM3UVVGRlJEczdPenM3T3p0cFEwRkpZVUVzVFN4RlFVRlJPMEZCUTI1Q0xGZEJRVXRGTEU5QlFVd3NRMEZCWVN4TFFVRkxia0lzVVVGQmJFSXNSVUZCTkVKcFFpeE5RVUUxUWp0QlFVTkVPenRCUVVWRU96czdPenM3TzI5RFFVbG5RanRCUVVOa0xHRkJRVThzUzBGQlMyeENMRTlCUVV3c1EwRkJZVk1zVFVGQmNFSTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czdOa0pCUzFOUkxFY3NSVUZCU3p0QlFVTmFMR0ZCUVU4c1MwRkJTMnBDTEU5QlFVd3NRMEZCWVZVc1NVRkJZaXhEUVVGclFrOHNSMEZCYkVJc1EwRkJVRHRCUVVORU96dEJRVVZFT3pzN096czdPelpDUVVsVFNpeExMRVZCUVU4N1FVRkRaQ3hYUVVGTFRTeEpRVUZNTEVOQlFWVXNTMEZCUzI1Q0xFOUJRV1lzUlVGQmQwSmhMRXRCUVhoQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN1owTkJTVmxCTEVzc1JVRkJUenRCUVVOcVFpeFhRVUZMVHl4UFFVRk1MRU5CUVdFc1MwRkJTM0JDTEU5QlFXeENMRVZCUVRKQ1lTeExRVUV6UWp0QlFVTkVPenRCUVVWRU96czdPenM3TzI5RFFVbG5RanRCUVVOa0xHRkJRVThzUzBGQlMyUXNUMEZCVEN4RFFVRmhWU3hOUVVGd1FqdEJRVU5FT3p0QlFVVkVPenM3T3pzN096czJRa0ZMVTFFc1J5eEZRVUZMTzBGQlExb3NZVUZCVHl4TFFVRkxiRUlzVDBGQlRDeERRVUZoVnl4SlFVRmlMRU5CUVd0Q1R5eEhRVUZzUWl4RFFVRlFPMEZCUTBRN08wRkJSVVE3T3pzN096czdOa0pCU1ZOSkxFc3NSVUZCVHp0QlFVTmtMRmRCUVV0R0xFbEJRVXdzUTBGQlZTeExRVUZMY0VJc1QwRkJaaXhGUVVGM1FuTkNMRXRCUVhoQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN1owTkJTVmxCTEVzc1JVRkJUenRCUVVOcVFpeFhRVUZMUkN4UFFVRk1MRU5CUVdFc1MwRkJTM0pDTEU5QlFXeENMRVZCUVRKQ2MwSXNTMEZCTTBJN1FVRkRSRHM3UVVGRlJEczdPenM3T3pzMFFrRkpVVU1zU1N4RlFVRk5PMEZCUTFvc1ZVRkJTU3hMUVVGTGJFSXNUVUZCVEN4RFFVRlpiVUlzVDBGQldpeERRVUZ2UWtRc1NVRkJjRUlzVFVGQk9FSXNRMEZCUXl4RFFVRnVReXhGUVVGelF6dEJRVU53UXl4aFFVRkxiRUlzVFVGQlRDeERRVUZaU1N4SlFVRmFMRU5CUVdsQ1l5eEpRVUZxUWp0QlFVTkVPMEZCUTBZN08wRkJSVVE3T3pzN096czdLMEpCU1ZkQkxFa3NSVUZCVFR0QlFVTm1MRlZCUVVsTUxFMUJRVTBzUzBGQlMySXNUVUZCVEN4RFFVRlpiVUlzVDBGQldpeERRVUZ2UWtRc1NVRkJjRUlzUTBGQlZqdEJRVU5CTEZWQlFVbE1MRkZCUVZFc1EwRkJReXhEUVVGaUxFVkJRV2RDTzBGQlEyUXNZVUZCUzJJc1RVRkJUQ3hEUVVGWmIwSXNUVUZCV2l4RFFVRnRRbEFzUjBGQmJrSXNSVUZCZDBJc1EwRkJlRUk3UVVGRFJEdEJRVU5HT3pzN096czdhMEpCUjFsd1FpeExJaXdpWm1sc1pTSTZJbk5qWlc1bExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdVhISmNibHh5WEc1cGJYQnZjblFnZXlCR2FYaGxaRUZ5Y21GNUlIMGdabkp2YlNBbkxpNHZiV1Z0YjNBbk8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFRWdjbVZ3Y21WelpXNTBZWFJwYjI0Z2IyWWdkR2hsSUhOalpXNWxYSEpjYmlBcUwxeHlYRzVqYkdGemN5QlRZMlZ1WlNCN1hISmNiaUFnTHlvcVhISmNiaUFnSUNvZ1UyVjBkWEFnWVNCa1pXWmhkV3gwSUdWdGNIUjVJSE5qWlc1bFhISmNiaUFnSUNvdlhISmNiaUFnWTI5dWMzUnlkV04wYjNJb1lYQndLU0I3WEhKY2JpQWdJQ0IwYUdsekxsOXNhV2RvZEhNZ1BTQnVaWGNnUm1sNFpXUkJjbkpoZVNneE5pazdYSEpjYmlBZ0lDQjBhR2x6TGw5dGIyUmxiSE1nUFNCdVpYY2dSbWw0WldSQmNuSmhlU2d4TmlrN1hISmNiaUFnSUNCMGFHbHpMbDlqWVcxbGNtRnpJRDBnYm1WM0lFWnBlR1ZrUVhKeVlYa29NVFlwTzF4eVhHNGdJQ0FnZEdocGN5NWZaR1ZpZFdkRFlXMWxjbUVnUFNCdWRXeHNPMXh5WEc0Z0lDQWdkR2hwY3k1ZllYQndJRDBnWVhCd08xeHlYRzVjY2x4dUlDQWdJQzh2SUU1UFZFVTZJSGRsSUdSdmJpZDBJSFZ6WlNCd2IyOXNJR1p2Y2lCMmFXVjNjeUFvWW1WallYVnpaU0JwZENkeklHeGxjM01nWTJoaGJtZGxaQ0JoYm1RZ2FYUWdaRzlsYzI0bmRDQm9ZWFpsSUhCdmIyeEpSQ2xjY2x4dUlDQWdJSFJvYVhNdVgzWnBaWGR6SUQwZ1cxMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQmZZV1JrS0hCdmIyd3NJR2wwWlcwcElIdGNjbHh1SUNBZ0lHbG1JQ2hwZEdWdExsOXdiMjlzU1VRZ0lUMDlJQzB4S1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndiMjlzTG5CMWMyZ29hWFJsYlNrN1hISmNiaUFnSUNCcGRHVnRMbDl3YjI5c1NVUWdQU0J3YjI5c0xteGxibWQwYUNBdElERTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQmZjbVZ0YjNabEtIQnZiMndzSUdsMFpXMHBJSHRjY2x4dUlDQWdJR2xtSUNocGRHVnRMbDl3YjI5c1NVUWdQVDA5SUMweEtTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3YjI5c0xtUmhkR0ZiY0c5dmJDNXNaVzVuZEdndE1WMHVYM0J2YjJ4SlJDQTlJR2wwWlcwdVgzQnZiMnhKUkR0Y2NseHVJQ0FnSUhCdmIyd3VabUZ6ZEZKbGJXOTJaU2hwZEdWdExsOXdiMjlzU1VRcE8xeHlYRzRnSUNBZ2FYUmxiUzVmY0c5dmJFbEVJRDBnTFRFN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdktpcGNjbHh1SUNBZ0tpQjFjR1JoZEdVZ1luVnBiSFF0YVc0Z1ltOTFibVJwYm1jZ2MyaGhjR1Z6SUdsbUlHNWxaV1JsWkN4Y2NseHVJQ0FnS2lCMWMyVmtJR2x1SUhSb1pTQm1jblZ6ZEhWdElHTjFiR3hwYm1jZ2NISnZZMlZ6YzF4eVhHNGdJQ0FxTDF4eVhHNGdJSFJwWTJzb0tTQjdYSEpjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdVgyMXZaR1ZzY3k1c1pXNW5kR2c3SUNzcmFTa2dlMXh5WEc0Z0lDQWdJQ0JzWlhRZ2JXOWtaV3dnUFNCMGFHbHpMbDl0YjJSbGJITXVaR0YwWVZ0cFhUdGNjbHh1SUNBZ0lDQWdiVzlrWld3dVgzVndaR0YwWlZSeVlXNXpabTl5YlNncE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5b3FYSEpjYmlBZ0lDb2djbVZ6WlhRZ2RHaGxJRzF2WkdWc0lIWnBaWGRKUkhOY2NseHVJQ0FnS2k5Y2NseHVJQ0J5WlhObGRDZ3BJSHRjY2x4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NWZiVzlrWld4ekxteGxibWQwYURzZ0t5dHBLU0I3WEhKY2JpQWdJQ0FnSUd4bGRDQnRiMlJsYkNBOUlIUm9hWE11WDIxdlpHVnNjeTVrWVhSaFcybGRPMXh5WEc0Z0lDQWdJQ0J0YjJSbGJDNWZkbWxsZDBsRUlEMGdMVEU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2S2lwY2NseHVJQ0FnS2lCVFpYUWdkR2hsSUdSbFluVm5JR05oYldWeVlWeHlYRzRnSUNBcUlFQndZWEpoYlNCN1EyRnRaWEpoZlNCallXMGdkR2hsSUdSbFluVm5JR05oYldWeVlWeHlYRzRnSUNBcUwxeHlYRzRnSUhObGRFUmxZblZuUTJGdFpYSmhLR05oYlNrZ2UxeHlYRzRnSUNBZ2RHaHBjeTVmWkdWaWRXZERZVzFsY21FZ1BTQmpZVzA3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2S2lwY2NseHVJQ0FnS2lCSFpYUWdkR2hsSUdOdmRXNTBJRzltSUhKbFoybHpkR1Z5WldRZ1kyRnRaWEpoYzF4eVhHNGdJQ0FxSUVCeVpYUjFjbTV6SUh0dWRXMWlaWEo5SUdOaGJXVnlZU0JqYjNWdWRGeHlYRzRnSUNBcUwxeHlYRzRnSUdkbGRFTmhiV1Z5WVVOdmRXNTBLQ2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyTmhiV1Z5WVhNdWJHVnVaM1JvTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnTHlvcVhISmNiaUFnSUNvZ1IyVjBJSFJvWlNCemNHVmphV1pwWldRZ1kyRnRaWEpoWEhKY2JpQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR2xrZUNCallXMWxjbUVnYVc1a1pYaGNjbHh1SUNBZ0tpQkFjbVYwZFhKdWN5QjdRMkZ0WlhKaGZTQjBhR1VnYzNCbFkybG1hV1ZrSUdOaGJXVnlZVnh5WEc0Z0lDQXFMMXh5WEc0Z0lHZGxkRU5oYldWeVlTaHBaSGdwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWpZVzFsY21GekxtUmhkR0ZiYVdSNFhUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHFLbHh5WEc0Z0lDQXFJSEpsWjJsemRHVnlJR0VnWTJGdFpYSmhYSEpjYmlBZ0lDb2dRSEJoY21GdElIdERZVzFsY21GOUlHTmhiV1Z5WVNCMGFHVWdibVYzSUdOaGJXVnlZVnh5WEc0Z0lDQXFMMXh5WEc0Z0lHRmtaRU5oYldWeVlTaGpZVzFsY21FcElIdGNjbHh1SUNBZ0lIUm9hWE11WDJGa1pDaDBhR2x6TGw5allXMWxjbUZ6TENCallXMWxjbUVwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnTHlvcVhISmNiaUFnSUNvZ2NtVnRiM1psSUdFZ1kyRnRaWEpoWEhKY2JpQWdJQ29nUUhCaGNtRnRJSHREWVcxbGNtRjlJR05oYldWeVlTQjBhR1VnWTJGdFpYSmhJSFJ2SUdKbElISmxiVzkyWldSY2NseHVJQ0FnS2k5Y2NseHVJQ0J5WlcxdmRtVkRZVzFsY21Fb1kyRnRaWEpoS1NCN1hISmNiaUFnSUNCMGFHbHpMbDl5WlcxdmRtVW9kR2hwY3k1ZlkyRnRaWEpoY3l3Z1kyRnRaWEpoS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4cUtseHlYRzRnSUNBcUlFZGxkQ0IwYUdVZ1kyOTFiblFnYjJZZ2NtVm5hWE4wWlhKbFpDQnRiMlJsYkZ4eVhHNGdJQ0FxSUVCeVpYUjFjbTV6SUh0dWRXMWlaWEo5SUcxdlpHVnNJR052ZFc1MFhISmNiaUFnSUNvdlhISmNiaUFnWjJWMFRXOWtaV3hEYjNWdWRDZ3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dGIyUmxiSE11YkdWdVozUm9PMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMeW9xWEhKY2JpQWdJQ29nUjJWMElIUm9aU0J6Y0dWamFXWnBaV1FnYlc5a1pXeGNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2FXUjRJRzF2WkdWc0lHbHVaR1Y0WEhKY2JpQWdJQ29nUUhKbGRIVnlibk1nZTAxdlpHVnNmU0IwYUdVZ2MzQmxZMmxtYVdWa0lHMXZaR1ZzWEhKY2JpQWdJQ292WEhKY2JpQWdaMlYwVFc5a1pXd29hV1I0S1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZiVzlrWld4ekxtUmhkR0ZiYVdSNFhUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHFLbHh5WEc0Z0lDQXFJSEpsWjJsemRHVnlJR0VnYlc5a1pXeGNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UwMXZaR1ZzZlNCdGIyUmxiQ0IwYUdVZ2JtVjNJRzF2WkdWc1hISmNiaUFnSUNvdlhISmNiaUFnWVdSa1RXOWtaV3dvYlc5a1pXd3BJSHRjY2x4dUlDQWdJSFJvYVhNdVgyRmtaQ2gwYUdsekxsOXRiMlJsYkhNc0lHMXZaR1ZzS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4cUtseHlYRzRnSUNBcUlISmxiVzkyWlNCaElHMXZaR1ZzWEhKY2JpQWdJQ29nUUhCaGNtRnRJSHROYjJSbGJIMGdiVzlrWld3Z2RHaGxJRzF2WkdWc0lIUnZJR0psSUhKbGJXOTJaV1JjY2x4dUlDQWdLaTljY2x4dUlDQnlaVzF2ZG1WTmIyUmxiQ2h0YjJSbGJDa2dlMXh5WEc0Z0lDQWdkR2hwY3k1ZmNtVnRiM1psS0hSb2FYTXVYMjF2WkdWc2N5d2diVzlrWld3cE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dSMlYwSUhSb1pTQmpiM1Z1ZENCdlppQnlaV2RwYzNSbGNtVmtJR3hwWjJoMFhISmNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ2UyNTFiV0psY24wZ2JHbG5hSFFnWTI5MWJuUmNjbHh1SUNBZ0tpOWNjbHh1SUNCblpYUk1hV2RvZEVOdmRXNTBLQ2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyeHBaMmgwY3k1c1pXNW5kR2c3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2S2lwY2NseHVJQ0FnS2lCSFpYUWdkR2hsSUhOd1pXTnBabWxsWkNCc2FXZG9kRnh5WEc0Z0lDQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnBaSGdnYkdsbmFIUWdhVzVrWlhoY2NseHVJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RHbG5hSFI5SUhSb1pTQnpjR1ZqYVdacFpXUWdiR2xuYUhSY2NseHVJQ0FnS2k5Y2NseHVJQ0JuWlhSTWFXZG9kQ2hwWkhncElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlzYVdkb2RITXVaR0YwWVZ0cFpIaGRPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMeW9xWEhKY2JpQWdJQ29nY21WbmFYTjBaWElnWVNCc2FXZG9kRnh5WEc0Z0lDQXFJRUJ3WVhKaGJTQjdUR2xuYUhSOUlHeHBaMmgwSUhSb1pTQnVaWGNnYkdsbmFIUmNjbHh1SUNBZ0tpOWNjbHh1SUNCaFpHUk1hV2RvZENoc2FXZG9kQ2tnZTF4eVhHNGdJQ0FnZEdocGN5NWZZV1JrS0hSb2FYTXVYMnhwWjJoMGN5d2diR2xuYUhRcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5b3FYSEpjYmlBZ0lDb2djbVZ0YjNabElHRWdiR2xuYUhSY2NseHVJQ0FnS2lCQWNHRnlZVzBnZTB4cFoyaDBmU0JzYVdkb2RDQjBhR1VnYkdsbmFIUWdkRzhnWW1VZ2NtVnRiM1psWkZ4eVhHNGdJQ0FxTDF4eVhHNGdJSEpsYlc5MlpVeHBaMmgwS0d4cFoyaDBLU0I3WEhKY2JpQWdJQ0IwYUdsekxsOXlaVzF2ZG1Vb2RHaHBjeTVmYkdsbmFIUnpMQ0JzYVdkb2RDazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXZLaXBjY2x4dUlDQWdLaUJ5WldkcGMzUmxjaUJoSUhacFpYZGNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UxWnBaWGQ5SUhacFpYY2dkR2hsSUc1bGR5QjJhV1YzWEhKY2JpQWdJQ292WEhKY2JpQWdZV1JrVm1sbGR5aDJhV1YzS1NCN1hISmNiaUFnSUNCcFppQW9kR2hwY3k1ZmRtbGxkM011YVc1a1pYaFBaaWgyYVdWM0tTQTlQVDBnTFRFcElIdGNjbHh1SUNBZ0lDQWdkR2hwY3k1ZmRtbGxkM011Y0hWemFDaDJhV1YzS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4cUtseHlYRzRnSUNBcUlISmxiVzkyWlNCaElIWnBaWGRjY2x4dUlDQWdLaUJBY0dGeVlXMGdlMVpwWlhkOUlIWnBaWGNnZEdobElIWnBaWGNnZEc4Z1ltVWdjbVZ0YjNabFpGeHlYRzRnSUNBcUwxeHlYRzRnSUhKbGJXOTJaVlpwWlhjb2RtbGxkeWtnZTF4eVhHNGdJQ0FnYkdWMElHbGtlQ0E5SUhSb2FYTXVYM1pwWlhkekxtbHVaR1Y0VDJZb2RtbGxkeWs3WEhKY2JpQWdJQ0JwWmlBb2FXUjRJQ0U5UFNBdE1Ta2dlMXh5WEc0Z0lDQWdJQ0IwYUdsekxsOTJhV1YzY3k1emNHeHBZMlVvYVdSNExDQXhLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk5qWlc1bE8xeHlYRzRpWFgwPSJdfQ==