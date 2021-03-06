import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
/**
* Material Modules
*/
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
