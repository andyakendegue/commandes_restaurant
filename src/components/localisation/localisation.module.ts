import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalisationComponent } from './localisation';

@NgModule({
  declarations: [
    LocalisationComponent,
  ],
  imports: [
    IonicPageModule.forChild(LocalisationComponent),
  ],
  exports: [
    LocalisationComponent
  ]
})
export class LocalisationComponentModule {}
