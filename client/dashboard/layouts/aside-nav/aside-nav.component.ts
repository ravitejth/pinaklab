import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {

    menus = [
      {
        "name": "Menu Item One",
        "url": "/dashboard/menu1",
        "items": [
          {
            "name": "Submenu Item One",
            "url": "/dashboard/menu1/submenu1",
          },
          {
            "name": "Submenu Item Two",
            "url": "/dashboard/menu1/submenu2",
          }
        ]
      },
      {
        "name": "Menu Item Two",
        "url": "/dashboard/menu1",
        "items": [
          {
            "name": "Submenu Item One",
            "url": "/dashboard/menu1/submenu1",
          },
          {
            "name": "Submenu Item Two",
            "url": "/dashboard/menu1/submenu2",
          }
        ]
      },
      {
        "name": "Menu Item Two",
        "url": "/dashboard/menu1",
        "items": [
          {
            "name": "Submenu Item One",
            "url": "/dashboard/menu2/submenu1",
          },
          {
            "name": "Submenu Item Two",
            "url": "/dashboard/menu2/submenu2",
          }
        ]
      }
    ];

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        mLayout.initAside();
    }

}
