(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/polyfill/array-buffer.js';
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
        if (!ArrayBuffer.isView) {
            var ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;
            ArrayBuffer.isView = function (view) {
                return view instanceof ArrayBufferView;
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LWJ1ZmZlci5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL3BvbHlmaWxsL2FycmF5LWJ1ZmZlci5qcyJdLCJuYW1lcyI6WyJpc1ZpZXciLCJBcnJheUJ1ZmZlclZpZXciLCJnZXRQcm90b3R5cGVPZiIsIk9iamVjdCIsInZpZXciLCJBcnJheUJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IjtJQUFpQkEsSUFBakIsT0FBQSxHQUF5QixPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBUkE7SUFDUEMsSUFBQUEsUUFBQUEsR0FBeUJDLE9BQUFBLEdBQUFBLE1BQUFBLEdBQWVDLEVBQU9ELE9BQUFBLEVBQUFBLEVBQVBDLEVBQXhDRjtJQUNNRCxJQUFaLFVBQUEsR0FBK0JJLHFDQUFuQko7SUFDREksSUFBQUEsU0FBQUEsR0FBZ0JILE9BQUFBLEdBQXZCLFVBQUEsT0FBQSxFQUFBO0FBQUEsUUFESixPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsQ0FDSTtBQUFBLEtBQXVCQSxHQUU5QixVQUFBLE9BQUEsRUFBQTtBQUFBLDhEQUFBO0FBQUEsS0FGY0c7Ozs7OztRQUhmLElBQUksQ0FBQ0MsV0FBQUEsQ0FBWUwsTUFBakIsRUFBeUI7QUFBQSxZQUNyQixJQUFNQyxlQUFBQSxHQUFrQkUsTUFBQUEsQ0FBT0QsY0FBUEMsQ0FBc0JBLE1BQUFBLENBQU9ELGNBQVBDLENBQXNCLElBQUlHLFVBQUosRUFBdEJILENBQXRCQSxFQUE2REksV0FBckYsQ0FEcUI7QUFBQSxZQUVyQkYsV0FBQUEsQ0FBWUwsTUFBWkssR0FBcUIsVUFBVUQsSUFBVixFQUFnQjtBQUFBLGdCQUNqQyxPQUFPQSxJQUFBQSxZQUFnQkgsZUFBdkIsQ0FEaUM7QUFBQSxhQUFyQ0ksQ0FGcUI7QUFBQSIsImZpbGUiOiJhcnJheS1idWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIUFycmF5QnVmZmVyLmlzVmlldykge1xyXG4gICAgY29uc3QgQXJyYXlCdWZmZXJWaWV3ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgVWludDhBcnJheSkpLmNvbnN0cnVjdG9yO1xyXG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gdmlldyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyVmlldztcclxuICAgIH07XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuaWYgKCFBcnJheUJ1ZmZlci5pc1ZpZXcpIHtcbiAgICB2YXIgQXJyYXlCdWZmZXJWaWV3ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgVWludDhBcnJheSgpKSkuY29uc3RydWN0b3I7XG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIHZpZXcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlclZpZXc7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRnljbUY1TFdKMVptWmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SkJjbkpoZVVKMVptWmxjaUlzSW1selZtbGxkeUlzSWtGeWNtRjVRblZtWm1WeVZtbGxkeUlzSWs5aWFtVmpkQ0lzSW1kbGRGQnliM1J2ZEhsd1pVOW1JaXdpVldsdWREaEJjbkpoZVNJc0ltTnZibk4wY25WamRHOXlJaXdpZG1sbGR5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hKUVVGSkxFTkJRVU5CTEZsQlFWbERMRTFCUVdwQ0xFVkJRWGxDTzBGQlEzSkNMRkZCUVUxRExHdENRVUZyUWtNc1QwRkJUME1zWTBGQlVDeERRVUZ6UWtRc1QwRkJUME1zWTBGQlVDeERRVUZ6UWl4SlFVRkpReXhWUVVGS0xFVkJRWFJDTEVOQlFYUkNMRVZCUVRaRVF5eFhRVUZ5Ump0QlFVTkJUaXhuUWtGQldVTXNUVUZCV2l4SFFVRnhRaXhWUVVGVlRTeEpRVUZXTEVWQlFXZENPMEZCUTJwRExHVkJRVTlCTEdkQ1FVRm5Ra3dzWlVGQmRrSTdRVUZEU0N4TFFVWkVPMEZCUjBnaUxDSm1hV3hsSWpvaVlYSnlZWGt0WW5WbVptVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXWWdLQ0ZCY25KaGVVSjFabVpsY2k1cGMxWnBaWGNwSUh0Y2NseHVJQ0FnSUdOdmJuTjBJRUZ5Y21GNVFuVm1abVZ5Vm1sbGR5QTlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloUFltcGxZM1F1WjJWMFVISnZkRzkwZVhCbFQyWW9ibVYzSUZWcGJuUTRRWEp5WVhrcEtTNWpiMjV6ZEhKMVkzUnZjanRjY2x4dUlDQWdJRUZ5Y21GNVFuVm1abVZ5TG1selZtbGxkeUE5SUdaMWJtTjBhVzl1SUNoMmFXVjNLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhacFpYY2dhVzV6ZEdGdVkyVnZaaUJCY25KaGVVSjFabVpsY2xacFpYYzdYSEpjYmlBZ0lDQjlPMXh5WEc1OUlsMTkiXX0=