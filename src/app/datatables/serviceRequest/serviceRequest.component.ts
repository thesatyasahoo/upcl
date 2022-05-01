import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare var require: any;
const data: any = require('./serviceRequest.json');

@Component({
  selector: 'app-serviceRequest',
  templateUrl: './serviceRequest.component.html',
  styleUrls: ['./serviceRequest.component.scss'],
})
export class ServiceRequestComponent implements OnInit{
  options!: FormGroup;
  editing = {};
  rows: any[]= [];
  temp = [...data];
  id: any;
  totalData: any[] = [];
  complaintsData: any =[]
  changeSubstation : any =[]

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'accountNumber', name: 'Account Number' },
    { prop: 'serviceConnNumber', name: 'Service Connection Number' },
    { prop: 'name', name: 'Name' },
    { prop: 'address', name: 'Address' },
    { prop: 'serviceStatus', name: 'Service Status' },
    { prop: 'dueDate', name: 'Due Date' },
    { prop: 'netPaybleAmount', name: 'Net Payble Amount' },
    { prop: 'paymentStatus', name: 'Payment Status', cellClass: this.valuesIn },
  ];

  @ViewChild(ServiceRequestComponent, { static: true }) table: ServiceRequestComponent = Object.create(null);
  constructor(private route: ActivatedRoute,private fb: FormBuilder) {
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];
      data.map((e: any) => {
        // console.log(e, this.id)
        if (this.id === e.accountNumber) {
          console.log(e)
          this.totalData.push(e)
        }
      })
      this.rows = this.totalData;
      this.temp = [...this.totalData];
    });
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.options = this.fb.group({
      "complaintType": ["", Validators.required],
      "complaint": ["", Validators.required],
      "subdtation": ["", Validators.required],
      "complaint_Details": ["", Validators.required],
    })
  }
  complaintType = new FormControl('', [Validators.required]);
  complaint = new FormControl('', [Validators.required]);
  subdtation = new FormControl('', [Validators.required]);
  complaint_Details = new FormControl('', [Validators.required]);

  hide = true;
  updateFilter(event: any): void {
    const val = event.target.value.toLowerCase();
  }
  valuesIn(e: any) {
    // if(e.value === 'Paid') {
    //   return ' text-ctmclr';
    //  } else if(e.value === 'Disconnected') {
    //   return ' text-danger';
    //  } else if(e.value === 'Pending') {
    //   return ' text-warning';
    //  }
  }

  getErrorMessagecomplaintType(): any {
    return this.complaintType.hasError('required')
      ? 'You must select a value'
      : this.complaintType.hasError('complaintType')
      ? 'Not a valid complaintType'
      : '';
  }
  getErrorMessagecomplaint(): any {
    return this.complaint.hasError('required')
      ? 'You must select a value'
      : this.complaint.hasError('complaint')
      ? 'Not a valid complaintTypeSubMenu'
      : '';
  }
  getErrorMessagesubdtation(): any {
    return this.subdtation.hasError('required')
      ? 'You must select a value'
      : this.subdtation.hasError('subdtation')
      ? 'Not a valid subdtation'
      : '';
  }
  getErrorMessagecomplaint_Details(): any {
    return this.subdtation.hasError('required')
      ? 'You must enter a value'
      : this.subdtation.hasError('complaint_Details')
      ? 'Not a valid complaint_Details'
      : '';
  }
  changeComplaintType(event: any) {
    console.log(event.value)
    if(event.value === 'OTHER CUSTOMER SERVICES') {
      this.complaintsData = [
        {
          name: 'LOAD ENHANCEMENT',
          value: 'LOAD ENHANCEMENT',
        },
        {
          name: 'TEMPORARY DISCONNECTION',
          value: 'TEMPORARY DISCONNECTION'
        },
        {
          name: 'OTHER COMPLAINTS',
          value: 'OTHER COMPLAINTS'
        }
      ];
    } else if(event.value === 'BILLING RELATED') {
      this.complaintsData = [
        {
          name: 'BILL REVISION',
          value: 'BILL REVISION'
        },
      ];
    } else if(event.value === 'METERING RELATED') {
      this.complaintsData = [
        {
          name: 'SHIFTING OF METER',
          value: 'SHIFTING OF METER',
        },
      ];
    }
  }
  changeComplaint(event: any) {
    console.log(event.value)
    if(event.value === 'LOAD ENHANCEMENT') {
      this.changeSubstation = [
        {
          name: 'TURNEROAD',
          value: 'TURNEROAD',
        }
      ]
    } else if(event.value === 'TEMPORARY DISCONNECTION') {
      this.changeSubstation = [
        {
          name: 'TURNEROAD',
          value: 'TURNEROAD'
        },
      ]
    } else if(event.value === 'OTHER COMPLAINTS') {
      this.changeSubstation = [
        {
          name: 'KARGI',
          value: 'KARGI',
        },
        {
          name: 'TURNER ROAD',
          value: 'TURNER ROAD',
        },
        {
          name: 'TURNER ROAD 2',
          value: 'TURNER ROAD 2',
        },
        {
          name: '33 KV SS MOTHROWALA',
          value: '33 KV SS MOTHROWALA',
        }
      ];
    } else if(event.value === 'BILL REVISION') {
      this.changeSubstation = [
        {
          name: 'TURNEROAD',
          value: 'TURNEROAD'
        },
      ];
    } else if(event.value === 'SHIFTING OF METER') {
      this.changeSubstation = [
        {
          name: 'KARGI',
          value: 'KARGI',
        },
        {
          name: 'TURNER ROAD',
          value: 'TURNER ROAD',
        },
        {
          name: 'TURNER ROAD 2',
          value: 'TURNER ROAD 2',
        },
        {
          name: '33 KV SS MOTHROWALA',
          value: '33 KV SS MOTHROWALA',
        }
      ];
    }
  }
}
