import { HttpRequestProvider } from './../../providers/http-request/http-request';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public api:any =[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpRequest: HttpRequestProvider) {
  this.requestPopularMovie()
  }

 
  public requestPopularMovie(){
    this.httpRequest.getPopularMovies().subscribe((response:any) => {
      // this.api=response
      
    })
  }


  openMyList(){
    this.navCtrl.push('MyListPage')
  }

}
