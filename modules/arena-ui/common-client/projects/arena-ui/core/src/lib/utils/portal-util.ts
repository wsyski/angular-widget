declare var Liferay: any;

const FRIENDLY_URL_PATTERN = '^(?:/(?:[a-z]{2}(?:_[A-Z]{2})?))?(?:/widget)?(/group|/user|/web)(/[^/^\\s^\\?^;]+)(?:[^\\s^\\?]*)$';

// @dynamic
export class PortalUtil {

  static getPortletConfigurationUrl(portletNamespace: string): string {
    const portletId: string = PortalUtil.getPortletId(portletNamespace);
    const resourceURL = Liferay.PortletURL.createResourceURL();
    resourceURL.setPortletId(portletId);
    resourceURL.setResourceId('/portlet-configuration');
    return resourceURL.toString();
  }

  static getTranslationsUrl(portletNamespace: string): string {
    const language: string = navigator.language;
    const portletId: string = PortalUtil.getPortletId(portletNamespace);
    const resourceURL = Liferay.PortletURL.createResourceURL();
    resourceURL.setPortletId(portletId);
    resourceURL.setResourceId('/translations');
    resourceURL.setParameter('language', language);
    return resourceURL.toString();
  }

  static getPortletId(portletNamespace: string): string {
    return portletNamespace.replace(/^_+|_+$/g, '');
  }

  static getPortletName(portletNamespace: string): string {
    const portletId = PortalUtil.getPortletId(portletNamespace);
    return portletId.replace(/_INSTANCE_\w+$/g, '');
  }

  static getLocaleId(): string {
    return PortalUtil.getLocale().replace('_', '-');
  }

  static getLocale(): string {
    return Liferay.ThemeDisplay.getLanguageId();
  }

  static getLayoutUrl(): string {
    return Liferay.ThemeDisplay.getLayoutURL();
  }

  static getFriendlyUrl(): string {
    const layoutRelativeURL = Liferay.ThemeDisplay.getLayoutRelativeURL();
    if (layoutRelativeURL) {
      const match = layoutRelativeURL.match(FRIENDLY_URL_PATTERN);
      if (match && match.length > 1) {
        return match[2];
      }
    }
    return null;
  }

}
