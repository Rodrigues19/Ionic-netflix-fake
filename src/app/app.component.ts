import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { App } from 'ionic-angular/components/app/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      platform.registerBackButtonAction(() => {
        // app.navPop();
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
