import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ShareContainerComponent} from './components/share-container.component';
import {ShareButtonComponent} from './components/share-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ShareContainerComponent,
    ShareButtonComponent
  ],
  providers: [
  ],
  exports: [
    ShareContainerComponent
  ]
})
export class SocialShareModule {
}
