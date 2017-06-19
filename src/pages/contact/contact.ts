import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
idRestaurant : any = localStorage.idRestaurant;
nomRestaurant : any = localStorage.nomRestaurant;
categorieRestaurant : any = localStorage.categorieRestaurant;
phoneRestaurant : any = localStorage.phoneRestaurant;
emailRestaurant : any = localStorage.emailRestaurant;
site_webRestaurant : any = localStorage.site_webRestaurant;
latitudeRestaurant : any = localStorage.latitudeRestaurant;
longitudeRestaurant : any = localStorage.longitudeRestaurant;
imageRestaurant : any = localStorage.imageRestaurant;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
