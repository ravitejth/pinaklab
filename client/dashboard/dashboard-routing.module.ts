import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#DashboardHomeModule'
      },
      {
        path: 'forms',
        loadChildren: './pages/forms/forms.module#FormsModule'
      },
      {
        path: 'tables',
        loadChildren: './pages/tables/tables.module#TablesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}
