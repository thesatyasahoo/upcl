import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

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
  connectionType: Array<any> = [];
  desiredLoadMetrice: Array<any> = [];
  category: Array<any> = [];
  serviceLineType: Array<any> = [];
  supplyVoltages: Array<any> = [];
  fixedForm: FormGroup;
  dataSource: MatTableDataSource<UserData> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(FixedCosEstimatorCalculatorComponent, { static: true }) table: FixedCosEstimatorCalculatorComponent = Object.create(null);
  constructor(private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder, private service: PageService) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    this.fixedForm = this.fb.group({
      "loadType":"",
      "supplyVoltage":"",
      "categoryId":"",
      "lineLength":"",
      "serviceLine":"",
      "metric":"",
      "loadApplied":""
    })
  }
  ngOnInit(): void {
    this.getFixedCostEstimation();
  }

  ngAfterViewInit() {
  }
  
  async getFixedCostEstimation() {
    return (await this.service.fixedCostEstimation()).subscribe((e: any) => {
      console.log(e)
      this.connectionType = e.connectionTypes;
      this.serviceLineType = e.serviceLineTypes;
      this.desiredLoadMetrice = e.desiredLoadMetrices;
      this.category = e.categories;
      this.supplyVoltages = e.supplyVoltage
    })
  }

  async getShowDemandCalculation() {
    return (await this.service.ShowDemandCalculation(this.fixedForm.value)).subscribe((e: any) => {
      // console.log(e)
    })
  }
}
