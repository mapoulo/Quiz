import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { SciencePage } from '../science/science';


/**
 * Generated class for the ScienceResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science-results',
  templateUrl: 'science-results.html',
})
export class ScienceResultsPage {

  results: number = 0;
  value:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.results = this.navParams.get('score');
    this.changeValue();
  }


  
  changeValue(){
    if(this.results < 50){
      this.value = "Unsuccessful  your score is  "+this.results+"%";
    }else{
      this.value = "Congratulations   your score is  "+this.results+"%";
    }
}

home(){
  this.navCtrl.push(CategoryPage);
}

tryAgain(){
  this.results = 0;
  this.navCtrl.push(SciencePage);
}

}
