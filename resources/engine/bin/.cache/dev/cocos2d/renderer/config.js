(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/config.js';
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
        var _stageOffset = 0;
        var _name2stageID = {};
        exports.default = {
            addStage: function addStage(name) {
                if (_name2stageID[name] !== undefined) {
                    return;
                }
                var stageID = 1 << _stageOffset;
                _name2stageID[name] = stageID;
                _stageOffset += 1;
            },
            stageID: function stageID(name) {
                var id = _name2stageID[name];
                if (id === undefined) {
                    return -1;
                }
                return id;
            },
            stageIDs: function stageIDs(nameList) {
                var key = 0;
                for (var i = 0; i < nameList.length; ++i) {
                    var id = _name2stageID[nameList[i]];
                    if (id !== undefined) {
                        key |= id;
                    }
                }
                return key;
            }
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvY29uZmlnLmpzIl0sIm5hbWVzIjpbIl9zdGFnZU9mZnNldCIsIl9uYW1lMnN0YWdlSUQiLCJhZGRTdGFnZSIsIm5hbWUiLCJ1bmRlZmluZWQiLCJzdGFnZUlEIiwiaWQiLCJzdGFnZUlEcyIsIm5hbWVMaXN0Iiwia2V5IiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7OztJQUFBLElBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUFBLGdDQUFBO0FBQUEsS0FBQSxHQUVBLFVBQUEsT0FBQSxFQUFBO0FBQUEsUUFDQSxPQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBQUEsQ0FEQTtBQUFBLEtBRkE7SUFLZSxTQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQTtBQUFBLFFBQ0gsSUFBQSxDQUFBLE9BQUEsRUFBZ0I7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQSxTQURiO0FBQUE7O1FBSGYsSUFBSUEsWUFBQUEsR0FBZSxDQUFuQjtRQUNBLElBQUlDLGFBQUFBLEdBQWdCLEVBQXBCOzBCQUVlO0FBQUEsWUFDYkMsUUFBQUEsRUFBVSxTQUFBLFFBQUEsQ0FBVUMsSUFBVixFQUFnQjtBQUFBLGdCQUV4QixJQUFJRixhQUFBQSxDQUFjRSxJQUFkRixNQUF3QkcsU0FBNUIsRUFBdUM7QUFBQSxvQkFDckMsT0FEcUM7QUFBQSxpQkFGZjtBQUFBLGdCQU14QixJQUFJQyxPQUFBQSxHQUFVLEtBQUtMLFlBQW5CLENBTndCO0FBQUEsZ0JBT3hCQyxhQUFBQSxDQUFjRSxJQUFkRixJQUFzQkksT0FBdEJKLENBUHdCO0FBQUEsZ0JBU3hCRCxZQUFBQSxJQUFnQixDQUFoQkEsQ0FUd0I7QUFBQSxhQURiO0FBQUEsWUFhYkssT0FBQUEsRUFBUyxTQUFBLE9BQUEsQ0FBVUYsSUFBVixFQUFnQjtBQUFBLGdCQUN2QixJQUFJRyxFQUFBQSxHQUFLTCxhQUFBQSxDQUFjRSxJQUFkRixDQUFULENBRHVCO0FBQUEsZ0JBRXZCLElBQUlLLEVBQUFBLEtBQU9GLFNBQVgsRUFBc0I7QUFBQSxvQkFDcEIsT0FBTyxDQUFDLENBQVIsQ0FEb0I7QUFBQSxpQkFGQztBQUFBLGdCQUt2QixPQUFPRSxFQUFQLENBTHVCO0FBQUEsYUFiWjtBQUFBLFlBcUJiQyxRQUFBQSxFQUFVLFNBQUEsUUFBQSxDQUFVQyxRQUFWLEVBQW9CO0FBQUEsZ0JBQzVCLElBQUlDLEdBQUFBLEdBQU0sQ0FBVixDQUQ0QjtBQUFBLGdCQUU1QixLQUFLLElBQUlDLENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJRixRQUFBQSxDQUFTRyxNQUE3QixFQUFxQyxFQUFFRCxDQUF2QyxFQUEwQztBQUFBLG9CQUN4QyxJQUFJSixFQUFBQSxHQUFLTCxhQUFBQSxDQUFjTyxRQUFBQSxDQUFTRSxDQUFURixDQUFkUCxDQUFULENBRHdDO0FBQUEsb0JBRXhDLElBQUlLLEVBQUFBLEtBQU9GLFNBQVgsRUFBc0I7QUFBQSx3QkFDcEJLLEdBQUFBLElBQU9ILEVBQVBHLENBRG9CO0FBQUEscUJBRmtCO0FBQUEsaUJBRmQ7QUFBQSxnQkFRNUIsT0FBT0EsR0FBUCxDQVI0QjtBQUFBLGFBckJqQjtBQUFBOzRDQUFBO0FBQUE7SUFHUFIsSUFBY0UsT0FBZEYsRUFBd0JHO0FBQUFBLFFBQzFCLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBRDBCQTtBQUFBQSxLQUF4Qkg7UUFJZUQsaUJBQUFBLENBQW5CLGtCQUFtQkEsQ0FBbkIsVUFBbUJBLEVBQW5CLFlBQUE7QUFBQSxZQUNzQkssUUFBQUEsQ0FBdEIsUUFBQSxDQUFBLE9BQXNCQSxFQUF0QixTQUFzQkEsRUFBdEIsUUFBc0JBLEVBRHRCO0FBQUEsU0FBbUJMIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxubGV0IF9zdGFnZU9mZnNldCA9IDA7XHJcbmxldCBfbmFtZTJzdGFnZUlEID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkU3RhZ2U6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAvLyBhbHJlYWR5IGFkZGVkXHJcbiAgICBpZiAoX25hbWUyc3RhZ2VJRFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RhZ2VJRCA9IDEgPDwgX3N0YWdlT2Zmc2V0O1xyXG4gICAgX25hbWUyc3RhZ2VJRFtuYW1lXSA9IHN0YWdlSUQ7XHJcblxyXG4gICAgX3N0YWdlT2Zmc2V0ICs9IDE7XHJcbiAgfSxcclxuXHJcbiAgc3RhZ2VJRDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIGxldCBpZCA9IF9uYW1lMnN0YWdlSURbbmFtZV07XHJcbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfSxcclxuXHJcbiAgc3RhZ2VJRHM6IGZ1bmN0aW9uIChuYW1lTGlzdCkge1xyXG4gICAgbGV0IGtleSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVMaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGxldCBpZCA9IF9uYW1lMnN0YWdlSURbbmFtZUxpc3RbaV1dO1xyXG4gICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGtleSB8PSBpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxuICB9XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxudmFyIF9zdGFnZU9mZnNldCA9IDA7XG52YXIgX25hbWUyc3RhZ2VJRCA9IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFkZFN0YWdlOiBmdW5jdGlvbiBhZGRTdGFnZShuYW1lKSB7XG4gICAgLy8gYWxyZWFkeSBhZGRlZFxuICAgIGlmIChfbmFtZTJzdGFnZUlEW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3RhZ2VJRCA9IDEgPDwgX3N0YWdlT2Zmc2V0O1xuICAgIF9uYW1lMnN0YWdlSURbbmFtZV0gPSBzdGFnZUlEO1xuXG4gICAgX3N0YWdlT2Zmc2V0ICs9IDE7XG4gIH0sXG5cbiAgc3RhZ2VJRDogZnVuY3Rpb24gc3RhZ2VJRChuYW1lKSB7XG4gICAgdmFyIGlkID0gX25hbWUyc3RhZ2VJRFtuYW1lXTtcbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH0sXG5cbiAgc3RhZ2VJRHM6IGZ1bmN0aW9uIHN0YWdlSURzKG5hbWVMaXN0KSB7XG4gICAgdmFyIGtleSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGlkID0gX25hbWUyc3RhZ2VJRFtuYW1lTGlzdFtpXV07XG4gICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXkgfD0gaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OdmJtWnBaeTVxY3lKZExDSnVZVzFsY3lJNld5SmZjM1JoWjJWUFptWnpaWFFpTENKZmJtRnRaVEp6ZEdGblpVbEVJaXdpWVdSa1UzUmhaMlVpTENKdVlXMWxJaXdpZFc1a1pXWnBibVZrSWl3aWMzUmhaMlZKUkNJc0ltbGtJaXdpYzNSaFoyVkpSSE1pTENKdVlXMWxUR2x6ZENJc0ltdGxlU0lzSW1raUxDSnNaVzVuZEdnaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3TzBGQlJVRXNTVUZCU1VFc1pVRkJaU3hEUVVGdVFqdEJRVU5CTEVsQlFVbERMR2RDUVVGblFpeEZRVUZ3UWpzN2EwSkJSV1U3UVVGRFlrTXNXVUZCVlN4clFrRkJWVU1zU1VGQlZpeEZRVUZuUWp0QlFVTjRRanRCUVVOQkxGRkJRVWxHTEdOQlFXTkZMRWxCUVdRc1RVRkJkMEpETEZOQlFUVkNMRVZCUVhWRE8wRkJRM0pETzBGQlEwUTdPMEZCUlVRc1VVRkJTVU1zVlVGQlZTeExRVUZMVEN4WlFVRnVRanRCUVVOQlF5eHJRa0ZCWTBVc1NVRkJaQ3hKUVVGelFrVXNUMEZCZEVJN08wRkJSVUZNTEc5Q1FVRm5RaXhEUVVGb1FqdEJRVU5FTEVkQldGazdPMEZCWVdKTExGZEJRVk1zYVVKQlFWVkdMRWxCUVZZc1JVRkJaMEk3UVVGRGRrSXNVVUZCU1Vjc1MwRkJTMHdzWTBGQlkwVXNTVUZCWkN4RFFVRlVPMEZCUTBFc1VVRkJTVWNzVDBGQlQwWXNVMEZCV0N4RlFVRnpRanRCUVVOd1FpeGhRVUZQTEVOQlFVTXNRMEZCVWp0QlFVTkVPMEZCUTBRc1YwRkJUMFVzUlVGQlVEdEJRVU5FTEVkQmJrSlpPenRCUVhGQ1lrTXNXVUZCVlN4clFrRkJWVU1zVVVGQlZpeEZRVUZ2UWp0QlFVTTFRaXhSUVVGSlF5eE5RVUZOTEVOQlFWWTdRVUZEUVN4VFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVVlzVTBGQlUwY3NUVUZCTjBJc1JVRkJjVU1zUlVGQlJVUXNRMEZCZGtNc1JVRkJNRU03UVVGRGVFTXNWVUZCU1Vvc1MwRkJTMHdzWTBGQlkwOHNVMEZCVTBVc1EwRkJWQ3hEUVVGa0xFTkJRVlE3UVVGRFFTeFZRVUZKU2l4UFFVRlBSaXhUUVVGWUxFVkJRWE5DTzBGQlEzQkNTeXhsUVVGUFNDeEZRVUZRTzBGQlEwUTdRVUZEUmp0QlFVTkVMRmRCUVU5SExFZEJRVkE3UVVGRFJEdEJRVGxDV1N4RElpd2labWxzWlNJNkltTnZibVpwWnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4eVhHNWNjbHh1YkdWMElGOXpkR0ZuWlU5bVpuTmxkQ0E5SURBN1hISmNibXhsZENCZmJtRnRaVEp6ZEdGblpVbEVJRDBnZTMwN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEhKY2JpQWdZV1JrVTNSaFoyVTZJR1oxYm1OMGFXOXVJQ2h1WVcxbEtTQjdYSEpjYmlBZ0lDQXZMeUJoYkhKbFlXUjVJR0ZrWkdWa1hISmNiaUFnSUNCcFppQW9YMjVoYldVeWMzUmhaMlZKUkZ0dVlXMWxYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JzWlhRZ2MzUmhaMlZKUkNBOUlERWdQRHdnWDNOMFlXZGxUMlptYzJWME8xeHlYRzRnSUNBZ1gyNWhiV1V5YzNSaFoyVkpSRnR1WVcxbFhTQTlJSE4wWVdkbFNVUTdYSEpjYmx4eVhHNGdJQ0FnWDNOMFlXZGxUMlptYzJWMElDczlJREU3WEhKY2JpQWdmU3hjY2x4dVhISmNiaUFnYzNSaFoyVkpSRG9nWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjY2x4dUlDQWdJR3hsZENCcFpDQTlJRjl1WVcxbE1uTjBZV2RsU1VSYmJtRnRaVjA3WEhKY2JpQWdJQ0JwWmlBb2FXUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z0xURTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQnlaWFIxY200Z2FXUTdYSEpjYmlBZ2ZTeGNjbHh1WEhKY2JpQWdjM1JoWjJWSlJITTZJR1oxYm1OMGFXOXVJQ2h1WVcxbFRHbHpkQ2tnZTF4eVhHNGdJQ0FnYkdWMElHdGxlU0E5SURBN1hISmNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNWhiV1ZNYVhOMExteGxibWQwYURzZ0t5dHBLU0I3WEhKY2JpQWdJQ0FnSUd4bGRDQnBaQ0E5SUY5dVlXMWxNbk4wWVdkbFNVUmJibUZ0WlV4cGMzUmJhVjFkTzF4eVhHNGdJQ0FnSUNCcFppQW9hV1FnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh5WEc0Z0lDQWdJQ0FnSUd0bGVTQjhQU0JwWkR0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2NtVjBkWEp1SUd0bGVUdGNjbHh1SUNCOVhISmNibjA3SWwxOSJdfQ==