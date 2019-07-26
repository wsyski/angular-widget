import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AppConfig} from '../models/app-config';

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('appConfig');

@Injectable()
export class AppConfigGuard implements CanActivate {

  constructor(@Inject(APP_CONFIG_TOKEN) private appConfig: AppConfig) {
  }

  canActivate() {
    return this.appConfig.isValid();
  }
}
