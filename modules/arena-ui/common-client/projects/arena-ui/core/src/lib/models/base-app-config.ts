import {AppConfig} from './app-config';
import {AppConfigService} from '../services/app-config.service';
import {PortalSite} from './portal-site';
import {PortletConfiguration} from './portlet-configuration';
import {PortalParams} from './portal-params';

const KEY_GROUP_DISPLAY_URL = 'groupDisplayUrl';

export class BaseAppConfig implements AppConfig {

  constructor(private appConfigService: AppConfigService) {
  }

  getPortalSite(): PortalSite {
    return this.appConfigService.portalSite;
  }

  getPortalParams(): PortalParams {
    return this.appConfigService.portalParams;
  }

  getPortletConfiguration(): PortletConfiguration {
    return this.appConfigService.portletConfiguration;
  }

  getGroupDisplayUrl(): string {
    return this.getPortletConfiguration()[KEY_GROUP_DISPLAY_URL];
  }

  getRecordServiceUrl(): string {
    return this.getPortletConfiguration().recordServiceUrl;
  }

  getRegistrationServiceUrl(): string {
    return this.getPortletConfiguration().registrationServiceUrl;
  }
  getCalendarEventServiceUrl(): string {
    return this.getPortletConfiguration().calendarEventServiceUrl;
  }

  isValid(): boolean {
    const recordServiceUrl = this.getRecordServiceUrl();
    const registrationServiceUrl = this.getRegistrationServiceUrl();
    return !!recordServiceUrl && !!registrationServiceUrl;
  }
}
