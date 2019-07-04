import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoliticsPage } from '../politics/politics';
import { ReligionPage } from '../religion/religion';
import { HistoryPage } from '../history/history';
import { GeographyPage } from '../geography/geography';
import { SciencePage } from '../../pages/science/science';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  Politics(): void{
  this.navCtrl.push(PoliticsPage);
  }

  Religion(): void{
     this.navCtrl.push(ReligionPage);
  }

  History(): void{
    this.navCtrl.push(HistoryPage);
 }

 Geography(): void{
  this.navCtrl.push(GeographyPage);
 }

 

 Science(): void{
  this.navCtrl.push(SciencePage);
 }

}
