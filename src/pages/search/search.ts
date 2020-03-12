// import { CommingSoonModel } from './../../model/comming-soon.model';
// import { SearchPage } from './search';
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
    private httpRequest: CommingSoonRequestProvider,
  ) {
    this.getComming();
  }

  public search (){

this.httpRequest.UploadSoon().subscribe((response:any)=>{
  this.movies=response.Search.map(movies=>{
    return{
      title: movies.title,
    };
  });
});
    console.log(this.movies)
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

