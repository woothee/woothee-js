(function (){
  var root = this;
  // embed: dataset, util, browser, mobilephone, crawler, appliance, misc, woothee

  // GENERATED from dataset.yaml at Tue Mar 17 20:57:23 JST 2020 by tagomoris

  // Snapshot from package.json
  var package_info = {"name":"woothee","version":"1.11.0","description":"User-Agent string parser (js implementation)","main":"./release/woothee","devDependencies":{"chai":">= 1.3.0","js-yaml":">= 1.0.3","mocha":"^6.0.0","serialize-to-js":"^3.0.0","should":"~1.2.2"},"scripts":{"test":"make test"},"repository":{"type":"git","url":"https://github.com/woothee/woothee-js"},"author":"tagomoris","license":"Apache-2.0"};

  var dataset = {};
  (function(){
    var exports = dataset;
    /* CODE: dataset.js */
    var KEY_LABEL = exports.KEY_LABEL = 'label',
        KEY_NAME = exports.KEY_NAME = 'name',
        KEY_TYPE = exports.KEY_TYPE = 'type',
        KEY_CATEGORY = exports.KEY_CATEGORY = 'category',
        KEY_OS = exports.KEY_OS = 'os',
        KEY_OS_VERSION = exports.KEY_OS_VERSION = 'os_version',
        KEY_VENDOR = exports.KEY_VENDOR = 'vendor',
        KEY_VERSION = exports.KEY_VERSION = 'version';
    var TYPE_BROWSER = 'browser',
        TYPE_OS = 'os',
        TYPE_FULL = 'full';
    var CATEGORY_PC = exports.CATEGORY_PC = 'pc',
        CATEGORY_SMARTPHONE = exports.CATEGORY_SMARTPHONE = 'smartphone',
        CATEGORY_MOBILEPHONE = exports.CATEGORY_MOBILEPHONE = 'mobilephone',
        CATEGORY_CRAWLER = exports.CATEGORY_CRAWLER = 'crawler',
        CATEGORY_APPLIANCE = exports.CATEGORY_APPLIANCE = 'appliance',
        CATEGORY_MISC = exports.CATEGORY_MISC = 'misc';
    var ATTRIBUTE_NAME = exports.ATTRIBUTE_NAME = 'name',
        ATTRIBUTE_CATEGORY = exports.ATTRIBUTE_CATEGORY = 'category',
        ATTRIBUTE_OS = exports.ATTRIBUTE_OS = 'os',
        ATTRIBUTE_OS_VERSION = exports.ATTRIBUTE_OS_VERSION = 'os_version',
        ATTRIBUTE_VENDOR = exports.ATTRIBUTE_VENDOR = 'vendor',
        ATTRIBUTE_VERSION = exports.ATTRIBUTE_VERSION = 'version';
    var VALUE_UNKNOWN = exports.VALUE_UNKNOWN = 'UNKNOWN';
    var CATEGORY_LIST = exports.CATEGORY_LIST = [
      CATEGORY_PC, CATEGORY_SMARTPHONE, CATEGORY_MOBILEPHONE,
      CATEGORY_CRAWLER, CATEGORY_APPLIANCE, CATEGORY_MISC, VALUE_UNKNOWN
    ];
    var ATTRIBUTE_LIST = exports.ATTRIBUTE_LIST = [ATTRIBUTE_NAME, ATTRIBUTE_CATEGORY, ATTRIBUTE_OS, ATTRIBUTE_VENDOR, ATTRIBUTE_VERSION, ATTRIBUTE_OS_VERSION];
    // GENERATED from dataset.yaml at Tue Mar 17 20:57:23 JST 2020 by tagomoris
    var DATASET = {MSIE: {label: "MSIE", name: "Internet Explorer", type: "browser", vendor: "Microsoft"}, Edge: {label: "Edge", name: "Edge", type: "browser", vendor: "Microsoft"}, Chrome: {label: "Chrome", name: "Chrome", type: "browser", vendor: "Google"}, Safari: {label: "Safari", name: "Safari", type: "browser", vendor: "Apple"}, Firefox: {label: "Firefox", name: "Firefox", type: "browser", vendor: "Mozilla"}, Opera: {label: "Opera", name: "Opera", type: "browser", vendor: "Opera"}, Vivaldi: {label: "Vivaldi", name: "Vivaldi", type: "browser", vendor: "Vivaldi Technologies"}, Sleipnir: {label: "Sleipnir", name: "Sleipnir", type: "browser", vendor: "Fenrir Inc."}, GSA: {label: "GSA", name: "Google Search App", type: "browser", vendor: "Google"}, Webview: {label: "Webview", name: "Webview", type: "browser", vendor: "OS vendor"}, YaBrowser: {label: "YaBrowser", name: "Yandex Browser", type: "browser", vendor: "Yandex"}, Win: {label: "Win", name: "Windows UNKNOWN Ver", type: "os", category: "pc"}, Win10: {label: "Win10", name: "Windows 10", type: "os", category: "pc"}, "Win8.1": {label: "Win8.1", name: "Windows 8.1", type: "os", category: "pc"}, Win8: {label: "Win8", name: "Windows 8", type: "os", category: "pc"}, Win7: {label: "Win7", name: "Windows 7", type: "os", category: "pc"}, WinVista: {label: "WinVista", name: "Windows Vista", type: "os", category: "pc"}, WinXP: {label: "WinXP", name: "Windows XP", type: "os", category: "pc"}, Win2000: {label: "Win2000", name: "Windows 2000", type: "os", category: "pc"}, WinNT4: {label: "WinNT4", name: "Windows NT 4.0", type: "os", category: "pc"}, WinMe: {label: "WinMe", name: "Windows Me", type: "os", category: "pc"}, Win98: {label: "Win98", name: "Windows 98", type: "os", category: "pc"}, Win95: {label: "Win95", name: "Windows 95", type: "os", category: "pc"}, WinPhone: {label: "WinPhone", name: "Windows Phone OS", type: "os", category: "smartphone"}, WinCE: {label: "WinCE", name: "Windows CE", type: "os", category: "smartphone"}, OSX: {label: "OSX", name: "Mac OSX", type: "os", category: "pc"}, MacOS: {label: "MacOS", name: "Mac OS Classic", type: "os", category: "pc"}, Linux: {label: "Linux", name: "Linux", type: "os", category: "pc"}, BSD: {label: "BSD", name: "BSD", type: "os", category: "pc"}, ChromeOS: {label: "ChromeOS", name: "ChromeOS", type: "os", category: "pc"}, Android: {label: "Android", name: "Android", type: "os", category: "smartphone"}, iPhone: {label: "iPhone", name: "iPhone", type: "os", category: "smartphone"}, iPad: {label: "iPad", name: "iPad", type: "os", category: "smartphone"}, iPod: {label: "iPod", name: "iPod", type: "os", category: "smartphone"}, iOS: {label: "iOS", name: "iOS", type: "os", category: "smartphone"}, FirefoxOS: {label: "FirefoxOS", name: "Firefox OS", type: "os", category: "smartphone"}, BlackBerry: {label: "BlackBerry", name: "BlackBerry", type: "os", category: "smartphone"}, BlackBerry10: {label: "BlackBerry10", name: "BlackBerry 10", type: "os", category: "smartphone"}, docomo: {label: "docomo", name: "docomo", type: "full", vendor: "docomo", category: "mobilephone", os: "docomo"}, au: {label: "au", name: "au by KDDI", type: "full", vendor: "au", category: "mobilephone", os: "au"}, SoftBank: {label: "SoftBank", name: "SoftBank Mobile", type: "full", vendor: "SoftBank", category: "mobilephone", os: "SoftBank"}, willcom: {label: "willcom", name: "WILLCOM", type: "full", vendor: "WILLCOM", category: "mobilephone", os: "WILLCOM"}, jig: {label: "jig", name: "jig browser", type: "full", vendor: "", category: "mobilephone", os: "jig"}, emobile: {label: "emobile", name: "emobile", type: "full", vendor: "", category: "mobilephone", os: "emobile"}, SymbianOS: {label: "SymbianOS", name: "SymbianOS", type: "full", vendor: "", category: "mobilephone", os: "SymbianOS"}, MobileTranscoder: {label: "MobileTranscoder", name: "Mobile Transcoder", type: "full", vendor: "", category: "mobilephone", os: "Mobile Transcoder"}, Nintendo3DS: {label: "Nintendo3DS", name: "Nintendo 3DS", type: "full", vendor: "Nintendo", category: "appliance", os: "Nintendo 3DS"}, NintendoDSi: {label: "NintendoDSi", name: "Nintendo DSi", type: "full", vendor: "Nintendo", category: "appliance", os: "Nintendo DSi"}, NintendoWii: {label: "NintendoWii", name: "Nintendo Wii", type: "full", vendor: "Nintendo", category: "appliance", os: "Nintendo Wii"}, NintendoWiiU: {label: "NintendoWiiU", name: "Nintendo Wii U", type: "full", vendor: "Nintendo", category: "appliance", os: "Nintendo Wii U"}, PSP: {label: "PSP", name: "PlayStation Portable", type: "full", vendor: "Sony", category: "appliance", os: "PlayStation Portable"}, PSVita: {label: "PSVita", name: "PlayStation Vita", type: "full", vendor: "Sony", category: "appliance", os: "PlayStation Vita"}, PS3: {label: "PS3", name: "PlayStation 3", type: "full", vendor: "Sony", category: "appliance", os: "PlayStation 3"}, PS4: {label: "PS4", name: "PlayStation 4", type: "full", vendor: "Sony", category: "appliance", os: "PlayStation 4"}, Xbox360: {label: "Xbox360", name: "Xbox 360", type: "full", vendor: "Microsoft", category: "appliance", os: "Xbox 360"}, XboxOne: {label: "XboxOne", name: "Xbox One", type: "full", vendor: "Microsoft", category: "appliance", os: "Xbox One"}, DigitalTV: {label: "DigitalTV", name: "InternetTVBrowser", type: "full", vendor: "", category: "appliance", os: "DigitalTV"}, SafariRSSReader: {label: "SafariRSSReader", name: "Safari RSSReader", type: "full", vendor: "Apple", category: "misc"}, GoogleDesktop: {label: "GoogleDesktop", name: "Google Desktop", type: "full", vendor: "Google", category: "misc"}, WindowsRSSReader: {label: "WindowsRSSReader", name: "Windows RSSReader", type: "full", vendor: "Microsoft", category: "misc"}, VariousRSSReader: {label: "VariousRSSReader", name: "RSSReader", type: "full", vendor: "", category: "misc"}, HTTPLibrary: {label: "HTTPLibrary", name: "HTTP Library", type: "full", vendor: "", category: "misc"}, GoogleBot: {label: "GoogleBot", name: "Googlebot", type: "full", vendor: "", category: "crawler"}, GoogleBotMobile: {label: "GoogleBotMobile", name: "Googlebot Mobile", type: "full", vendor: "", category: "crawler"}, GoogleMediaPartners: {label: "GoogleMediaPartners", name: "Google Mediapartners", type: "full", vendor: "", category: "crawler"}, GoogleFeedFetcher: {label: "GoogleFeedFetcher", name: "Google Feedfetcher", type: "full", vendor: "", category: "crawler"}, GoogleAppEngine: {label: "GoogleAppEngine", name: "Google AppEngine", type: "full", vendor: "", category: "crawler"}, GoogleWebPreview: {label: "GoogleWebPreview", name: "Google Web Preview", type: "full", vendor: "", category: "crawler"}, YahooSlurp: {label: "YahooSlurp", name: "Yahoo! Slurp", type: "full", vendor: "", category: "crawler"}, YahooJP: {label: "YahooJP", name: "Yahoo! Japan", type: "full", vendor: "", category: "crawler"}, YahooPipes: {label: "YahooPipes", name: "Yahoo! Pipes", type: "full", vendor: "", category: "crawler"}, Baiduspider: {label: "Baiduspider", name: "Baiduspider", type: "full", vendor: "", category: "crawler"}, msnbot: {label: "msnbot", name: "msnbot", type: "full", vendor: "", category: "crawler"}, bingbot: {label: "bingbot", name: "bingbot", type: "full", vendor: "", category: "crawler"}, BingPreview: {label: "BingPreview", name: "BingPreview", type: "full", vendor: "", category: "crawler"}, Yeti: {label: "Yeti", name: "Naver Yeti", type: "full", vendor: "", category: "crawler"}, FeedBurner: {label: "FeedBurner", name: "Google FeedBurner", type: "full", vendor: "", category: "crawler"}, facebook: {label: "facebook", name: "facebook", type: "full", vendor: "", category: "crawler"}, twitter: {label: "twitter", name: "twitter", type: "full", vendor: "", category: "crawler"}, trendictionbot: {label: "trendictionbot", name: "trendiction", type: "full", vendor: "", category: "crawler"}, mixi: {label: "mixi", name: "mixi", type: "full", vendor: "", category: "crawler"}, IndyLibrary: {label: "IndyLibrary", name: "Indy Library", type: "full", vendor: "", category: "crawler"}, ApplePubSub: {label: "ApplePubSub", name: "Apple iCloud", type: "full", vendor: "", category: "crawler"}, Genieo: {label: "Genieo", name: "Genieo Web Filter", type: "full", vendor: "", category: "crawler"}, topsyButterfly: {label: "topsyButterfly", name: "topsy Butterfly", type: "full", vendor: "", category: "crawler"}, rogerbot: {label: "rogerbot", name: "SeoMoz rogerbot", type: "full", vendor: "", category: "crawler"}, AhrefsBot: {label: "AhrefsBot", name: "ahref AhrefsBot", type: "full", vendor: "", category: "crawler"}, radian6: {label: "radian6", name: "salesforce radian6", type: "full", vendor: "", category: "crawler"}, Hatena: {label: "Hatena", name: "Hatena", type: "full", vendor: "", category: "crawler"}, goo: {label: "goo", name: "goo", type: "full", vendor: "", category: "crawler"}, livedoorFeedFetcher: {label: "livedoorFeedFetcher", name: "livedoor FeedFetcher", type: "full", vendor: "", category: "crawler"}, VariousCrawler: {label: "VariousCrawler", name: "misc crawler", type: "full", vendor: "", category: "crawler"}};
    var get = exports.get = function(label) {
      return DATASET[label];
    };

  })();
  var util = {};
  (function(){
    var exports = util;
    /* CODE: util.js */
    var updateMap = exports.updateMap = function(target, source) {
      for (var key in source) {
        if (key === dataset.KEY_LABEL || key === dataset.KEY_TYPE)
          continue;
        if (source[key] && source[key].length > 0)
          target[key] = source[key];
      }
    };
    var updateCategory = exports.updateCategory = function(target, category) {
      target[dataset.ATTRIBUTE_CATEGORY] = category;
    };
    var updateVersion = exports.updateVersion = function(target, version) {
      target[dataset.ATTRIBUTE_VERSION] = version;
    };
    var updateOs = exports.updateOs = function(target, os) {
      target[dataset.ATTRIBUTE_OS] = os;
    };
    var updateOsVersion = exports.updateOsVersion = function(target, version) {
      target[dataset.ATTRIBUTE_OS_VERSION] = version;
    };

  })();
  var browser = {};
  (function(){
    var exports = browser;
    /* CODE: browser.js */
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

  })();
  var os = {};
  (function(){
    var exports = os;
    /* CODE: os.js */
    var windowsPattern = /Windows ([ .a-zA-Z0-9]+)[;\\)]/;
    var windowsPhonePattern = /^Phone(?: OS)? ([.0-9]+)/;
    var challengeWindows = exports.challengeWindows = function(ua, result) {
      if (ua.indexOf('Windows') < 0)
        return false;
      // Xbox Series
      if (ua.indexOf('Xbox') > -1) {
        var d;
        if (ua.indexOf('Xbox; Xbox One)') > -1) 
          d = dataset.get("XboxOne");
        else
          d = dataset.get("Xbox360");
        // overwrite browser detections as appliance
        updateMap(result, d);
        return true;
      }
      var data = dataset.get('Win');
      var match = windowsPattern.exec(ua);
      if (!match) {
        // Windows, but version unknown
        updateCategory(result, data[dataset.KEY_CATEGORY]);
        updateOs(result, data[dataset.KEY_NAME]);
        return true;
      }
      var version = match[1];
      if (version === 'NT 10.0') data = dataset.get('Win10'); 
      else if (version === 'NT 6.3') data = dataset.get('Win8.1'); 
      else if (version === 'NT 6.2') data = dataset.get('Win8'); // "NT 6.2; ARM;" means Windows RT, oh....
      else if (version === 'NT 6.1') data = dataset.get('Win7');
      else if (version === 'NT 6.0') data = dataset.get('WinVista');
      else if (version === 'NT 5.1') data = dataset.get('WinXP');
      else if ((match = windowsPhonePattern.exec(version))) {
        data = dataset.get('WinPhone');
        version = match[1];
      }
      else if (version === 'NT 5.0') data = dataset.get('Win2000');
      else if (version === 'NT 4.0') data = dataset.get('WinNT4');
      else if (version === '98') data = dataset.get('Win98'); // wow, WinMe is shown as 'Windows 98; Win9x 4.90', fxxxk
      else if (version === '95') data = dataset.get('Win95');
      else if (version === 'CE') data = dataset.get('WinCE');
      /*
      else
        // windows unknown
       */
      updateCategory(result, data[dataset.KEY_CATEGORY]);
      updateOs(result, data[dataset.KEY_NAME]);
      updateOsVersion(result, version);
      return true;
    };
    var challengeOSX = exports.challengeOSX = function(ua, result) {
      if (ua.indexOf('Mac OS X') < 0)
        return false;
      var data = dataset.get('OSX');
      var version;
      var match;
      if (ua.indexOf('like Mac OS X') >= 0) {
        if (ua.indexOf('iPhone;') >= 0) data = dataset.get('iPhone');
        else if (ua.indexOf('iPad;') >= 0) data = dataset.get('iPad');
        else if (ua.indexOf('iPod') >= 0) data = dataset.get('iPod');
        if ((match = /; CPU(?: iPhone)? OS (\d+_\d+(?:_\d+)?) like Mac OS X/.exec(ua)))
          version = match[1].replace(/_/g, '.');
      }
      else {
        if ((match = /Mac OS X (10[._]\d+(?:[._]\d+)?)(?:\)|;)/.exec(ua))) {
          version = match[1].replace(/_/g, '.');
        }
      }
      updateCategory(result, data[dataset.KEY_CATEGORY]);
      updateOs(result, data[dataset.KEY_NAME]);
      if (version)
        updateOsVersion(result, version);
      return true;
    };
    var challengeLinux = exports.challengeLinux = function(ua, result) {
      if (ua.indexOf('Linux') < 0)
        return false;
      var data = dataset.get('Linux');
      var os_version;
      var match;
      if (ua.indexOf('Android') >= 0) {
        data = dataset.get('Android');
        if ((match = /Android[- ](\d+(?:\.\d+(?:\.\d+)?)?)/.exec(ua)))
          os_version = match[1];
      }
      updateCategory(result, data[dataset.KEY_CATEGORY]);
      updateOs(result, data[dataset.KEY_NAME]);
      if (os_version)
        updateOsVersion(result, os_version);
      return true;
    };
    var challengeSmartPhone = exports.challengeSmartPhone = function(ua, result) {
      var data = null;
      var os_version = null;
      var match;
      if (ua.indexOf('iPhone') >= 0) data = dataset.get('iPhone');
      else if (ua.indexOf('iPad') >= 0) data = dataset.get('iPad');
      else if (ua.indexOf('iPod') >= 0) data = dataset.get('iPod');
      else if (ua.indexOf('Android') >= 0) data = dataset.get('Android');
      else if (ua.indexOf('CFNetwork') >= 0) data = dataset.get('iOS');
      else if (ua.indexOf('BB10') >= 0) {
        data = dataset.get('BlackBerry10');
        if ((match = /BB10(?:.+)Version\/([.0-9]+)/.exec(ua)))
          os_version = match[1];
      }
      else if (ua.indexOf('BlackBerry') >= 0) {
        data = dataset.get('BlackBerry');
        if ((match = /BlackBerry(?:\d+)\/([.0-9]+) /.exec(ua)))
          os_version = match[1];
      }
      if (result[dataset.KEY_NAME] && result[dataset.KEY_NAME] === dataset.get('Firefox')[dataset.KEY_NAME]) {
        // Firefox OS specific pattern
        // http://lawrencemandel.com/2012/07/27/decision-made-firefox-os-user-agent-string/
        // https://github.com/woothee/woothee/issues/2
        if ((match = /^Mozilla\/[.0-9]+ \((?:Mobile|Tablet);(?:.*;)? rv:([.0-9]+)\) Gecko\/[.0-9]+ Firefox\/[.0-9]+$/.exec(ua))) {
          data = dataset.get('FirefoxOS');
          os_version = match[1];
        }
      }
      if (!data)
        return false;
      updateCategory(result, data[dataset.KEY_CATEGORY]);
      updateOs(result, data[dataset.KEY_NAME]);
      if (os_version)
        updateOsVersion(result, os_version);
      return true;
    };
    var challengeMobilePhone = exports.challengeMobilePhone = function(ua, result) {
      var data,match;
      if (ua.indexOf('KDDI-') >= 0) {
        if ((match = /KDDI-([^- \/;()"']+)/.exec(ua))) {
          var term = match[1];
          data = dataset.get('au');
          updateCategory(result, data[dataset.KEY_CATEGORY]);
          updateOs(result, data[dataset.KEY_OS]);
          updateVersion(result, term);
          return true;
        }
      }
      if (ua.indexOf('WILLCOM') >= 0 || ua.indexOf('DDIPOCKET') >= 0) {
        if ((match = /(?:WILLCOM|DDIPOCKET);[^\/]+\/([^ \/;()]+)/.exec(ua))) {
          term = match[1];
          data = dataset.get('willcom');
          updateCategory(result, data[dataset.KEY_CATEGORY]);
          updateOs(result, data[dataset.KEY_OS]);
          updateVersion(result, term);
          return true;
        }
      }
      if (ua.indexOf('SymbianOS') >= 0) {
        data = dataset.get('SymbianOS');
        updateCategory(result, data[dataset.KEY_CATEGORY]);
        updateOs(result, data[dataset.KEY_OS]);
        return true;
      }
      if (ua.indexOf('Google Wireless Transcoder') >= 0) {
        updateMap(result, dataset.get('MobileTranscoder'));
        updateVersion(result, 'Google');
        return true;
      }
      if (ua.indexOf('Naver Transcoder') >= 0) {
        updateMap(result, dataset.get('MobileTranscoder'));
        updateVersion(result, 'Naver');
        return true;
      }
      return false;
    };
    var challengeAppliance = exports.challengeAppliance = function(ua, result) {
      var data;
      if (ua.indexOf('Nintendo DSi;') >= 0) {
        data = dataset.get('NintendoDSi');
        updateCategory(result, data[dataset.KEY_CATEGORY]);
        updateOs(result, data[dataset.KEY_OS]);
        return true;
      }
      if (ua.indexOf('Nintendo Wii;') >= 0) {
        data = dataset.get('NintendoWii');
        updateCategory(result, data[dataset.KEY_CATEGORY]);
        updateOs(result, data[dataset.KEY_OS]);
        return true;
      }
      return false;
    };
    var challengeMisc = exports.challengeMisc = function(ua, result) {
      var data;
      var osVersion;
      var match;
      if (ua.indexOf('(Win98;') >= 0) {
        data = dataset.get('Win98');
        osVersion = "98";
      } else if (ua.indexOf('Macintosh; U; PPC;') >= 0) {
        data = dataset.get('MacOS');
        if ((match = /rv:(\d+\.\d+\.\d+)/.exec(ua)))
          osVersion = match[1];
      }
      else if (ua.indexOf('Mac_PowerPC') >= 0) data = dataset.get('MacOS');
      else if (ua.indexOf('X11; FreeBSD ') >= 0) {
        data = dataset.get('BSD');
        if ((match = /FreeBSD ([^;\)]+);/.exec(ua)))
          osVersion = match[1];
      }
      else if (ua.indexOf('X11; CrOS ') >= 0) {
        data = dataset.get('ChromeOS');
        if ((match = /CrOS ([^\)]+)\)/.exec(ua)))
          osVersion = match[1];
      }
      if (data) {
        updateCategory(result, data[dataset.KEY_CATEGORY]);
        updateOs(result, data[dataset.KEY_NAME]);
        if (osVersion)
          updateOsVersion(result, osVersion);
        return true;
      }
      return false;
    };

  })();
  var mobilephone = {};
  (function(){
    var exports = mobilephone;
    /* CODE: mobilephone.js */
    var docomoPattern = /DoCoMo\/[.0-9]+[ \/]([^- \/;()"']+)/;
    var fomaPattern = /\(([^;)]+);FOMA;/;
    var challengeDocomo = exports.challengeDocomo = function(ua, result) {
      if (ua.indexOf('DoCoMo') < 0 && ua.indexOf(';FOMA;') < 0)
        return false;
      var version = dataset.VALUE_UNKNOWN;
      var match;
      if ((match = docomoPattern.exec(ua))) {
        version = match[1];
      } else if ((match = fomaPattern.exec(ua))) {
        version = match[1];
      }
      updateMap(result, dataset.get('docomo'));
      updateVersion(result, version);
      return true;
    };
    var kddiPattern = /KDDI-([^- \/;()"']+)/;
    var challengeAu = exports.challengeAu = function(ua, result) {
      if (ua.indexOf('KDDI-') < 0)
        return false;
      var version = dataset.VALUE_UNKNOWN;
      var match = kddiPattern.exec(ua);
      if (match)
        version = match[1];
      updateMap(result, dataset.get('au'));
      updateVersion(result, version);
      return true;
    };
    var softbankPattern = /(?:SoftBank|Vodafone|J-PHONE)\/[.0-9]+\/([^ \/;()]+)/;
    var challengeSoftbank = exports.challengeSoftbank = function(ua, result) {
      if (ua.indexOf('SoftBank') < 0 && ua.indexOf('Vodafone') < 0 && ua.indexOf('J-PHONE') < 0)
        return false;
      var version = dataset.VALUE_UNKNOWN;
      var match = softbankPattern.exec(ua);
      if (match)
        version = match[1];
      updateMap(result, dataset.get('SoftBank'));
      updateVersion(result, version);
      return true;
    };
    var willcomPattern = /(?:WILLCOM|DDIPOCKET);[^\/]+\/([^ \/;()]+)/;
    var challengeWillcom = exports.challengeWillcom = function(ua, result) {
      if (ua.indexOf('WILLCOM') < 0 && ua.indexOf('DDIPOCKET') < 0)
        return false;
      var version = dataset.VALUE_UNKNOWN;
      var match = willcomPattern.exec(ua);
      if (match)
        version = match[1];
      updateMap(result, dataset.get('willcom'));
      updateVersion(result, version);
      return true;
    };
    var challengeMisc = exports.challengeMisc = function(ua, result) {
      var match;
      if (ua.indexOf('jig browser') >= 0) {
        updateMap(result, dataset.get('jig'));
        if ((match = /jig browser[^;]+; ([^);]+)/.exec(ua))) {
          updateVersion(result, match[1]);
        }
        return true;
      }
      if (ua.indexOf('emobile/') >= 0 || ua.indexOf('OpenBrowser') >= 0 || ua.indexOf('Browser/Obigo-Browser') >= 0) {
        updateMap(result, dataset.get('emobile'));
        return true;
      }
      if (ua.indexOf('SymbianOS') >= 0) {
        updateMap(result, dataset.get('SymbianOS'));
        return true;
      }
      if (ua.indexOf('Hatena-Mobile-Gateway/') >= 0) {
        updateMap(result, dataset.get('MobileTranscoder'));
        updateVersion(result, 'Hatena');
        return true;
      }
      if (ua.indexOf('livedoor-Mobile-Gateway/') >= 0) {
        updateMap(result, dataset.get('MobileTranscoder'));
        updateVersion(result, 'livedoor');
        return true;
      }
      return false;
    };

  })();
  var crawler = {};
  (function(){
    var exports = crawler;
    /* CODE: crawler.js */
    var challengeGoogle = exports.challengeGoogle = function(ua, result) {
      if (ua.indexOf('Google') < 0)
        return false;
      if (ua.indexOf('compatible; Googlebot') >= 0) {
        if (ua.indexOf('compatible; Googlebot-Mobile') >= 0) {
          updateMap(result, dataset.get('GoogleBotMobile'));
          return true;
        } else {
          updateMap(result, dataset.get('GoogleBot'));
          return true;
        }
      }
      if (ua.indexOf('Googlebot-Image/') >= 0) {
        updateMap(result, dataset.get('GoogleBot'));
        return true;
      }
      if (ua.indexOf('Mediapartners-Google') >= 0) {
        if (ua.indexOf('compatible; Mediapartners-Google') >= 0 || ua === 'Mediapartners-Google') {
          updateMap(result, dataset.get('GoogleMediaPartners'));
          return true;
        }
      }
      if (ua.indexOf('Feedfetcher-Google;') >= 0) {
        updateMap(result, dataset.get('GoogleFeedFetcher'));
        return true;
      }
      if (ua.indexOf('AppEngine-Google') >= 0) {
        updateMap(result, dataset.get('GoogleAppEngine'));
        return true;
      }
      if (ua.indexOf('Google Web Preview') >= 0) {
        updateMap(result, dataset.get('GoogleWebPreview'));
        return true;
      }
      return false;
    };
    var challengeCrawlers = exports.challengeCrawlers = function(ua, result) {
      if (ua.indexOf('Yahoo') >= 0
          || ua.indexOf('help.yahoo.co.jp/help/jp/') >= 0
          || ua.indexOf('listing.yahoo.co.jp/support/faq/') >= 0) {
        if (ua.indexOf('compatible; Yahoo! Slurp') >= 0) {
          updateMap(result, dataset.get('YahooSlurp'));
          return true;
        }
        if (ua.indexOf('YahooFeedSeekerJp') >= 0 || ua.indexOf('YahooFeedSeekerBetaJp') >= 0) {
          updateMap(result, dataset.get('YahooJP'));
          return true;
        }
        if (ua.indexOf('crawler (http://listing.yahoo.co.jp/support/faq/') >= 0
            || ua.indexOf('crawler (http://help.yahoo.co.jp/help/jp/') >= 0) {
          updateMap(result, dataset.get('YahooJP'));
          return true;
        }
        if (ua.indexOf('Y!J-BRZ/YATSHA crawler') >= 0
            || ua.indexOf('Y!J-BRY/YATSH crawler') >= 0) {
          updateMap(result, dataset.get('YahooJP'));
          return true;
        }
        if (ua.indexOf('Yahoo Pipes') >= 0) {
          updateMap(result, dataset.get('YahooPipes'));
          return true;
        }
      }
      if (ua.indexOf('msnbot') >= 0) {
        updateMap(result, dataset.get('msnbot'));
        return true;
      }
      if (ua.indexOf('bingbot') >= 0) {
        if (ua.indexOf('compatible; bingbot') >= 0) {
          updateMap(result, dataset.get('bingbot'));
          return true;
        }
      }
      if (ua.indexOf('BingPreview') >= 0) {
        updateMap(result, dataset.get('BingPreview'));
        return true;
      }
      if (ua.indexOf('Baidu') >= 0) {
        if (ua.indexOf('compatible; Baiduspider') >= 0 ||
            ua.indexOf('Baiduspider+') >= 0 ||
            ua.indexOf('Baiduspider-image+') >= 0) {
          updateMap(result, dataset.get('Baiduspider'));
          return true;
        }
      }
      if (ua.indexOf('Yeti') >= 0) {
        if (ua.indexOf('http://help.naver.com/robots') >= 0 ||
            ua.indexOf('http://help.naver.com/support/robots.html') >= 0 ||
            ua.indexOf('http://naver.me/bot') >= 0) {
          updateMap(result, dataset.get('Yeti'));
          return true;
        }
      }
      if (ua.indexOf('FeedBurner/') >= 0) {
        updateMap(result, dataset.get('FeedBurner'));
        return true;
      }
      if (ua.indexOf('facebookexternalhit') >= 0) {
        updateMap(result, dataset.get('facebook'));
        return true;
      }
      if (ua.indexOf('Twitterbot/') >= 0) {
        updateMap(result, dataset.get('twitter'));
        return true;
      }
      if (ua.indexOf('ichiro') >= 0) {
        if (ua.indexOf('http://help.goo.ne.jp/door/crawler.html') >= 0 ||
            ua.indexOf('compatible; ichiro/mobile goo;') >= 0) {
          updateMap(result, dataset.get('goo'));
          return true;
        }
      }
      if (ua.indexOf('gooblogsearch/') >= 0) {
        updateMap(result, dataset.get('goo'));
        return true;
      }
      if (ua.indexOf('Apple-PubSub') >= 0) {
        updateMap(result, dataset.get('ApplePubSub'));
        return true;
      }
      if (ua.indexOf('(www.radian6.com/crawler)') >= 0) {
        updateMap(result, dataset.get('radian6'));
        return true;
      }
      if (ua.indexOf('Genieo/') >= 0) {
        updateMap(result, dataset.get('Genieo'));
        return true;
      }
      if (ua.indexOf('labs.topsy.com/butterfly/') >= 0) {
        updateMap(result, dataset.get('topsyButterfly'));
        return true;
      }
      if (ua.indexOf('rogerbot/1.0 (http://www.seomoz.org/dp/rogerbot') >= 0) {
        updateMap(result, dataset.get('rogerbot'));
        return true;
      }
      if (ua.indexOf('compatible; AhrefsBot/') >= 0) {
        updateMap(result, dataset.get('AhrefsBot'));
        return true;
      }
      if (ua.indexOf('livedoor FeedFetcher') >= 0 || ua.indexOf('Fastladder FeedFetcher') >= 0) {
        updateMap(result, dataset.get('livedoorFeedFetcher'));
        return true;
      }
      if (ua.indexOf('Hatena ') >= 0) {
        if (ua.indexOf('Hatena Antenna') >= 0 ||
            ua.indexOf('Hatena Pagetitle Agent') >= 0 ||
            ua.indexOf('Hatena Diary RSS') >= 0) {
          updateMap(result, dataset.get('Hatena'));
          return true;
        }
      }
      if (ua.indexOf('mixi-check') >= 0 ||
          ua.indexOf('mixi-crawler') >= 0 ||
          ua.indexOf('mixi-news-crawler') >= 0) {
        updateMap(result, dataset.get('mixi'));
        return true;
      }
      if (ua.indexOf('Indy Library') >= 0) {
        if (ua.indexOf('compatible; Indy Library') >= 0) {
          updateMap(result, dataset.get('IndyLibrary'));
          return true;
        }
      }
      if (ua.indexOf('trendictionbot') >= 0) {
        updateMap(result, dataset.get('trendictionbot'));
        return true;
      }
      return false;
    };
    var challengeMaybeCrawler = exports.challengeMaybeCrawler = function(ua, result) {
      if (/(bot|crawler|spider)(?:[-_ .\/;@()]|$)/i.exec(ua)) {
        updateMap(result, dataset.get('VariousCrawler'));
        return true;
      }
      if (/(?:Rome Client |UnwindFetchor\/|ia_archiver |Summify |PostRank\/)/.exec(ua) ||
          ua.indexOf('ASP-Ranker Feed Crawler') >= 0) {
        updateMap(result, dataset.get('VariousCrawler'));
        return true;
      }
      if (/(feed|web) ?parser/i.exec(ua)) {
        updateMap(result, dataset.get('VariousCrawler'));
        return true;
      }
      if (/watch ?dog/i.exec(ua)) {
        updateMap(result, dataset.get('VariousCrawler'));
        return true;
      }
      return false;
    };

  })();
  var appliance = {};
  (function(){
    var exports = appliance;
    /* CODE: appliance.js */
    var challengePlaystation = exports.challengePlaystation = function(ua, result) {
      var data = null;
      var os_version = null;
      var match;
      if (ua.indexOf('PSP (PlayStation Portable);') >= 0) {
        data = dataset.get('PSP');
        if ((match = /PSP \(PlayStation Portable\); ([.0-9]+)\)/.exec(ua)))
          os_version = match[1];
      } else if (ua.indexOf('PlayStation Vita') >= 0) {
        data = dataset.get('PSVita');
        if ((match = /PlayStation Vita ([.0-9]+)\)/.exec(ua)))
          os_version = match[1];
      } else if (ua.indexOf('PLAYSTATION 3 ') >= 0 || ua.indexOf('PLAYSTATION 3;') >= 0) {
        data = dataset.get('PS3');
        if ((match = /PLAYSTATION 3;? ([.0-9]+)\)/.exec(ua)))
          os_version = match[1];
      } else if (ua.indexOf('PlayStation 4 ') >= 0) {
        data = dataset.get('PS4');
        if ((match = /PlayStation 4 ([.0-9]+)\)/.exec(ua)))
          os_version = match[1];
      }
      if (! data)
        return false;
      updateMap(result, data);
      if (os_version)
        updateOsVersion(result, os_version);
      return true;
    };
    var challengeNintendo = exports.challengeNintendo = function(ua, result) {
      var data = null;
      if (ua.indexOf('Nintendo 3DS;') >= 0) data = dataset.get('Nintendo3DS');
      else if (ua.indexOf('Nintendo DSi;') >= 0) data = dataset.get('NintendoDSi');
      else if (ua.indexOf('Nintendo Wii;') >= 0) data = dataset.get('NintendoWii');
      else if (ua.indexOf('(Nintendo WiiU)') >= 0) data = dataset.get('NintendoWiiU');
      if (! data)
        return false;
      updateMap(result, data);
      return true;
    };
    var challengeDigitalTV = exports.challengeDigitalTV = function(ua, result) {
      var data = null;
      if (ua.indexOf('InettvBrowser/') >= 0) data = dataset.get('DigitalTV');
      if (! data)
        return false;
      updateMap(result, data);
      return true;
    };

  })();
  var misc = {};
  (function(){
    var exports = misc;
    /* CODE: misc.js */
    var challengeDesktopTools = exports.challengeDesktopTools = function(ua, result){
      var data = null;
      if (ua.indexOf('AppleSyndication/') >= 0) data = dataset.get('SafariRSSReader');
      else if (ua.indexOf('compatible; Google Desktop/') >= 0) data = dataset.get('GoogleDesktop');
      else if (ua.indexOf('Windows-RSS-Platform') >= 0) data = dataset.get('WindowsRSSReader');
      if (!data)
        return false;
      updateMap(result, data);
      return true;
    };
    var challengeSmartPhonePatterns = exports.challengeSmartPhonePatterns = function(ua, result){
      var data;
      if (ua.indexOf('CFNetwork/') >= 0) {
        data = dataset.get('iOS');
        updateCategory(result, data[dataset.KEY_CATEGORY]);
        updateOs(result, data[dataset.KEY_NAME]);
        return true;
      }
      return false;
    };
    var challengeHTTPLibrary = exports.challengeHTTPLibrary = function(ua, result){
      var data,version;
      if (/^(?:Apache-HttpClient\/|Jakarta Commons-HttpClient\/|Java\/)/.exec(ua) || /[- ]HttpClient(\/|$)/.exec(ua)) {
        data = dataset.get('HTTPLibrary'); version = 'Java';
      } else if (ua.indexOf('Java(TM) 2 Runtime Environment,') >= 0) {
        data = dataset.get('HTTPLibrary'); version = 'Java';
      } else if (/^Wget/.exec(ua)) {
        data = dataset.get('HTTPLibrary'); version = 'wget';
      } else if (/^(?:libwww-perl|WWW-Mechanize|LWP::Simple|LWP |lwp-trivial)/.exec(ua)) {
        data = dataset.get('HTTPLibrary'); version = 'perl';
      } else if (/^(?:Ruby|feedzirra|Typhoeus)/.exec(ua)) {
        data = dataset.get('HTTPLibrary'); version = 'ruby';
      } else if (/^(?:Python-urllib\/|Twisted )/.exec(ua)) {
        data = dataset.get('HTTPLibrary'); version = 'python';
      } else if (/^(:?PHP|WordPress|CakePHP|PukiWiki|PECL::HTTP)(?:\/| |$)/.exec(ua) || /(?:PEAR |)HTTP_Request(?: class|2)/.exec(ua)) {
        data = dataset.get('HTTPLibrary'); version = 'php';
      } else if (ua.indexOf('PEAR HTTP_Request class;') >= 0) {
        data = dataset.get('HTTPLibrary'); version = 'php';
      } else if (ua.indexOf('curl/') >= 0) {
        data = dataset.get('HTTPLibrary'); version = 'curl';
      }
      if (! data)
        return false;
      updateMap(result, data);
      updateVersion(result, version);
      return true;
    };
    var challengeMaybeRSSReader = exports.challengeMaybeRSSReader = function(ua, result){
      var data = null;
      if (/rss(?:reader|bar|[-_ \/;()]|[ +]*\/)/i.exec(ua) || /headline-reader/i.exec(ua)) {
        data = dataset.get('VariousRSSReader');
      }
      else {
        if (ua.indexOf('cococ/') >= 0)
          data = dataset.get('VariousRSSReader');
      }
      if (! data)
        return false;
      updateMap(result, data);
      return true;
    };

  })();
  var woothee = {};
  (function(){
    var exports = woothee;
    /* CODE: woothee.js */
    var version = exports.VERSION = package_info.version;
    var parse = exports.parse = function(userAgent) {
      return fillResult(execParse(userAgent));
    };
    var isCrawler = exports.isCrawler = function(userAgent) {
      return false;
    };
    function execParse(userAgent) {
      var result = {};
      if (! userAgent || userAgent === '-')
        return result;
      if (tryCrawler(userAgent, result))
        return result;
      if (tryBrowser(userAgent, result)) {
        if (tryOS(userAgent, result))
          return result;
        else
          return result;
      }
      if (tryMobilePhone(userAgent, result))
        return result;
      if (tryAppliance(userAgent, result))
        return result;
      if (tryMisc(userAgent, result))
        return result;
      // browser unknown, check os only
      if (tryOS(userAgent, result))
        return result;
      if (tryRareCases(userAgent, result))
        return result;
      return result;
    };
    function tryCrawler(userAgent, result) {
      if (crawler.challengeGoogle(userAgent, result))
        return true;
      if (crawler.challengeCrawlers(userAgent, result))
        return true;
      return false;
    }
    function tryBrowser(userAgent, result) {
      if (browser.challengeMSIE(userAgent, result))
        return true;
      if (browser.challengeVivaldi(userAgent, result))
        return true;
      if (browser.challengeYandexBrowser(userAgent, result))
        return true;
      if (browser.challengeSafariChrome(userAgent, result))
        return true;
      if (browser.challengeFirefox(userAgent, result))
        return true;
      if (browser.challengeOpera(userAgent, result))
        return true;
      if (browser.challengeWebview(userAgent, result))
        return true;
      return false;
    }
    function tryOS(userAgent, result) {
      if (os.challengeWindows(userAgent, result))
        return true;
      // OSX PC and iOS devices (strict check)
      if (os.challengeOSX(userAgent, result))
        return true;
      // Linux PC and Android
      if (os.challengeLinux(userAgent, result))
        return true;
      // all useragents matches /(iPhone|iPad|iPod|Android|BlackBerry)/
      if (os.challengeSmartPhone(userAgent, result))
        return true;
      // mobile phones like KDDI-.*
      if (os.challengeMobilePhone(userAgent, result))
        return true;
      // Nintendo DSi/Wii with Opera
      if (os.challengeAppliance(userAgent, result))
        return true;
      if (os.challengeMisc(userAgent, result))
        return true;
      return false;
    }
    function tryMobilePhone(userAgent, result) {
      if (mobilephone.challengeDocomo(userAgent, result))
        return true;
      if (mobilephone.challengeAu(userAgent, result))
        return true;
      if (mobilephone.challengeSoftbank(userAgent, result))
        return true;
      if (mobilephone.challengeWillcom(userAgent, result))
        return true;
      if (mobilephone.challengeMisc(userAgent, result))
        return true;
      return false;
    }
    function tryAppliance(userAgent, result) {
      if (appliance.challengePlaystation(userAgent, result))
        return true;
      if (appliance.challengeNintendo(userAgent, result))
        return true;
      if (appliance.challengeDigitalTV(userAgent, result))
        return true;
      return false;
    }
    function tryMisc(userAgent, result) {
      if (misc.challengeDesktopTools(userAgent, result))
        return true;
      return false;
    }
    function tryRareCases(userAgent, result) {
      if (misc.challengeSmartPhonePatterns(userAgent, result))
        return true;
      if (browser.challengeSleipnir(userAgent, result))
        return true;
      if (misc.challengeHTTPLibrary(userAgent, result))
        return true;
      if (misc.challengeMaybeRSSReader(userAgent, result))
        return true;
      if (crawler.challengeMaybeCrawler(userAgent, result))
        return true;
      return false;
    }
    var filled = {};
    filled[dataset.ATTRIBUTE_NAME] = dataset.VALUE_UNKNOWN;
    filled[dataset.ATTRIBUTE_CATEGORY] = dataset.VALUE_UNKNOWN;
    filled[dataset.ATTRIBUTE_OS] = dataset.VALUE_UNKNOWN;
    filled[dataset.ATTRIBUTE_OS_VERSION] = dataset.VALUE_UNKNOWN;
    filled[dataset.ATTRIBUTE_VERSION] = dataset.VALUE_UNKNOWN;
    filled[dataset.ATTRIBUTE_VENDOR] = dataset.VALUE_UNKNOWN;
    function fillResult(result) {
      if (! result[dataset.ATTRIBUTE_NAME])
        result[dataset.ATTRIBUTE_NAME] = dataset.VALUE_UNKNOWN;
      if (! result[dataset.ATTRIBUTE_CATEGORY])
        result[dataset.ATTRIBUTE_CATEGORY] = dataset.VALUE_UNKNOWN;
      if (! result[dataset.ATTRIBUTE_OS])
        result[dataset.ATTRIBUTE_OS] = dataset.VALUE_UNKNOWN;
      if (! result[dataset.ATTRIBUTE_OS_VERSION])
        result[dataset.ATTRIBUTE_OS_VERSION] = dataset.VALUE_UNKNOWN;
      if (! result[dataset.ATTRIBUTE_VERSION])
        result[dataset.ATTRIBUTE_VERSION] = dataset.VALUE_UNKNOWN;
      if (! result[dataset.ATTRIBUTE_VENDOR])
        result[dataset.ATTRIBUTE_VENDOR] = dataset.VALUE_UNKNOWN;
      return result;
    };

  })();
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
