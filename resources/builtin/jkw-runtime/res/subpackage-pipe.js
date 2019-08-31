(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var ID = 'SubPackPipe';
var UuidRegex = /.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-]{8,})/;

function getUuidFromURL(url) {
    var matches = url.match(UuidRegex);
    if (matches) {
        return matches[1];
    }
    return "";
}

var _uuidToSubPack = Object.create(null);

var SubPackPipe = function SubPackPipe(subpackage) {
    this.id = ID;
    this.async = false;
    this.pipeline = null;
    for (var packName in subpackage) {
        var pack = subpackage[packName];
        if (!pack.uuids) {
            continue;
        }
        pack.uuids.forEach(function (val) {
            _uuidToSubPack[val] = pack.path;
        });
    }
};

SubPackPipe.ID = ID;

SubPackPipe.prototype.handle = function (item) {
    item.url = this.transformURL(item.url);
    return null;
};

SubPackPipe.prototype.transformURL = function (url) {

    var uuid = getUuidFromURL(url);
    if (uuid) {
        var subpackage = _uuidToSubPack[uuid];
        if (subpackage) {
            var newUrl = url.replace('res/raw-assets/', subpackage + 'raw-assets/').replace('subpackages/', '');
            return newUrl;
        }
    }
    return url;
};

var settings = window._CCSettings;
window._CCSettings = undefined;
if (settings.subpackages) {
    var subPackPipe = new SubPackPipe(settings.subpackages);
    var pipeBeforeDownloader = cc.loader.md5Pipe || cc.loader.assetLoader;

    cc.Asset.prototype._vendorNativeUrl = Object.getOwnPropertyDescriptor(cc.Asset.prototype, 'nativeUrl').get;
    Object.defineProperty(cc.Asset.prototype, 'nativeUrl', {
        get: function get() {
            var url = this._vendorNativeUrl();
            return subPackPipe.transformURL(url);
        }
    });
}

},{}]},{},[1]);
