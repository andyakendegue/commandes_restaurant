import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LocalisationPage } from '../localisation/localisation';
import { MenuPage } from '../menu/menu';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the RestaurantDetailPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-restaurant-detail',
  templateUrl: 'restaurant-detail.html'
})
@IonicPage()
export class RestaurantDetailPage {

  contactRoot : any = ContactPage;
  menuRoot : any = MenuPage;
  localisationRoot : any = LocalisationPage;

  idRestaurant : any = localStorage.idRestaurant;
  nomRestaurant : any = localStorage.nomRestaurant;
  categorieRestaurant : any = localStorage.categorieRestaurant;
  phoneRestaurant : any = localStorage.phoneRestaurant;
  emailRestaurant : any = localStorage.emailRestaurant;
  site_webRestaurant : any = localStorage.site_webRestaurant;
  latitudeRestaurant : any = localStorage.latitudeRestaurant;
  longitudeRestaurant : any = localStorage.longitudeRestaurant;
  imageRestaurant : any = localStorage.imageRestaurant;


  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController) {

     menu.enable(true);
     console.log(localStorage.image);

   }
    openMenu(evt) {
      if(evt === "main"){
         this.menu.enable(true, 'menu1');
         this.menu.enable(false, 'menu2');
      }else{
         this.menu.enable(true, 'menu2');
         this.menu.enable(false, 'menu1');
      }
      this.menu.toggle();
  }


}
