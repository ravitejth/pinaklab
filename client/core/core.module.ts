import { NgModule }      from '@angular/core';


//COMPONENTS
import { HomeComponent }    from './home/home.component'
import { AboutComponent }   from './about/about.component';

// ROUTING
import { CoreRoutingModule } from './core-routing.module';

// SHARED MODULE
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      CoreRoutingModule,
      SharedModule
    ],
    exports: [
      AboutComponent,
      HomeComponent
    ],
    declarations: [
      AboutComponent,
      HomeComponent
    ],
})
export class CoreModule { }
