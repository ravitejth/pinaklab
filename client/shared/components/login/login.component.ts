import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../../../services/data.service";
import { ConfigService } from '../../../services/config.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'login',
  styleUrls: [ 'login.scss'],
  templateUrl: 'login.html',
})

export class LoginComponent {
  private alerts = [];
  user = {};
  showLoginForm;
  returnURL;
  constructor(
    private router : Router,
    private route :  ActivatedRoute,
    private dataService : DataService,
    private authService :  AuthService
  ){
    this.showLoginForm = true;
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || "/";
  }

  signin(user) {
    this.authService.login(user).subscribe((response : any)=> {
      response && response.response && response.response.error && this.alerts.push({
        type: "danger",
        msg: "Sorry. Please check email/password combination.",
        timeout: 2000
      });
      // "serviceWorker"in navigator && navigator.serviceWorker.register("sw.js").then(function() {
      //   return navigator.serviceWorker.ready
      // }).then(function(reg) {
      //   console.log("Service Worker is ready :^)", reg);
      //   reg.pushManager.subscribe({
      //     userVisibleOnly: !0
      //   }).then(function(sub) {
      //     console.log("endpoint:", sub);
      //     this.authenticationService.sendSubscription(sub).subscribe(function(response) {})
      //   }
      //     .bind(this))
      // }
      //   .bind(this)).catch(function(error) {
      //   console.log("Service Worker error :^(", error)
      // });
      this.router.navigate([this.returnURL]);
    }, function(error) {
      this.alerts.push({
        type: "danger",
        msg: "Sorry. Please check email/password combination.",
        timeout: 2000
      })
    }.bind(this));
  }
}
