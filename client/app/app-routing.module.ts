import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

// COMPONENTS
import { LoginComponent}      from "../shared/components/login/login.component";
import { NotFoundComponent }  from '../shared/components/not-found/not-found.component';

// IMPORT ROUTES
export const routes: Routes = [
  {
    path: '',
    loadChildren: './../core/core.module#CoreModule'
  },
  {
    path: 'dashboard',
    loadChildren: './../dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
   path: '404',
   component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
