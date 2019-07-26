import {APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppConfigService} from './services/app-config.service';
import {HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from './components/not-found.component';
import {PortletService} from './services/portlet.service';
import {PortalService} from './services/portal.service';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';

export function appConfigFactory(appConfigService: AppConfigService) {
    return () => appConfigService.load();
}

// @dynamic
@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [],
    declarations: [NotFoundComponent, SafeHtmlPipe],
    exports: [NotFoundComponent, SafeHtmlPipe]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the application module only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                AppConfigService,
                PortalService,
                PortletService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: appConfigFactory,
                    deps: [AppConfigService],
                    multi: true
                }
            ]
        };
    }
}



