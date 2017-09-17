import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';



// Route Configuration
export const routes: Routes = [{
  path: '',
  component: WebsiteComponent,
  children: [
    {
      path: '',
      children: [{
        path: '',
        component: HomeComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      }]
    },
    {
      path: 'about',
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'Header',
        }, {
          path: '',
          component: AboutComponent
        }, {
          path: '',
          component: FooterComponent,
          outlet: 'Footer',
        }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule {}
