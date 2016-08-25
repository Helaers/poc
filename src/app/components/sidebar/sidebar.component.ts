import { Component, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'sidebar',
    templateUrl: 'app/components/sidebar/sidebar.component.html',
    styleUrls: ['app/components/sidebar/sidebar.component.css'],
    directives: [ROUTER_DIRECTIVES],
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})

export class SidebarComponent {

    constructor(
        private _eref: ElementRef
    ) {}

    showLeftSidebar: Boolean = false;
    showRightSidebar: Boolean = false;

    toggleLeftSidebar() {
        this.showLeftSidebar = !this.showLeftSidebar;
        if (this.showRightSidebar) {
            this.showRightSidebar = false;
        }
    }

    toggleRightSidebar() {
        this.showRightSidebar = !this.showRightSidebar;
        if (this.showLeftSidebar) {
            this.showLeftSidebar = false;
        }
    }

    onDocumentClick(event) {
         // cfr host @Component
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showLeftSidebar = false;
            this.showRightSidebar = false;
        } 
    }
}