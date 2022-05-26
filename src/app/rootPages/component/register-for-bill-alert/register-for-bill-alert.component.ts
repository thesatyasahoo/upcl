import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any;
const Data: any = require('./register-for-bill-alert.json');
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
  selector: 'app-register-for-bill-alert',
  templateUrl: './register-for-bill-alert.component.html',
  styleUrls: ['./register-for-bill-alert.component.scss'],
})
export class RegisterForBillAlertComponent implements OnInit{
  editing = {};
  rows: any[]= [];
  temp = [...Data];
  id: any;
  totalData: any[] = [];
  panelOpenState: boolean = false;

  loadingIndicator = true;
  reorderable = true;
  displayedColumns: string[] = [
    'accountNumber',
    'serviceConnNumber',
    'name',
    'address',
    'serviceStatus',
    'dueDate',
    'netPaybleAmount',
    'paymentStatus',
  ];
  dataSource: MatTableDataSource<UserData> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(RegisterForBillAlertComponent, { static: true }) table: RegisterForBillAlertComponent = Object.create(null);
  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];
      Data.map((e: any) => {
        // console.log(e, this.id)
        if (this.id === e.accountNumber) {
          console.log(e)
          this.totalData.push(e)
        }
      })
      this.dataSource = new MatTableDataSource(this.totalData);
      this.rows = this.totalData;
      this.temp = [...this.totalData];
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    this.router.navigate([`pages/table/detail/${event.accountNumber}`])
  }
}
