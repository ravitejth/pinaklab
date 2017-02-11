import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

//COMPONENTS
import { HeaderComponent }    from './header/header.component'
import { FooterComponent }    from './footer/footer.component';
import { NotFoundComponent }  from './not-found/not-found.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
})
export class SharedModule { }
