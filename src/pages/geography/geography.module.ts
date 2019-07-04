import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeographyPage } from './geography';

@NgModule({
  declarations: [
    GeographyPage,
  ],
  imports: [
    IonicPageModule.forChild(GeographyPage),
  ],
})
export class GeographyPageModule {}
