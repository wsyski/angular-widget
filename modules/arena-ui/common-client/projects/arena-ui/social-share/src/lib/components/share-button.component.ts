import {Component, Input, OnInit} from '@angular/core';
import {Platform} from '../models/platform';
import {SHARE_PLATFORMS} from '../models/platforms';
import {Properties} from '../models/properties';

const WINDOW_NAME = 'wndSocialShare';
const WINDOW_WIDTH = 1070;
const WINDOW_HEIGHT = 600;

@Component({
  selector: 'arena-ui-social-share-button',
  template: `
    <span i18n="@@lnkShare.title" hidden #lnkShareTitle>Share {platform.name, select, email {via email} facebook {on Facebook} twitter {on Twitter}}</span>
    <a href="{{url}}" (click)="click($event)" [title]="lnkShareTitle.textContent">
      <span class="icon-stack">
         <i class="icon-circle icon-2x icon-circle-bg"></i>
         <i [class]="platform.styleClass"></i>
      </span>
    </a>
  `
})
export class ShareButtonComponent implements OnInit {
  @Input() platformName: string;
  platform: Platform;
  @Input() properties: Properties;
  url: string;

  constructor() {
  }

  ngOnInit() {
    this.platform = SHARE_PLATFORMS[this.platformName];
    this.constructUrl();
  }

  click(event: Event) {
    if (this.platform.isNewWindow) {
      window.open(this.url, WINDOW_NAME, `width=${WINDOW_WIDTH}, height=${WINDOW_HEIGHT}`);
      event.preventDefault();
    }
  }

  constructUrl() {
    this.url = this.platform.url + encodeURIComponent(this.properties.url);
    if (this.platform.properties) {
      for (const key in this.platform.properties) {
        if (this.platform.properties.hasOwnProperty(key)) {
          // if the property has been found.
          const val = this.properties[this.platform.properties[key]];
          if (val) {
            this.url += '&' + key + '=' + encodeURIComponent(val);
          }
        }
      }
    }
  }

}
