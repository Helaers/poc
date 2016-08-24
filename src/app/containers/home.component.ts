import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { WheelComponent } from '../components/wheel/wheel.component';
import { NavigationComponent } from './navigation.component';

@Component({
    selector: 'home',
    template: `
        <div><h1>{{title}}</h1></div>
        <navigation></navigation>
        <wheel></wheel>
    `,
    directives: [ROUTER_DIRECTIVES, NavigationComponent, WheelComponent]
})

export class HomeComponent {
    title = 'Homepage';
}