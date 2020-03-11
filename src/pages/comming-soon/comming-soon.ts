import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommingSoonRequestProvider } from '../../providers/comming-soon-request/comming-soon-request';
import { CommingSoonModel} from "../../model/comming-soon.model"


@IonicPage()
@Component({
  selector: 'page-comming-soon',
  templateUrl: 'comming-soon.html',
})
export class CommingSoonPage {

  public movie:CommingSoonModel[]
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpRequest: CommingSoonRequestProvider ) {
    this.getComming()
  }

  public getComming():any {
    this.httpRequest.UploadSoon().subscribe((response:any) => {
      console.log(response)
      this.movie= response.results.map(filme=>{
        return {
          
          backdropPath: filme.backdrop_path,
          title: filme.title,
          posterPath: filme.poster_path ,
          overview: filme.overview,
          genreIds: filme.genre_ids,
          
          
        }
      })  
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommingSoonPage');
  }

}
