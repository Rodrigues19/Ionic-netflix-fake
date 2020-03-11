import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardMovieComponent } from './card-movie/card-movie';

@NgModule({
	declarations: [CardMovieComponent],
	imports: [IonicModule],
	exports: [CardMovieComponent,]
})
export class ComponentsModule {}
