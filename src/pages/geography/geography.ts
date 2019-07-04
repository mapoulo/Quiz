import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyDataProvider } from '../../providers/my-data/my-data';
import { GresultsPage } from '../gresults/gresults';

/**
 * Generated class for the GeographyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geography',
  templateUrl: 'geography.html',
})
export class GeographyPage {

  score:number = 0;

  Geography: any;

  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
  answer5:string;

  count1:number = 0;
  count2:number = 0;
  count3:number = 0;
  count4:number = 0;
  count5:number = 0;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,  public data:MyDataProvider) {
  }

  ionViewDidLoad() {
    this.data.getData().subscribe(data => {this.Geography = data.Geography});
  }


  checkAnswer1(){
    if(this.answer1 == "4")
    this.count1 += 1;
    if(this.count1 == 1)
    this.score += 20;
  }

  checkAnswer2(){
    if(this.answer2 ==  "Botswana")
    this.count2 += 1;
    if(this.count2 == 1)
    this.score += 20;
  }

  checkAnswer3(){
    if(this.answer3 == "McKinley")
    this.count3 += 1;
    if(this.count3 == 1)
    this.score += 20;
  }

  checkAnswer4(){
    if(this.answer4 == "Atlantic and Indian")
    this.count4 += 1;
    if(this.count4 == 1)
    this.score += 20;
  }

  checkAnswer5(){
    if(this.answer5 == "Cape Roca")
    this.count5 += 1;
    if(this.count5 == 1)
    this.score += 20;
  }


  results(){
    console.log("score "+ this.score );
    this.navCtrl.push(GresultsPage, {score: this.score})

  }

}
