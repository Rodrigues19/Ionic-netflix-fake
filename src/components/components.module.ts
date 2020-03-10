import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardMovieComponent } from './card-movie/card-movie';
import { MainHeaderComponent } from './main-header/main-header';
@NgModule({
	declarations: [CardMovieComponent,
    MainHeaderComponent],
	imports: [IonicModule],
	exports: [CardMovieComponent,
    MainHeaderComponent]
})
export class ComponentsModule {}
