import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonEnum } from '../../enums/common.enum';

@Injectable()
export class HttpRequestProvider {

  constructor(public http: HttpClient) { }

  public getPopularMovies(): any {
    return this.http.get(CommonEnum.HOST + 'movie/popular?api_key=' + CommonEnum.API_KEY + `&language=pt-BR&page=1`)
  }

  public getMovieTopRated(): any {
    return this.http.get(CommonEnum.HOST + 'movie/top_rated?api_key=' + CommonEnum.API_KEY + '&language=pt-BR&page=1')
  }

  public getMovieNowPlay() {
      return this.http.get(CommonEnum.HOST + 'movie/now_playing?api_key=' + CommonEnum.API_KEY + '&language=pt-BR&page=1')
    
  }


}
