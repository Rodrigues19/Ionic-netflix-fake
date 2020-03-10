import { Storage } from "@ionic/storage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {FormBuilder,FormGroup,Validators, FormControl} from "@angular/forms";
import { ModelLogin } from "../../model/login.model";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private form: FormGroup;
  public usersRegistered: ModelLogin[] = [];
  public submitAttempt: boolean = false;
  constructor( public navCtrl: NavController,public navParams: NavParams,public formBuilder: FormBuilder,private storage: Storage) {
    this.form = formBuilder.group({
      user: ["",[Validators.minLength(10),Validators.required,Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]],
      password: ["", [Validators.minLength(4), Validators.maxLength(60), Validators.required]]
    });
  }

  private submit (): void{
    this.submitAttempt=true
    this.usersRegistered.push(this.form.value)
    this.storage.set("usersRegistered", this.usersRegistered)
    if(this.form.controls.valid){
      this.navCtrl.push('HomePage')
    }
  }
  

}
