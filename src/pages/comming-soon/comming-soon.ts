import { MovieModel } from './../../model/movie.model';
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

  public movies: MovieModel[] = [];
  public genres: GenerModel[] = [];
  public videos: MovieModel[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpRequest: CommingSoonRequestProvider) {
    this.getComming()
    this.getGenres()
    this.getVideo()
  }

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {

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

  public getVideo(): any {
    console.log(this.videos)
    this.httpRequest.getVideos().subscribe((response: any) =>{
      this.videos = response.results.map(video =>{
        return{
          id: video.id,
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
