import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

declare var require: any;
const data: any = require('./serviceRequest.json');
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-serviceRequest',
  templateUrl: './serviceRequest.component.html',
  styleUrls: ['./serviceRequest.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
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
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private router: Router, private service: PageService) {
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
      "billMonthOrYear": [""],
      "tempDiconnection": [""],
      "complaint_Details": ["", Validators.required],
    })
    // this.getServiceTypeDetails();
    // this.getServiceDetails();
    // this.getSubstationDetails();
    // this.getServiceRegistration();
  }
  complaintType = new FormControl('', [Validators.required]);
  complaint = new FormControl('', [Validators.required]);
  billMonthOrYear = new FormControl('');
  subdtation = new FormControl('', [Validators.required]);
  tempDiconnection = new FormControl('');
  complaint_Details = new FormControl('', [Validators.required]);
  billField: boolean = false;
  tempConnField: boolean = false;
  subdtationModel: string = "";
  billMonthOrYearModel: string = "";
  complaintModel: string = "";
  complaintTypeModel: string = "";
  tempDiconnectionS: string = "";
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
  getErrorMessagebillMonthOrYear(): any {
    return this.subdtation.hasError('required')
      ? 'You must select a value'
      : this.subdtation.hasError('subdtation')
      ? 'Not a valid billMonthOrYear'
      : '';
  }

  getErrorMessagetempDiconnection(): any {
    return this.subdtation.hasError('required')
      ? 'You must select a value'
      : this.subdtation.hasError('subdtation')
      ? 'Not a valid billMonthOrYear'
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
  changeSRType(event: any) {
    console.log(event.value)
    if(event.value === 'OTHER CUSTOMER SERVICES') {
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = false;
      this.tempConnField = false;
      this.complaintsData = [
        {
          name: 'Select',
          value: 'Select',
        },
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
      this.tempConnField = false;
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.complaintsData = [
        {
          name: '',
          value: '',
        },
      ];
    } else if(event.value === 'METERING RELATED') {
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = false;
      this.tempConnField = false;
      this.complaintsData = [
        {
          name: 'Select',
          value: 'Select',
        },
        {
          name: 'SHIFTING OF METER',
          value: 'SHIFTING OF METER',
        },
      ];
    }
  }
  changeSR(event: any) {
    console.log(event.value)
    if(event.value === 'LOAD ENHANCEMENT') {
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = false;
      this.tempConnField = false;
      this.changeSubstation = [
        {
          name: 'Select',
          value: 'Select',
        },
        {
          name: 'TURNEROAD',
          value: 'TURNEROAD',
        }
      ]
      localStorage.removeItem('drpValue');
      localStorage.setItem('drpValue', 'LOAD ENHANCEMENT');
      this.router.navigateByUrl('/newConnection');
    } else if(event.value === 'TEMPORARY DISCONNECTION') {
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = false;
      this.tempConnField = true;
      this.tempDiconnectionS = "";
      this.changeSubstation = [
        {
          name: 'Select',
          value: 'Select',
        },
        {
          name: 'TURNEROAD',
          value: 'TURNEROAD'
        },
      ]
    } else if(event.value === 'OTHER COMPLAINTS') {
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = false;
      this.tempConnField = false;
      this.changeSubstation = [
        {
          name: 'Select',
          value: 'Select',
        },
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
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = true;
      this.tempConnField = false;
      this.changeSubstation = [
        {
          name: 'Select',
          value: 'Select',
        },
        {
          name: 'TURNEROAD',
          value: 'TURNEROAD'
        },
      ];
    } else if(event.value === 'SHIFTING OF METER') {
      this.subdtationModel ="";
      this.billMonthOrYearModel ="";
      this.complaintModel ="";
      this.billField = false;
      this.tempConnField = false;
      this.changeSubstation = [
        {
          name: 'Select',
          value: 'Select',
        },
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

  // async getServiceTypeDetails() {
  //   return await (await this.service.serviceTypeDetails()).subscribe((e: any) => {
  //     console.log(e)
  //   })
  // }

  // async getServiceDetails() {
  //   return await (await this.service.serviceDetails()).subscribe((e: any) => {
  //     console.log(e)
  //   })
  // }

  // async getSubstationDetails() {
  //   return await (await this.service.substationDetails()).subscribe((e: any) => {
  //     console.log(e)
  //   })
  // }

  // async getServiceRegistration() {
  //   return await (await this.service.serviceRegistration()).subscribe((e: any) => {
  //     console.log(e)
  //   })
  // }
}
