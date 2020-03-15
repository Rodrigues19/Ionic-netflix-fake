import { MovieModel, GenerModel } from './../../model/movie.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommingSoonRequestProvider } from '../../providers/comming-soon-request/comming-soon-request';



@IonicPage()
@Component({
  selector: 'page-comming-soon',
  templateUrl: 'comming-soon.html',
})
export class CommingSoonPage {

  public movies: MovieModel[] = [];
  public genres: GenerModel[] = [];
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpRequest: CommingSoonRequestProvider) {
  
  }

  ionViewWillEnter(){
   this.getComming();
   this.getGenres();
  }

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {
          id:filme.id,
          backdrop_path: filme.backdrop_path,
          title: filme.title,
          poster_path: filme.poster_path,
          overview: filme.overview,
          genreIds: filme.genre_ids,
          release_date: filme.release_date
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

  public getNameGener(movie: MovieModel): string[] {
    return this.genres.filter((g) => movie.genreIds.indexOf(g.id) != -1).map(ge => ' ' + ge.name);
  }

  

}
