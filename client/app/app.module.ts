import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
