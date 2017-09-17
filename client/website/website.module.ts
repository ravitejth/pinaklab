import { NgModule }      from '@angular/core';

//COMPONENTS
import { WebsiteComponent }     from './website.component';
import { HomeHeaderComponent }  from './home/home-header/home-header.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { ServicesComponent }    from './services/services.component';
import { PortfolioComponent }   from './portfolio/portfolio.component';
import { ContactComponent }     from './contact/contact.component';


// ROUTING
import { WebsiteRoutingModule } from './website-routing.module';

// SHARED MODULE
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      WebsiteRoutingModule,
      SharedModule
    ],
    declarations: [
      WebsiteComponent,
      AboutComponent,
      HomeHeaderComponent,
      HomeComponent,
      ServicesComponent,
      PortfolioComponent,
      ContactComponent
    ]
})

export class WebsiteModule {}
