import { NgModule }      from '@angular/core';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';

// SHARED MODULE
import { SharedModule } from '../shared/shared.module';

//COMPONENTS
import { DashboardComponent }    from './dashboard.component';
import { MainLayoutSidebarComponent} from './main-layout-sidebar/main-layout-sidebar.component';
import { MainLayoutHeaderComponent} from  './main-layout-header/main-layout-header.component';
import { MainLayoutFooterComponent} from  './main-layout-footer/main-layout-footer.component';
import { PageLayoutTopComponent} from  './page-layout-top/page-layout-top.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    MainLayoutSidebarComponent,
    MainLayoutHeaderComponent,
    MainLayoutFooterComponent,
    PageLayoutTopComponent
  ]
})

export class DashboardModule {}
