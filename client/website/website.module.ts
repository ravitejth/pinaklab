import { NgModule }       from '@angular/core';
import {CommonModule}     from '@angular/common';

//COMPONENTS
import { WebsiteComponent }     from './website.component';
import { HeaderComponent }      from './header/header.component'
import { FooterComponent }      from './footer/footer.component';
import { HomeHeaderComponent }  from './home/home-header/home-header.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { ProfileComponent}      from './profile/profile.component';
import { ActorComponent}        from './actor/actor.component';
import { ListComponent}         from './list/list.component';
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
      SharedModule,
      CommonModule
    ],
    declarations: [
      WebsiteComponent,
      AboutComponent,
      HeaderComponent,
      FooterComponent,
      HomeHeaderComponent,
      HomeComponent,
      ServicesComponent,
      PortfolioComponent,
      ContactComponent,
      ProfileComponent,
      ActorComponent,
      ListComponent
    ]
})

export class WebsiteModule {}
