/*!
 * name: @feizheng/next-object-replace
 * description: Replace for object key/value.
 * homepage: https://github.com/afeiship/next-object-replace
 * version: 1.1.0
 * date: 2020-06-02T02:12:01.238Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var escapeStringRegexp = require('escape-string-regexp');


  nx.objectReplace = function (inString, inObject) {
    if (!inString) return;
    nx.forIn(inObject, function (key, value) {
      var regexp = new RegExp(escapeStringRegexp(key), 'g');
      inString = inString.replace(regexp, value);
    });
    return inString;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.objectReplace;
  }
})();

//# sourceMappingURL=next-object-replace.js.map
