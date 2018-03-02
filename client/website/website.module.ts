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

// Imports
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('158146734840456')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('410008417850-rigp3nriv01hf7r5c4t7qc7kfgu09jf0.apps.googleusercontent.com')
  }
  ]);

@NgModule({
    imports: [
      WebsiteRoutingModule,
      SharedModule,
      CommonModule,
      SocialLoginModule.initialize(config)
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
