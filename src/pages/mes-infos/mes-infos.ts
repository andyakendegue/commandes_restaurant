import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-mes-infos',
  templateUrl: 'mes-infos.html'
})
export class MesInfosPage {

user = {nom:"", prenom : "", email: "", phone: "", sexe:"", avatar:""};
ionViewDidLoad(){};
ionViewWillEnter(){
this.user.nom = localStorage.getItem("nom");
this.user.prenom = localStorage.getItem("prenom");
this.user.phone = localStorage.getItem("phone");
this.user.email = localStorage.getItem("email");
this.user.sexe = localStorage.getItem("sexe");
};
ionViewDidLeave() {};

ionViewWillUnload() {};

constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public menu: MenuController,
   public alertCtrl: AlertController) {

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

modifierInfos() {
  let prompt = this.alertCtrl.create({
    title: 'Modifier mon profil',
    message: "Modifiez vos informations",
    inputs: [
      {
        name: 'Nom',
        placeholder: 'Nom'
      },
      {
        name: 'Prénom',
        placeholder: 'Prénom'
      },
      {
        name: 'Sexe',
        placeholder: 'Sexe'
      },
      {
        name: 'Téléphone',
        placeholder: 'Téléphone'
      },
    ],
    buttons: [
      {
        text: 'Annuler',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Enregistrer',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();
}


}
