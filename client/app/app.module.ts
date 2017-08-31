import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { SharedModule } from '../shared/shared.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// SERVICES
import { HttpService } from '../shared/services/http.service';
import { DataService } from '../shared/services/data.service';
import  { ConfigService } from '../shared/services/config.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    HttpService,
    HttpService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
