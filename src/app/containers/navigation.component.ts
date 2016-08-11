import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navigation',
    template: `
        <nav>
            <button [routerLink]="['/editor']">Editor</button>
            <button [routerLink]="['/slide-viewer/slide/1']">Viewer</button>
        </nav>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent {
}