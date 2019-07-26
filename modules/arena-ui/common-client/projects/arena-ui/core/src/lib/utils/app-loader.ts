import {ApplicationRef, ComponentFactoryResolver, Injector, NgModuleRef, NgZone, Type} from '@angular/core';
import {PortalParams} from '../models/portal-params';

/**
 * This class loads an Angular component dynamically so that we can attach it to
 * the portlet's DOM, which is different for each portlet instance and thus,
 * cannot be determined until the page is rendered (during runtime).
 */
export class AppLoader {
  constructor(private ngModuleRef: NgModuleRef<any>) {
  }

  loadComponent<T>(component: Type<T>, portalParams: PortalParams) {
    const element = document.getElementById(portalParams.portletElementId);
    const injector: Injector = this.ngModuleRef.injector;
    (<NgZone>injector.get(NgZone)).run(() => {
      const componentFactoryResolver = injector.get<ComponentFactoryResolver>(ComponentFactoryResolver as any);
      const applicationRef = injector.get(ApplicationRef);
      const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
      applicationRef.bootstrap(componentFactory, element);
    });
  }
}
