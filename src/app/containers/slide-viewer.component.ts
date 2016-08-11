import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, ActivatedRoute, Params, Router } from '@angular/router';

import { SlideComponent } from '../components/slide.component';
import { SlidesService } from '../services/slides.service';

@Component({
    selector: 'slide-viewer',
    template: `
        <p>Slide viewer: {{message}}</p>
            <button (click)="prevSlide(currentSlide)">Prev</button>
            <button (click)="nextSlide(currentSlide)">Next</button>
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

    private currentSlide:number = 3; // deze id zou ik van de slide.component moeten halen -- hoe?

    constructor(
        private slidesService: SlidesService,
        private route: ActivatedRoute,
        private router: Router) { }

    message = 'SLIDER-VIEWER';


    ngAfterViewChecked() {
        console.log('current slide in ngAfterView ', this.slidesService.currentSlide);
    }

    nextSlide(currentSlide:number) {
        currentSlide = ++currentSlide;
        this.router.navigate(['/slide-viewer/slide', currentSlide]);
    }

    prevSlide(currentSlide:number) {
        currentSlide = --currentSlide;
        this.router.navigate(['/slide-viewer/slide', currentSlide]);
    }

}