import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { WheelComponent } from '../../components/wheel/wheel.component';
import { NavigationComponent } from '../navigation.component';

@Component({
    selector: 'home',
    templateUrl: 'app/containers/home/home.component.html',
    styleUrls: ['app/containers/home/home.component.css'],
    directives: [ROUTER_DIRECTIVES, NavigationComponent, WheelComponent]
})

export class HomeComponent {
    title = 'Homepage';
}