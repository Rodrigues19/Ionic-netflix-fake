import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ProfileModel } from '../../model/profile.model';
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  public formProfile : FormGroup;
  public user : ProfileModel;
  private listProfiles: ProfileModel[] = [];



  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.user = this.navParams.get('user');
    console.log(this.user)
    this.formProfile = formBuilder.group({
      name: [this.user.name, Validators.required],
      image: [this.user.image]
    })
  }

  public cancelEdit():void {
    this.navCtrl.push('ProfilemanagementPage');
  }

  public editProfile(profile:ProfileModel):void{
    this.formProfile.controls['name'].setValue(profile.name);
    this.formProfile.controls['image'].setValue(profile.image);
  }


  async submit() {
    if(this.formProfile.valid){
      this.listProfiles = await this.storage.get('userProfile') || [];

      let index = this.listProfiles.findIndex(f => f.name == this.user.name);
      if(index != -1){
        let profileEdited: ProfileModel = this.listProfiles[index]
        profileEdited = this.formProfile.value;
        this.listProfiles[index] = profileEdited;
      } else {
        // let newUser = new ProfileModel();
        // newUser.id =
        this.listProfiles.push(this.formProfile.value)
      }

      this.storage.set('userProfile', this.listProfiles);
      this.navCtrl.push('ProfilemanagementPage')
      this.formProfile.reset();
    }
  }
}

