import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadLightComponent } from './road-light/road-light.component';
import { BookATripComponent } from './book-a-trip/book-a-trip.component';
import { TripChildComponent } from './book-a-trip/trip-child/trip-child.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadLightComponent,
    BookATripComponent,
    TripChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
