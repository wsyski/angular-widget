import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {PortalUtil} from '../utils/portal-util';
import {share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PortletConfiguration} from '../models/portlet-configuration';

@Injectable()
export class PortletService {

  constructor(private httpClient: HttpClient) {
  }

  getPortletConfiguration$(portletNamespace: string): Observable<PortletConfiguration> {
    const portletConfigurationUrl: string = PortalUtil.getPortletConfigurationUrl(portletNamespace);
    return this.httpClient.get<PortletConfiguration>(portletConfigurationUrl).pipe(share());
  }
}
