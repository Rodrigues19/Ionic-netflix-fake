import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DetailRequestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DetailRequestProvider Provider');
  }

}
