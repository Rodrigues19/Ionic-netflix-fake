
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonEnum } from '../../enums/common.enum';


@Injectable()
export class CommingSoonRequestProvider {
  similarFilm() {
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) {
  }

  public UploadSoon():any {
    return  this.http.get(CommonEnum.HOST+'movie/upcoming?api_key='+CommonEnum.API_KEY+`&language=pt-BR`);

  }
  public getGenre(): any{
    return  this.http.get(CommonEnum.HOST+'genre/movie/list?api_key='+CommonEnum.API_KEY+`&language=pt-BR`);

  }

 
 
}
