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
    this.formBuilder;
    this.user = this.navParams.get('user');
    this.formProfile = formBuilder.group({
      name: [this.user.name, Validators.required],
      image: [this.user.image]
    })
  }
  public goAvatar():void {
    this.user.name = this.formProfile.controls["name"].value;
    this.navCtrl.push('ListAvatarPage', {user: this.user})
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
      let index = this.listProfiles.findIndex(f => f.id == this.user.id);
      if(index != -1){
        let profileEdited: ProfileModel = this.listProfiles[index]
        profileEdited = this.formProfile.value;
        profileEdited.image = this.user.image;
        profileEdited.id = this.user.id;
        this.listProfiles[index] = profileEdited;
      } else {
        let newUser = new ProfileModel();
        newUser=this.formProfile.value;
        newUser.image=this.user.image;
        newUser.id = (this.listProfiles.length + 1).toString();
        this.listProfiles.push(this.formProfile.value)
      }

      this.storage.set('userProfile', this.listProfiles);
      this.navCtrl.push('ProfilemanagementPage')
      this.formProfile.reset();
    }
  }
}

