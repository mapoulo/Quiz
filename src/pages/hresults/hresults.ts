import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../../pages/category/category';
import { PoliticsPage } from '../politics/politics';

/**
 * Generated class for the HresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hresults',
  templateUrl: 'hresults.html',
})
export class HresultsPage {

  results: number = 0;
  value:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = this.navParams.get('score');
    this.changeValue();
  }

  ionViewDidLoad() {
 
   
  }

  

  changeValue(){
      if(this.results < 50){
        this.value = "Unsuccessful  your score is  "+this.results+"%";
      }else{
        this.value = "Congratulations   your score is  "+this.results+"%";
      }
  }

  category(){
    this.navCtrl.push(CategoryPage);
  }

  category1(){
    this.results = 0;
    this.navCtrl.push(PoliticsPage);
  }

}
