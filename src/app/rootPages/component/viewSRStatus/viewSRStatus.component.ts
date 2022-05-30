import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any;
const Data: any = require('./ViewSRStatus.json');
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
  selector: 'app-viewSRStatus',
  templateUrl: './viewSRStatus.component.html',
  styleUrls: ['./viewSRStatus.component.scss'],
})
export class ViewSRStatusComponent implements OnInit{

  loadingIndicator = true;
 
  
  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    
  }
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    // });
  }

  check(){
    this.router.navigate(['/'])
  }

  
}
