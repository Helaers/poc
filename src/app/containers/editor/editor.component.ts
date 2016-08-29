import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'editor',
    templateUrl: 'app/containers/editor/editor.component.html' ,
    styleUrls: ['app/containers/editor/editor.component.css'] ,
    directives: [ROUTER_DIRECTIVES]
})

export class EditorComponent {
    message = 'EDITOR here';
}