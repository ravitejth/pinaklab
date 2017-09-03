import { NgModule }      from '@angular/core';

//COMPONENTS
import { DashboardComponent }    from './dashboard.component';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';

// SHARED MODULE
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      DashboardRoutingModule,
      SharedModule
    ],
    declarations: [
      DashboardComponent
    ]
})
export class CoreModule { }
