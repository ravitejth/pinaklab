import { NgModule }      from '@angular/core';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layouts/layout.module';

//COMPONENTS
import { DashboardComponent }    from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent
  ]
})

export class DashboardModule {}
