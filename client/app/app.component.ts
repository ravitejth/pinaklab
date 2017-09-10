import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { ScriptLoaderService } from '../services/script-loader.service';

@Component({
  selector: 'app',
  styleUrls: [ 'app.scss'],
  templateUrl: 'app.pug',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  constructor(
    private router: Router,
    private ngSpinningPreloader: NgSpinningPreloader,
    private _script: ScriptLoaderService
  ){}

  ngOnInit(){
    // Loading Scripts dynamically
    this._script.load('body', 'js/vendors.bundle.js', 'js/scripts.bundle.js')
      .then(result => {
        console.log(result);
      });

    this.router.events.subscribe((event) => {
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
      this.ngSpinningPreloader.stop();
    });
  }


}
