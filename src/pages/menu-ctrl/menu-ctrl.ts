import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu-ctrl',
  templateUrl: 'menu-ctrl.html',
})
export class MenuCtrlPage {

  user = {nom:"", prenom : "", email: "", phone: "", sexe:"", avatar:""};
  userData: any;
  ionViewDidLoad(){

    this.user.nom = localStorage.getItem("nom");
    this.user.prenom = localStorage.getItem("prenom");
    this.user.phone = localStorage.getItem("phone");
    this.user.email = localStorage.getItem("email");
    this.user.sexe = localStorage.getItem("sexe");
  };
  ionViewWillEnter(){

  };
  ionViewDidLeave() {};

  ionViewWillUnload() {};
constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public menu: MenuController) {



   menu.enable(true);

 }
 rootPage:any = HomePage;
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
