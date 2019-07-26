import {PortalUtil} from './portal-util';

describe('PortalUtil', () => {


  describe('Portal Util functions', () => {
    beforeEach(() => {
    });

    it('getPortletId', () => {
      expect(PortalUtil.getPortletId('_calendarEventList_INSTANCE_0QDW0O5Yb8m6_')).toEqual('calendarEventList_INSTANCE_0QDW0O5Yb8m6');
    });

    it('getPortletName', () => {
      expect(PortalUtil.getPortletName('_calendarEventList_INSTANCE_0QDW0O5Yb8m6_')).toEqual('calendarEventList');
    });
  });
});
