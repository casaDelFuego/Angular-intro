import { Component, OnInit, Switch } from '@angular/core';

@Component({
  selector: 'app-book-a-trip',
  templateUrl: './book-a-trip.component.html',
  styleUrls: ['./book-a-trip.component.css']
})

export class BookATripComponent implements OnInit {
  StockholmData: string = 'is very boring and expensive';
  selectedCity: string = 'stockholm';

  constructor() {

  }

  markTheTab(city) {
    console.log(city);
    this.selectedCity = city;
  }

  ngOnInit() {
  }

}
