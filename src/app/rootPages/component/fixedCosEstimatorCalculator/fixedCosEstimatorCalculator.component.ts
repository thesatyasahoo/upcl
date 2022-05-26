import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any;
const Data: any = require('./fixedCosEstimatorCalculator.json');
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
  selector: 'app-fixedCosEstimatorCalculator',
  templateUrl: './fixedCosEstimatorCalculator.component.html',
  styleUrls: ['./fixedCosEstimatorCalculator.component.scss'],
})
export class FixedCosEstimatorCalculatorComponent implements OnInit{
  loadingIndicator = true;
  connectionType: Array<any> = [
    {value: 'LT', viewValue: 'LT'},
    {value: 'LTC', viewValue: 'LTC'},
    {value: 'LTCA', viewValue: 'LTCA'},
  ];
  units: Array<any> = [
    {value: 'KW', viewValue: 'KW'},
    {value: 'M', viewValue: 'M'},
    {value: 'MT', viewValue: 'MT'},
  ];
  category: Array<any> = [
    {value: 'Domestic', viewValue: 'Domestic'},
    {value: 'Comercial', viewValue: 'Comercial'},
  ];
  sLdesired: Array<any> = [
    {value: 'OVERHEAD', viewValue: 'OVERHEAD'},
    {value: 'Lorem', viewValue: 'Lorem'},
  ];
  dataSource: MatTableDataSource<UserData> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(FixedCosEstimatorCalculatorComponent, { static: true }) table: FixedCosEstimatorCalculatorComponent = Object.create(null);
  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }
  
}
