import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare var require: any;
const data: any = require('./changePassword.json');

@Component({
  selector: 'app-changePassword',
  templateUrl: './changePassword.component.html',
  styleUrls: ['./changePassword.component.scss'],
})
export class ChangePasswordComponent implements OnInit{
  public barLabel: string = "Password strength:"; 
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

  @ViewChild(ChangePasswordComponent, { static: true }) table: ChangePasswordComponent = Object.create(null);
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
      "old_password": ["", Validators.required],
      "password ": ["", Validators.required],
      "confirm_password": ["", Validators.required],
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
  old_password = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [Validators.required]);

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

  getErrorMessageoldPassword(): any {
    return this.old_password.hasError('required')
      ? 'You must select a value'
      : this.old_password.hasError('old_password')
      ? 'Not a valid old_password'
      : '';
  }
  getErrorMessagenewPassword(): any {
    return this.password.hasError('required')
      ? 'You must select a value'
      : this.password.hasError('password')
      ? 'Not a valid password'
      : '';
  }
  getErrorMessageconfirmPassword(): any {
    return this.confirm_password.hasError('required')
      ? 'You must select a value'
      : this.confirm_password.hasError('confirm_password')
      ? 'Not a valid confirm password'
      : '';
  }
}
