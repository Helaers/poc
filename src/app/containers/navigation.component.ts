import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navigation',
    template: `
        <nav>
            <a [routerLink]="['/editor']">Editor</a>
            <a [routerLink]="['/slide-viewer/slide/1']">Viewer</a>
        </nav>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent {
}