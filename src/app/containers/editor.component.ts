import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'editor',
    template: `
        <p>{{message}}</p>
        <button [routerLink]="['/editor/add-slide']">ADD SLIDE</button>
        <br>
        <br>
        <button [routerLink]="['/home']">Home</button>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class EditorComponent {
    message = 'EDITOR here';
}