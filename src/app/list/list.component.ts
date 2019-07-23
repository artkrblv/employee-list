import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
}) 

export class ListComponent {

    @Input() list: any;

    isOpened = false;
    
    onClick() {

        this.isOpened = !this.isOpened;
    }
}