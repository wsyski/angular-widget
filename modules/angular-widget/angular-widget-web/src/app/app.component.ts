import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
	templateUrl: '/o/angular-widget/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	labels: any;

	constructor() {
		this.labels = {        
			
			configuration: Liferay.Language.get('configuration'),
			
			portletNamespace: Liferay.Language.get('portlet-namespace'),
        	contextPath: Liferay.Language.get('context-path'),
			portletElementId: Liferay.Language.get('portlet-element-id'),
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
}
