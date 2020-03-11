import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html',
})
export class MyListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public backHome():void {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
  }

}
