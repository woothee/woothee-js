/* HEADER BEGIN */
var util = require('./util'),
    updateMap = util.updateMap,
    updateVersion = util.updateVersion,
    updateCategory = util.updateCategory,
    updateOs = util.updateOs,
    dataset = require('./dataset');
/* HEADER END */

var msiePattern = /MSIE ([.0-9]+);/;
var tridentPattern = /Trident\/[.0-9]+;/;
var tridentVersionPattern = / rv:([.0-9]+)/;
var iemobilePattern = /IEMobile\/([.0-9]+);/;
var challengeMSIE = exports.challengeMSIE = function(ua, result) {
  if (ua.indexOf('compatible; MSIE') < 0 && ua.indexOf('Trident/') < 0 && ua.indexOf('IEMobile/'))
    return false;

  var version;
  var match = msiePattern.exec(ua);
  if (!match)
    if (tridentPattern.exec(ua))
      match = tridentVersionPattern.exec(ua);
  if (!match)
    match = iemobilePattern.exec(ua);

  if (match)
    version = match[1];
  else
    version = dataset.VALUE_UNKNOWN;
  updateMap(result, dataset.get('MSIE'));
  updateVersion(result, version);
  return true;
};

var yandexBrowserPattern = /YaBrowser\/([.0-9]+)/;
var challengeYandexBrowser = exports.challengeYandexBrowser = function(ua, result) {
  if (ua.indexOf('YaBrowser/') < 0)
    return false;

  var version;
  var match = yandexBrowserPattern.exec(ua);
  if (match) {
    version = match[1];
  } else {
    version = dataset.VALUE_UNKNOWN;
  }
  updateMap(result, dataset.get('YaBrowser'));
  updateVersion(result, version);
  return true;
};

var edgePattern = /(?:Edge|Edg|EdgiOS|EdgA)\/([.0-9]+)/;
var firefoxiOSPattern = /FxiOS\/([.0-9]+)/;
var chromePattern = /(?:Chrome|CrMo|CriOS)\/([.0-9]+)/;
var operaBlinkPattern = /OPR\/([.0-9]+)/;
var gsaPattern = /GSA\/([.0-9]+)/;
var safariPattern = /Version\/([.0-9]+)/;
var challengeSafariChrome = exports.challengeSafariChrome = function(ua, result) {
  if (ua.indexOf('Safari/') < 0)
    return false;
  if (ua.indexOf('Chrome') >= 0 && ua.indexOf('wv') >= 0)
    return false;

  var version = dataset.VALUE_UNKNOWN;

  var match;
  if ((match = edgePattern.exec(ua))) {
    version = match[1];
    updateMap(result, dataset.get('Edge'));
    updateVersion(result, version);
    return true;
  }

  if ((match = firefoxiOSPattern.exec(ua))) {
    version = match[1];
    updateMap(result, dataset.get('Firefox'));
    updateVersion(result, version);
    return true;
  }

  if ((match = chromePattern.exec(ua))) {
    var matchOpera;
    if ((matchOpera = operaBlinkPattern.exec(ua))) {
      // Opera w/ blink
      version = matchOpera[1];
      updateMap(result, dataset.get('Opera'));
      updateVersion(result, version);
      return true;
    }

    // Chrome
    version = match[1];
    updateMap(result, dataset.get('Chrome'));
    updateVersion(result, version);
    return true;
  }

  if ((match = gsaPattern.exec(ua))) {
    version = match[1];
    updateMap(result, dataset.get('GSA'));
    updateVersion(result, version);
    return true;
  }

  if ((match = safariPattern.exec(ua))) {
    version = match[1];
  }

  updateMap(result, dataset.get('Safari'));
  updateVersion(result, version);
  return true;
};

var firefoxPattern = /Firefox\/([.0-9]+)/;
var challengeFirefox = exports.challengeFirefox = function(ua, result) {
  if (ua.indexOf('Firefox/') < 0)
    return false;

  var version = dataset.VALUE_UNKNOWN;
  var match = firefoxPattern.exec(ua);
  if (match)
    version = match[1];
  updateMap(result, dataset.get('Firefox'));
  updateVersion(result, version);
  return true;
};

var operaPattern1 = /Version\/([.0-9]+)/;
var operaPattern2 = /Opera[\/ ]([.0-9]+)/;
var challengeOpera = exports.challengeOpera = function(ua, result) {
  if (ua.indexOf('Opera') < 0)
    return false;

  var version = dataset.VALUE_UNKNOWN;
  var match = operaPattern1.exec(ua);
  if (match) {
    version = match[1];
  } else {
    match = operaPattern2.exec(ua);
    if (match)
      version = match[1];
  }
  updateMap(result, dataset.get('Opera'));
  updateVersion(result, version);
  return true;
};

var webviewPattern = /iP(hone;|ad;|od) .*like Mac OS X/;
var webviewVersionPattern = /Version\/([.0-9]+)/;
var challengeWebview = exports.challengeWebview = function(ua, result) {
  var version = dataset.VALUE_UNKNOWN;

  // Android(Lollipop and Above)
  if (ua.indexOf('Chrome') >= 0 && ua.indexOf('wv') >= 0) {
    var vmatch = webviewVersionPattern.exec(ua);
    if (vmatch)
       version = vmatch[1];

    updateMap(result, dataset.get('Webview'));
    updateVersion(result, version);
    return true;
  }

  // iOS
  var match = webviewPattern.exec(ua);
  if (match) {
    if (ua.indexOf('Safari/') > -1)
      return false;

    var vmatch = webviewVersionPattern.exec(ua);
    if (vmatch)
      version = vmatch[1];

    updateMap(result, dataset.get('Webview'));
    updateVersion(result, version);
    return true;
  }

  return false;
};

var sleipnirPattern = /Sleipnir\/([.0-9]+)/;
var challengeSleipnir = exports.challengeSleipnir = function(ua, result) {
  if (ua.indexOf('Sleipnir/') < 0)
    return false;

  var version = dataset.VALUE_UNKNOWN;
  var match = sleipnirPattern.exec(ua);
  if (match)
    version = match[1];
  updateMap(result, dataset.get('Sleipnir'));
  updateVersion(result, version);

  /*
   Sleipnir's user-agent doesn't contain Windows version, so put 'Windows UNKNOWN Ver'.
   Sleipnir is IE component browser, so for Windows only.
   */
  var win = dataset.get('Win');
  updateCategory(result, win[dataset.KEY_CATEGORY]);
  updateOs(result, win[dataset.KEY_NAME]);

  return true;
};

var vivaldiPattern = /Vivaldi\/([.0-9]+)/;
var challengeVivaldi = exports.challengeVivaldi = function(ua, result) {
  if (ua.indexOf('Vivaldi/') < 0)
    return false;

  var version = dataset.VALUE_UNKNOWN;
  var match = vivaldiPattern.exec(ua);
  if (match)
    version = match[1];
  updateMap(result, dataset.get('Vivaldi'));
  updateVersion(result, version);

  return true;
};
