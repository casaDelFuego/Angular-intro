import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road-light',
  templateUrl: './road-light.component.html',
  styleUrls: ['./road-light.component.css']
})
export class RoadLightComponent implements OnInit {
  state: number = 0;
  constructor() {}

  nextState() {
    this.state++;
    if (this.state==4) {
      this.state=0;
    }
  }

  ngOnInit() {


  }

}
