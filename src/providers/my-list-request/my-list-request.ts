import { MovieModel } from './../../model/movie.model';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class MyListRequestProvider {
  private myList:MovieModel[];

  constructor(public http: HttpClient,public storage:Storage) {
  }

  public getList():any{
    this.storage.get('myList').then(async (val)=> 
      this.myList=val||[]
    );
  }

  public async addMyList(movie:MovieModel):Promise<void> {
    movie.add_myList=!movie.add_myList;
    if(movie.add_myList){
      this.myList.push(movie);
     await this.storage.set('myList',this.myList);
    }else{
      this.myList= this.myList.filter(movie=>movie.add_myList);
     await this.storage.set('myList',this.myList);
    }
    await this.isAddList(movie);
  }

  public async isAddList(movie:MovieModel){
    let myList: MovieModel[] = await this.storage.get("myList");
    if(!myList){
      myList=[]
    }
    const popMovie = myList.find(m => m.id === movie.id);
    if(popMovie){
      movie.add_myList = popMovie.add_myList
    }
  }

}
