import { Storage } from '@ionic/storage';
import { MyListRequestProvider } from './../../providers/my-list-request/my-list-request';
import { MovieModel } from "./../../model/movie.model";
import { Component} from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommingSoonRequestProvider } from "../../providers/comming-soon-request/comming-soon-request";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  public movies: MovieModel[] = [];
  public title: string;
  public myList:MovieModel[]=[]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: CommingSoonRequestProvider,
    private listRequest:MyListRequestProvider,
    private storage:Storage
  ) {
    this.myList=this.getList()
  }
  
 async ionViewDidEnter() {
    await this.getComming();
  }
  public getList():any{
    this.storage.get('myList').then(async (val)=> 
      this.myList=val||[]
    );
  }
  public goDetail(movie: MovieModel) {
    this.navCtrl.push("DetailMoviePage", { movie: movie });
  }

  public search(): any {
    this.httpRequest.searchFilm(this.title).subscribe((response: any) => {
      let indexM;
      this.movies = response.results.map((movie,index) => {
        indexM=index;
        return {
          id: movie.id,
          title: movie.title,
          original_language: movie.original_language,
          backdrop_path: movie.backdrop_path,
          poster_path: movie.poster_path,
          genreIds: movie.genreIds,
          adult: movie.adult,
          overview: movie.overview,
          release_date: movie.release_date,
          add_myList: movie.add_myList
        };
      });
      this.listRequest.isAddList(this.movies[indexM])
    });
  }

 
 

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      let indexM;
      this.movies = response.results.map((filme,index) => {
        indexM=index;
        return {
          id:filme.id,
          backdrop_path: filme.backdrop_path,
          title: filme.title,
          poster_path: filme.poster_path,
          overview: filme.overview,
          genreIds: filme.genre_ids
        };
      });
      this.listRequest.isAddList(this.movies[indexM])
    });
  }

}
