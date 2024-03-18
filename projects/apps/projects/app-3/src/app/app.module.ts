import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LibCommonModule } from 'lib-common';
import { Lib6Module } from 'lib6';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibCommonModule,
    Lib6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }