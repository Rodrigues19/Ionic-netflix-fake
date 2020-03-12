import { MovieModel } from './../../model/movie.model';
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

  @Input()movie:MovieModel;

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
          poster_path: movie.poster_path
        };
      });
    });
    console.log(this.title);
  }

  public detail(movie:MovieModel){
    this.navCtrl.push('DetailMoviePage',{movie:movie})
  }

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {
          backdropPath: filme.backdrop_path,
          title: filme.title,
          poster_path: filme.poster_path,
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
