import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, ActivatedRoute, Params, Router } from '@angular/router';

import { SlideComponent } from '../components/slide.component';
import { SlidesService } from '../services/slides.service';

@Component({
    selector: 'slide-viewer',
    template: `
        <p>Slide viewer: {{message}}</p>

        <hr>
            <button (click)="prevSlide(currentSlide)">Prev</button>
            <button (click)="nextSlide(currentSlide)">Next</button>
            <br>
            <router-outlet></router-outlet>
        <hr>

        <a [routerLink]="['/home']">Home</a>
    `,
    directives: [ROUTER_DIRECTIVES, SlideComponent],
    providers: [SlidesService]
})

export class SlideViewerComponent {

    private currentSlide:number = 3;

    constructor(
        private slidesService: SlidesService,
        private route: ActivatedRoute,
        private router: Router) { }

    message = 'Slides titles';


    ngAfterContentInit() {
        console.log('current slid in afterview inti', this.slidesService.currentSlide);
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