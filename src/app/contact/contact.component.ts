import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.less']
})
export class ContactComponent {
    goToIG() {
        window.open(environment.socialUrls.instagram);
    }
    goToFB() {
        window.open(environment.socialUrls.facebook);
    }
}