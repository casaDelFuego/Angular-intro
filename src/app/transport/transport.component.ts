import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  transport: any = [
    {name: 'Plane', selected: false},
    {name: 'Train', selected: false},
    {name: 'Elephant', selected: false},
    {name: 'Car', selected: false},
    {name: 'Bus', selected: false},
  ];

  transportName: string='';

  markTransport(t) {
    t.selected = !t.selected;
    console.log(t.selected);
  }

  addTransport() {
    //console.log(this.transportName);
    this.transport.push({
      name: this.transportName
    })
    this.transportName="";
  }

  remove(t) {
    console.log(t);
    let i: number = this.transport.indexOf(t);
    if (i!=-1) {
      this.transport.splice(i, 1);
    }
  }
  constructor() { }

  ngOnInit() {

  }

}
