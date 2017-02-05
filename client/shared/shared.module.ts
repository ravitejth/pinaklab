import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

//COMPONENTS
import { HeaderComponent } from './header/header.component'
import { FooterComponent }  from './footer/footer.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
