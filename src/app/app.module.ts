import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DisqusModule } from "ngx-disqus";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisqusModule.forRoot('disqus_shortname')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
