import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from '@arena-ui/core';
import {SocialShareModule} from '@arena-ui/social-share';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    CoreModule,
    SocialShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
