import { Component } from '@angular/core';

@Component({
    selector: 'actor',
    styleUrls: [ 'actor.scss'],
    templateUrl: 'actor.pug',
})
export class ActorComponent  {
    name = 'profile';
    arr = [0,1,2,3,4,5,6,7];
}
