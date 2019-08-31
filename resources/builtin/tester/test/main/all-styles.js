'use strict';

suite(tap, 'Test all styles', t => {
  t.test('it should be right', t => {
    t.assert(true);
    t.end();
  });

  t.test('it should report error', t => {
    t.assert(false);
    t.end();
  });

  t.test('css .test.pass.fast', t => {
    setTimeout(() => {
      t.end();
    }, 10);
  });

  t.test('css .test.pass.medium', t => {
    setTimeout(() => {
      t.end();
    }, 50);
  });

  t.test('css .test.pass.slow', t => {
    setTimeout(() => {
      t.end();
    }, 100);
  });

  t.test('a long looooooooong loooooooooooooooong loooooooooooooooooooog text', t => {
    setTimeout(() => {
      t.end();
    }, 50);
  });
});
