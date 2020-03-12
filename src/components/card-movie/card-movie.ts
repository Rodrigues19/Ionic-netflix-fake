import { NavController } from 'ionic-angular';
import { MovieModel } from './../../model/movie.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-movie',
  templateUrl: 'card-movie.html'
})
export class CardMovieComponent {
  @Input() movie:MovieModel

  constructor(public navCtrl: NavController) {}

  public goMovieDetail(movie:MovieModel) :any{
    this.navCtrl.push('DetailMoviePage',{movie:movie})
  }
 

}
