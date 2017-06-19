import { Component, ViewChild } from '@angular/core';
import { Events, Platform, Nav, NavController, MenuController, AlertController, LoadingController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';
import { WebService } from '../../providers/web-service/web-service';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
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
  data:any;
  commande = { id_restaurant: "", id_client: "", article: "", montant: "", statut: "", tag: "commande" };

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


    this.webService.offres().then((result) => {
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
      content: 'Patientez...'

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

  startCommand(post) {

    let prompt = this.alertCtrl.create({
      title: 'Passer commande',
      message: 'Vous Souhaitez commander :\n\n ' + post.nom + ' qui coute ' + post.prix + '\n\n Valider la commande?',
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Ok clicked');
          }
        }
        ,
        {
          text: 'Commander',
          handler: data => {
            this.commande.id_restaurant = this.idRestaurant;
            this.commande.id_client = localStorage.getItem('id');
            this.commande.article = post.nom;
            this.commande.montant = post.prix;
            this.commande.statut = "en cours";
            this.commande.tag = "commande";

            this.commander(this.commande);
          }
        }
      ]
    });
    prompt.present();

  }

  commander(commande) {

this.showLoader();

    this.webService.commander(commande).then((result) => {
      this.loading.dismiss();
      //this.navCtrl.pop();
      this.data = result;
      if (this.data.error) {

        let prompt = this.alertCtrl.create({
          title: 'Une erreur s\'est produite',
          message: this.data.error_msg,
          buttons: [

            {
              text: 'Ok',
              handler: data => {
                console.log('Ok clicked');
              }
            }
          ]
        });
        prompt.present();



      } else {



        let prompt = this.alertCtrl.create({
          title: 'Commande bien reçue',
          message: "Votre commande a été envoyée. Vous recevrez une confirmation sous peu.",
          buttons: [

            {
              text: 'Ok',
              handler: data => {
                console.log('Ok clicked');
              }
            }
          ]
        });
        prompt.present();
      }




    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

}
