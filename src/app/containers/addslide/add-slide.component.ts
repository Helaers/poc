import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { WheelComponent } from '../../components/wheel/wheel.component';

import { SlidesService } from '../../services/slides.service';

@Component({
    selector: 'add-slide',
    templateUrl: 'app/containers/addslide/add-slide.component.html',
    styleUrls: ['app/containers/addslide/add-slide.component.css'],
    directives: [ROUTER_DIRECTIVES, WheelComponent],
    providers: [SlidesService]
})

export class AddSlideComponent {

    private slides:Array<any> = [];

    constructor(
        private slidesService: SlidesService,
        private router: Router) { 
        }

    ngOnInit() {
        this.slides = this.slidesService.getAll();
    }

    addUserSlide() {
        let slide = { id: 8, html:["<img class='slide__image' src='./app/images/slide8.png' />"], thumb: './app/images/thumb8.png', visible: true, type: 'user' };
        this.slidesService.addSlide(slide);
        this.slides = this.slidesService.getAll();
    }
}