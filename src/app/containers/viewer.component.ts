import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { SlideComponent } from '../components/slide.component';
import { WheelComponent } from '../components/wheel.component';
import { SlidesService } from '../services/slides.service';

@Component({
    selector: 'viewer',
    template: `
        <p>Slide viewer:</p>
            <br>
        <hr>
            <router-outlet></router-outlet>
        <hr>
        
        <br>
        <wheel [current]="currentSlide" [total]="totalSlides"></wheel>
        <br>

        <button [routerLink]="['/home']">Home</button>
    `,
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
        this.totalSlides = this._getTotalSlides();
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