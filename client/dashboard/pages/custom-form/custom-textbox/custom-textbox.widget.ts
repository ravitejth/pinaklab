import { Component } from '@angular/core';
import { StringWidget } from 'angular2-schema-form';


@Component({
  selector: 'custom-textbox-widget',
  templateUrl: 'custom-textbox.html'
})


export class CustomTextBoxWidget extends StringWidget {}
