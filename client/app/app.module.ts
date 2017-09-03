import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';

import { SharedModule } from '../shared/shared.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// SERVICES
import { HttpService }    from '../shared/services/http.service';
import { DataService }    from '../shared/services/data.service';
import { ConfigService }  from '../shared/services/config.service';
import { AuthService }    from "../shared/services/auth.service";

import { NgSpinningPreloader } from 'ng2-spinning-preloader';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    HttpService,
    DataService,
    ConfigService,
    AuthService,
    NgSpinningPreloader
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
