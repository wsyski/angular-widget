import {Component} from '@angular/core';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
    template: `
      <div>
        <div>
          <span class="tag">{{labels.portletNamespace}}:</span>
          <span class="value">{{params.portletNamespace}}</span>
        </div>
        <div>
          <span class="tag">{{labels.contextPath}}:</span>
          <span class="value">{{params.contextPath}}</span>
        </div>
        <div>
          <span class="tag">{{labels.portletElementId}}:</span>
          <span class="value">{{params.portletElementId}}</span>
        </div>

        <div>
          <span class="tag">{{labels.configuration}}:</span>
          <span class="value pre">{{configurationJSON}}</span>
        </div>

      </div>
    `
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
        };
    }

    get configurationJSON() {
        return JSON.stringify(this.params.configuration, null, 2);
    }
}
