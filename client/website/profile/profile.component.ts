import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    styleUrls: [ 'profile.scss'],
    templateUrl: 'profile.pug',
})
export class ProfileComponent  {
    name = 'profile';
    arr = [0,1,2,3,4,5,6,7];
}
