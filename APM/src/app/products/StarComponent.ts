import { Component, OnChanges, Input } from "@angular/core";



@Component({
    selector: 'pm-star',
    templateUrl: '../shared/star.component.html',
    styleUrls: ['../shared/star.component.css'],
})

export class StarComponent implements OnChanges{  
    @Input() rating:number;
    starwidth:number;

    ngOnChanges():void{
        this.starwidth = this.rating * 86/5;
    }
}