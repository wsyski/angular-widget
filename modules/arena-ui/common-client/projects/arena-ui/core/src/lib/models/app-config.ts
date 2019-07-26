import {PortletConfiguration} from './portlet-configuration';
import {PortalSite} from './portal-site';
import {PortalParams} from './portal-params';

export interface AppConfig {
  getPortalParams: () => PortalParams;
  getPortletConfiguration: () => PortletConfiguration;
  getPortalSite: () => PortalSite;
  isValid: () => boolean;
}
