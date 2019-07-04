import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyDataProvider } from '../../providers/my-data/my-data';
import { HresultsPage } from '../hresults/hresults';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

score: number = 0;
History:any;

answer1:string;
answer2:string;
answer3:string;
answer4:string;
answer5:string;

count1: number = 0;
count2: number = 0;
count3: number = 0;
count4: number = 0;
count5: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public data:MyDataProvider) {
  }

  ionViewDidLoad() {
    this.data.getData().subscribe(data => {this.History = data.History});
  }


  checkAnswer1(){
    if(this.answer1  == "South Sudan")
    this.count1 += 1;
    if(this.count1 == 1)
    this.score += 25;  
      
  }



  checkAnswer2(){
    if(this.answer2  ==  "The Black Pimpernel")
    this.count2 += 1;
    if(this.count2 == 1)
    this.score += 25 ;    
  }

  checkAnswer3(){
    if(this.answer3  == "Addis Ababa")
    this.count3 += 1;
    if(this.count3 == 1)
    this.score += 25;      
  }

  checkAnswer4(){
    if(this.answer4  ==  "Nairobi")
    this.count4 += 1;
    if(this.count4 == 1)
    this.score += 25;      
  }




  results(){
    this.navCtrl.push(HresultsPage, {score: this.score})
  }


}
