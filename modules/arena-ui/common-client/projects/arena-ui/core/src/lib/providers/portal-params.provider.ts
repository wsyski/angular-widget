import {PortalParams} from '../models/portal-params';
import {Injectable, StaticProvider} from '@angular/core';

@Injectable()
export class PortalParamsProvider {
  constructor(private portalParams: PortalParams) {
  }

  instanceOf(): PortalParams {
    return this.portalParams;
  }
}

export function getPortalParamsProvider(portalParams: PortalParams): StaticProvider[] {
  return [{provide: PortalParamsProvider, useValue: new PortalParamsProvider(portalParams)}];
}
