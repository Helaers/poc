import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, ActivatedRoute, Params, Router } from '@angular/router';

import { SlideComponent } from '../components/slide.component';
import { SlidesService } from '../services/slides.service';

@Component({
    selector: 'slide-viewer',
    template: `
        <p>Slide viewer: {{message}}</p>
            <button (click)="prevSlide()">Prev</button>
            <button (click)="nextSlide()">Next</button>
            <br>
        <hr>
            <router-outlet></router-outlet>
        <hr>
        <button [routerLink]="['/home']">Home</button>
    `,
    directives: [ROUTER_DIRECTIVES, SlideComponent],
    providers: [SlidesService]
})

export class SlideViewerComponent {

    private currentSlide:number; // deze id zou ik van de slide.component moeten halen -- hoe?
    private totalSlides:number;

    constructor(
        private slidesService: SlidesService,
        private route: ActivatedRoute,
        private router: Router) { }

    message = 'SLIDER-VIEWER';


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

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.currentSlide = ++this.currentSlide;
            this.router.navigate(['/slide-viewer/slide', this.currentSlide]);
        } 
    }

    prevSlide() {
        if (this.currentSlide > 1) {
            this.currentSlide = --this.currentSlide;
            this.router.navigate(['/slide-viewer/slide', this.currentSlide]);
        }  
    }

}