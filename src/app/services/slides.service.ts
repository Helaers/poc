import { Injectable } from '@angular/core';

const SLIDES = [
  { id: 1, title: 'Chapter 1', html:'<div>this is some html for 1</div>' },
  { id: 2, title: 'Chapter 2', html:'<div>this is some html for 2</div>' },
  { id: 3, title: 'Chapter 3', html:'<div>this is some html for 3</div>' },
  { id: 4, title: 'Chapter 4' },
  { id: 5, title: 'Chapter 5' }
];

@Injectable()
export class SlidesService {

    public currentSlide:number;

    getAll() {
        return SLIDES;
    }

    getSlide(id:number) {
        return SLIDES.find(item => item.id === id);
    }
}