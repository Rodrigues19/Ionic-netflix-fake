
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMoviePage } from './detail-movie';

@NgModule({
  declarations: [
    DetailMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailMoviePage),
  ],
})
export class DetailMoviePageModule {}
