import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { AuthService }  from '../../shared/services/auth.service';

@Component({
    selector: 'main-layout-header',
    templateUrl: './main-layout-header.template.html'
})
export class MainLayoutHeaderComponent {
    constructor(
      private authService: AuthService,
      private router : Router
    ) {}

    logout(){
        this.authService.logout();
        this.router.navigate(['login']);
        //this.router.navigate([this.returnURL]);
    }
}
