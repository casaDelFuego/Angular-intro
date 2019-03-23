import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'road-light',
  templateUrl: './road-light/road-light.component.html',
  styleUrls: ['./road-light/road-light.component.css']
})

export class AppComponent {
  title = 'Angular-intro-uppgift';
}
import RoadLightComponent from './road-light/road-light.component';
//import BookATripComponent from './book-a-trip/book-a-trip.component.ts';
