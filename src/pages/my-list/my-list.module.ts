import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyListPage } from './my-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyListPage),
    ComponentsModule,
  ],
})
export class MyListPageModule {}
