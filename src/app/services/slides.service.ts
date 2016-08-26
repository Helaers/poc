import { Injectable } from '@angular/core';

import { Draggable } from '../directives/draggable'; // just to shut up TS

// const SLIDES = [
//   { id: 1, html:"<img class='slide__image' src='./app/images/slide1.png' />" },
//   { id: 2, html:"<img class='slide__image' src='./app/images/slide2.png' />" },
//   { id: 3, html:"<img class='slide__image' src='./app/images/slide3.png' />" },
//   { id: 4, html:"<img class='slide__image' src='./app/images/slide4.png' />" },
//   { id: 5, html:"<img class='slide__image' src='./app/images/slide5.png' />" },
//   { id: 6, html:"<img class='slide__image' src='./app/images/slide6.png' />" },
//   { id: 7, html:"<img class='slide__image' src='./app/images/slide7.png' />" }
// ];

const SLIDES = [
  { id: 1, html:["<img class='slide__image' src='./app/images/slide1.png' />"] },
  { id: 2, html:["<img class='slide__image' src='./app/images/slide2.png' />"] },
  { id: 3, html:["<img class='slide__image' src='./app/images/slide3.png' />"] },
  { id: 4, html:["<img class='slide__image' src='./app/images/slide4.png' />"] },
  { 
      id: 5, 
      html: [
          "<img class='slide__image' src='./app/images/slide5.png' />" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable one'>81 338</div>" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable two'>100 000</div>" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable three'>87 307</div>"+
            "<div [draggable] style='position:absolute' class='slide__label--draggable four'>7 030</div>" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable five'>72 166</div>", [Draggable]
            ]
    },
    { id: 6, html:["<img class='slide__image' src='./app/images/slide6.png' />"] },
    { id: 7, html:["<img class='slide__image' src='./app/images/slide7.png' />"] }
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