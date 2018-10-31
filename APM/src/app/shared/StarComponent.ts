import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges{  
    @Input() rating:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    //@Output() notify:EventEmitter<string> = new EventEmitter<string>();
    starWidth:number;

    ngOnChanges():void{
        this.starWidth = this.rating * 86/5;
    }

    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
        //console.log(`The rating ${this.rating} was clicked`);
        //use `` these insted!!!!! 
    }
}