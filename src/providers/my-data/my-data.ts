
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



/*
  Generated class for the MyDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyDataProvider {


  constructor(public http: Http) {
    console.log('Hello MyDataProvider Provider');
  }
   
  getData(){
     return this.http.get('assets/Data/TheData.json').map(res => res.json());
  }
}
