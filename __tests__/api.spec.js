const nx = require('@feizheng/next-js-core2');
require('../src/next-object-replace');

describe('api.basic test', () => {
  test('nx.objectReplace common case', function () {
    var obj = {
      '÷': '/',
      '×': '*'
    };

    var str1 = 'A+b×0.8+(C÷D)÷E';
    expect(nx.objectReplace(str1, obj)).toBe('A+b*0.8+(C/D)/E');
  });

  test('empty input will return the input', () => {
    expect(nx.objectReplace(null, { '-': '/' })).toBe(null);
    expect(nx.objectReplace(undefined, null)).toBe(undefined);
    expect(nx.objectReplace('')).toBe('');
    expect(nx.objectReplace('abc', null)).toBe('abc');
    expect(nx.objectReplace('abc', undefined)).toBe('abc');
  })
});
