import {Injector, LOCALE_ID, StaticProvider, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {FileService} from '../services/file.service';
import {PortalUtil} from '../utils/portal-util';
import {PortalParams} from '../models/portal-params';

export function getI18nProvider(portalParams: PortalParams): Promise<StaticProvider[]> {
    const EMPTY_PROVIDERS: StaticProvider[] = [];
    const localeId = PortalUtil.getLocaleId();
    if (!localeId || localeId === 'en-US') {
        return Promise.resolve(EMPTY_PROVIDERS);
    }
    const injector = Injector.create({providers: [{provide: FileService, deps: []}]});
    const fileService = injector.get(FileService);
    const translationFile = `${portalParams.contextPath}/i18n/messages.${localeId}.xlf`;
    return fileService.getFile(translationFile)
        .then((translations: string) => [
            {provide: TRANSLATIONS, useValue: translations},
            {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
            {provide: LOCALE_ID, useValue: localeId}
        ])
        .catch(() => EMPTY_PROVIDERS);
}





