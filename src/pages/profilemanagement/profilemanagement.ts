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

  public listProfiles: ProfileModel [] = [];
  public edited: boolean;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  public addUser():void {
    this.navCtrl.push('EditProfilePage',{user:""});
  }
  public goHome():void {
    this.navCtrl.push('TabsPage');
  }
  public editProfile(profile: ProfileModel):void{
    this.navCtrl.push('EditProfilePage',{user: profile});
  }
  public editIcon():void {
    this.edited = !this.edited
  }

  ionViewDidEnter() {
    this.storage.get('userProfile').then(val=>{
      this.listProfiles = val || [];
    })
  }
}
