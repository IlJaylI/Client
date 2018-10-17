import { Component } from "@angular/core";

/** Decorator */
@Component({
    selector: 'calculatorExample.html',
    template:
   `<div>1st Value:<input [(ngModel)]="val1"></div>
    <div>1st Value:<input [(ngModel)]="val2"></div>
    {{Calculate()}}`
    
  
  })

/** Class */
export class Calculator{

    Calculate(val1,val2){
       return val1 * val2;
    }
    
  }