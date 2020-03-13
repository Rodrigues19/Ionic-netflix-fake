import { MovieModel } from "./../../model/movie.model";
import { Component, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommingSoonRequestProvider } from "../../providers/comming-soon-request/comming-soon-request";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  public movies: MovieModel[] = [];
  public title: string;

  @Input() movie: MovieModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: CommingSoonRequestProvider
  ) {}
  
  ionViewDidEnter() {
    this.getComming();
  }
  
  public search(): any {
    this.httpRequest.searchFilm(this.title).subscribe((response: any) => {
      console.log(response);
      this.movies = response.results.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          original_language: movie.original_language,
          backdrop_path: movie.backdrop_path,
          poster_path: movie.poster_path,
          genreIds: movie.genreIds,
          adult: movie.adult,
          overview: movie.overview,
          release_date: movie.release_date,
          add_myList: movie.add_myList
        };
      });
    });
  }

  public detail(movie: MovieModel) {
    this.navCtrl.push("DetailMoviePage", { movie: movie });
  }


  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {
          backdrop_path: filme.backdrop_path,
          title: filme.title,
          poster_path: filme.poster_path,
          overview: filme.overview,
          genreIds: filme.genre_ids
        };
      });
    });
  }

}
