import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

  loading: any;
  regData = {firstname:'', lastname:'', phone:'', email:'', sexe:'', password:'', confirmPassword:'', tag: 'register'};
  data: any;

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public authService: AuthService,
  public loadingCtrl: LoadingController,
  private toastCtrl: ToastController,
  public alertCtrl: AlertController) {
  }

  doSignup(){
    this.showLoader();
    if(this.regData.firstname === '' || this.regData.lastname === '' || this.regData.phone === '' || this.regData.email === '' || this.regData.sexe === '' || this.regData.password === '' || this.regData.confirmPassword === ''){
    this.loading.dismiss();

    let prompt = this.alertCtrl.create({
      title: 'Compléter vos informations',
      message: "Plusieurs champs requis sont vides",
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
    } else if(this.regData.password !== this.regData.confirmPassword ){
      this.loading.dismiss();

      let prompt = this.alertCtrl.create({
        title: 'Compléter vos informations',
        message: "Les mots de passe ne correspondent pas",
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
      this.regData.tag = 'register';
      this.authService.register(this.regData).then((result)=> {
        this.loading.dismiss();
        //this.navCtrl.pop();
        this.data = result;
        console.log(this.data);
        if(this.data.error) {

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
          title: 'Enregistrement réussi',
          message: "Nous allons vous rediriger vers la page de connexion",
          buttons: [

            {
              text: 'Ok',
              handler: data => {
                this.navCtrl.setRoot(ConnexionPage);
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
      content : 'Enregistrement...'

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

  goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(ConnexionPage);
  }

}
