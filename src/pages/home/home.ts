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
  this.apitest()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  public apitest(){
    this.httpRequest.getMovies().subscribe((response:any) => {
      // this.api=response
      console.log(response)
    })
  }


  openMyList(){
    this.navCtrl.push('MyListPage')
  }

}
