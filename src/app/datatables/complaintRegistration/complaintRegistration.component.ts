import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare var require: any;
const data: any = require('./complaintRegistration.json');

@Component({
  selector: 'app-complaintRegistration',
  templateUrl: './complaintRegistration.component.html',
  styleUrls: ['./complaintRegistration.component.scss'],
})
export class ComplaintRegistrationComponent implements OnInit{
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

  @ViewChild(ComplaintRegistrationComponent, { static: true }) table: ComplaintRegistrationComponent = Object.create(null);
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
  changeComplaint(event: any) {
    console.log(event.value)
    if(event.value === 'POWER_SUPPLY_FAILURE') {
      this.complaintsData = [
        {
          name: 'DISTRIBUTION TRANSFORMER FAILED/BURNT',
          value: 'DISTRIBUTION TRANSFORMER FAILED/BURNT',
        },
        {
          name: 'SERVICE LINE BROKEN/SERVICE LINE SNAPPED FROM POLE',
          value: 'SERVICE LINE BROKEN/SERVICE LINE SNAPPED FROM POLE'
        },
        {
          name: 'Problem in grid (33kV or 66 kV) Sbbstation',
          value: 'Problem in grid (33kV or 66 kV) Sbbstation'
        }
      ];
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
      ]
    } else if(event.value === 'VOLTAGE_FLUCTUATION') {
      this.complaintsData = [
        {
          name: 'VF LOCAL PROBLEM',
          value: 'VF LOCAL PROBLEM'
        },
        {
          name: 'VF TAP OF TRANSFORMER',
          value: 'VF TAP OF TRANSFORMER'
        },
        {
          name: 'VF REPAIR OF DIST. LINE/TRANSFORMER/CAPACITOR',
          value: 'VF REPAIR OF DIST. LINE/TRANSFORMER/CAPACITOR'
        },
        {
          name: 'VF INSTALLATION & UPGRADATION OF HT / LT SYSTEM',
          value: 'VF INSTALLATION & UPGRADATION OF HT / LT SYSTEM'
        }
      ];
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
      ]
    } else if(event.value === 'meter_no_display') {
      this.complaintsData = [
        {
          name: 'SELECT',
          value: 'SELECT',
        },
      ];
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
      ]
    } else if(event.value === 'ONLINE_PAYMENT_COMPLAINT') {
      this.complaintsData = [
        {
          name: 'ONLINE CONSUMER COMPLAINT',
          value: 'ONLINE CONSUMER COMPLAINT'
        },
      ];
      this.changeSubstation = [
        {
          name: 'DEHRADUN_SOUTH',
          value: 'DEHRADUN_SOUTH',
        }
      ]
    } else if(event.value === 'DISCONNECTION/RECONNECTION_OF_SUPPLY') {
      this.complaintsData = [
        {
          name: 'ONLINE CONSUMER COMPLAINT',
          value: 'ONLINE CONSUMER COMPLAINT'
        },
      ];
      this.changeSubstation = [
        {
          name: 'DEHRADUN_SOUTH',
          value: 'DEHRADUN_SOUTH',
        }
      ];
    } else if(event.value === 'WSS_RELATED_COMPLAINTS') {
      this.complaintsData = [
        {
          name: 'ONLINE PAYMENT RELATED',
          value: 'ONLINE PAYMENT RELATED'
        },
        {
          name: 'NSC REGISTRATION RELATED',
          value: 'NSC REGISTRATION RELATED'
        },
        {
          name: 'BILL PREVIEW RELATED',
          value: 'BILL PREVIEW RELATED'
        },
        {
          name: 'CONSUMER LOGIN RELATED',
          value: 'CONSUMER LOGIN RELATED'
        },
        {
          name: 'OTHER WSS COMPLAINTS',
          value: 'OTHER WSS COMPLAINTS'
        },
      ];
      this.changeSubstation = [
        {
          name: 'DEHRADUN_SOUTH',
          value: 'DEHRADUN_SOUTH',
        }
      ];
    }
  }
}
