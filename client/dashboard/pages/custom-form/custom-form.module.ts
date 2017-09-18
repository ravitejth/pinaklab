import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { CustomFormComponent } from './custom-form.component';
import { WizardWidget } from  './widget/wizard.widget';

import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": CustomFormComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SchemaFormModule,
    LayoutModule
  ],
  declarations: [
    CustomFormComponent,
    WizardWidget
  ],
  entryComponents: [ WizardWidget ],
  exports: [
    RouterModule
  ], providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}]
})

export class CustomFormModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register('wizard', WizardWidget);
  }
}
