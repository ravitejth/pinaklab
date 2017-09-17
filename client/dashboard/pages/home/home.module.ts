import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": HomeComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardHomeModule {}
