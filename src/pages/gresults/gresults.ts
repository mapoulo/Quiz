import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeographyPage} from '../../pages/geography/geography';
import { CategoryPage } from '../category/category';


/**
 * Generated class for the GresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gresults',
  templateUrl: 'gresults.html',
})
export class GresultsPage {

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

  tryAgain(){
    this.navCtrl.push(GeographyPage);
  }

  home(){
    this.results = 0;
    this.navCtrl.push(CategoryPage);
  }

}
