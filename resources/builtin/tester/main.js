'use strict';

const Electron = require('electron');
const Path = require('fire-path');

// TODO
// let _ipcHandlers = {
//   'runner:start' () {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-start' );
//   },

//   'runner:end' () {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-end' );
//   },

//   'runner:suite' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-suite', data.suite );
//   },

//   'runner:suite-end' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-suite-end', data.suite );
//   },

//   'runner:test' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-test', data.test );
//   },

//   'runner:pending' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-pending', data.test );
//   },

//   'runner:pass' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-pass', data.test );
//   },

//   'runner:fail' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-fail', data.test, data.err );
//   },

//   'runner:test-end' ( data ) {
//     Editor.Ipc.sendToPanel( 'tester', 'tester:runner-test-end', data.test, data.stats );
//   },
// };

let testProcess = null;

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    open () {
      Editor.Panel.open('tester');
    },

    run ( event, info ) {
      const Spawn = require('child_process').spawn;

      let path;
      if ( info.module === 'editor-framework' ) {
        path = Editor.url('editor-framework://test');
      } else if ( info.module === 'app' ) {
        path = Editor.url('app://test');
      } else if ( info.module === 'package' ) {
        let pkgPath = info.package;
        path = Path.join( pkgPath, 'test' );
      }
      let file = Path.join(path, info.file);

      let args = [Editor.App.path, 'test', '--reporter', 'classic'];

      if ( info.module === 'package' ) {
        args.push('--package');
      }

      if ( info.mode === 'renderer' ) {
        args.push('--renderer');
      }

      if ( info.debug ) {
        args.push('--detail');
      }

      args.push(file);

      let exePath = Electron.app.getPath('exe');
      testProcess = Spawn(exePath, args, {
        stdio: [ 0, 1, 2, 'ipc' ],
        // stdio: 'inherit'
      });

      testProcess.on('message', data => {
        unused(data);

        // TODO
        // let fn = _ipcHandlers[data.channel];
        // if ( fn ) {
        //   fn ( data );
        // }
      });

      testProcess.on('close', () => {
        testProcess = null;
        Editor.Ipc.sendToPanel( 'tester', 'tester:runner-close' );
      });
    },

    reload () {
      if ( !testProcess ) {
        return;
      }

      testProcess.send({
        channel: 'tester:reload'
      });
    },

    'active-test-window' () {
      if ( !testProcess ) {
        return;
      }

      testProcess.send({
        channel: 'tester:active-window'
      });
    },

    close () {
      if ( !testProcess ) {
        return;
      }

      testProcess.send({
        channel: 'tester:exit'
      });
    },
  },
};
