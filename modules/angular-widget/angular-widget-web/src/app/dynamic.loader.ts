import {ApplicationRef, ComponentFactoryResolver, Injector, NgZone, Type} from '@angular/core';

import LiferayParams from '../types/LiferayParams';

/**
 * This class loads an Angular component dinamically so that we can attach it to
 * the portlet's DOM, which is different for each portlet instance and thus,
 * cannot be determined until the page is rendered (during runtime).
 */
export class DynamicLoader {
    constructor(private injector: Injector) {
    }

    loadComponent<T>(component: Type<T>, params: LiferayParams) {
        const node = document.getElementById(params.portletElementId);
        const injector = this.injector;
        (injector.get(NgZone) as NgZone).run(() => {
            const componentFactory = injector
                .get(ComponentFactoryResolver)
                .resolveComponentFactory(component);
            const componentRef = componentFactory.create(
                injector,
                [],
                node,
            );
            componentRef.instance.params = params;
            injector.get(ApplicationRef).attachView(componentRef.hostView);
        });
    }
}
