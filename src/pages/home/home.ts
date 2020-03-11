import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MovieModel } from "../../model/movie.model";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public popularMovies: MovieModel[]=[]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: HttpRequestProvider
  ) {
    this.requestPopularMovie();
  }

  public requestPopularMovie() {
    this.httpRequest.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results.map(movie =>{
       return{
          backdrop_path: movie.backdrop_path,
          title: movie.title,
          image:movie.poster_path
      }
      })    
    });
  }

  openMyList() {
    this.navCtrl.push("MyListPage");
  }
}
