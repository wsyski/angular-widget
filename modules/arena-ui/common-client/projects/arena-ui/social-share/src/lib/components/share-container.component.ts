import {Component, Input, OnInit} from '@angular/core';
import {Properties} from '../models/properties';

@Component({
  selector: 'arena-ui-social-share-container',
  template: `
    <div>
       <arena-ui-social-share-button *ngFor="let platform of platforms" [platformName]="platform" [properties]="properties"></arena-ui-social-share-button>
    </div>
  `
})
export class ShareContainerComponent implements OnInit {
  // Primary platforms that appear
  @Input() platforms = ['twitter', 'facebook', 'googlePlus', 'reddit', 'pinterest', 'linkedin'];

  // This should be set up directly in the meta tags as this is good practice
  // Use this input only if you have multiple content to share per url.
  // So in case you need this the input should be like the following object (you can omitt some fields)
  // {title:'my title', description:'my desc',img:' an image', via:'Ced_VDB', hashtags:'someHashTag'}
  @Input() properties: Properties = {};

  ngOnInit() {
    this.fetchProperties();
  }

  fetchProperties() {
    this.properties.url = this.properties.url || this.getMetaContent('og:url') || window.location.href.toString();
    this.properties.title = this.properties.title || this.getMetaContent('og:title') || document.title;
    this.properties.description = this.properties.description || this.getMetaContent('og:description');
    this.properties.image = this.properties.image || this.getMetaContent('og:image');
    this.properties.via = this.properties.via || this.getMetaContent('n2s:via');
    this.properties.hashtags = this.properties.hashtags || this.getMetaContent('n2s:hashtags');
  }

  getMetaContent(property: string) {
    const elem = document.querySelector(`meta[property='${property}']`);
    if (elem) {
      return elem.getAttribute('content');
    }
    return '';
  }
}
