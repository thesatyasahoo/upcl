import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

declare var require: any;

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
const Data: UserData[] = require('./total.json');
@Component({
  selector: 'app-totalConnections',
  templateUrl: './totalConnections.component.html',
  styleUrls: ['./totalConnections.component.scss'],
})
export class TotalConnectionsComponent {
  title: any = localStorage.getItem('tableName');
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

  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private route: Router) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(Data);
  }
  ngOnInit(): void {
    this.getData();
    // throw new Error('Method not implemented.');
  }

  getData() {
    let filteredData: any[] = [];
    Data.map(e => {
      if(e.paymentStatus === 'Paid' && this.title === 'Paid Connections') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }else if(e.paymentStatus === 'Over Due' && this.title === 'Over Dues Connections') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }else if(this.title === 'Total Connections') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }else if(this.title === 'Domestic Connections' && e.connectionType === 'Domestic') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }else if(this.title === 'Commercial Connections' && e.connectionType === 'Commercial') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }else if(this.title === 'Pending Service Request' && e.paymentStatus === 'Pending SR') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }else if(this.title === 'Pending Complaints' && e.paymentStatus === 'Pending Complain') {
        filteredData.push(e);
        this.dataSource = new MatTableDataSource(filteredData);  
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(filterValue)
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  valuesIn(e: any) {
    if(e.value === 'Paid') {
      return ' text-ctmclr';
     } else if(e.value === 'Disconnected') {
      return ' text-danger';
     } else if(e.value === 'Over Due') {
      return ' text-warning';
     }
  }
  onRowClick(event: any) {
    // console.log(event.row);
    this.route.navigate([`pages/table/detail/${event.accountNumber}`])
  }
}
