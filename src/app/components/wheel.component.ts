import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'wheel',
    template: `
    <div>
        <h2>This is the wheel</h2>
        <button (click)="prevSlide()">Prev</button>
        <button (click)="nextSlide()">Next</button>
    </div>
    `,

})

export class WheelComponent {

    @Input() current:number;
    @Input() total:number;

    constructor(
        private router: Router
    ){}

    nextSlide() {
        if (this.current < this.total) {
            this.current = ++this.current;
            this.router.navigate(['/viewer/slide', this.current]);
        } 
    }

    prevSlide() {
        if (this.current > 1) {
            this.current = --this.current;
            this.router.navigate(['/viewer/slide', this.current]);
        }  
    }


}