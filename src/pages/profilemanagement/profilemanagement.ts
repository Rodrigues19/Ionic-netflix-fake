import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileModel } from '../../model/profile.model';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-profilemanagement',
  templateUrl: 'profilemanagement.html',
})
export class ProfilemanagementPage {

  public listUser: ProfileModel [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public addUser():void {
    // this.navCtrl.push(EditPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilemanagementPage');
  }

}
