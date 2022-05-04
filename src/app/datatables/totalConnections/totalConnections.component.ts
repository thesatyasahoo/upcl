import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

declare var require: any;
const Data: any = require('./total.json');
// Start For 1
export interface UserData {
  id: string;
  accountNumber: string;
  serviceConnNumber: string;
  billDate: string;
  units: string;
  billMonth: string;
  arrear: string;
  billAmount: string;
  tcsAmount: string;
  name: string;
  address: string;
  serviceStatus: string;
  dueDate: string;
  netPaybleAmount: string;
  paymentStatus: string;
  connectionType: string;
}

@Component({
  selector: 'app-totalConnections',
  templateUrl: './totalConnections.component.html',
  styleUrls: ['./totalConnections.component.scss'],
})
export class TotalConnectionsComponent {
  nameData: string[] = []
  displayedColumns: string[] = [
    'accountNumber',
    'serviceConnNumber',
    'name',
    'address',
    'serviceStatus',
    'connectionType',
    'dueDate',
    'netPaybleAmount',
    'paymentStatus',
    "billLink"
  ];
  dataSource: MatTableDataSource<UserData> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private route: Router) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(Data);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  valuesIn(e: any) {
    if(e.value === 'Paid') {
      return ' text-ctmclr';
     } else if(e.value === 'Disconnected') {
      return ' text-danger';
     } else if(e.value === 'Pending') {
      return ' text-warning';
     }
  }
  onRowClick(event: any) {
    console.log(event.row);
    this.route.navigate([`pages/table/detail/${event.accountNumber}`])
  }
}
