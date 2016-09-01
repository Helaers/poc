import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: 'app/components/modal/modal.component.html',
    directives: [],
    providers: [],
    styleUrls: ['app/components/modal/modal.component.css'],

})

export class Modal {

    @Input() showModal:boolean;
    @Input() type:boolean;
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() confirmModal: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {    
    }

    close() {
        this.closeModal.emit(this.showModal);
    }

    add() {
        this.confirmModal.emit(this.type);
    }

    getModalState() {
        return this.showModal;
    }

}