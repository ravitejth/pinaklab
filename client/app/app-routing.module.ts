import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//IMPORT COMPONENTS
import { NotFoundComponent } from '../shared/not-found/not-found.component';

// IMPORT ROUTES
export const routes: Routes = [
  {
      path: '',
      loadChildren: '../core/core.module#CoreModule'
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
