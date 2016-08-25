import { Component, Output, EventEmitter } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { SlideComponent } from '../../components/slide/slide.component';
import { WheelComponent } from '../../components/wheel/wheel.component';
import { SlidesService } from '../../services/slides.service';

@Component({
    selector: 'viewer',
    templateUrl: 'app/containers/viewer/viewer.component.html',
    styleUrls: ['app/containers/viewer/viewer.component.css'],
    directives: [ROUTER_DIRECTIVES, SlideComponent, WheelComponent],
    providers: [SlidesService]
})

export class ViewerComponent {

    private currentSlide:number; // komt voorlopig van URL... deze id zou ik van de slide.component moeten halen -- hoe? /
    private totalSlides:number;

    constructor(
        private slidesService: SlidesService,
        private router: Router) { 

        }

    ngOnInit() {
        this.currentSlide = this._getSlideFromUrl();
        console.log(this.currentSlide);
        this.totalSlides = this._getTotalSlides();
    }

    ngAfterViewInit() {
        this.currentSlide = this._getSlideFromUrl();
    }

    getCurrentSlide(currentSlide:number) {
        this.currentSlide = currentSlide;
    }

    _getSlideFromUrl() {
        let url = this.router.url;
        let index = url.lastIndexOf('/');
        return +url.substr(index+1);
    }

    _getTotalSlides() {
        let slides = this.slidesService.getAll();
        return slides.length;
    }
}