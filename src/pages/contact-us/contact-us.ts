import { Component } from '@angular/core';
import { IonicPage, Events, AlertController, NavController, LoadingController, ToastController, MenuController } from 'ionic-angular';
import { WebService } from '../../providers/web-service/web-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  loading: any;
  messageData = { message: "", id: "", email: "", tag: "message" };
  data: any;
  messageForm:any;


  constructor(
    public navCtrl: NavController,
    public webService: WebService,
    public loadingCtrl: LoadingController,
    public menu : MenuController,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public events: Events) {

    menu.enable(true);


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

  sendMessage() {
    if (this.messageData.message === "") {
      let prompt = this.alertCtrl.create({
        title: 'Pas de message ?',
        message: 'Le message est vide',
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

      this.showLoader();
      this.messageData.tag = "message";
      this.messageData.id = localStorage.getItem('id');
      this.messageData.email = localStorage.getItem('email');
      this.webService.message(this.messageData).then((result) => {
        this.loading.dismiss();
        this.data = result;
        //console.log(this.loginData);
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
            title: 'Nous avons reçu votre message',
            message: "Nous vous répondrons directement sur votre adresse email. \n\n Nos équipes prennent au sérieux les messages que vous nous envoyez.",
            buttons: [

              {
                text: 'Ok',
                handler: data => {
                  this.navCtrl.setRoot(HomePage);
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

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Connexion...'
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
      console.log('Dismiss toast');
    });
    toast.present();
  }


}
