import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var require: any;
const data: any = require('./details.json');

@Component({
  selector: 'app-detailsConnections',
  templateUrl: './detailsConnections.component.html',
  styleUrls: ['./detailsConnections.component.scss'],
})
export class DetailsConnectionsComponent implements OnInit{
  editing = {};
  rows: any[]= [];
  temp = [...data];
  id: any;
  totalData: any[] = [];

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'accountNumber', name: 'Account Number' },
    { prop: 'serviceConnNumber', name: 'Service Connection Number' },
    { prop: 'name', name: 'Name' },
    { prop: 'address', name: 'Address' },
    { prop: 'serviceStatus', name: 'Service Status' },
    { prop: 'dueDate', name: 'Due Date' },
    { prop: 'netPaybleAmount', name: 'Net Payble Amount' },
    { prop: 'paymentStatus', name: 'Payment Status', cellClass: this.valuesIn },
  ];

  @ViewChild(DetailsConnectionsComponent, { static: true }) table: DetailsConnectionsComponent = Object.create(null);
  constructor(private route: ActivatedRoute) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];
      data.map((e: any) => {
        // console.log(e, this.id)
        if (this.id === e.accountNumber) {
          console.log(e)
          this.totalData.push(e)
        }
      })
      this.rows = this.totalData;
      this.temp = [...this.totalData];
    });
  }

  
  updateFilter(event: any): void {
    const val = event.target.value.toLowerCase();
  }
  valuesIn(e: any) {
    // if(e.value === 'Paid') {
    //   return ' text-ctmclr';
    //  } else if(e.value === 'Disconnected') {
    //   return ' text-danger';
    //  } else if(e.value === 'Pending') {
    //   return ' text-warning';
    //  }
  }


}
