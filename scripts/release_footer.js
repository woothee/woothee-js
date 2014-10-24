
  var updateMap = util.updateMap,
      updateCategory = util.updateCategory,
      updateOs = util.updateOs,
      updateOsVersion = util.updateOsVersion,
      updateVersion = util.updateVersion;

  // AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define('woothee', [], function () {
      return woothee;
    });
  }
  // Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = woothee;
  }
  // included directly via <script> tag
  else {
    root.woothee = woothee;
  }
})();
