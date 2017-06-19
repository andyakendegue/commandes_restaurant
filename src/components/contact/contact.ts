import { Component } from '@angular/core';

/**
 * Generated class for the ContactComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {

  text: string;
  idRestaurant : any = localStorage.idRestaurant;
  nomRestaurant : any = localStorage.nomRestaurant;
  categorieRestaurant : any = localStorage.categorieRestaurant;
  phoneRestaurant : any = localStorage.phoneRestaurant;
  emailRestaurant : any = localStorage.emailRestaurant;
  site_webRestaurant : any = localStorage.site_webRestaurant;
  latitudeRestaurant : any = localStorage.latitudeRestaurant;
  longitudeRestaurant : any = localStorage.longitudeRestaurant;
  imageRestaurant : any = localStorage.imageRestaurant;

  constructor() {
    console.log('Hello ContactComponent Component');
    this.text = 'Hello World';
  }

}
