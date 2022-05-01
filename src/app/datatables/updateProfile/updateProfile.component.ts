import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare var require: any;
const data: any = require('./updateProfile.json');

@Component({
  selector: 'app-updateProfile',
  templateUrl: './updateProfile.component.html',
  styleUrls: ['./updateProfile.component.scss'],
})
export class UpdateProfileComponent implements OnInit{
  options!: FormGroup;
  editing = {};
  rows: any[]= [];
  temp = [...data];
  id: any;
  totalData: any[] = [];
  complaintsData: any =[]
  secretAnswerData : any =[]

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

  @ViewChild(UpdateProfileComponent, { static: true }) table: UpdateProfileComponent = Object.create(null);
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
      "mobile": ["", Validators.required],
      "primaryemail ": ["", Validators.required],
      "secretQuestion": ["", Validators.required],
      "secretAnswer": ["", Validators.required],
    })
    this.secretAnswerData = [
      {
        name: 'What is your Pet Name',
        value: 'What is your Pet Name',
      },
      {
        name: 'My Primary School',
        value: 'My Primary School'
      },
      {
        name: 'What is your Strength',
        value: 'What is your Strength'
      },
      {
        name: 'My First Mobile Number',
        value: 'My First Mobile Number'
      },
      {
        name: 'My Best Teacher',
        value: 'My Best Teacher'
      },
      {
        name: 'Type your own question',
        value: 'Type your own question'
      }
    ];
  }
  mobile = new FormControl('', [Validators.required]);
  primaryemail = new FormControl('', [Validators.required]);
  secretQuestion = new FormControl('', [Validators.required]);
  secretAnswer = new FormControl('', [Validators.required]);

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

  getErrorMessagemobile(): any {
    return this.mobile.hasError('required')
      ? 'You must select a value'
      : this.mobile.hasError('mobile')
      ? 'Not a valid mobile'
      : '';
  }
  getErrorMessageprimaryemail(): any {
    return this.primaryemail.hasError('required')
      ? 'You must select a value'
      : this.primaryemail.hasError('primaryemail')
      ? 'Not a valid primaryemail'
      : '';
  }
  getErrorMessagesecretQuestion(): any {
    return this.secretQuestion.hasError('required')
      ? 'You must select a value'
      : this.secretQuestion.hasError('secretQuestion')
      ? 'Not a valid secretQuestion'
      : '';
  }
  getErrorMessagesecretAnswer(): any {
    return this.secretAnswer.hasError('required')
      ? 'You must enter a value'
      : this.secretAnswer.hasError('secretAnswer')
      ? 'Not a valid secretAnswer'
      : '';
  }
}
