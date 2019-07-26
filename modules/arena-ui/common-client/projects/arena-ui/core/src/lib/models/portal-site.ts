import {InstallationGroup} from './installation-group';

const INSTALLATION_GROUP_CALENDARS = 'Calendars';
const INSTALLATION_PROPERTY_CES_CUSTOMER_ID = 'CES Customer Id';

export class PortalSite {
  public id: number;
  public name: string;
  public description?: string;
  public portalSiteGroup?: InstallationGroup;

  constructor(id: number, name: string, description: string, portalSiteGroup: InstallationGroup) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.portalSiteGroup = portalSiteGroup;
  }

  getCESCustomerId(): string {
    const calendarsInstallationGroups = this.portalSiteGroup.subGroups[INSTALLATION_GROUP_CALENDARS];
    return calendarsInstallationGroups.properties[INSTALLATION_PROPERTY_CES_CUSTOMER_ID];
  }

  isCES(): boolean {
    return !!this.getCESCustomerId();
  }
}
