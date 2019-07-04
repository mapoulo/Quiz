import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GresultsPage } from './gresults';

@NgModule({
  declarations: [
    GresultsPage,
  ],
  imports: [
    IonicPageModule.forChild(GresultsPage),
  ],
})
export class GresultsPageModule {}
