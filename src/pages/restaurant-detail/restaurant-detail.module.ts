import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantDetailPage } from './restaurant-detail';
//import { ContactPage } from '../contact/contact';

@NgModule({
  declarations: [
    RestaurantDetailPage
    //ContactPage
  ],
  imports: [
    IonicPageModule.forChild(RestaurantDetailPage),
  ]
})
export class RestaurantDetailPageModule {}
