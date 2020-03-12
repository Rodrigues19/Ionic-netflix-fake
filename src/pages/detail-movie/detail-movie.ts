
import { MovieModel } from './../../model/movie.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})

export class DetailMoviePage {
  public add: boolean;
  public selectMovie:MovieModel= new MovieModel()

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectMovie= navParams.get("movie");
  }
  public addMyList():void{
    this.add = !this.add;
  } 

}
