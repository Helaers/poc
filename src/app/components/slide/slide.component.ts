import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Params } from '@angular/router';

import { SlidesService } from '../../services/slides.service';

@Component({
    selector: 'slide',
    template: `
        <div class="slide" *ngIf="slide">
            <div [innerHtml]="slide.html"></div>
        </div>
    `,
    styleUrls: ['app/components/slide/slide.component.css'],
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

            this.slidesService.currentSlide = this.slide['id']; // can't use this.slide.id ??? -- Property 'id' does not exist on type 'Object'
            //console.log('current slide in SLIDE:' ,this.slidesService.currentSlide)
        });
    }

}