import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavigationComponent } from './navigation.component';

@Component({
    selector: 'home',
    template: `
        <div><h1>{{title}}</h1></div>
        <navigation></navigation>
    `,
    directives: [ROUTER_DIRECTIVES, NavigationComponent]
})

export class HomeComponent {
    title = 'This is home';
}