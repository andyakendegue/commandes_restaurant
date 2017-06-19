import { Component, ViewChild } from '@angular/core';
import { Events, Platform, Nav,  NavController,  MenuController,AlertController, LoadingController,  IonicPage, NavParams,  ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';
import { WebService } from '../../providers/web-service/web-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: any;
  shop:string;
  posts: any;
  loading: any
  //@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public menu: MenuController,
  public events: Events,
  public webService: WebService,
  private http: Http,
  public loadingCtrl: LoadingController,
  private toastCtrl: ToastController,
  public alertCtrl: AlertController) {
    /*
  setTimeout(() => {

  this.slides.slideNext()

  }, 2000);
  */

  menu.enable(true);

  this.showLoader();


  this.webService.fournisseurs().then((result) => {
    this.loading.dismiss();
    //this.navCtrl.pop();
    this.posts = result;


  }, (err) => {
    this.loading.dismiss();
    this.presentToast(err);
  });
  }

  goToRestaurantDetail(post) {
    //localStorage.clear();
    localStorage.idRestaurant = post.id;
    localStorage.nomRestaurant = post.nom;
    localStorage.categorieRestaurant = post.categorie;
    localStorage.phoneRestaurant = post.phone;
    localStorage.emailRestaurant = post.email;
    localStorage.site_webRestaurant = post.site_web;
    localStorage.latitudeRestaurant = post.latitude;
    localStorage.longitudeRestaurant = post.longitude;
    localStorage.dateRestaurant = post.date;
    localStorage.imageRestaurant = post.image;
    this.navCtrl.push(RestaurantDetailPage);
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
     content: 'Chargement de tous les commerces...'

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

     this.posts = result;
     refresher.complete();


   }, (err) => {
     this.presentToast(err);
     refresher.complete();
   });


 }

/*
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }
  */

}
