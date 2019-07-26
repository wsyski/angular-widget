import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {PortalSite} from '../models/portal-site';
import {PortalUtil} from '../utils/portal-util';
import {catchError, map, share} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs/internal/observable/throwError';
import {DOCUMENT} from '@angular/common';

const SERVICE_CONFIG_PORTALSITES_PATH = '/local-rest/api/v1/configs/portalsites';

// @dynamic
@Injectable()
export class PortalService {
    private portalSite$: Observable<PortalSite>;

    private static getUrl(hostname: string, port: string) {
        switch (port) {
            case undefined:
            case '':
            case '80':
            case '443':
                return SERVICE_CONFIG_PORTALSITES_PATH;
            case '6080':
            case '8081':
                return `//${hostname}:8081/resources/portal-site-dto.json`;
            default:
                return `//${hostname}:16520${SERVICE_CONFIG_PORTALSITES_PATH}`;
        }
    }

    constructor(@Inject(DOCUMENT) private document: Document, private httpClient: HttpClient) {
        const port = this.document.location.port;
        const hostname = this.document.location.hostname;
        this.portalSite$ = this.httpClient.get<PortalSite>(PortalService.getUrl(hostname, port), {
            params: {
                vhost: hostname,
                friendlyUrl: PortalUtil.getFriendlyUrl()
            }
        }).pipe(map(portalSite => new PortalSite(portalSite.id, portalSite.name, portalSite.description, portalSite.portalSiteGroup)), catchError((httpErrorResponse: HttpErrorResponse) => {
            console.error(httpErrorResponse);
            return throwError(httpErrorResponse);
        }), share());
    }

    getPortalSite$(): Observable<PortalSite> {
        return this.portalSite$;
    }
}
