import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';

@Component({
  selector: 'app',
  styleUrls: [ 'app.scss'],
  templateUrl: 'app.pug',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  constructor(
    private router: Router,
    private ngSpinningPreloader: NgSpinningPreloader
  ){}

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
      this.ngSpinningPreloader.stop();
    });
  }
}
