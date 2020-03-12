import { Storage } from '@ionic/storage';
import { MovieModel } from './../../model/movie.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})

export class DetailMoviePage {
  public selectMovie:MovieModel= new MovieModel()
  public myList:MovieModel[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
    this.selectMovie= navParams.get("movie");
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
  }

}
