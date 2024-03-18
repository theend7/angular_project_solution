import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LibCommonModule } from 'lib-common';
import { Lib6Module } from 'lib6';
import { Lib7Module } from 'lib7';
import { Lib8Module } from 'lib8';
import { Lib9Module } from 'lib9';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibCommonModule,
    Lib6Module,
    Lib7Module,
    Lib8Module,
    Lib9Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
