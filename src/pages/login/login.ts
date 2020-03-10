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

  constructor( public navCtrl: NavController,public navParams: NavParams,public formBuilder: FormBuilder,private storage: Storage) {
    this.form = formBuilder.group({
      user: ["",[this.checkMail,Validators.required,Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]],
      password: ["", [Validators.minLength(4), Validators.maxLength(60), Validators.required]]
    });
    this.getUserRegistered();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  checkMail(controls: FormControl): any {
    if (controls.value.length < 10) {
      return {
        small: true
      };
    }
    return null;
  }

  public submit(): void {
    this.usersRegistered.push(this.form.value);
    this.storage.set("usersRegistered", this.usersRegistered);
    this.navCtrl.push('HomePage')
  }

  private getUserRegistered(): void {
    this.storage
      .get("usersRegistered")
      .then(val => (this.usersRegistered = val || []));
  }
}
