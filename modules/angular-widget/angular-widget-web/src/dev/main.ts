import * as index from '../index';
import LiferayParams from '../types/LiferayParams';
import { environment } from './environments/environment';
import {enableProdMode} from '@angular/core';

const LIFERAY_PARAMS: LiferayParams = {
    configuration: {
        portletInstance: {
            drink: 'juice'
        },
        system: {}
    },
    contextPath: '',
    portletElementId: 'js-portlet-_com_axiell_arena_ui_angular_widget_web_portlet_AngularWidget_INSTANCE_UxALjUm6RDL3_',
    portletNamespace: '_com_axiell_arena_ui_angular_widget_web_portlet_AngularWidget_INSTANCE_UxALjUm6RDL3_'
};
declare const Liferay: any;


if (environment.production) {
    enableProdMode();
}

index.default(LIFERAY_PARAMS);
Liferay.ThemeDisplay.setLanguageId('sv_SE');
