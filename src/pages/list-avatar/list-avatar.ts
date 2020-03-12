import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-avatar',
  templateUrl: 'list-avatar.html',
})
export class ListAvatarPage {

  // private click: boolean;
  // private listAvatars: []


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }
  public avatarsClassic : Array<any> = [
    {img: '../../assets/imgs/avatar7.jpg', id: 10},
    {img: '../../assets/imgs/avatar12.png', id: 11},
    {img: '../../assets/imgs/avatar13.jpg', id: 12},
    {img: '../../assets/imgs/avatar15.png', id: 13},
    {img: '../../assets/imgs/avatar16.png', id: 14},
    {img: '../../assets/imgs/avatar8.jpg', id: 15},    {img: '../../assets/imgs/avatar11.jpg', id: 7},
    {img: '../../assets/imgs/avatar5.png', id: 8},
    {img: '../../assets/imgs/avatar1.webp', id: 9},
    {img: '../../assets/imgs/avatar2.png', id: 1},
    {img: '../../assets/imgs/avatar6.png', id: 2},
    {img: '../../assets/imgs/avatar3.jpg', id: 3},
    {img: '../../assets/imgs/avatar4.png', id: 4},
    {img: '../../assets/imgs/avatar9.png', id: 5},
    {img: '../../assets/imgs/avatar10.png', id: 6}
  ];

  // public getAvatar() {
  //   this.click =! this.click;
  //   this.listAvatars=this.storage.get('AvatarProfile')
  //   console.log(this.listAvatars)
  // }

  // ionViewDidLoad() {
  //   this.storage.set('AvatarProfile', this.listAvatars)
  //   console.log('ionViewDidLoad ListAvatarPage');
  // }

}
