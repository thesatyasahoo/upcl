import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any;
const Data: any = require('./consumptionbillHistory.json');
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
  selector: 'app-consumptionbillHistory',
  templateUrl: './consumptionbillHistory.component.html',
  styleUrls: ['./consumptionbillHistory.component.scss'],
})
export class ConsumptionbillHistoryComponent implements OnInit {
  editing = {};
  rows: any[] = [];
  temp = [...Data.consumptionDetailsList];
  id: any;
  totalData: any[] = [];
  fromFdate: any = null;
  toFdate: any = null;
  totaldates: any[] = [];
  dateForm: FormGroup | undefined;

  loadingIndicator = true;
  reorderable = true;
  displayedColumns: string[] = [
    'readingDate',
    'numberOfDays',
    'previousReading',
    'presentReading',
    'meterStatus',
    'billUnits',
    'arrear',
    'totalCharge',
  ];
  dataSource: MatTableDataSource<UserData> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(ConsumptionbillHistoryComponent, { static: true })
  table: ConsumptionbillHistoryComponent = Object.create(null);
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      this.id = params['id'];
      this.totalData = [];
      Data.consumptionDetailsList.map((e: any) => {
        // console.log(e, this.id)
        if (this.id === e.accountNumber) {
          // console.log(e)
          this.totalData.push(e);
          this.totaldates.push(new Date(e.readingDate).toLocaleDateString())
        } else {
          this.totalData.push(e);
          this.id = e.accountNumber;
          this.totaldates.push(new Date(e.readingDate).toLocaleDateString())
        }
      });
      this.dataSource = new MatTableDataSource(this.totalData);
      this.rows = this.totalData;
      this.temp = [...this.totalData];
    });
    this.dateForm = this.fb.group({
      'fromDate' : new FormControl("", [Validators.required]),
      'toDate' : new FormControl("", [Validators.required]),
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  valuesIn(e: any) {
    if (e.value === 'Paid') {
      return ' text-ctmclr';
    } else if (e.value === 'Disconnected') {
      return ' text-danger';
    } else if (e.value === 'Pending') {
      return ' text-warning';
    }
  }
  onRowClick(event: any) {
    console.log(event.row);
    this.router.navigate([`pages/table/detail/${event.accountNumber}`]);
  }

  getDataByDate() {
    const fromFinalDate: any = this.dateForm?.value.fromDate;
    const toFinalDate: any = this.dateForm?.value.toDate;
    console.log(this.fromFdate);
    console.log(this.toFdate);
    if (fromFinalDate !== null && toFinalDate !== null) {
      // console.log(this.fromDate, this.toDate);
      this.getDates(fromFinalDate, toFinalDate);
      this.dateForm?.reset();
    } else {
      alert('Please fill required date fields.');
    }
  }

  getDates(startDate: any, stopDate: any) {
    let dates: any = [];
    //to avoid modifying the original date
    // console.log(startDate, stopDate)
    while (startDate < stopDate) {
      dates = [...dates, startDate.toLocaleDateString()];
      startDate.setDate(startDate.getDate() + 1);
    }
    // console.log(dates, this.totaldates)
    const finaldates: any[] = this.getArraysIntersection(dates, this.totaldates);
    console.log(finaldates)
    let finalData = this.totalData.filter((c) => finaldates.includes(new Date(c.readingDate).toLocaleDateString())).sort();
    this.dataSource = new MatTableDataSource(finalData);
  }
  addEvent(event: any) {
    // console.log(event.value);
    return this.dateForm?.patchValue({fromDate: event.value});
  }
  addEvent1(event: any) {
    // console.log(event.value);
    return this.dateForm?.patchValue({toDate: event.value});
  }

  clear() {
    const empty: any[] = [];
    this.dateForm?.patchValue({fromDate: null,toDate: null});
    this.fromFdate = null;
    this.toFdate = null;
    this.dataSource = new MatTableDataSource(empty);
    return this.dataSource = new MatTableDataSource(this.totalData);
  }
  getArraysIntersection(a1: any[],a2: any[]){
    return a1.filter((x) => a2.includes(x));
  }
}
