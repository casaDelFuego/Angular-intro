import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  transport = [
    {name: 'Plane', selected: false},
    {name: 'Train', selected: false},
    {name: 'Elephant', selected: false},
    {name: 'Car', selected: false},
    {name: 'Bus', selected: false},
  ];

  constructor() { }

  getData() {
    return this.transport;
  }
}
