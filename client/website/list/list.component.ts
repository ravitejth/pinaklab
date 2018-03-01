import { Component } from '@angular/core';

@Component({
    selector: 'list',
    styleUrls: [ 'list.scss'],
    templateUrl: 'list.pug',
})
export class ListComponent  {
    name = 'profile';
    arr = [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5];
}
