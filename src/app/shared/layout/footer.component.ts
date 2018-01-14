import { Component } from '@angular/core';

@Component({
    selector: 'layout-footer',
    templateUrl: './footerComponent.html'
})

export class FooterComponent {
    today: number = Date.now();
}