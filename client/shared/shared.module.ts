import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

//COMPONENTS
import { HeaderComponent }    from './components/header/header.component'
import { FooterComponent }    from './components/footer/footer.component';
import { NotFoundComponent }  from './components/not-found/not-found.component';
import { LoginComponent}      from './components/login/login.component';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent
  ],
})
export class SharedModule { }
