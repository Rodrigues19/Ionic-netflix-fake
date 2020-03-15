import { MyListRequestProvider } from './../../providers/my-list-request/my-list-request';
import { MovieModel } from './../../model/movie.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailRequestProvider } from '../../providers/detail-request/detail-request';

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})

export class DetailMoviePage {

  public selectMovie: MovieModel = new MovieModel()
  public myList: MovieModel[] = []
  public optionSimilar: MovieModel[] = []
  public options: MovieModel[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams,private detailRequest: DetailRequestProvider, private listRequest: MyListRequestProvider) {
    this.selectMovie = navParams.get("movie");
    this.myList = this.listRequest.getList();
    this.listRequest.isAddList(this.selectMovie);
  }

  public backHome(): void {
    this.navCtrl.push(HomePage);
  }


  public async addList(movie: MovieModel) {
    this.listRequest.addMyList(movie);
  }


  public requestGenre(): any {
    this.detailRequest.getGenreMovie().subscribe((response: any) => {
      this.optionSimilar = response.results.map(options => {
        return {
          poster_path: options.poster_path,

        };
      });
    });
  }

  ionViewWillEnter() {
    this.requestGenre();
  }
}
