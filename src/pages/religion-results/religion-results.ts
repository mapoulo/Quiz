import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ReligionPage } from '../religion/religion';



/**
 * Generated class for the ReligionResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-religion-results',
  templateUrl: 'religion-results.html',
})
export class ReligionResultsPage {

  value:string;
  score: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.takeScore();
      this.results();
  }

  ionViewDidLoad() {
   
  }

  tryAgain(){
    this.navCtrl.push(ReligionPage);
  }

  Home(){
  this.navCtrl.push(CategoryPage);
  }

  takeScore(): void{
    this.score = this.navParams.get('score');
  }

  results(): void{

    if(this.score < 50){
      this.value = "Unsuccessful  your score is  "+this.score+"%";
    }else{
      this.value = "Congratulations   your score is  "+this.score+"%";
    }
  }

}
