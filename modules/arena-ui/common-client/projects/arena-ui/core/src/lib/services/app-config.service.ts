import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';

import {PortalSite} from '../models/portal-site';
import {PortletConfiguration} from '../models/portlet-configuration';
import {PortalService} from './portal.service';
import {PortletService} from './portlet.service';
import {PortalParamsProvider} from '../providers/portal-params.provider';
import {PortalParams} from '../models/portal-params';
import {AppConfigHook} from '../providers/app-config-hook';
import {Observable} from 'rxjs/internal/Observable';
import {Subscription} from 'rxjs/internal/Subscription';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';

export const APP_CONFIG_HOOK_TOKEN = new InjectionToken<AppConfigHook>('appConfigHook');

@Injectable()
export class AppConfigService {
  portalParams: PortalParams;
  portalSite: PortalSite;
  portletConfiguration: PortletConfiguration;

  constructor(
    private portalService: PortalService,
    private portletService: PortletService,
    @Inject(PortalParamsProvider) private portalParamsProvider: PortalParamsProvider,
    @Optional() @Inject(APP_CONFIG_HOOK_TOKEN) private appConfigHook: AppConfigHook) {

    this.portalParams = portalParamsProvider.instanceOf();
  }

  load(): Promise<any> {
    const portletConfiguration$ = this.portletService.getPortletConfiguration$(this.portalParams.portletNamespace);
    const portalSite$: Observable<PortalSite> = this.portalService.getPortalSite$();
    return new Promise<any>((resolve: any) => {
      const subscription: Subscription = forkJoin(portletConfiguration$, portalSite$)
        .subscribe((result) => {
          this.portalSite = result[1];
          this.portletConfiguration = result[0];
          subscription.unsubscribe();
          if (this.appConfigHook) {
            this.appConfigHook.init(this);
          }
          resolve(true);
        });
    });
  }


}
