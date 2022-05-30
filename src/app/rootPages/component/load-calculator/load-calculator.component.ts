import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

declare var require: any;
const Data: any = require('./load-calculator.json');
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
  selector: 'app-load-calculator',
  templateUrl: './load-calculator.component.html',
  styleUrls: ['./load-calculator.component.scss'],
})
export class LoadCalculatorComponent implements OnInit{
  editing = {};
  rows: any[]= [];
  temp = [...Data];
  id: any;
  totalData: any[] = [];
  panelOpenState: boolean = false;

  units: Array<any> = [
    {value: 'KW', viewValue: 'KW'},
    {value: 'Lorem-1', viewValue: 'Lorem'},
    {value: 'Lorem-2', viewValue: 'Lorem'},
  ];

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
  constructor(private route: ActivatedRoute, private router: Router, private service: PageService) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    
  }
  ngOnInit(): void {
    this.getCalculatorDetails()
  }

  ngAfterViewInit() {
  }
  
  onRowClick(event: any) {
    console.log(event.row);
    this.router.navigate([`pages/table/detail/${event.accountNumber}`])
  }

  async getCalculatorDetails() {
    return (await this.service.loadCalculator()).subscribe((e: any) => {
      // console.log(e)
      this.totalData = e.loadCalculationData;
    });
  }
  
}
