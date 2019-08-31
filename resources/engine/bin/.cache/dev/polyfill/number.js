(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/polyfill/number.js';
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
        Number.parseFloat = Number.parseFloat || parseFloat;
        Number.parseInt = Number.parseInt || parseInt;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL3BvbHlmaWxsL251bWJlci5qcyJdLCJuYW1lcyI6WyJOdW1iZXIiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7SUFDb0JBLElBQUFBLE9BQUFBLEdBQU9DLE9BQWNBLE9BQWRBLEtBQTNCLFdBQTJCQSxJQUEzQixPQUFBLE9BQUEsS0FBQSxXQUFvQkQ7SUFDRkEsSUFBQUEsUUFBQUEsR0FBQSxPQUFBLEdBQWxCLE1BQWtCLEdBQWxCLEVBQUEsT0FBQSxFQUFBLEVBQUEsRUFBa0JBOzs7Ozs7Ozs7Ozs7UUFEbEJBLE1BQUFBLENBQU9DLFVBQVBELEdBQW9CQSxNQUFBQSxDQUFPQyxVQUFQRCxJQUFxQkMsVUFBekNEO1FBQ0FBLE1BQUFBLENBQU9FLFFBQVBGLEdBQWtCQSxNQUFBQSxDQUFPRSxRQUFQRixJQUFtQkUsUUFBckNGIiwiZmlsZSI6Im51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5OdW1iZXIucGFyc2VGbG9hdCA9IE51bWJlci5wYXJzZUZsb2F0IHx8IHBhcnNlRmxvYXQ7XHJcbk51bWJlci5wYXJzZUludCA9IE51bWJlci5wYXJzZUludCB8fCBwYXJzZUludDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk51bWJlci5wYXJzZUZsb2F0ID0gTnVtYmVyLnBhcnNlRmxvYXQgfHwgcGFyc2VGbG9hdDtcbk51bWJlci5wYXJzZUludCA9IE51bWJlci5wYXJzZUludCB8fCBwYXJzZUludDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNTFiV0psY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpPZFcxaVpYSWlMQ0p3WVhKelpVWnNiMkYwSWl3aWNHRnljMlZKYm5RaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRkJMRTlCUVU5RExGVkJRVkFzUjBGQmIwSkVMRTlCUVU5RExGVkJRVkFzU1VGQmNVSkJMRlZCUVhwRE8wRkJRMEZFTEU5QlFVOUZMRkZCUVZBc1IwRkJhMEpHTEU5QlFVOUZMRkZCUVZBc1NVRkJiVUpCTEZGQlFYSkRJaXdpWm1sc1pTSTZJbTUxYldKbGNpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWx4eVhHNU9kVzFpWlhJdWNHRnljMlZHYkc5aGRDQTlJRTUxYldKbGNpNXdZWEp6WlVac2IyRjBJSHg4SUhCaGNuTmxSbXh2WVhRN1hISmNiazUxYldKbGNpNXdZWEp6WlVsdWRDQTlJRTUxYldKbGNpNXdZWEp6WlVsdWRDQjhmQ0J3WVhKelpVbHVkRHRjY2x4dUlsMTkiXX0=