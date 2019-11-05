// import 'core-js/proposals/reflect-metadata';
// import 'zone.js/dist/zone';
import 'common-portlet-provider';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {AppModule} from './app/app.module';
import {DynamicLoader} from './app/dynamic.loader';

import LiferayParams from './types/LiferayParams';

export default function(params: LiferayParams) {

    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then((injector: any) => {
            // Load the bootstrap component dinamically so that we can attach it
            // to the portlet's DOM, which is different for each portlet
            // instance and, thus, cannot be determined until the page is
            // rendered (during runtime).
            const dynamicLoader = new DynamicLoader(injector);

            dynamicLoader.loadComponent(AppComponent, params);
        });
}
