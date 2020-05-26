import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    AppComponent,
    View2Component,
    View1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
