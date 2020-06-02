(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.objectReplace = function (inString, inObject) {
    if (!inString) return;
    nx.forIn(inObject, function (key, value) {
      inString = inString.replace(key, value);
    });
    return inString;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.objectReplace;
  }
})();
