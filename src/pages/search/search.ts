import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommingSoonModel } from "../../model/comming-soon.model";
import { CommingSoonRequestProvider } from "../../providers/comming-soon-request/comming-soon-request";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  public movies: CommingSoonModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpRequest: CommingSoonRequestProvider,
  ) {
    this.getComming();
  }

  public getComming(): any {
    this.httpRequest.UploadSoon().subscribe((response: any) => {
      this.movies = response.results.map(filme => {
        return {
          backdropPath: filme.backdrop_path,
          title: filme.title,
          posterPath: filme.poster_path,
          overview: filme.overview,
          genreIds: filme.genre_ids
        };
      });
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
  }
}

// export class SearchPage {

//   searchQuery: string = '';
//   items: string[];

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.initializeItems();
//   }
//   initializeItems() {
//     this.items = [
//       'Amsterdam',
//       'Bogota',
//       'joao',
//       'luan',
//       'ka',
//       're',
//       'Amsterdam',
//       'Bogota',
//       'joao',
//       'luan',
//       'ka',

//     ];
//   }

//   getItems(ev: any) {
//     // Reset items back to all of the items
//     this.initializeItems();

//     // set val to the value of the searchbar
//     const val = ev.target.value;

//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
//   }
// }
