
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonEnum } from '../../enums/common.enum';


@Injectable()
export class DetailRequestProvider {

  constructor(public http: HttpClient) {
  
  }

  getGenreMovie() {
    return  this.http.get(CommonEnum.HOST+'movie/upcoming?api_key='+CommonEnum.API_KEY+`&language=pt-BR`);

  }

}
