import { ProfilemanagementPage } from './../profilemanagement/profilemanagement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})

export class DetailMoviePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMoviePage');
  }

 

}
