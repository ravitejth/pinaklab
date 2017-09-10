import { NgModule }      from '@angular/core';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layouts/layout.module';

//COMPONENTS
import { DashboardComponent }    from './dashboard.component';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [
    DashboardComponent,
    DashboardMainComponent
  ]
})

export class DashboardModule {}
