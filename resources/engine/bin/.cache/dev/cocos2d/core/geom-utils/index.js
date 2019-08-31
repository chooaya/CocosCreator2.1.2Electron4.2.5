(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/geom-utils/index.js';
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
        cc.geomUtils = {
            Triangle: require('./triangle'),
            Aabb: require('./aabb'),
            Ray: require('./ray'),
            intersect: require('./intersect')
        };
        exports.default = cc.geomUtils;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2dlb20tdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNjIiwiZ2VvbVV0aWxzIiwiVHJpYW5nbGUiLCJBYWJiIiwiUmF5IiwiaW50ZXJzZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUNlLE9BQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTtRQUNPLFVBQVIsT0FBUSxFQURQO0FBQUEsUUFFRyxPQUZILGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBRUcsQ0FGSDtBQUFBO0lBSUFBLFNBQVEsUUFBUkEsQ0FBQSxPQUFBQSxFQUFBLE9BQUFBLEVBQUEsTUFBQUEsRUFBQTtBQUFBLFFBSmYsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBLFNBSWU7QUFBQTs7UUFKZkMsRUFBQUEsQ0FBR0MsU0FBSEQsR0FBZTtBQUFBLFlBQ1hFLFFBQUFBLEVBQVVILE9BQUFBLENBQVEsWUFBUkEsQ0FEQztBQUFBLFlBRVhJLElBQUFBLEVBQU1KLE9BQUFBLENBQVEsUUFBUkEsQ0FGSztBQUFBLFlBR1hLLEdBQUFBLEVBQUtMLE9BQUFBLENBQVEsT0FBUkEsQ0FITTtBQUFBLFlBSVhNLFNBQUFBLEVBQVdOLE9BQUFBLENBQVEsYUFBUkEsQ0FKQTtBQUFBLFNBQWZDOzBCQU9lQSxFQUFBQSxDQUFHQzs0Q0FISDtBQUFBO0lBR0FELElBQUdDLE9BQUhEOztLQUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5nZW9tVXRpbHMgPSB7XHJcbiAgICBUcmlhbmdsZTogcmVxdWlyZSgnLi90cmlhbmdsZScpLFxyXG4gICAgQWFiYjogcmVxdWlyZSgnLi9hYWJiJyksXHJcbiAgICBSYXk6IHJlcXVpcmUoJy4vcmF5JyksXHJcbiAgICBpbnRlcnNlY3Q6IHJlcXVpcmUoJy4vaW50ZXJzZWN0JylcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNjLmdlb21VdGlsc1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuY2MuZ2VvbVV0aWxzID0ge1xuICAgIFRyaWFuZ2xlOiByZXF1aXJlKCcuL3RyaWFuZ2xlJyksXG4gICAgQWFiYjogcmVxdWlyZSgnLi9hYWJiJyksXG4gICAgUmF5OiByZXF1aXJlKCcuL3JheScpLFxuICAgIGludGVyc2VjdDogcmVxdWlyZSgnLi9pbnRlcnNlY3QnKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2MuZ2VvbVV0aWxzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Oaklpd2laMlZ2YlZWMGFXeHpJaXdpVkhKcFlXNW5iR1VpTENKeVpYRjFhWEpsSWl3aVFXRmlZaUlzSWxKaGVTSXNJbWx1ZEdWeWMyVmpkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlEwRkJMRWRCUVVkRExGTkJRVWdzUjBGQlpUdEJRVU5ZUXl4alFVRlZReXhSUVVGUkxGbEJRVklzUTBGRVF6dEJRVVZZUXl4VlFVRk5SQ3hSUVVGUkxGRkJRVklzUTBGR1N6dEJRVWRZUlN4VFFVRkxSaXhSUVVGUkxFOUJRVklzUTBGSVRUdEJRVWxZUnl4bFFVRlhTQ3hSUVVGUkxHRkJRVkk3UVVGS1FTeERRVUZtT3p0clFrRlBaVWdzUjBGQlIwTXNVeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWx4eVhHNWpZeTVuWlc5dFZYUnBiSE1nUFNCN1hISmNiaUFnSUNCVWNtbGhibWRzWlRvZ2NtVnhkV2x5WlNnbkxpOTBjbWxoYm1kc1pTY3BMRnh5WEc0Z0lDQWdRV0ZpWWpvZ2NtVnhkV2x5WlNnbkxpOWhZV0ppSnlrc1hISmNiaUFnSUNCU1lYazZJSEpsY1hWcGNtVW9KeTR2Y21GNUp5a3NYSEpjYmlBZ0lDQnBiblJsY25ObFkzUTZJSEpsY1hWcGNtVW9KeTR2YVc1MFpYSnpaV04wSnlsY2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTmpMbWRsYjIxVmRHbHNjMXh5WEc0aVhYMD0iXX0=