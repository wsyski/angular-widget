export interface PortletConfiguration {
  portletContext: string;
  registrationServiceUrl?: string;
  recordServiceUrl?: string;
  calendarEventServiceUrl?: string;
  getGroupDisplayUrl: string;
  getPortletContextPath: string;
}
