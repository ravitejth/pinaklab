import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "aside-nav.pug",
    encapsulation: ViewEncapsulation.None,
})

/*
interface Menu {
  name: string,
  url?: string,
  items?: [MenuItem]
}

interface MenuItem {
  name: string,
  url: string
}
*/

export class AsideNavComponent implements OnInit, AfterViewInit {

    menus = [
      {
        "name": "Components",
        "url": "",
        "items": [
          {
            "name": "Forms",
            "url": "/dashboard/forms",
          },
          {
            "name": "Tables",
            "url": "/dashboard/tables",
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
