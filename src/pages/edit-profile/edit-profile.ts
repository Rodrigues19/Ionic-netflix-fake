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
  public profile : ProfileModel;
  private listProfiles: ProfileModel[] = [];



  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.formProfile = formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required]
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
  //   let index = this.listProfiles.find(f => f == this.form.value);
  //   if(element != -1){
  //     let profileEdited: ProfileModel = this.profile[element]
  //     profileEdited = this.formProfile.value;
  //     this.profile[element] = profileEdited;
  //   } else {
  //     this.profile.push(this.form.value)
  //   }
  //   this.storage.set("userProfile", this.profile);
  // }
    this.listProfiles = await this.storage.get('userProfile') || [];
    this.listProfiles.push(this.formProfile.value);
    this.storage.set('userProfile',this.listProfiles);
    this.formProfile.reset();
  }
}
