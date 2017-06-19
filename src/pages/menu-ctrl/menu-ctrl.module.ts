import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuCtrlPage } from '../menu-ctrl/menu-ctrl';

@NgModule({
  declarations: [
    MenuCtrlPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuCtrlPage),
  ],
  exports: [
    MenuCtrlPage
  ]
})
export class MenuCtrlPageModule {}
