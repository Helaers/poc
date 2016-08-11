import { Component } from '@angular/core';

@Component({
    selector: 'add-slide',
    template: `
    <h2>{{title}}</h2>
    <p>This is the add slide page</p>
    `
})

export class AddSlideComponent {
    title = 'Add slide';
}