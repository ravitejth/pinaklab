import { NgModule }      from '@angular/core';

//COMPONENTS
import { HomeHeaderComponent }  from "./home/home-header/home-header.component";
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';

// ROUTING
import { CoreRoutingModule } from './core-routing.module';

// SHARED MODULE
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      CoreRoutingModule,
      SharedModule
    ],
    declarations: [
      AboutComponent,
      HomeHeaderComponent,
      HomeComponent
    ]
})

export class CoreModule {}
