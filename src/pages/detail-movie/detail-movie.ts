import { Storage } from '@ionic/storage';
import { MovieModel } from './../../model/movie.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
    this.myList=this.getList()
  }
 
  public backHome():void{
    this.navCtrl.push(HomePage);
  }

  public getList():any{
    this.storage.get('myList').then(async (val)=> 
      this.myList=val||[]
    );
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
  public async addMyList(movie:MovieModel):Promise<void> {
    await this.isAddList(movie);
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
