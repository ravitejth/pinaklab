import { NgModule }      from '@angular/core';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layouts/layout.module';

//COMPONENTS
import { DashboardComponent }    from './dashboard.component';
import { PagesComponent }    from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    PagesComponent,
    FormsComponent
  ]
})

export class DashboardModule {}
