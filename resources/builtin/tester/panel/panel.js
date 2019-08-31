'use strict';

const Path = require('fire-path');
const Globby = require('globby');
const Async = require('async');

//
Editor.Panel.extend({
  style: `
    :host {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }

    :host > div {
      margin-bottom: 10px;
    }

    :host > div:last-child {
      margin-bottom: 0px;
    }
  `,

  template: `
    <div class="view flex-1"></div>

    <div class="settings">
      <ui-prop name="Module">
        <ui-select id="module" class="flex-1">
          <option value="app">App</option>
          <option value="package">Package</option>
          <option value="editor-framework" selected>Editor Framework</option>
        </ui-select>
        <ui-select id="packages" class="flex-1" hidden></ui-select>
      </ui-prop>

      <ui-prop name="File">
        <ui-select id="file" class="flex-1"></ui-select>
        <ui-button id="refreshFile" class="tiny blue">
          <i class="icon-arrows-cw"></i>
        </ui-button>
      </ui-prop>

      <ui-prop name="Mode">
        <ui-select id="mode" class="flex-1">
          <option value="auto">Auto</option>
          <option value="main">Main</option>
          <option value="renderer">Renderer</option>
        </ui-select>
      </ui-prop>

      <ui-prop name="Debug">
        <ui-checkbox id="debug" class="flex-1"></ui-checkbox>
      </ui-prop>
    </div>

    <div class="layout horizontal end-justified">
      <ui-button id="run" class="transparent green">
        <i class="icon-play"></i>
      </ui-button>

      <ui-button id="reload" class="transparent blue">
        <i class="icon-cw"></i>
      </ui-button>

      <ui-button id="close" class="transparent red">
        <i class="icon-cancel"></i>
      </ui-button>

      <ui-button id="active" class="transparent">
        <i class="icon-eye"></i>
      </ui-button>
    </div>
  `,

  $: {
    module: '#module',
    packages: '#packages',
    file: '#file',
    refreshFile: '#refreshFile',
    mode: '#mode',
    debug: '#debug',
    run: '#run',
    reload: '#reload',
    active: '#active',
    close: '#close',
  },

  get running () { return this._running; },
  set running (val) {
    if ( this._running !== val ) {
      this._running = val;
      this._updateButtons();
    }
  },

  ready () {
    this._running = false;
    this._initEvents();

    Async.series([
      next => {
        this._updateButtons();
        next();
      },
      next => {
        this._updatePackages(next);
      },
      next => {
        this._updateFiles(next);
      },
    ], () => {
      // TODO
      // this.reset();
    });
  },

  _initEvents () {
    this.$module.addEventListener('confirm', event => {
      if ( event.detail.value === 'package' ) {
        this.$packages.hidden = false;
      } else {
        this.$packages.hidden = true;
      }
      this._updateFiles();
    });

    this.$packages.addEventListener('confirm', () => {
      this._updateFiles();
    });

    this.$run.addEventListener('confirm', () => {
      if ( this.running ) {
        return;
      }

      // TODO
      // this.reset();

      this.running = true;

      Editor.Ipc.sendToMain('tester:run', {
        module: this.$module.value,
        package: this.$packages.value,
        file: this.$file.value,
        mode: this.$mode.value,
        debug: this.$debug.value
      });
    });

    this.$reload.addEventListener('confirm', () => {
      Editor.Ipc.sendToMain('tester:reload');
    });

    this.$active.addEventListener('confirm', () => {
      Editor.Ipc.sendToMain('tester:active-test-window');
    });

    this.$close.addEventListener('confirm', () => {
      Editor.Ipc.sendToMain('tester:close');
    });

    this.$refreshFile.addEventListener('confirm', () => {
      this._updateFiles();
    });
  },

  _updatePackages ( cb ) {
    Editor.Ipc.sendToMain('editor:package-query-infos', (err,infos) => {
      let pkgInfos = infos.map(info => {
        return {
          value: info.path,
          text: Path.join(
            Path.basename(Path.dirname(info.path)),
            Path.basename(info.path)
          )
        };
      });

      pkgInfos.sort((a,b) => {
        return a.text.localeCompare(b.text);
      });

      let packagesEL = this.$packages;
      packagesEL.clear();

      pkgInfos.forEach(info => {
        packagesEL.addItem(info.value, info.text);
      });

      if ( cb ) {
        cb();
      }
    });
  },

  _updateFiles ( cb ) {
    let path;
    let module = this.$module.value;
    let fileEL = this.$file;

    fileEL.clear();

    if ( module === 'editor-framework' ) {
      path = Editor.url('editor-framework://test');
    } else if ( module === 'app' ) {
      path = Editor.url('app://test');
    } else if ( module === 'package' ) {
      let pkgPath = this.$packages.value;
      path = Path.join( pkgPath, 'test' );
    }

    // DISABLE: disable async method because Fireball's globby not updated.
    // Globby([
    let files = Globby.sync([
      Path.join(path,'**/*.js'),
      '!'+Path.join(path,'**/*.skip.js'),
      '!**/fixtures/**',
    ]);
    // ]).then(files => {
      files = files.map(file => {
        return Path.relative(path,file);
      });

      files.forEach(file => {
        fileEL.addItem( file, Path.dirname(file) + '/' + Path.basename(file) );
      });

      if ( cb ) {
        cb ();
      }
    // });
  },

  _updateButtons () {
    this.$reload.disabled = !this._running;
    this.$active.disabled = !this._running;
    this.$close.disabled = !this._running;
  },

  // TODO
  // reset () {
  //   this.passes = 0;
  //   this.failures = 0;
  //   this.duration = 0;
  //   this.progress = 0;

  //   let mochaReportEL = this.$['mocha-report'];
  //   while ( mochaReportEL.children.length ) {
  //     mochaReportEL.firstChild.remove();
  //   }
  //   this.stack = [mochaReportEL];

  //   if ( !this._tests || !this._tests.length ) {
  //     this._tests = [];
  //   }
  // },

  _onRunnerClose () {
    this.running = false;
  },

  // ipc
  messages: {
    'tester:runner-close' () {
      this.running = false;
    },
  },
});

