import { MovieModel } from './../../model/movie.model';
import { HttpRequestProvider } from './../../providers/http-request/http-request';
import { Component } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: 'main-header.html'
})
export class MainHeaderComponent {

  public popularMovies: MovieModel[]=[]
  constructor(private httpRequest:HttpRequestProvider) {
    this.requestPopularMovie();
  }
  public requestPopularMovie() {
    this.httpRequest.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results.map(movie =>{
       return{
          backdrop_path: movie.backdrop_path,
          title: movie.title,
          poster_path:movie.poster_path,
      }
      })
    
      
    });
  }

  // ionViewDidEnter(){
  //  this.requestPopularMovie();
  // }

}
