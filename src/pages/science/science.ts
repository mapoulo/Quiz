import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyDataProvider } from '../../providers/my-data/my-data';
import { ScienceResultsPage } from '../../pages/science-results/science-results';

/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {

  score: number = 0;
  Science: any;

  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;

  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;
  count5: number = 0;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:MyDataProvider) {
  }

  ionViewDidLoad() {
    this.data.getData().subscribe(data => {this.Science = data.Science});
  }


 

  checkAnswer1(){
    if(this.answer1 ==  "Mercury")
    this.count1 += 1;
    if(this.count1 == 1)
    this.score += 20;
    
  }

  checkAnswer2(){
    if(this.answer2 == "Monkey")
    this.count2 += 1;
    if(this.count2 == 1)
    this.score += 20
  }

  checkAnswer3(){
    if(this.answer3 == "720 degrees")
    this.count3 += 1;
    if(this.count3 == 1)
    this.score += 20
  }

  checkAnswer4(){
    if(this.answer4 == "The Kiwi")
    this.count4 += 1;
    if(this.count4 == 1)
    this.score += 20
  }

  checkAnswer5(){
    if(this.answer5 == "Mercury")
    this.count5 += 1;
    if(this.count5 == 1)
    this.score += 20
  }

  results(){
    
    this.navCtrl.push(ScienceResultsPage, {score: this.score})
  }


}
