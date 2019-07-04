import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReligionResultsPage } from '../religion-results/religion-results';
import { MyDataProvider } from '../../providers/my-data/my-data';

/**
 * Generated class for the ReligionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-religion',
  templateUrl: 'religion.html',
})
export class ReligionPage {

  religionData: any;
  score: number = 0;
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
    this.data.getData().subscribe(data => {this.religionData = data.Religion});
  
  }

  checkAnswer1(){
    
        if(this.answer1 == "End of an era")
        this.count1 += 1;
        if(this.count1 == 1)
        this.score += 20;
  }

  checkAnswer2(){
   
    if(this.answer2 == "As the consummation or perfection of God's creation of the world")
    this.count2 += 1;
    if(this.count2 == 1)
    this.score += 20;

}


checkAnswer3(){
  if(this.answer3 == "It is a period mentioned by Jesus in the Olivet discourse as a sign that would occur in the time of the end")
  this.count3 += 1;
  if(this.count3 == 1)
  this.score += 20;
  
 
}


checkAnswer4(){
  if(this.answer4 == "75% of life on earth")
  this.count4 += 1;
  if(this.count4 == 1)
  this.score += 20;

}

checkAnswer5(){
  if(this.answer5 ==  "The Parousia")
  this.count5 += 1;
  if(this.count5 == 1)
  this.score += 20;
  
}

  results(): void{
    this.navCtrl.push(ReligionResultsPage, {score: this.score});
    console.log(this.score);
  }

}
