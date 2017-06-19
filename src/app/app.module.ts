import { AuthService } from '../providers/auth-service/auth-service';
import { WebService } from '../providers/web-service/web-service';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { Events } from 'ionic-angular';
import { MyApp } from './app.component';
import { MesInfosPage } from '../pages/mes-infos/mes-infos';
import { MesCommandesPage } from '../pages/mes-commandes/mes-commandes';
import { FAQPage } from '../pages/f-aq/f-aq';
import { ContactPage } from '../pages/contact/contact';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ParametresPage } from '../pages/parametres/parametres';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { MenuPage } from '../pages/menu/menu';
import { LocalisationPage } from '../pages/localisation/localisation';
import { MenuCtrlPage } from '../pages/menu-ctrl/menu-ctrl';
import { ConnexionPage } from '../pages/connexion/connexion';
import { InscriptionPage } from '../pages/inscription/inscription';
import { PizzeriaPage } from '../pages/pizzeria/pizzeria';
import { RestaurantAfricainPage } from '../pages/restaurant-africain/restaurant-africain';
import { RestaurantFranAisPage } from '../pages/restaurant-fran-ais/restaurant-fran-ais';
import { RestaurantLibanaisPage } from '../pages/restaurant-libanais/restaurant-libanais';
import { RestaurantChinoisPage } from '../pages/restaurant-chinois/restaurant-chinois';
import { RestaurantDetailPage } from '../pages/restaurant-detail/restaurant-detail';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactComponent } from '../components/contact/contact';
import { MenuComponent } from '../components/menu/menu';
import { LocalisationComponent } from '../components/localisation/localisation';

@NgModule({
  declarations: [
    MyApp,
    MesInfosPage,
    MesCommandesPage,
    FAQPage,
    ContactPage,
    ContactUsPage,
    ParametresPage,
    TabsControllerPage,
    MenuPage,
    MenuCtrlPage,
    LocalisationPage,
    ConnexionPage,
    InscriptionPage,
    PizzeriaPage,
    RestaurantAfricainPage,
    RestaurantFranAisPage,
    RestaurantLibanaisPage,
    RestaurantChinoisPage,
    RestaurantDetailPage,
    RestaurantPage,
    ContactComponent,
    MenuComponent,
    LocalisationComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MesInfosPage,
    MesCommandesPage,
    FAQPage,
    ContactPage,
    ContactUsPage,
    ParametresPage,
    TabsControllerPage,
    MenuPage,
    MenuCtrlPage,
    LocalisationPage,
    ConnexionPage,
    InscriptionPage,
    PizzeriaPage,
    RestaurantAfricainPage,
    RestaurantFranAisPage,
    RestaurantLibanaisPage,
    RestaurantChinoisPage,
    RestaurantDetailPage,
    RestaurantPage,
    ContactComponent,
    MenuComponent,
    LocalisationComponent,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    WebService,
    Events,
    Camera,
    Geolocation,
    Network
  ]
})
export class AppModule {}
