import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommingSoonModel } from "../../model/comming-soon.model";
import { CommingSoonRequestProvider } from "../../providers/comming-soon-request/comming-soon-request";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  public movies: CommingSoonModel[] = [];
  public title: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: CommingSoonRequestProvider
  ) {
    this.getComming();
  }

  public search() {
    this.httpRequest.searchFilm(this.title).subscribe((response: any) => {
      this.movies = response.results.map(movie => {
        return {
          title: movie.title,
          posterPath: movie.poster_path
        };
      });
    });
    console.log(this.title);
  }

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {
          backdropPath: filme.backdrop_path,
          title: filme.title,
          posterPath: filme.poster_path,
          overview: filme.overview,
          genreIds: filme.genre_ids
        };
      });
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
  }
}
