import { Injectable } from '@angular/core';

const SLIDES = [
  { id: 1, title: 'Chapter 1' },
  { id: 2, title: 'Chapter 2' },
  { id: 3, title: 'Chapter 3' },
  { id: 4, title: 'Chapter 4' },
  { id: 5, title: 'Chapter 5' }
];

@Injectable()
export class SlidesService {

    public currentSlide:number;

    getAll() {
        console.log('get slides:', SLIDES);
        return SLIDES;
    }

    getSlide(id:number) {
        return SLIDES.find(item => item.id === id);
    }
}