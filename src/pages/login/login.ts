import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // private form: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openHomePage(){
    this.navCtrl.push('HomePage')
  }

}
