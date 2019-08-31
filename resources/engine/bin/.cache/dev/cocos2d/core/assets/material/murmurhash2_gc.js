(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/material/murmurhash2_gc.js';
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
        exports.default = murmurhash2_32_gc;
        function murmurhash2_32_gc(str, seed) {
            var l = str.length, h = seed ^ l, i = 0, k;
            while (l >= 4) {
                k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
                k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
                k ^= k >>> 24;
                k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
                h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
                l -= 4;
                ++i;
            }
            switch (l) {
            case 3:
                h ^= (str.charCodeAt(i + 2) & 255) << 16;
            case 2:
                h ^= (str.charCodeAt(i + 1) & 255) << 8;
            case 1:
                h ^= str.charCodeAt(i) & 255;
                h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
            }
            h ^= h >>> 13;
            h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
            h ^= h >>> 15;
            return h >>> 0;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11cm11cmhhc2gyX2djLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2Fzc2V0cy9tYXRlcmlhbC9tdXJtdXJoYXNoMl9nYy5qcyJdLCJuYW1lcyI6WyJtdXJtdXJoYXNoMl8zMl9nYyIsInN0ciIsInNlZWQiLCJsIiwibGVuZ3RoIiwiaCIsImkiLCJrIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6Ijs7OztJQWF3QkEsSUFBQUEsU0FBQUE7UUFieEIsT0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBOzs7S0Fhd0JBOzs7Ozs7OzBCQUFBQTtRQUFULFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFBQSxZQUNuRCxJQUNFQyxDQUFBQSxHQUFJRixHQUFBQSxDQUFJRyxNQURWLEVBRUVDLENBQUFBLEdBQUlILElBQUFBLEdBQU9DLENBRmIsRUFHRUcsQ0FBQUEsR0FBSSxDQUhOLEVBSUVDLENBSkYsQ0FEbUQ7QUFBQSxZQU9uRCxPQUFPSixDQUFBQSxJQUFLLENBQVosRUFBZTtBQUFBLGdCQUNkSSxDQUFBQSxHQUNJTixHQUFBQSxDQUFJTyxVQUFKUCxDQUFlSyxDQUFmTCxJQUFvQixHQUFwQkEsR0FDQUEsQ0FBQUEsR0FBQUEsQ0FBSU8sVUFBSlAsQ0FBZSxFQUFFSyxDQUFqQkwsSUFBc0IsR0FBdEJBLENBQUQsSUFBZ0MsQ0FEL0JBLEdBRUFBLENBQUFBLEdBQUFBLENBQUlPLFVBQUpQLENBQWUsRUFBRUssQ0FBakJMLElBQXNCLEdBQXRCQSxDQUFELElBQWdDLEVBRi9CQSxHQUdBQSxDQUFBQSxHQUFBQSxDQUFJTyxVQUFKUCxDQUFlLEVBQUVLLENBQWpCTCxJQUFzQixHQUF0QkEsQ0FBRCxJQUFnQyxFQUpuQ00sQ0FEYztBQUFBLGdCQU9iQSxDQUFBQSxHQUFPQSxDQUFBQSxDQUFBQSxHQUFJLEtBQUpBLENBQUQsR0FBZSxVQUFmLEdBQThCLENBQUUsQ0FBQ0EsQ0FBQUEsQ0FBQUEsS0FBTSxFQUFOQSxDQUFELEdBQWEsVUFBYixHQUEyQixLQUEzQixDQUFGLElBQXdDLEVBQXhDLENBQXBDQSxDQVBhO0FBQUEsZ0JBUWJBLENBQUFBLElBQUtBLENBQUFBLEtBQU0sRUFBWEEsQ0FSYTtBQUFBLGdCQVNiQSxDQUFBQSxHQUFPQSxDQUFBQSxDQUFBQSxHQUFJLEtBQUpBLENBQUQsR0FBZSxVQUFmLEdBQThCLENBQUUsQ0FBQ0EsQ0FBQUEsQ0FBQUEsS0FBTSxFQUFOQSxDQUFELEdBQWEsVUFBYixHQUEyQixLQUEzQixDQUFGLElBQXdDLEVBQXhDLENBQXBDQSxDQVRhO0FBQUEsZ0JBV2hCRixDQUFBQSxHQUFPQSxDQUFBQSxDQUFBQSxHQUFJLEtBQUpBLENBQUQsR0FBZSxVQUFmLEdBQThCLENBQUUsQ0FBQ0EsQ0FBQUEsQ0FBQUEsS0FBTSxFQUFOQSxDQUFELEdBQWEsVUFBYixHQUEyQixLQUEzQixDQUFGLElBQXdDLEVBQXhDLENBQTlCLEdBQTZFRSxDQUFuRkYsQ0FYZ0I7QUFBQSxnQkFhYkYsQ0FBQUEsSUFBSyxDQUFMQSxDQWJhO0FBQUEsZ0JBY2IsRUFBRUcsQ0FBRixDQWRhO0FBQUEsYUFQb0M7QUFBQSxZQXdCbkQsUUFBUUgsQ0FBUjtBQUFBLFlBQ0EsS0FBSyxDQUFMO0FBQUEsZ0JBQVFFLENBQUFBLElBQU1KLENBQUFBLEdBQUFBLENBQUlPLFVBQUpQLENBQWVLLENBQUFBLEdBQUksQ0FBbkJMLElBQXdCLEdBQXhCQSxDQUFELElBQWtDLEVBQXZDSSxDQURSO0FBQUEsWUFFQSxLQUFLLENBQUw7QUFBQSxnQkFBUUEsQ0FBQUEsSUFBTUosQ0FBQUEsR0FBQUEsQ0FBSU8sVUFBSlAsQ0FBZUssQ0FBQUEsR0FBSSxDQUFuQkwsSUFBd0IsR0FBeEJBLENBQUQsSUFBa0MsQ0FBdkNJLENBRlI7QUFBQSxZQUdBLEtBQUssQ0FBTDtBQUFBLGdCQUFRQSxDQUFBQSxJQUFNSixHQUFBQSxDQUFJTyxVQUFKUCxDQUFlSyxDQUFmTCxJQUFvQixHQUExQkksQ0FBUjtBQUFBLGdCQUNRQSxDQUFBQSxHQUFPQSxDQUFBQSxDQUFBQSxHQUFJLEtBQUpBLENBQUQsR0FBZSxVQUFmLEdBQThCLENBQUUsQ0FBQ0EsQ0FBQUEsQ0FBQUEsS0FBTSxFQUFOQSxDQUFELEdBQWEsVUFBYixHQUEyQixLQUEzQixDQUFGLElBQXdDLEVBQXhDLENBQXBDQSxDQUpSO0FBQUEsYUF4Qm1EO0FBQUEsWUErQm5EQSxDQUFBQSxJQUFLQSxDQUFBQSxLQUFNLEVBQVhBLENBL0JtRDtBQUFBLFlBZ0NuREEsQ0FBQUEsR0FBT0EsQ0FBQUEsQ0FBQUEsR0FBSSxLQUFKQSxDQUFELEdBQWUsVUFBZixHQUE4QixDQUFFLENBQUNBLENBQUFBLENBQUFBLEtBQU0sRUFBTkEsQ0FBRCxHQUFhLFVBQWIsR0FBMkIsS0FBM0IsQ0FBRixJQUF3QyxFQUF4QyxDQUFwQ0EsQ0FoQ21EO0FBQUEsWUFpQ25EQSxDQUFBQSxJQUFLQSxDQUFBQSxLQUFNLEVBQVhBLENBakNtRDtBQUFBLFlBbUNuRCxPQUFPQSxDQUFBQSxLQUFNLENBQWIsQ0FuQ21EO0FBQUEiLCJmaWxlIjoibXVybXVyaGFzaDJfZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSlMgSW1wbGVtZW50YXRpb24gb2YgTXVybXVySGFzaDJcclxuICogXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzpnYXJ5LmNvdXJ0QGdtYWlsLmNvbVwiPkdhcnkgQ291cnQ8L2E+XHJcbiAqIEBzZWUgaHR0cDovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOmFhcHBsZWJ5QGdtYWlsLmNvbVwiPkF1c3RpbiBBcHBsZWJ5PC9hPlxyXG4gKiBAc2VlIGh0dHA6Ly9zaXRlcy5nb29nbGUuY29tL3NpdGUvbXVybXVyaGFzaC9cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQVNDSUkgb25seVxyXG4gKiBAcGFyYW0ge251bWJlcn0gc2VlZCBQb3NpdGl2ZSBpbnRlZ2VyIG9ubHlcclxuICogQHJldHVybiB7bnVtYmVyfSAzMi1iaXQgcG9zaXRpdmUgaW50ZWdlciBoYXNoXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXVybXVyaGFzaDJfMzJfZ2Moc3RyLCBzZWVkKSB7XHJcbiAgdmFyXHJcbiAgICBsID0gc3RyLmxlbmd0aCxcclxuICAgIGggPSBzZWVkIF4gbCxcclxuICAgIGkgPSAwLFxyXG4gICAgaztcclxuICBcclxuICB3aGlsZSAobCA+PSA0KSB7XHJcbiAgXHRrID0gXHJcbiAgXHQgICgoc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSkgfFxyXG4gIFx0ICAoKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4KSB8XHJcbiAgXHQgICgoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2KSB8XHJcbiAgXHQgICgoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0KTtcclxuICAgIFxyXG4gICAgayA9ICgoKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSkgKyAoKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSkgJiAweGZmZmYpIDw8IDE2KSk7XHJcbiAgICBrIF49IGsgPj4+IDI0O1xyXG4gICAgayA9ICgoKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSkgKyAoKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSkgJiAweGZmZmYpIDw8IDE2KSk7XHJcblxyXG5cdGggPSAoKChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUpICsgKCgoKGggPj4+IDE2KSAqIDB4NWJkMWU5OTUpICYgMHhmZmZmKSA8PCAxNikpIF4gaztcclxuXHJcbiAgICBsIC09IDQ7XHJcbiAgICArK2k7XHJcbiAgfVxyXG4gIFxyXG4gIHN3aXRjaCAobCkge1xyXG4gIGNhc2UgMzogaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XHJcbiAgY2FzZSAyOiBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xyXG4gIGNhc2UgMTogaCBePSAoc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKTtcclxuICAgICAgICAgIGggPSAoKChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUpICsgKCgoKGggPj4+IDE2KSAqIDB4NWJkMWU5OTUpICYgMHhmZmZmKSA8PCAxNikpO1xyXG4gIH1cclxuXHJcbiAgaCBePSBoID4+PiAxMztcclxuICBoID0gKCgoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1KSArICgoKChoID4+PiAxNikgKiAweDViZDFlOTk1KSAmIDB4ZmZmZikgPDwgMTYpKTtcclxuICBoIF49IGggPj4+IDE1O1xyXG5cclxuICByZXR1cm4gaCA+Pj4gMDtcclxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVybXVyaGFzaDJfMzJfZ2M7XG4vKipcclxuICogSlMgSW1wbGVtZW50YXRpb24gb2YgTXVybXVySGFzaDJcclxuICogXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzpnYXJ5LmNvdXJ0QGdtYWlsLmNvbVwiPkdhcnkgQ291cnQ8L2E+XHJcbiAqIEBzZWUgaHR0cDovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOmFhcHBsZWJ5QGdtYWlsLmNvbVwiPkF1c3RpbiBBcHBsZWJ5PC9hPlxyXG4gKiBAc2VlIGh0dHA6Ly9zaXRlcy5nb29nbGUuY29tL3NpdGUvbXVybXVyaGFzaC9cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQVNDSUkgb25seVxyXG4gKiBAcGFyYW0ge251bWJlcn0gc2VlZCBQb3NpdGl2ZSBpbnRlZ2VyIG9ubHlcclxuICogQHJldHVybiB7bnVtYmVyfSAzMi1iaXQgcG9zaXRpdmUgaW50ZWdlciBoYXNoXHJcbiAqL1xuXG5mdW5jdGlvbiBtdXJtdXJoYXNoMl8zMl9nYyhzdHIsIHNlZWQpIHtcbiAgdmFyIGwgPSBzdHIubGVuZ3RoLFxuICAgICAgaCA9IHNlZWQgXiBsLFxuICAgICAgaSA9IDAsXG4gICAgICBrO1xuXG4gIHdoaWxlIChsID49IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG5cbiAgICBrID0gKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGsgPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KTtcbiAgICBrIF49IGsgPj4+IDI0O1xuICAgIGsgPSAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuXG4gICAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNikgXiBrO1xuXG4gICAgbCAtPSA0O1xuICAgICsraTtcbiAgfVxuXG4gIHN3aXRjaCAobCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID0gKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGggPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KTtcbiAgfVxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPSAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoaCA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICBoIF49IGggPj4+IDE1O1xuXG4gIHJldHVybiBoID4+PiAwO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltMTFjbTExY21oaGMyZ3lYMmRqTG1weklsMHNJbTVoYldWeklqcGJJbTExY20xMWNtaGhjMmd5WHpNeVgyZGpJaXdpYzNSeUlpd2ljMlZsWkNJc0ltd2lMQ0pzWlc1bmRHZ2lMQ0pvSWl3aWFTSXNJbXNpTENKamFHRnlRMjlrWlVGMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dHJRa0ZoZDBKQkxHbENPMEZCWW5oQ096czdPenM3T3pzN096czdPMEZCWVdVc1UwRkJVMEVzYVVKQlFWUXNRMEZCTWtKRExFZEJRVE5DTEVWQlFXZERReXhKUVVGb1F5eEZRVUZ6UXp0QlFVTnVSQ3hOUVVORlF5eEpRVUZKUml4SlFVRkpSeXhOUVVSV08wRkJRVUVzVFVGRlJVTXNTVUZCU1Vnc1QwRkJUME1zUTBGR1lqdEJRVUZCTEUxQlIwVkhMRWxCUVVrc1EwRklUanRCUVVGQkxFMUJTVVZETEVOQlNrWTdPMEZCVFVFc1UwRkJUMG9zUzBGQlN5eERRVUZhTEVWQlFXVTdRVUZEWkVrc1VVRkRTVTRzU1VGQlNVOHNWVUZCU2l4RFFVRmxSaXhEUVVGbUxFbEJRVzlDTEVsQlFYUkNMRWRCUTBNc1EwRkJRMHdzU1VGQlNVOHNWVUZCU2l4RFFVRmxMRVZCUVVWR0xFTkJRV3BDTEVsQlFYTkNMRWxCUVhaQ0xFdEJRV2RETEVOQlJHcERMRWRCUlVNc1EwRkJRMHdzU1VGQlNVOHNWVUZCU2l4RFFVRmxMRVZCUVVWR0xFTkJRV3BDTEVsQlFYTkNMRWxCUVhaQ0xFdEJRV2RETEVWQlJtcERMRWRCUjBNc1EwRkJRMHdzU1VGQlNVOHNWVUZCU2l4RFFVRmxMRVZCUVVWR0xFTkJRV3BDTEVsQlFYTkNMRWxCUVhaQ0xFdEJRV2RETEVWQlNtNURPenRCUVUxRFF5eFJRVUZOTEVOQlFVTkJMRWxCUVVrc1RVRkJUQ3hKUVVGbExGVkJRV2hDTEVsQlFTdENMRU5CUVVVc1EwRkJRMEVzVFVGQlRTeEZRVUZRTEVsQlFXRXNWVUZCWkN4SFFVRTBRaXhOUVVFM1FpeExRVUYzUXl4RlFVRjJSU3hEUVVGTU8wRkJRMEZCTEZOQlFVdEJMRTFCUVUwc1JVRkJXRHRCUVVOQlFTeFJRVUZOTEVOQlFVTkJMRWxCUVVrc1RVRkJUQ3hKUVVGbExGVkJRV2hDTEVsQlFTdENMRU5CUVVVc1EwRkJRMEVzVFVGQlRTeEZRVUZRTEVsQlFXRXNWVUZCWkN4SFFVRTBRaXhOUVVFM1FpeExRVUYzUXl4RlFVRjJSU3hEUVVGTU96dEJRVVZJUml4UlFVRk5MRU5CUVVOQkxFbEJRVWtzVFVGQlRDeEpRVUZsTEZWQlFXaENMRWxCUVN0Q0xFTkJRVVVzUTBGQlEwRXNUVUZCVFN4RlFVRlFMRWxCUVdFc1ZVRkJaQ3hIUVVFMFFpeE5RVUUzUWl4TFFVRjNReXhGUVVGMlJTeERRVUZFTEVkQlFTdEZSU3hEUVVGdVJqczdRVUZGUjBvc1UwRkJTeXhEUVVGTU8wRkJRMEVzVFVGQlJVY3NRMEZCUmp0QlFVTkVPenRCUVVWRUxGVkJRVkZJTEVOQlFWSTdRVUZEUVN4VFFVRkxMRU5CUVV3N1FVRkJVVVVzVjBGQlN5eERRVUZEU2l4SlFVRkpUeXhWUVVGS0xFTkJRV1ZHTEVsQlFVa3NRMEZCYmtJc1NVRkJkMElzU1VGQmVrSXNTMEZCYTBNc1JVRkJka003UVVGRFVpeFRRVUZMTEVOQlFVdzdRVUZCVVVRc1YwRkJTeXhEUVVGRFNpeEpRVUZKVHl4VlFVRktMRU5CUVdWR0xFbEJRVWtzUTBGQmJrSXNTVUZCZDBJc1NVRkJla0lzUzBGQmEwTXNRMEZCZGtNN1FVRkRVaXhUUVVGTExFTkJRVXc3UVVGQlVVUXNWMEZCVFVvc1NVRkJTVThzVlVGQlNpeERRVUZsUml4RFFVRm1MRWxCUVc5Q0xFbEJRVEZDTzBGQlEwRkVMRlZCUVUwc1EwRkJRMEVzU1VGQlNTeE5RVUZNTEVsQlFXVXNWVUZCYUVJc1NVRkJLMElzUTBGQlJTeERRVUZEUVN4TlFVRk5MRVZCUVZBc1NVRkJZU3hWUVVGa0xFZEJRVFJDTEUxQlFUZENMRXRCUVhkRExFVkJRWFpGTEVOQlFVdzdRVUZLVWpzN1FVRlBRVUVzVDBGQlMwRXNUVUZCVFN4RlFVRllPMEZCUTBGQkxFMUJRVTBzUTBGQlEwRXNTVUZCU1N4TlFVRk1MRWxCUVdVc1ZVRkJhRUlzU1VGQkswSXNRMEZCUlN4RFFVRkRRU3hOUVVGTkxFVkJRVkFzU1VGQllTeFZRVUZrTEVkQlFUUkNMRTFCUVRkQ0xFdEJRWGRETEVWQlFYWkZMRU5CUVV3N1FVRkRRVUVzVDBGQlMwRXNUVUZCVFN4RlFVRllPenRCUVVWQkxGTkJRVTlCTEUxQlFVMHNRMEZCWWp0QlFVTkVJaXdpWm1sc1pTSTZJbTExY20xMWNtaGhjMmd5WDJkakxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhISmNiaUFxSUVwVElFbHRjR3hsYldWdWRHRjBhVzl1SUc5bUlFMTFjbTExY2toaGMyZ3lYSEpjYmlBcUlGeHlYRzRnS2lCQVlYVjBhRzl5SUR4aElHaHlaV1k5WENKdFlXbHNkRzg2WjJGeWVTNWpiM1Z5ZEVCbmJXRnBiQzVqYjIxY0lqNUhZWEo1SUVOdmRYSjBQQzloUGx4eVhHNGdLaUJBYzJWbElHaDBkSEE2THk5bmFYUm9kV0l1WTI5dEwyZGhjbmxqYjNWeWRDOXRkWEp0ZFhKb1lYTm9MV3B6WEhKY2JpQXFJRUJoZFhSb2IzSWdQR0VnYUhKbFpqMWNJbTFoYVd4MGJ6cGhZWEJ3YkdWaWVVQm5iV0ZwYkM1amIyMWNJajVCZFhOMGFXNGdRWEJ3YkdWaWVUd3ZZVDVjY2x4dUlDb2dRSE5sWlNCb2RIUndPaTh2YzJsMFpYTXVaMjl2WjJ4bExtTnZiUzl6YVhSbEwyMTFjbTExY21oaGMyZ3ZYSEpjYmlBcUlGeHlYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnYzNSeUlFRlRRMGxKSUc5dWJIbGNjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUhObFpXUWdVRzl6YVhScGRtVWdhVzUwWldkbGNpQnZibXg1WEhKY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdNekl0WW1sMElIQnZjMmwwYVhabElHbHVkR1ZuWlhJZ2FHRnphRnh5WEc0Z0tpOWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUcxMWNtMTFjbWhoYzJneVh6TXlYMmRqS0hOMGNpd2djMlZsWkNrZ2UxeHlYRzRnSUhaaGNseHlYRzRnSUNBZ2JDQTlJSE4wY2k1c1pXNW5kR2dzWEhKY2JpQWdJQ0JvSUQwZ2MyVmxaQ0JlSUd3c1hISmNiaUFnSUNCcElEMGdNQ3hjY2x4dUlDQWdJR3M3WEhKY2JpQWdYSEpjYmlBZ2QyaHBiR1VnS0d3Z1BqMGdOQ2tnZTF4eVhHNGdJRngwYXlBOUlGeHlYRzRnSUZ4MElDQW9LSE4wY2k1amFHRnlRMjlrWlVGMEtHa3BJQ1lnTUhobVppa3BJSHhjY2x4dUlDQmNkQ0FnS0NoemRISXVZMmhoY2tOdlpHVkJkQ2dySzJrcElDWWdNSGhtWmlrZ1BEd2dPQ2tnZkZ4eVhHNGdJRngwSUNBb0tITjBjaTVqYUdGeVEyOWtaVUYwS0NzcmFTa2dKaUF3ZUdabUtTQThQQ0F4TmlrZ2ZGeHlYRzRnSUZ4MElDQW9LSE4wY2k1amFHRnlRMjlrWlVGMEtDc3JhU2tnSmlBd2VHWm1LU0E4UENBeU5DazdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lHc2dQU0FvS0NocklDWWdNSGhtWm1abUtTQXFJREI0TldKa01XVTVPVFVwSUNzZ0tDZ29LR3NnUGo0K0lERTJLU0FxSURCNE5XSmtNV1U1T1RVcElDWWdNSGhtWm1abUtTQThQQ0F4TmlrcE8xeHlYRzRnSUNBZ2F5QmVQU0JySUQ0K1BpQXlORHRjY2x4dUlDQWdJR3NnUFNBb0tDaHJJQ1lnTUhobVptWm1LU0FxSURCNE5XSmtNV1U1T1RVcElDc2dLQ2dvS0dzZ1BqNCtJREUyS1NBcUlEQjROV0prTVdVNU9UVXBJQ1lnTUhobVptWm1LU0E4UENBeE5pa3BPMXh5WEc1Y2NseHVYSFJvSUQwZ0tDZ29hQ0FtSURCNFptWm1aaWtnS2lBd2VEVmlaREZsT1RrMUtTQXJJQ2dvS0Nob0lENCtQaUF4TmlrZ0tpQXdlRFZpWkRGbE9UazFLU0FtSURCNFptWm1aaWtnUER3Z01UWXBLU0JlSUdzN1hISmNibHh5WEc0Z0lDQWdiQ0F0UFNBME8xeHlYRzRnSUNBZ0t5dHBPMXh5WEc0Z0lIMWNjbHh1SUNCY2NseHVJQ0J6ZDJsMFkyZ2dLR3dwSUh0Y2NseHVJQ0JqWVhObElETTZJR2dnWGowZ0tITjBjaTVqYUdGeVEyOWtaVUYwS0drZ0t5QXlLU0FtSURCNFptWXBJRHc4SURFMk8xeHlYRzRnSUdOaGMyVWdNam9nYUNCZVBTQW9jM1J5TG1Ob1lYSkRiMlJsUVhRb2FTQXJJREVwSUNZZ01IaG1aaWtnUER3Z09EdGNjbHh1SUNCallYTmxJREU2SUdnZ1hqMGdLSE4wY2k1amFHRnlRMjlrWlVGMEtHa3BJQ1lnTUhobVppazdYSEpjYmlBZ0lDQWdJQ0FnSUNCb0lEMGdLQ2dvYUNBbUlEQjRabVptWmlrZ0tpQXdlRFZpWkRGbE9UazFLU0FySUNnb0tDaG9JRDQrUGlBeE5pa2dLaUF3ZURWaVpERmxPVGsxS1NBbUlEQjRabVptWmlrZ1BEd2dNVFlwS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdnZ1hqMGdhQ0ErUGo0Z01UTTdYSEpjYmlBZ2FDQTlJQ2dvS0dnZ0ppQXdlR1ptWm1ZcElDb2dNSGcxWW1ReFpUazVOU2tnS3lBb0tDZ29hQ0ErUGo0Z01UWXBJQ29nTUhnMVltUXhaVGs1TlNrZ0ppQXdlR1ptWm1ZcElEdzhJREUyS1NrN1hISmNiaUFnYUNCZVBTQm9JRDQrUGlBeE5UdGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlHZ2dQajQrSURBN1hISmNibjBpWFgwPSJdfQ==