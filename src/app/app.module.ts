import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadLightComponent } from './road-light/road-light.component';
import { BookATripComponent } from './book-a-trip/book-a-trip.component';
import { TripChildComponent } from './book-a-trip/trip-child/trip-child.component';
import { TransportComponent } from './transport/transport.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadLightComponent,
    BookATripComponent,
    TripChildComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
