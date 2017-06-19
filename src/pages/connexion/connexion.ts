import { Component } from '@angular/core';
import { Events, AlertController, NavController, LoadingController, ToastController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { MenuCtrlPage } from '../menu-ctrl/menu-ctrl';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {

  loading: any;
  loginData = { username: "", password: "", connected: "", tag: "login" };
  data: any;
  user = { nom: "", prenom: "", email: "", phone: "", sexe: "", avatar: "" };

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public events: Events) {

  }
  ionViewDidLoad() { }
  ionViewWillEnter() {
    if (localStorage.getItem("stay_connected") === "true") {
      this.loginData.username = localStorage.getItem("my_username");
      this.loginData.password = localStorage.getItem("my_password");
      this.doLogin();
    }

  }
  ionViewDidLeave() { }

  ionViewWillUnload() { }


  doLogin() {
    if (this.loginData.username === "" || this.loginData.password === "") {
      let prompt = this.alertCtrl.create({
        title: 'Des champs sont vides',
        message: 'Veuillez remplir tous les champs avec vos informations de connexion',
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
      if (this.loginData.connected === "true") {
        localStorage.setItem("stay_connected", "true");
        localStorage.setItem("my_username", this.loginData.username);
        localStorage.setItem("my_password", this.loginData.password);

      } else {
        this.showLoader();
        this.loginData.tag = "login";
        this.authService.login(this.loginData).then((result) => {
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

            localStorage.setItem('id', this.data.user.id);
            localStorage.setItem('nom', this.data.user.lname);
            localStorage.setItem('prenom', this.data.user.fname);
            localStorage.setItem('phone', this.data.user.phone);
            localStorage.setItem('email', this.data.user.email);
            localStorage.setItem('sexe', this.data.user.sexe);

            this.user.nom = this.data.user.fname;
            this.user.prenom = this.data.user.lname;
            this.user.phone = this.data.user.phone;
            this.user.email = this.data.user.email;
            this.user.sexe = this.data.user.sexe;



            this.events.publish('user:created', this.user);


            this.navCtrl.setRoot(MenuCtrlPage);
          }


        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
        });
      }
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

  goToInscription(params) {
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuCtrlPage);
  }
}
