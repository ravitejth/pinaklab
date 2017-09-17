import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": TablesComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ], declarations: [
    TablesComponent
  ], exports: [
    RouterModule
  ]
})

export class TablesModule {}
