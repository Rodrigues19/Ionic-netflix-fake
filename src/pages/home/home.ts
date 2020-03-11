import { MovieModel } from './../../model/movie.model';
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
  public add: boolean;
  public rateMovies:[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: HttpRequestProvider
  ) {
    
  }
  ionViewDidEnter(){
    this.requestPopularMovie();
    this.requestMovieTopRated()
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

  public requestMovieTopRated(){
    this.httpRequest.getMovieTopRated().subscribe((response) =>{
      this.rateMovies = response.results.map(movieRate =>{
        return{
          image:movieRate.poster_path,
          backdrop_path:movieRate.backdrop_path,
        }
      })    
    })
  }
  public addMyList() {
    this.add = !this.add;
  }

  openMyList() {
    this.navCtrl.push("MyListPage");
  }
}
  
 

  
