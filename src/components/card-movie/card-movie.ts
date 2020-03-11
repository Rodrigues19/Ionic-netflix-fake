import { MovieModel } from './../../model/movie.model';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardMovieComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-movie',
  templateUrl: 'card-movie.html'
})
export class CardMovieComponent {
  @Input() movie:MovieModel

  constructor() {
   
  }

}
