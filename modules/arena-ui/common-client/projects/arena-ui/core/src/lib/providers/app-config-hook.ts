import {AppConfigService} from '../services/app-config.service';

export interface AppConfigHook {
    init: (appConfigService: AppConfigService) => void;
}
