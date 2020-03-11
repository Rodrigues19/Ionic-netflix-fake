import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommingSoonRequestProvider } from '../../providers/comming-soon-request/comming-soon-request';
import { CommingSoonModel, GenerModel } from "../../model/comming-soon.model"


@IonicPage()
@Component({
  selector: 'page-comming-soon',
  templateUrl: 'comming-soon.html',
})
export class CommingSoonPage {

  public movies: CommingSoonModel[] = [];
  public genres: GenerModel[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpRequest: CommingSoonRequestProvider) {
    this.getComming()
    this.getGenres()
  }

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {

          backdropPath: filme.backdrop_path,
          title: filme.title,
          posterPath: filme.poster_path,
          overview: filme.overview,
          genreIds: filme.genre_ids,


        }
      })
    })
  }

  public getGenres(): any {
    this.httpRequest.getGenre().subscribe((response: any) => {

      this.genres = response.genres.map(genre => {
        return {
          id: genre.id,
          name: genre.name
        }
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommingSoonPage');
  }

  getNameGener(movie: CommingSoonModel): string[] {
    return this.genres.filter((g) => movie.genreIds.indexOf(g.id) != -1).map(ge => ' ' + ge.name);
  }

}
