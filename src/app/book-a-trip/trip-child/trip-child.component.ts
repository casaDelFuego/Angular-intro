import { Component, OnInit, Input, Switch } from '@angular/core';

@Component({
  selector: 'app-trip-child',
  templateUrl: './trip-child.component.html',
  styleUrls: ['./trip-child.component.css']
})
export class TripChildComponent implements OnInit {

  @Input() StockholmData: string;
  @Input() staticdata: string;
  @Input() destinations: string;

  constructor() {

  }
    
  ngOnInit() {
  }

}
