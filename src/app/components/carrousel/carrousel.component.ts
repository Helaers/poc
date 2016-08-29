import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'carrousel',
    templateUrl: 'app/components/carrousel/carrousel.component.html',
    styleUrls: ['app/components/carrousel/carrousel.component.css'],
    directives: [NgStyle]
})

export class CarrouselComponent {

    @Input() showCarrousel:boolean;
    @Input() slides:Array<any>;

    @Output() closeCarrousel: EventEmitter<boolean> = new EventEmitter<boolean>();

    private index:number = 0;
    private widthThumb:any = -230;
    private totalSlides:any = 7;

    private thumbsToShow:any = 3;

    carrouselStyle: any = {};

    ngOnInit() {

        // totalSlides = slides.length; // zou van service moeten komen
        this.carrouselStyle.width = (this.totalSlides * this.widthThumb * -1 + 24)+'px';
        console.log('carrouselStyle', this.carrouselStyle);

        if (this.index >= this.totalSlides - this.thumbsToShow) {
            this.index = this.totalSlides - this.thumbsToShow;
            if (this.index < 0) {
                this.index = 0;
            }
            let value = this.index * this.widthThumb;
            this.carrouselStyle.marginLeft = value + 'px';
        }

        console.log('end: ', this.carrouselStyle);
    }

    prev() {
        console.log('clicked prev, index: ', this.index);

        if (this.index > 0) {
            this.index--;
            let value = this.index * this.widthThumb;
            this.carrouselStyle.marginLeft = value+'px';
            //checkButtons();
        }
    }

    next() {
        console.log('clicked next, index: ', this.index);
        if (this.index < this.totalSlides - this.thumbsToShow) {
            this.index++;
            let value = this.index * this.widthThumb;
            this.carrouselStyle.marginLeft = value + 'px';
             //checkButtons();
        }
    }

    close() {
        if (this.showCarrousel) {
            this.showCarrousel = false;
            this.closeCarrousel.emit(this.showCarrousel);
        }
    }
}