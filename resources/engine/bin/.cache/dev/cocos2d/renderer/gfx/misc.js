(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/misc.js';
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
        exports.isPow2 = isPow2;
        function isPow2(v) {
            return !(v & v - 1) && !!v;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2MuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2dmeC9taXNjLmpzIl0sIm5hbWVzIjpbImlzUG93MiIsInYiXSwibWFwcGluZ3MiOiI7Ozs7SUFBZ0JBO1FBQVUsT0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBO1FBQ2pCLFVBQVAsT0FBTyxFQUFQO0FBQUEsUUFDRCxPQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBQUEsQ0FEQztBQUFBLEtBRGNBOzs7Ozs7O2dCQUFBQSxTQUFBQTtRQUFULFNBQVNBLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQUEsWUFDeEIsT0FBTyxDQUFFQSxDQUFBQSxDQUFBQSxHQUFLQSxDQUFBQSxHQUFJLENBQVRBLENBQUYsSUFBbUIsQ0FBQyxDQUFDQSxDQUE1QixDQUR3QjtBQUFBIiwiZmlsZSI6Im1pc2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNQb3cyKHYpIHtcclxuICByZXR1cm4gISh2ICYgKHYgLSAxKSkgJiYgKCEhdik7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNQb3cyID0gaXNQb3cyO1xuZnVuY3Rpb24gaXNQb3cyKHYpIHtcbiAgcmV0dXJuICEodiAmIHYgLSAxKSAmJiAhIXY7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTFwYzJNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYVhOUWIzY3lJaXdpZGlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1VVRkJaMEpCTEUwc1IwRkJRVUVzVFR0QlFVRlVMRk5CUVZOQkxFMUJRVlFzUTBGQlowSkRMRU5CUVdoQ0xFVkJRVzFDTzBGQlEzaENMRk5CUVU4c1JVRkJSVUVzU1VGQlMwRXNTVUZCU1N4RFFVRllMRXRCUVcxQ0xFTkJRVU1zUTBGQlEwRXNRMEZCTlVJN1FVRkRSQ0lzSW1acGJHVWlPaUp0YVhOakxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1oxYm1OMGFXOXVJR2x6VUc5M01paDJLU0I3WEhKY2JpQWdjbVYwZFhKdUlDRW9kaUFtSUNoMklDMGdNU2twSUNZbUlDZ2hJWFlwTzF4eVhHNTlJbDE5Il19