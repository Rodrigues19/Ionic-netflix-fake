import { MovieModel } from './../../model/movie.model';
import { ProfilemanagementPage } from './../profilemanagement/profilemanagement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})

export class DetailMoviePage {
  public add: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public addMyList() {
    this.add = !this.add;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMoviePage');
  }
}
