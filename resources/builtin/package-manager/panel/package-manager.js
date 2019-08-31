(function () {
  'use strict';

  var _ = require('lodash');

  function _createPackageInfo ( result ) {
    return {
      enabled: result.enabled,
      hasTests: result.info.tests && result.info.tests.length > 0,
      info: result.info,
    };
  }

  Editor.polymerPanel( 'package-manager', {
    properties: {
      filterText: {
        type: String,
        value: ''
      }
    },

    ready: function () {
      Editor.Package.queryInfos(function ( err, results ) {
        var packages = results.map( function (item) {
          return _createPackageInfo(item);
        });
        this.set( 'packages', packages );
      }.bind(this));
    },

    focusOnSearch: function ( event ) {
      if ( event ) {
        event.stopPropagation();
      }

      Editor.UI.focus(this.$.search);
    },

    messages: {
      'editor:package-loaded': function ( event, name ) {
        Editor.Package.queryInfo(name, function ( err, result ) {
          this.push( 'packages', _createPackageInfo(result));
        }.bind(this));
      },

      'editor:package-unloaded': function ( event, name ) {
        var idx = _.findIndex( this.packages, function ( item ) {
          return item.info.name === name;
        });
        this.splice( 'packages', idx, 1 );
      },
    },

    _onReload: function (event) {
      event.stopPropagation();

      var model = this.$.list.modelForElement(event.target);
      var oldname = model.item.info.name;
      Editor.Package.reload(oldname);
    },

    _onTest: function (event) {
      event.stopPropagation();

      var item = this.$.list.itemForElement(event.target);
      Editor.Panel.open( 'tester', {
        name: item.info.name,
      });
    },

    _enabledText: function (enabled) {
      if (enabled) {
        return 'Disable';
      }
      else {
        return 'Enable';
      }
    },

    _sortPackages: function ( a, b ) {
      return a.info.name.localeCompare( b.info.name );
    },

    _applyFilter: function (packages,filterText) {
      if (!filterText) {
        this.$.view.hidden = false;
        this.$.none.hidden = true;

        return packages;
      }

      var tmpPackages = [];
      var filter = filterText.toLowerCase();
      for (var i = 0; i < packages.length; ++i) {
        if (packages[i].info.name.toLowerCase().match(filter)) {
          tmpPackages.push(packages[i]);
        }
      }
      if (tmpPackages.length > 0) {
        this.$.view.hidden = false;
        this.$.none.hidden = true;
      }
      else {
        this.$.view.hidden = true;
        this.$.none.hidden = false;
      }

      return tmpPackages;
    },
  });

})();
