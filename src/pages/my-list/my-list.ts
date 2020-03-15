import { MovieModel } from './../../model/movie.model';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html',
})
export class MyListPage {
  public myList:MovieModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  public backHome():void {
    this.navCtrl.push('HomePage');
  }
  public getList():any{
    this.storage.get('myList').then(async (val)=> 
      this.myList=val||[]
    );
  }
  ionViewDidEnter(){
    this.myList=this.getList();
   }

  


 
}
