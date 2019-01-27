var nx = require('next-js-core2');
require('../src/next-object-replace');

test('nx.objectReplace', function() {
  var obj = {
    '÷': '/',
    '×': '*'
  };

  var str1 = 'A+b×0.8+(C÷D)';
  expect(nx.objectReplace(str1, obj)).toBe('A+b*0.8+(C/D)');
});
