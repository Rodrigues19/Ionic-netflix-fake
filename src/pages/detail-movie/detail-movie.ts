import { Storage } from '@ionic/storage';
import { MovieModel } from './../../model/movie.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CommingSoonRequestProvider } from '../../providers/comming-soon-request/comming-soon-request';

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})

export class DetailMoviePage {
  
  public selectMovie:MovieModel= new MovieModel()
  public myList:MovieModel[]=[]
  public optionSimilar: MovieModel[]=[]
  public options: MovieModel[]=[]
 
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage, private httpRequest: CommingSoonRequestProvider) {
    this.selectMovie= navParams.get("movie");
   
  }

  public backHome():void{
    this.navCtrl.push(HomePage);
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
  

  public similarOptions(): any {
    this.httpRequest.similarFilm().subscribe((response: any) => {
      this.optionSimilar = response.results.map(options => {
        return {
          poster_path: options.poster_path,
        };
      });
    });
  }

ionViewWillEnter(){
  this.similarOptions();
}
}
