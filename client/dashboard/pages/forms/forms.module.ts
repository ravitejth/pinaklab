import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": FormsComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ],
  declarations: [
    FormsComponent
  ],
  exports: [
    RouterModule
  ]
})

export class FormsModule {}
