import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

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
const Data: UserData[] = require('./viewStatus.json');
@Component({
  selector: 'app-viewStatus',
  templateUrl: './viewStatus.component.html',
  styleUrls: ['./viewStatus.component.scss'],
})
export class ViewStatusComponent {
  title: any = localStorage.getItem('tableName');
  nameData: string[] = [];
  displayedColumns: string[] = ['complaintRegistrationNumber', 'complainantName', 'complaintRegisteredOn', 'complaintDetails', 'complaintStatus', 'links'];
  displayedColumns1: string[] = ['serviceRequestRegistrationNumber', 'serviceRequestMadeBy', 'serviceRequestRegisteredOn', 'serviceRequestDetails', 'serviceRequestStatus', 'links'];

  dataSource: any;
  dataSource1: any;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  constructor(private route: Router, private service: PageService) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(Data);
  }
  ngOnInit(): void {
    this.getViewStatusComplaintStatus();
    this.getViewStatusServiceReqStatus();
    // throw new Error('Method not implemented.');
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(filterValue)
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  applyFilter1(event: Event) {
    const filterValue1 = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue1.trim().toLowerCase();
    // console.log(filterValue)
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  valuesIn(e: any) {
    if (e.value === 'Paid') {
      return ' text-ctmclr';
    } else if (e.value === 'Disconnected') {
      return ' text-danger';
    } else if (e.value === 'Over Due') {
      return ' text-warning';
    }
  }
  onRowClick(event: any) {
    // console.log(event.row);
    this.route.navigate([`pages/table/detail/${event.accountNumber}`]);
  }

  async getViewStatusComplaintStatus() {
    let filteredData: any[] = [];
    return (await this.service.viewStatusComplaintStatus()).subscribe((e: any) => {
      console.log(e)
      e.complaintsStatus.map((r: any) => {
        filteredData.push(r);
      });
      this.dataSource = new MatTableDataSource(filteredData);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    });
  }

  async getViewStatusServiceReqStatus() {
    let filteredData1: any[] = [];
    return (await this.service.viewStatusServiceReqStatus()).subscribe((e: any) => {
      console.log(e)
      e.serviceRequestDetails.map((r: any) => {
        filteredData1.push(r);
      });
      this.dataSource1 = new MatTableDataSource(filteredData1);
      this.dataSource1.paginator = this.paginator.toArray()[1];
      this.dataSource1.sort = this.sort.toArray()[1];
    });
  }
}
