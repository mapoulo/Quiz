import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoliticsResultsPage } from '../politics-results/politics-results';
import { MyDataProvider } from '../../providers/my-data/my-data';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {

  Politics:any;
  score: number = 0;
  answer1: string ;
  answer2: string ;
  answer3: string ;
  answer4: string ;
  answer5: string ;

  CountNumber: number = 0;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;
  count5: number = 0;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public data:MyDataProvider, private alert: AlertController) {
   
  }

  
  ionViewDidLoad() {
    this.data.getData().subscribe(data => {this.Politics = data.Politics});
  }


  checkAnswer1(){

    if(this.answer1 == "Steve Biko"){
      this.count1 += 1;
      if(this.count1 == 1)
      this.score += 20;
    }
  }

  checkAnswer2(){

    if(this.answer2 == "Communist Party"){
      this.count2 += 1;
      if(this.count2 == 1)
      this.score += 20;
    }
  }

  checkAnswer3(){

    if(this.answer3 == "The President of SA in consultation with the Judicial Services Commission"){
      this.count3 += 1;
      if(this.count3 == 1)
      this.score += 20;
    }
  }

  checkAnswer4(){
    if(this.answer4 == "Republic"){
      this.count4 += 1;
      if(this.count4 == 1)
      this.score += 20;
    }
  }

  checkAnswer5(){
    if(this.answer5 == "Democratic Alliance"){
      this.count5 += 1;
      if(this.count5 == 1)
      this.score += 20;
    }
  }


 
  results(): void{
    // if(this.CountNumber < 5){

    //   let alert = this.alert.create({
    //     title: 'Please answer all questions',
    //     subTitle: '',
    //     buttons: ['OK']
    //   });
    //   alert.present();

    // }else{
      this.navCtrl.push(PoliticsResultsPage, {results : this.score});
    // }
   

  }





 
}
