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
        "url": "#",
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
        "name": "Custom",
        "url": "#",
        "items": [
          {
            "name": "Schema Form",
            "url": "/dashboard/schema-form",
          }
        ]
      },
      {
        "name": "User",
        "url": "#",
        "items": [
          {
            "name": "Profile",
            "url": "/dashboard/profile",
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
