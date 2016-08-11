import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'editor',
    template: `
        <p>{{message}}</p>
        <a [routerLink]="['/editor/add-slide']">add slide</a>
         <a [routerLink]="['/home']">Home</a>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class EditorComponent {
    message = 'EDITOR here';
}