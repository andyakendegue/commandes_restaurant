import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-restaurant-africain',
  templateUrl: 'restaurant-africain.html'
})
export class RestaurantAfricainPage {

constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public menu: MenuController) {

   menu.enable(true);

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
