import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { SchemaFormComponent } from './schema-form.component';

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": SchemaFormComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ],
  declarations: [
    SchemaFormComponent
  ],
  exports: [
    RouterModule
  ]
})

export class SchemaFormModule {}
