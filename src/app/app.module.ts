import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { HttpRequestProvider } from '../providers/http-request/http-request';
import { DetailRequestProvider } from '../providers/detail-request/detail-request';
import { CommingSoonRequestProvider } from '../providers/comming-soon-request/comming-soon-request';
import { MyListRequestProvider } from '../providers/my-list-request/my-list-request';

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpRequestProvider,
    DetailRequestProvider,
    CommingSoonRequestProvider,
    MyListRequestProvider,
  ]
})
export class AppModule {}
