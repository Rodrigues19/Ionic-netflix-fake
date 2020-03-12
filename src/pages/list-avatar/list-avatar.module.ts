import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAvatarPage } from './list-avatar';

@NgModule({
  declarations: [
    ListAvatarPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAvatarPage),
  ],
})
export class ListAvatarPageModule {}
