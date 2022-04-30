import { Component, ViewChild } from '@angular/core';

declare var require: any;
const data: any = require('./company.json');

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  editing = {};
  rows = [];
  temp = [...data];

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

  @ViewChild(DataTableComponent, { static: true }) table: DataTableComponent = Object.create(null);
  constructor() {
    this.rows = data;
    this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  updateFilter(event: any): void {
    const val = event.target.value.toLowerCase();
  }
  valuesIn(e: any) {
   console.log(e.value)
   return ' text-ctmclr';
  }
}
