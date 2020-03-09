import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonEnum } from '../../enums/common.enum';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openDetailPage(){
    // get (CommonEnum.HOST+'/movie/popular' + CommonEnum.API_KEY)

    // CommonEnum.HOST+'movie/popular?api_keys'+CommonEnum.API_KEY


    this.navCtrl.push('DetailPage')
    
     
  }

  

}
