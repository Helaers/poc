import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { WheelComponent } from '../../components/wheel/wheel.component';
import { SlidesService } from '../../services/slides.service';
import { Modal} from '../../components/modal/modal.component'

@Component({
    selector: 'add-slide',
    templateUrl: 'app/containers/addslide/add-slide.component.html',
    styleUrls: ['app/containers/addslide/add-slide.component.css'],
    directives: [ROUTER_DIRECTIVES, WheelComponent, Modal],
    providers: [SlidesService]
})

export class AddSlideComponent {

    private slides:Array<any> = [];
    private type:string = '';

    private textPreview:boolean = false;
    private textSlide:boolean = false;
    private showModal:boolean = false;

    constructor(
        private slidesService: SlidesService,
        private router: Router) { 
        }

    ngOnInit() {
        this.slides = this.slidesService.getAll();
    }

    showTextPreview() {
        if (!this.textSlide) {
            this.textPreview = true;
        }
    }
    showSlideText() {
        this.textPreview = false;
        this.textSlide = true;
    }

    clear() {
        this.textPreview = false;
        this.textSlide = false;
    }

    sendToOverview() {
        let id = this.getLastId();
        this.addUserSlide(id, this.type);
        this.router.navigate(['/editor']);
    }

    private getLastId() {
        let slides = this.slidesService.getAll();
        return slides.length - 1;
    }

    private addUserSlide(index, type) {
        let slide = { 
            id: index, 
            html:["<img class='slide__image' src='./app/images/slide1.png' />"], 
            thumb: './app/images/thumb1.png', 
            visible: true, 
            type: 'user' 
        };

        switch(type) {
            case 'text':
                slide.html = ["<img class='slide__image' src='./app/images/slide9.png' />"];
                slide.thumb = './app/images/thumb9.png';
                break;
            case 'video':
                slide.html = ["<img class='slide__image' src='./app/images/slide8.png' />"];
                slide.thumb = './app/images/thumb8.png';
                break;
            case 'image':
                slide.html = ["<img class='slide__image' src='./app/images/slide10.png' />"];
                slide.thumb = './app/images/thumb10.png';
            break;
            case 'audio':
                slide.html = ["<img class='slide__image' src='./app/images/slide11.png' />"];
                slide.thumb = './app/images/thumb11.png';
            break;
            case 'link':
                slide.html = ["<img class='slide__image' src='./app/images/slide12.png' />"];
                slide.thumb = './app/images/thumb12.png';
            break;
            case 'bingel':
                slide.html = ["<img class='slide__image' src='./app/images/slide13.png' />"];
                slide.thumb = './app/images/thumb13.png';
            break;
            default:
                console.log('something went wrong in adding slide');
        }

        this.slidesService.addSlide(slide);
    }

    openModal(){
        if(this.showModal === false) {
            this.showModal = true;
        }
    }

    closeModal(modalState){
        console.log('fase')
        if(this.showModal === true){
            this.showModal = false
        } 
    }
}