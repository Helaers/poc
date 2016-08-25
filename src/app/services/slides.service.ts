import { Injectable } from '@angular/core';

const SLIDES = [
  { id: 1, html:"<img class='slide__image' src='./app/images/slide1.png' />" },
  { id: 2, html:"<img class='slide__image' src='./app/images/slide2.png' />" },
  { id: 3, html:"<img class='slide__image' src='./app/images/slide3.png' />" },
  { id: 4, html:"<img class='slide__image' src='./app/images/slide4.png' />" },
  { id: 5 }
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