import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { EsriLoaderModule } from 'angular-esri-loader';

// hammerjs is a required import for some of the features in Angular Material
import 'hammerjs';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    EsriLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
