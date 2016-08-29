import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { WheelComponent } from '../../components/wheel/wheel.component';

import { SlidesService } from '../../services/slides.service';

@Component({
    selector: 'editor',
    templateUrl: 'app/containers/editor/editor.component.html' ,
    styleUrls: ['app/containers/editor/editor.component.css'] ,
    directives: [ROUTER_DIRECTIVES, WheelComponent],
    providers: [SlidesService]
})

export class EditorComponent {

    private totalSlides:number;
    private slides:Array<any> = [];

    constructor(
        private slidesService: SlidesService,
        private router: Router) { 

        }

    ngOnInit() {
        this.slides = this.slidesService.getAll();
        this.totalSlides = this.slides.length;
    }

    toggleVisibility(id:number) {
        this.slidesService.toggleVisibility(id);
        let slides = this.slidesService.getAll();
        console.log('slides in editor: ', slides);
    }
}