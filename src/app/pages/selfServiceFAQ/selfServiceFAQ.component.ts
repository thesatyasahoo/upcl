import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any;
const Data: any = require('./selfServiceFAQ.json');
export interface UserData {

}
@Component({
  selector: 'app-selfServiceFAQ',
  templateUrl: './selfServiceFAQ.component.html',
  styleUrls: ['./selfServiceFAQ.component.scss'],
})
export class SelfServiceFAQComponent implements OnInit{
  panelOpenState = false;
  loadingIndicator = true;
  reorderable = true;
  faqsData: any[] = [];
  expandAll: boolean = false;
  step?: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    
  }
  ngOnInit(): void {
    Data.FAQs.map((e: any) => {
      this.faqsData.push(e)
    })
  }

  open(e: any) {
    console.log(e)
    this.step = e;
  }
  collapseall() {
    this.step = undefined;
  }
}
