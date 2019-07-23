import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
}) 

export class GridComponent {

    @Input() grid: any;

    isOpened = false;
    openBttn = 'Открыть карту';
    
    onClick() {

        this.isOpened = !this.isOpened;
        event.preventDefault();
        if(this.isOpened) this.openBttn='Закрыть карту';
        else this.openBttn = 'Открыть карту';
    }
}