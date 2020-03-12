import { CommingSoonModel } from './../../model/comming-soon.model';
import { MovieModel } from './../../model/movie.model';
import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component, EventEmitter, Output, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommingSoonRequestProvider } from '../../providers/comming-soon-request/comming-soon-request';
import { Storage } from "@ionic/storage";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public popularMovies: MovieModel[]=[]
  public rateMovies:MovieModel[]=[]
  public nowPlayMovies:MovieModel[]=[]
  public commingSoonMovies: CommingSoonModel[]=[]
  public myList:MovieModel[]=[]
  public add:boolean
  @Input() movie:MovieModel
  @Output() addList=new EventEmitter();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: HttpRequestProvider,
    private commingRequest:CommingSoonRequestProvider,
    private storage: Storage
  ) {
    
  }
  ionViewDidEnter(){
    this.requestPopularMovie();
    this.requestMovieTopRated();
    this.requestMovieNowPlay();
    this.requestCommingSoon();
  }

  public addMyList():void {
    this.add=!this.add
    // this.movie.add_myList= !this.movie.add_myList;
    // this.addList.emit({movie:this.movie});
    // this.storage
  }
  
  // public adicionarFavorit(event:{movie:MovieModel}){
  //   if(event.movie.add_myList){
  //     this.myList.push(event.movie);
  //     this.storage.set('MyList',this.myList);
  //   }else{
  //     this.myList= this.myList.filter(movie=>movie.add_myList);
  //     this.storage.set('MyList',this.myList);
  //   }
  // }

  public goSeries():void {
    this.navCtrl.push('SeriesPage')
  }
  public goMovie():void {
    this.navCtrl.push('MoviesPage')
  }
  public goMyList():void {
    this.navCtrl.push('MyListPage')
  }

  public requestPopularMovie():any {
    this.httpRequest.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results.map(movie =>{
       return{
        title:movie.title,
        posterPath:movie.poster_path,
        backdropPath:movie.backdrop_path,
        release_date:movie.release_date,
        overview:movie.overview,
        add_myList:movie.add_myList
      }
      })
    });
  }

  public requestMovieTopRated():any{
    this.httpRequest.getMovieTopRated().subscribe((response) =>{
      this.rateMovies = response.results.map(movieRate =>{
        return{
          title:movieRate.title,
          posterPath:movieRate.poster_path,
          backdropPath:movieRate.backdrop_path,
          release_date:movieRate.release_date,
          overview:movieRate.overview,
          add_myList:movieRate.add_myList
        }
      })    
    })
  }

  public requestMovieNowPlay():any{
    this.httpRequest.getMovieNowPlay().subscribe((response:any)=>{
      this.nowPlayMovies= response.results.map(moviePlay =>{
        return{
          title:moviePlay.title,
          posterPath:moviePlay.poster_path,
          backdropPath:moviePlay.backdrop_path,
          release_date:moviePlay.release_date,
          overview:moviePlay.overview,
          add_myList:moviePlay.add_myList
        } 
      })
    })
  }
  
  public requestCommingSoon(): any {
    this.commingRequest.UploadSoon().subscribe((response: any) => {
      this.commingSoonMovies = response.results.map(movieComming => {
        return {

          backdropPath: movieComming.backdrop_path,
          title: movieComming.title,
          posterPath: movieComming.poster_path,
          overview: movieComming.overview,
          add_myList:movieComming.add_myList

        }
      })
    })
  }

 
}
  
 

  
