import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-child',
  templateUrl: './trip-child.component.html',
  styleUrls: ['./trip-child.component.css']
})
export class TripChildComponent implements OnInit {

  @Input() destinations: string;

  constructor() {

  }

  ngOnInit() {
  }

}
