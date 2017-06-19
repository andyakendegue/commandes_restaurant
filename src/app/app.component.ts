import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MesInfosPage } from '../pages/mes-infos/mes-infos';
import { MesCommandesPage } from '../pages/mes-commandes/mes-commandes';
import { FAQPage } from '../pages/f-aq/f-aq';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ParametresPage } from '../pages/parametres/parametres';
import { ConnexionPage } from '../pages/connexion/connexion';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { RestaurantDetailPage } from '../pages/restaurant-detail/restaurant-detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  user = {nom:"", prenom : "", email: "", phone: "", sexe:"", avatar:""};
  userData = {nom:"", prenom : "", email: "", phone: "", sexe:"", avatar:""};


  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = ConnexionPage;

 goToMesInfos(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MesInfosPage);
  } goToMesCommandes(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MesCommandesPage);
  } goToFAQ(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(FAQPage);
  } goToContact(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ContactUsPage);
  } goToParametres(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ParametresPage);
  } goToShop(shop) {
    this.events.publish('shop:created', shop);
    console.log(shop);
    sessionStorage.setItem('shop', shop);
    this.navCtrl.setRoot(RestaurantPage);
  } goToRestaurantDetail(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(RestaurantDetailPage);
  }

  showSubmenu1: boolean = false;
  showSubmenu2: boolean = false;
  showSubmenu3: boolean = false;
  showSubmenu4: boolean = false;

  menuItemHandler1(): void {
    this.showSubmenu1 = !this.showSubmenu1;
  }
  menuItemHandler2(): void {
    this.showSubmenu2 = !this.showSubmenu2;
  }
  menuItemHandler3(): void {
    this.showSubmenu3 = !this.showSubmenu3;
  }
  menuItemHandler4(): void {
    this.showSubmenu4 = !this.showSubmenu4;
  }





  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    events.subscribe('user:created', (userData) => {
   // user and time are the same arguments passed in `events.publish(user, time)`
   console.log('Welcome', userData);
   this.user.nom = userData.nom;
   this.user.prenom = userData.prenom;
   this.user.phone = userData.phone;
   this.user.email = userData.email;
   this.user.sexe = userData.sexe;
 });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }




  ionViewDidLoad(){



  };
  ionViewWillEnter(){



  };
  ionViewDidLeave() {};

  ionViewWillUnload() {};


}
