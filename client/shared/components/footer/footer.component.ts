import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    template: `<p>this is {{name}}</p>`,
})
export class FooterComponent  {
    name = 'footer';
}