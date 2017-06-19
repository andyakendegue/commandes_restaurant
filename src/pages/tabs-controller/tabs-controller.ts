import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MesInfosPage } from '../mes-infos/mes-infos';
import { MesCommandesPage } from '../mes-commandes/mes-commandes';
import { FAQPage } from '../f-aq/f-aq';
import { ContactPage } from '../contact/contact';
import { ParametresPage } from '../parametres/parametres';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = MesInfosPage;
  tab2Root: any = MesCommandesPage;
  tab3Root: any = FAQPage;
  tab4Root: any = ContactPage;
  tab5Root: any = ParametresPage;
  constructor(public navCtrl: NavController) {
  }
  goToParametres(params){
    if (!params) params = {};
    this.navCtrl.push(ParametresPage);
  }
}
