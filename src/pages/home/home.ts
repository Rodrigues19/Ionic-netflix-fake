import { MovieModel } from './../../model/movie.model';
import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public popularMovies: MovieModel[]=[]
  public add: boolean;
  public rateMovies:MovieModel[]=[]
  public nowPlayMovies:MovieModel[]=[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: HttpRequestProvider
  ) {
    
  }
  ionViewDidEnter(){
    this.requestPopularMovie();
    this.requestMovieTopRated();
    this.requestMovieNowPlay()
  }

  public goSeries():void {
    this.navCtrl.push('SeriesPage')
  }
  public goMovie():void {
    this.navCtrl.push('MoviesPage')
  }
  public goMyList():void {
    this.navCtrl.push('MyListPage')
  }

  public requestPopularMovie() {
    this.httpRequest.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results.map(movie =>{
       return{
        title:movie.title,
        image:movie.poster_path,
        backdrop_path:movie.backdrop_path,
        release_date:movie.release_date,
        overview:movie.overview
      }
      })
    });
  }

  public requestMovieTopRated(){
    this.httpRequest.getMovieTopRated().subscribe((response) =>{
      this.rateMovies = response.results.map(movieRate =>{
        return{
          title:movieRate.title,
          image:movieRate.poster_path,
          backdrop_path:movieRate.backdrop_path,
          release_date:movieRate.release_date,
          overview:movieRate.overview
        }
      })    
    })
  }

  public requestMovieNowPlay(){
    this.httpRequest.getMovieNowPlay().subscribe((response:any)=>{
      console.log(response)
      this.nowPlayMovies= response.results.map(moviePlay =>{
        return{
          title:moviePlay.title,
          image:moviePlay.poster_path,
          backdrop_path:moviePlay.backdrop_path,
          release_date:moviePlay.release_date,
          overview:moviePlay.overview
        }
        
      })

    })
  }


  public addMyList():any {
    this.add = !this.add;
  }
}
  
 

  
