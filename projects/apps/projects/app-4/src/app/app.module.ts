import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LibCommonModule } from 'lib-common';
import { Lib10Module } from 'lib10'
import { Lib11Module } from 'lib11';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibCommonModule,
    Lib10Module,
    Lib11Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
