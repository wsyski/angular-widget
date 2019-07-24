(function (exports) {
  'use strict';


  function PortletURL() {

    function createResourceURL() {
      return new ResourceURL();
    }

    return {
      createResourceURL: createResourceURL
    };
  }

  function ThemeDisplay() {
    var _languageId = 'en_US';

    function getLanguageId() {
      return _languageId;
    }

    function setLanguageId(languageId) {
      _languageId = languageId;
    }

    function getLayoutURL() {
      return '';
    }

    function getLayoutRelativeURL() {
      return '/en/web/arena/welcome';
    }

    return {
      getLayoutURL: getLayoutURL,
      getLayoutRelativeURL: getLayoutRelativeURL,
      getLanguageId: getLanguageId,
      setLanguageId: setLanguageId
    };
  }

  function Browser() {
    var _userAgent = navigator.userAgent.toLowerCase();

    function isEdge() {
      if (_userAgent.indexOf('edge') >= 0) {
        return true;
      }
      return false;
    }

    function isChrome() {
      if (isEdge()) {
        return false;
      }
      if (_userAgent.indexOf('chrome') >= 0) {
        return true;
      }
      return false;
    }

    function isIe() {
      if ((_userAgent.indexOf('msie') >= 0 || _userAgent.indexOf('trident') >= 0) && !_userAgent.indexOf('opera') >= 0) {
        return true;
      }
      return false;
    }

    return {
      isChrome: isChrome,
      isEdge: isEdge,
      isIe: isIe
    };
  }

  function ResourceURL() {
    var _baseUrl = location.origin;
    var _resourceId;
    var _portletId;

    function getPortletName(portletId) {
      if (portletId) {
        return portletId.replace(/_INSTANCE_\w+$/g, '');
      }
    }

    /*eslint no-unused-vars: off*/
    function setParameter(key, value) {
    }

    function setPortletId(portletId) {
      _portletId = portletId;
    }

    function setResourceId(resourceId) {
      _resourceId = resourceId;
    }

    function toString() {
      var url = _baseUrl + '/resources';
      if (_resourceId) {
        url += _resourceId;
      }
      var portletName = getPortletName(_portletId);
      if (portletName) {
        url += '-' + portletName;
      }
      return url + '.json';
    }

    return {
      setParameter: setParameter,
      setResourceId: setResourceId,
      setPortletId: setPortletId,
      toString: toString
    };
  }

  exports.Language= {
    get: function (key) {
      return key;
    }
  };
  exports.Browser = new Browser();
  exports.PortletURL = new PortletURL();
  exports.ThemeDisplay = new ThemeDisplay();
  exports.ResourceURL = ResourceURL;

}(window.Liferay = window.Liferay || {}));

