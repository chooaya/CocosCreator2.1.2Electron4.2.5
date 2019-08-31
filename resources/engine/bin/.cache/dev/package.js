(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/package.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                module.exports = {
            'name': 'cocos-creator-js',
            'version': '2.1.2',
            'description': 'Cocos2d-html5 is a cross-platform 2D game engine written in Javascript, based on Cocos2d-X and licensed under MIT. It incorporates the same high level api as \u201CCocos2d JS-binding engine\u201D and compatible with Cocos2d-X. It currently supports canvas and WebGL renderering.',
            'homepage': 'http://www.cocos2d-x.org',
            'authors': ['AUTHORS.txt'],
            'license': 'MIT',
            'scripts': {
                'test': 'gulp test-in-ci',
                'build-chunks': 'node ./cocos2d/renderer/build/build-chunks',
                'build-mapping': 'node ./cocos2d/renderer/build/build-mapping'
            },
            'devDependencies': {
                'async': '1.5.2',
                'babel-plugin-add-module-exports': '^0.2.1',
                'babel-plugin-parser-opts': '1.0.1',
                'babel-plugin-transform-class-properties': '6.22.0',
                'babel-plugin-transform-decorators-legacy': '^1.3.4',
                'babel-plugin-transform-es2015-block-scoping': '6.22.0',
                'babel-plugin-transform-es2015-shorthand-properties': '6.22.0',
                'babel-plugin-transform-es2015-template-literals': '6.22.0',
                'babel-preset-env': '^1.2.2',
                'babelify': '7.3.0',
                'browserify': '13.0.0',
                'chalk': '1.1.0',
                'del': '3.0.0',
                'event-stream': '3.3.2',
                'fire-fs': '0.2.1',
                'gulp': '^3.9.1',
                'gulp-babel': '6.1.2',
                'gulp-cached': '1.1.0',
                'gulp-concat': '2.6.0',
                'gulp-fb': '0.5.1',
                'gulp-header': '1.2.2',
                'gulp-jshint': '1.11.2',
                'gulp-mirror': '0.4.0',
                'gulp-optimize-js': '^1.1.0',
                'gulp-plumber': '0.6.6',
                'gulp-rename': '1.2.2',
                'gulp-shell': '0.4.1',
                'gulp-size': '2.1.0',
                'gulp-sourcemaps': '1.5.2',
                'gulp-uglify': '^3.0.0',
                'gulp-util': '3.0.6',
                'js-sha1': '^0.6.0',
                'jshint-stylish': '2.1.0',
                'multipipe': '0.3.0',
                'persistify': '^1.1.1',
                'aliasify': '^2.1.0',
                'require-dir': '0.3.0',
                'uglify-es': '3.3.7',
                'vinyl': '1.1.0',
                'vinyl-buffer': '1.0.0',
                'vinyl-source-stream': '1.0.0',
                'watchify': '^3.7.0',
                'glsl-tokenizer': '^2.1.5',
                'gulp-qunit': '^2.0.1',
                'rollup': '^0.66.6',
                'rollup-plugin-node-resolve': '^3.4.0'
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL3BhY2thZ2UuanNvbiJdLCJuYW1lcyI6WyJub2RlRW52IiwicmVxdWlyZSIsInByb2Nlc3MiLCJfX21vZHVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX2ZpbGVuYW1lIiwiX19yZXF1aXJlIiwicmVxdWVzdCIsIl9fcXVpY2tfY29tcGlsZV9fIiwiX19kZWZpbmUiLCJyZWdpc3Rlck1vZHVsZSIsInJlZ2lzdGVyTW9kdWxlRnVuYyJdLCJtYXBwaW5ncyI6IkFBQ2dCLENBQUMsWUFBVztBQUFBLElBQ1IsSUFBSUEsT0FBQSxHQUFVLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0MsT0FBUCxLQUFtQixXQUFuRSxDQURRO0FBQUEsSUFFUixJQUFJQyxRQUFBLEdBQVdILE9BQUEsR0FBVUksTUFBVixHQUFtQixFQUFDQyxPQUFBLEVBQVEsRUFBVCxFQUFsQyxDQUZRO0FBQUEsSUFHUixJQUFJQyxVQUFBLEdBQWEsdUJBQWpCLENBSFE7QUFBQSxJQUlSLElBQUlDLFNBQUEsR0FBWVAsT0FBQSxHQUFVLFVBQVVRLE9BQVYsRUFBbUI7QUFBQSxRQUN6QyxPQUFPUCxPQUFBLENBQVFPLE9BQVIsQ0FBUCxDQUR5QztBQUFBLEtBQTdCLEdBRVosVUFBVUEsT0FBVixFQUFtQjtBQUFBLFFBQ25CLE9BQU9DLGlCQUFBLENBQWtCUixPQUFsQixDQUEwQk8sT0FBMUIsRUFBbUNGLFVBQW5DLENBQVAsQ0FEbUI7QUFBQSxLQUZ2QixDQUpRO0FBQUEsSUFTUixTQUFTSSxRQUFULENBQW1CTCxPQUFuQixFQUE0QkosT0FBNUIsRUFBcUNHLE1BQXJDLEVBQTZDO0FBQUEsUUFDekMsSUFBSSxDQUFDSixPQUFMLEVBQWM7QUFBQSxZQUFDUyxpQkFBQSxDQUFrQkUsY0FBbEIsQ0FBaUNMLFVBQWpDLEVBQTZDRixNQUE3QyxFQUFEO0FBQUEsU0FEMkI7QUFBQSxRQVZqRSxRQUFBQSxNQUFBLENBQU9DLE9BQVAsR0FBaUI7QUFBQSxZQUNmLFFBQVEsa0JBRE87QUFBQSxZQUVmLFdBQVcsT0FGSTtBQUFBLFlBR2YsZUFBZSx3UkFIQTtBQUFBLFlBSWYsWUFBWSwwQkFKRztBQUFBLFlBS2YsV0FBVyxDQUNULGFBRFMsQ0FMSTtBQUFBLFlBUWYsV0FBVyxLQVJJO0FBQUEsWUFTZixXQUFXO0FBQUEsZ0JBQ1QsUUFBUSxpQkFEQztBQUFBLGdCQUVULGdCQUFnQiw0Q0FGUDtBQUFBLGdCQUdULGlCQUFpQiw2Q0FIUjtBQUFBLGFBVEk7QUFBQSxZQWNmLG1CQUFtQjtBQUFBLGdCQUNqQixTQUFTLE9BRFE7QUFBQSxnQkFFakIsbUNBQW1DLFFBRmxCO0FBQUEsZ0JBR2pCLDRCQUE0QixPQUhYO0FBQUEsZ0JBSWpCLDJDQUEyQyxRQUoxQjtBQUFBLGdCQUtqQiw0Q0FBNEMsUUFMM0I7QUFBQSxnQkFNakIsK0NBQStDLFFBTjlCO0FBQUEsZ0JBT2pCLHNEQUFzRCxRQVByQztBQUFBLGdCQVFqQixtREFBbUQsUUFSbEM7QUFBQSxnQkFTakIsb0JBQW9CLFFBVEg7QUFBQSxnQkFVakIsWUFBWSxPQVZLO0FBQUEsZ0JBV2pCLGNBQWMsUUFYRztBQUFBLGdCQVlqQixTQUFTLE9BWlE7QUFBQSxnQkFhakIsT0FBTyxPQWJVO0FBQUEsZ0JBY2pCLGdCQUFnQixPQWRDO0FBQUEsZ0JBZWpCLFdBQVcsT0FmTTtBQUFBLGdCQWdCakIsUUFBUSxRQWhCUztBQUFBLGdCQWlCakIsY0FBYyxPQWpCRztBQUFBLGdCQWtCakIsZUFBZSxPQWxCRTtBQUFBLGdCQW1CakIsZUFBZSxPQW5CRTtBQUFBLGdCQW9CakIsV0FBVyxPQXBCTTtBQUFBLGdCQXFCakIsZUFBZSxPQXJCRTtBQUFBLGdCQXNCakIsZUFBZSxRQXRCRTtBQUFBLGdCQXVCakIsZUFBZSxPQXZCRTtBQUFBLGdCQXdCakIsb0JBQW9CLFFBeEJIO0FBQUEsZ0JBeUJqQixnQkFBZ0IsT0F6QkM7QUFBQSxnQkEwQmpCLGVBQWUsT0ExQkU7QUFBQSxnQkEyQmpCLGNBQWMsT0EzQkc7QUFBQSxnQkE0QmpCLGFBQWEsT0E1Qkk7QUFBQSxnQkE2QmpCLG1CQUFtQixPQTdCRjtBQUFBLGdCQThCakIsZUFBZSxRQTlCRTtBQUFBLGdCQStCakIsYUFBYSxPQS9CSTtBQUFBLGdCQWdDakIsV0FBVyxRQWhDTTtBQUFBLGdCQWlDakIsa0JBQWtCLE9BakNEO0FBQUEsZ0JBa0NqQixhQUFhLE9BbENJO0FBQUEsZ0JBbUNqQixjQUFjLFFBbkNHO0FBQUEsZ0JBb0NqQixZQUFZLFFBcENLO0FBQUEsZ0JBcUNqQixlQUFlLE9BckNFO0FBQUEsZ0JBc0NqQixhQUFhLE9BdENJO0FBQUEsZ0JBdUNqQixTQUFTLE9BdkNRO0FBQUEsZ0JBd0NqQixnQkFBZ0IsT0F4Q0M7QUFBQSxnQkF5Q2pCLHVCQUF1QixPQXpDTjtBQUFBLGdCQTBDakIsWUFBWSxRQTFDSztBQUFBLGdCQTJDakIsa0JBQWtCLFFBM0NEO0FBQUEsZ0JBNENqQixjQUFjLFFBNUNHO0FBQUEsZ0JBNkNqQixVQUFVLFNBN0NPO0FBQUEsZ0JBOENqQiw4QkFBOEIsUUE5Q2I7QUFBQSxhQWRKO0FBQUEsU0FBakIsQ0FVaUU7QUFBQSxLQVRyQztBQUFBLElBWVIsSUFBSUwsT0FBSixFQUFhO0FBQUEsUUFDVFUsUUFBQSxDQUFTUCxRQUFBLENBQVNFLE9BQWxCLEVBQTJCRSxTQUEzQixFQUFzQ0osUUFBdEMsRUFEUztBQUFBLEtBQWIsTUFHSztBQUFBLFFBQ0RNLGlCQUFBLENBQWtCRyxrQkFBbEIsQ0FBcUNOLFVBQXJDLEVBQWlELFlBQVk7QUFBQSxZQUN6REksUUFBQSxDQUFTUCxRQUFBLENBQVNFLE9BQWxCLEVBQTJCRSxTQUEzQixFQUFzQ0osUUFBdEMsRUFEeUQ7QUFBQSxTQUE3RCxFQURDO0FBQUEsS0FmRztBQUFBLENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBcIm5hbWVcIjogXCJjb2Nvcy1jcmVhdG9yLWpzXCIsXHJcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjJcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ29jb3MyZC1odG1sNSBpcyBhIGNyb3NzLXBsYXRmb3JtIDJEIGdhbWUgZW5naW5lIHdyaXR0ZW4gaW4gSmF2YXNjcmlwdCwgYmFzZWQgb24gQ29jb3MyZC1YIGFuZCBsaWNlbnNlZCB1bmRlciBNSVQuIEl0IGluY29ycG9yYXRlcyB0aGUgc2FtZSBoaWdoIGxldmVsIGFwaSBhcyDigJxDb2NvczJkIEpTLWJpbmRpbmcgZW5naW5l4oCdIGFuZCBjb21wYXRpYmxlIHdpdGggQ29jb3MyZC1YLiBJdCBjdXJyZW50bHkgc3VwcG9ydHMgY2FudmFzIGFuZCBXZWJHTCByZW5kZXJlcmluZy5cIixcclxuICBcImhvbWVwYWdlXCI6IFwiaHR0cDovL3d3dy5jb2NvczJkLXgub3JnXCIsXHJcbiAgXCJhdXRob3JzXCI6IFtcclxuICAgIFwiQVVUSE9SUy50eHRcIlxyXG4gIF0sXHJcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwidGVzdFwiOiBcImd1bHAgdGVzdC1pbi1jaVwiLFxyXG4gICAgXCJidWlsZC1jaHVua3NcIjogXCJub2RlIC4vY29jb3MyZC9yZW5kZXJlci9idWlsZC9idWlsZC1jaHVua3NcIixcclxuICAgIFwiYnVpbGQtbWFwcGluZ1wiOiBcIm5vZGUgLi9jb2NvczJkL3JlbmRlcmVyL2J1aWxkL2J1aWxkLW1hcHBpbmdcIlxyXG4gIH0sXHJcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJhc3luY1wiOiBcIjEuNS4yXCIsXHJcbiAgICBcImJhYmVsLXBsdWdpbi1hZGQtbW9kdWxlLWV4cG9ydHNcIjogXCJeMC4yLjFcIixcclxuICAgIFwiYmFiZWwtcGx1Z2luLXBhcnNlci1vcHRzXCI6IFwiMS4wLjFcIixcclxuICAgIFwiYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1jbGFzcy1wcm9wZXJ0aWVzXCI6IFwiNi4yMi4wXCIsXHJcbiAgICBcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZGVjb3JhdG9ycy1sZWdhY3lcIjogXCJeMS4zLjRcIixcclxuICAgIFwiYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1lczIwMTUtYmxvY2stc2NvcGluZ1wiOiBcIjYuMjIuMFwiLFxyXG4gICAgXCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWVzMjAxNS1zaG9ydGhhbmQtcHJvcGVydGllc1wiOiBcIjYuMjIuMFwiLFxyXG4gICAgXCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWVzMjAxNS10ZW1wbGF0ZS1saXRlcmFsc1wiOiBcIjYuMjIuMFwiLFxyXG4gICAgXCJiYWJlbC1wcmVzZXQtZW52XCI6IFwiXjEuMi4yXCIsXHJcbiAgICBcImJhYmVsaWZ5XCI6IFwiNy4zLjBcIixcclxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIjEzLjAuMFwiLFxyXG4gICAgXCJjaGFsa1wiOiBcIjEuMS4wXCIsXHJcbiAgICBcImRlbFwiOiBcIjMuMC4wXCIsXHJcbiAgICBcImV2ZW50LXN0cmVhbVwiOiBcIjMuMy4yXCIsXHJcbiAgICBcImZpcmUtZnNcIjogXCIwLjIuMVwiLFxyXG4gICAgXCJndWxwXCI6IFwiXjMuOS4xXCIsXHJcbiAgICBcImd1bHAtYmFiZWxcIjogXCI2LjEuMlwiLFxyXG4gICAgXCJndWxwLWNhY2hlZFwiOiBcIjEuMS4wXCIsXHJcbiAgICBcImd1bHAtY29uY2F0XCI6IFwiMi42LjBcIixcclxuICAgIFwiZ3VscC1mYlwiOiBcIjAuNS4xXCIsXHJcbiAgICBcImd1bHAtaGVhZGVyXCI6IFwiMS4yLjJcIixcclxuICAgIFwiZ3VscC1qc2hpbnRcIjogXCIxLjExLjJcIixcclxuICAgIFwiZ3VscC1taXJyb3JcIjogXCIwLjQuMFwiLFxyXG4gICAgXCJndWxwLW9wdGltaXplLWpzXCI6IFwiXjEuMS4wXCIsXHJcbiAgICBcImd1bHAtcGx1bWJlclwiOiBcIjAuNi42XCIsXHJcbiAgICBcImd1bHAtcmVuYW1lXCI6IFwiMS4yLjJcIixcclxuICAgIFwiZ3VscC1zaGVsbFwiOiBcIjAuNC4xXCIsXHJcbiAgICBcImd1bHAtc2l6ZVwiOiBcIjIuMS4wXCIsXHJcbiAgICBcImd1bHAtc291cmNlbWFwc1wiOiBcIjEuNS4yXCIsXHJcbiAgICBcImd1bHAtdWdsaWZ5XCI6IFwiXjMuMC4wXCIsXHJcbiAgICBcImd1bHAtdXRpbFwiOiBcIjMuMC42XCIsXHJcbiAgICBcImpzLXNoYTFcIjogXCJeMC42LjBcIixcclxuICAgIFwianNoaW50LXN0eWxpc2hcIjogXCIyLjEuMFwiLFxyXG4gICAgXCJtdWx0aXBpcGVcIjogXCIwLjMuMFwiLFxyXG4gICAgXCJwZXJzaXN0aWZ5XCI6IFwiXjEuMS4xXCIsXHJcbiAgICBcImFsaWFzaWZ5XCI6IFwiXjIuMS4wXCIsXHJcbiAgICBcInJlcXVpcmUtZGlyXCI6IFwiMC4zLjBcIixcclxuICAgIFwidWdsaWZ5LWVzXCI6IFwiMy4zLjdcIixcclxuICAgIFwidmlueWxcIjogXCIxLjEuMFwiLFxyXG4gICAgXCJ2aW55bC1idWZmZXJcIjogXCIxLjAuMFwiLFxyXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiMS4wLjBcIixcclxuICAgIFwid2F0Y2hpZnlcIjogXCJeMy43LjBcIixcclxuICAgIFwiZ2xzbC10b2tlbml6ZXJcIjogXCJeMi4xLjVcIixcclxuICAgIFwiZ3VscC1xdW5pdFwiOiBcIl4yLjAuMVwiLFxyXG4gICAgXCJyb2xsdXBcIjogXCJeMC42Ni42XCIsXHJcbiAgICBcInJvbGx1cC1wbHVnaW4tbm9kZS1yZXNvbHZlXCI6IFwiXjMuNC4wXCJcclxuICB9XHJcbn1cclxuIl19