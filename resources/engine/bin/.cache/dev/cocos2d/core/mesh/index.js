(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/mesh/index.js';
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
        require('./CCMesh');
        if (!CC_EDITOR || !Editor.isMainProcess) {
            require('./CCMeshRenderer');
            require('./mesh-renderer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL21lc2gvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiaXNNYWluUHJvY2VzcyIsInJlcXVpcmUiLCJDQ19FRElUT1IiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTtJQUNtQkEsSUFBQUEsUUFBQUEsR0FBT0MsT0FBQUEsR0FBZSxNQUFmQSxHQUFlLEVBQUEsT0FBQSxFQUFBLEVBQUEsRUFBdEJEO0lBQ1AsSUFBQSxVQUFBLEdBQVIsdUNBQVE7SUFDQSxJQUFBLFNBQUEsR0FBUixPQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFBQSxRQUNILE9BQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQURHO0FBQUEsS0FBQTs7S0FBUTs7Ozs7O1FBSFpFLE9BQUFBLENBQVEsVUFBUkE7UUFDQSxJQUFJLENBQUNDLFNBQUQsSUFBYyxDQUFDSCxNQUFBQSxDQUFPQyxhQUExQixFQUF5QztBQUFBLFlBQ3JDQyxPQUFBQSxDQUFRLGtCQUFSQSxFQURxQztBQUFBLFlBRXJDQSxPQUFBQSxDQUFRLGlCQUFSQSxFQUZxQztBQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9DQ01lc2gnKTtcclxuaWYgKCFDQ19FRElUT1IgfHwgIUVkaXRvci5pc01haW5Qcm9jZXNzKSB7XHJcbiAgICByZXF1aXJlKCcuL0NDTWVzaFJlbmRlcmVyJyk7XHJcbiAgICByZXF1aXJlKCcuL21lc2gtcmVuZGVyZXInKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vQ0NNZXNoJyk7XG5pZiAoIUNDX0VESVRPUiB8fCAhRWRpdG9yLmlzTWFpblByb2Nlc3MpIHtcbiAgICByZXF1aXJlKCcuL0NDTWVzaFJlbmRlcmVyJyk7XG4gICAgcmVxdWlyZSgnLi9tZXNoLXJlbmRlcmVyJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW5KbGNYVnBjbVVpTENKRFExOUZSRWxVVDFJaUxDSkZaR2wwYjNJaUxDSnBjMDFoYVc1UWNtOWpaWE56SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQlFTeFJRVUZSTEZWQlFWSTdRVUZEUVN4SlFVRkpMRU5CUVVORExGTkJRVVFzU1VGQll5eERRVUZEUXl4UFFVRlBReXhoUVVFeFFpeEZRVUY1UXp0QlFVTnlRMGdzV1VGQlVTeHJRa0ZCVWp0QlFVTkJRU3haUVVGUkxHbENRVUZTTzBGQlEwZ2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUp5WlhGMWFYSmxLQ2N1TDBORFRXVnphQ2NwTzF4eVhHNXBaaUFvSVVORFgwVkVTVlJQVWlCOGZDQWhSV1JwZEc5eUxtbHpUV0ZwYmxCeWIyTmxjM01wSUh0Y2NseHVJQ0FnSUhKbGNYVnBjbVVvSnk0dlEwTk5aWE5vVW1WdVpHVnlaWEluS1R0Y2NseHVJQ0FnSUhKbGNYVnBjbVVvSnk0dmJXVnphQzF5Wlc1a1pYSmxjaWNwTzF4eVhHNTlYSEpjYmlKZGZRPT0iXX0=