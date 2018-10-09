/**The whole code is a component */
import { Component } from "@angular/core";

/** Below is the Decorator */
@Component({
  selector: 'pm-root',
  template:
  `<div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>`

})

/** Below is the class */
export class AppComponent{
  pageTitle: string = 'Acme Product Management'
  
}

