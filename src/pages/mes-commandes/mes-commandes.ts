import { Component, ViewChild } from '@angular/core';
import { Events, Platform, Nav,  NavController,  MenuController,AlertController, LoadingController,  IonicPage, NavParams,  ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { WebService } from '../../providers/web-service/web-service';

@Component({
  selector: 'page-mes-commandes',
  templateUrl: 'mes-commandes.html'
})
export class MesCommandesPage {

  params: any;
  shop:string;
  commandes: any;
  loading: any;
  id:string;

constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public menu: MenuController,
  public events: Events,
  public webService: WebService,
  private http: Http,
  public loadingCtrl: LoadingController,
  private toastCtrl: ToastController,
  public alertCtrl: AlertController) {
    this.id = localStorage.getItem('id');
    console.log(localStorage.getItem('id'));

   menu.enable(true);

   this.showLoader();


   this.webService.commandes().then((result) => {
     this.loading.dismiss();
     //this.navCtrl.pop();
     this.commandes = result;



   }, (err) => {
     this.loading.dismiss();
     this.presentToast(err);
   });


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

showLoader() {
  this.loading = this.loadingCtrl.create({
    content: 'Chargement de la liste de vos commandes...'

  });

  this.loading.present();

}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom',
    dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

doRefresh(refresher) {
  this.webService.fournisseurs().then((result) => {

    this.commandes = result;
    refresher.complete();


  }, (err) => {
    this.presentToast(err);
    refresher.complete();
  });


}


}
