import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilemanagementPage } from './profilemanagement';

@NgModule({
  declarations: [
    ProfilemanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilemanagementPage),
  ],
})
export class ProfilemanagementPageModule {}
