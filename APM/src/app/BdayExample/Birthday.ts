import { Component } from "@angular/core";

/** Decorator */
@Component({
    selector: 'birthday-example',
    template:'./birthdayExample.html'
  
  })

/** Class */
export class Birthday{
   
    Birthday = new Date(1990,3,4);
    toggle:boolean = false;

    toggleFormat()
    {
        this.toggle = !this.toggle;
    }

    getFromat()
    {
        return this.toggle ? 'shortdate':'fulldate'
    }
  }