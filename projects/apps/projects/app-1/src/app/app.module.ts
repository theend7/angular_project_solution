import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LibCommonModule } from 'lib-common';
import { Lib1Module } from 'lib1';
import { Lib2Module } from 'lib2';
import { Lib3Module } from 'lib3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibCommonModule,
    Lib1Module,
    Lib2Module,
    Lib3Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
