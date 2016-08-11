import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Params } from '@angular/router';

import { SlidesService } from '../services/slides.service';

@Component({
    selector: 'slide',
    template: `
        <div *ngIf="slide">
            <h3><span>#{{slide.id}}</span> {{slide.title}}</h3>
            <p>this is a some body text for the slide</p>
        </div>
    `,
    providers: [SlidesService]
})

export class SlideComponent {

    private slide: Object = { 'id' : 0, 'title': 'Slide title' };

    constructor(
        private slidesService: SlidesService, 
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.slide = this.slidesService.getSlide(id);

            this.slidesService.currentSlide = this.slide['id'];
            console.log('current slide in SLIDE:' ,this.slidesService.currentSlide)
        });
    }

}