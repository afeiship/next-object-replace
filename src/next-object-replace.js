(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var escapeStringRegexp = require('escape-string-regexp');


  nx.objectReplace = function (inString, inObject) {
    if (!inString || !inObject) return inString;
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
