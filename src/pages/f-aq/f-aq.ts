import { Component, ViewChild } from '@angular/core';
import { Events, Platform, Nav, NavController, MenuController, AlertController, LoadingController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { WebService } from '../../providers/web-service/web-service';

@Component({
  selector: 'page-f-aq',
  templateUrl: 'f-aq.html'
})

export class FAQPage {

  idRestaurant: any = localStorage.idRestaurant;
  nomRestaurant: any = localStorage.nomRestaurant;
  categorieRestaurant: any = localStorage.categorieRestaurant;
  phoneRestaurant: any = localStorage.phoneRestaurant;
  emailRestaurant: any = localStorage.emailRestaurant;
  site_webRestaurant: any = localStorage.site_webRestaurant;
  latitudeRestaurant: any = localStorage.latitudeRestaurant;
  longitudeRestaurant: any = localStorage.longitudeRestaurant;
  imageRestaurant: any = localStorage.imageRestaurant;

  params: any;
  shop: string;
  posts: any;
  loading: any;
  shownGroup = null;
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

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

    menu.enable(true);
    this.showLoader();


    this.webService.faq().then((result) => {
      this.loading.dismiss();
      //this.navCtrl.pop();
      this.posts = result;


    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });

  }
  openMenu(evt) {
    if (evt === "main") {
      this.menu.enable(true, 'menu1');
      this.menu.enable(false, 'menu2');
    } else {
      this.menu.enable(true, 'menu2');
      this.menu.enable(false, 'menu1');
    }
    this.menu.toggle();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Chargement des questions...'

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
    this.webService.offres().then((result) => {

      this.posts = result;
      refresher.complete();


    }, (err) => {
      this.presentToast(err);
      refresher.complete();
    });


  }



}
