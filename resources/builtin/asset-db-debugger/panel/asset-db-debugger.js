(() => {
  'use strict';

  Editor.polymerPanel( 'asset-db-debugger', {
    properties: {
      infoList: {
        type: Boolean,
        value: function () {
          return [];
        },
      },

      searchValue: {
        type: String,
        value: ''
      },

      keyName: {
        type: String,
        value: 'URL'
      },

      valueName: {
        type: String,
        value: 'UUID'
      }
    },

    ready: function () {
      this.$.select.select(0);
    },

    _refReshClick: function (event) {
      event.stopPropagation();
      this.switchOption(this.$.select.selected);
    },

    filter: function (infoList,searchValue) {
      var text = searchValue.toLowerCase();
      var filterList = [];
      for ( var i = 0; i < this.infoList.length; ++i ) {
        var info = this.infoList[i];
        if ( info.key.toLowerCase().indexOf(text) !== -1 ) {
          filterList.push(info);
          continue;
        }

        if ( info.value.toLowerCase().indexOf(text) !== -1 ) {
          filterList.push(info);
          continue;
        }
      }
      return filterList;
    },

    urlUuidAction: function () {
      this.keyName = 'URL';
      this.valueName = 'UUID';
      Editor.Ipc.sendToMain('asset-db-debugger:query-info',function (results) {
        var tmpList = [];
        for ( var i = 0; i < results.length; ++i ) {
          var info = results[i];
          tmpList.push( { key: info.url, value: info.uuid } );
        }
        this.infoList = tmpList;
      }.bind(this));
    },

    uuidUrlAction: function () {
      this.keyName = 'UUID';
      this.valueName = 'URL';
      Editor.Ipc.sendToMain('asset-db-debugger:query-info',function (results) {
        var tmpList = [];
        for ( var i = 0; i < results.length; ++i ) {
          var info = results[i];
          tmpList.push( { key: info.uuid, value: info.url } );
        }
        this.infoList = tmpList;
      }.bind(this));
    },

    _onSelectedChanged: function (event) {
      this.switchOption(event.target.selected);
    },

    switchOption: function (selected) {
      switch (selected) {
      case 0:
        this.urlUuidAction();
        break;

      case 1:
        this.uuidUrlAction();
        break;

      default:
        this.infoList = [];
        break;
      }
    },
  });
})();
