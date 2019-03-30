import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road-light',
  templateUrl: './road-light.component.html',
  styleUrls: ['./road-light.component.css']
})
export class RoadLightComponent implements OnInit {

  constructor() {}

  nextState() {
    this.state++;
    if (this.state==3) {
      this.state=0;
    }
  }

  ngOnInit() {
    this.state = 0;

  }

}
