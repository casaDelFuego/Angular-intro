import { Component, OnInit, Input } from '@angular/core';
import { TransportService } from './transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {


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

  transport: any;

  transportService: TransportService;

  constructor(transportService: TransportService) {
    this.transportService = transportService;
  }

  ngOnInit() {
    this.transport = this.transportService.getData();
  }

}
