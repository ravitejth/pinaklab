import { Component } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider} from 'angular4-social-login';

@Component({
    selector: 'home',
    styleUrls: [ 'home.scss'],
    templateUrl: 'home.pug',
})

export class HomeComponent {

    constructor(private auth: AuthService) {

    }

    ngOnInit() {

        this.auth.authState.subscribe((user) => {
          console.log(user); });
    }
      
    signInWithFacebook(): void { this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signInWithGoogle(): void { this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
    this.auth.signOut();
    }
      
}
