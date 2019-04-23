import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.less']
})
export class CarouselComponent {
    imageUrl = 'assets/images/carousel/';
    images = [
        this.imageUrl + 'hair1.png',
        this.imageUrl + 'hair2.png',
        this.imageUrl + 'hair3.png'
    ];
}