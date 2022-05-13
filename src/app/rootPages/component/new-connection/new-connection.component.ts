import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-connection',
  templateUrl: './new-connection.component.html',
  styleUrls: ['./new-connection.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class NewConnectionComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  requestType: any[] = [
    {value: '1000-1', viewValue: 'NEW CONNECTION'},
    {value: '1000-2', viewValue: 'TEMPORARY'},
    {value: '1000-3', viewValue: 'LOAD ENHANCEMENT'},
    {value: '1000-4', viewValue: 'TEMPORARY TO PERMANENT'},
    {value: '1000-5', viewValue: 'OFFGRID CONNECTION'},
    {value: '1000-6', viewValue: 'TATKAL'},
  ];
  services: any[] = [
    {value: '000-1', viewValue: 'INDIVIDUAL'},
    {value: '000-2', viewValue: 'ORGANIZATION'},
    {value: '000-3', viewValue: 'OTHERS'},
  ];
  lendmarks: any[] = [
    {value: 'POLE', viewValue: 'Pole No'},
    {value: 'DTR', viewValue: 'DTR No'},
    {value: 'NEIGHBOURNO', viewValue: 'Nearest Neighbour No'},
  ];
  category: any[] = [
    {value: '100-1', viewValue: 'DOMESTIC'},
    {value: '100-2', viewValue: 'NON DOMESTIC'},
    {value: '100-3', viewValue: 'PUBLIC LIGHTING'},
    {value: '100-4', viewValue: 'SNOWBOUND'},
    {value: '100-5', viewValue: 'PRIVATE TUBE WELLS/PUMPING SETS'},
    {value: '100-6', viewValue: 'GOVERNMENT IRRIGATION SYSTEM'},
    {value: '100-7', viewValue: 'PUBLIC WATER WORKS'},
    {value: '100-8', viewValue: 'NEW RTS-6 MIXED  LOAD'},
    {value: '100-9', viewValue: 'NEW RTS-7 RAILWAY TRACTION'},
    {value: '100-10', viewValue: 'NEW RTS-5 INDUSTRIAL SUPPLY'},
    {value: '100-11', viewValue: 'NEW RTS-8 ELECTRIC VEHICLE'},
  ];
  suplyCategory: any[] = [
    {value: '100-34', viewValue: 'OTHER DOMESTIC LOAD ABOVE 4KW'},
    {value: '100-47', viewValue: 'SINGLE POINT BULK SUPPLY ABOVE 75 KW'},
    {value: '100-138', viewValue: 'TOD OTHER DOMESTIC LOAD ABOVE 4KW'},
  ];
  unit: any[] = [
    {value: '100-1', viewValue: 'KW'},
    {value: '100-2', viewValue: 'HP'},
    {value: '100-3', viewValue: 'KVA'},
  ];
  voltzAmount: any[] = [
    {value: '100-12', viewValue: '11KV'},
    {value: '100-14', viewValue: '33KV'},
    {value: '100-19', viewValue: '132KV'},
    {value: '100-20', viewValue: '220KV'},
  ];
  purpose: any[] = [
    {value: '100-158', viewValue: 'HILL AREA'},
    {value: '100-392', viewValue: 'INDIVIDUAL CONSUMER'},
    {value: '100-157', viewValue: 'PLAIN AREA'},
    {value: '100-2', viewValue: 'SINGLE PONT BULK SUPPLY'},
  ];
  title: any[] = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Ms', viewValue: 'Ms'},
    {value: 'Mrs', viewValue: 'Mrs'},
  ];
  ownerTitle: any[] = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Ms', viewValue: 'Ms'},
    {value: 'Mrs', viewValue: 'Mrs'},
  ];
  dend: any[] = [
    {value: 'S/O', viewValue: 'S/O'},
    {value: 'D/O', viewValue: 'D/O'},
    {value: 'W/O', viewValue: 'W/O'},
    {value: 'C/O', viewValue: 'C/O'},
  ];
  dendOf: any[] = [
    {value: 'Owner', viewValue: 'Owner'},
    {value: 'Director', viewValue: 'Director'},
    {value: 'Prop.', viewValue: 'Prop.'},
  ];
  district: any[] = [
    {value: 'DEHRADUN', viewValue: 'DEHRADUN'},
    {value: 'U.S NAGAR', viewValue: 'U.S NAGAR'},
    {value: 'ALMORA', viewValue: 'ALMORA'},
    {value: 'TEHRI', viewValue: 'TEHRI'},
    {value: 'PAURI', viewValue: 'PAURI'},
    {value: 'NAINITAL', viewValue: 'NAINITAL'},
    {value: 'PITHORAGARH', viewValue: 'PITHORAGARH'},
    {value: 'CHAMPAWAT', viewValue: 'CHAMPAWAT'},
    {value: 'CHAMOLI', viewValue: 'CHAMOLI'},
    {value: 'HARIDWAR', viewValue: 'HARIDWAR'},
    {value: 'UTTARKASHI', viewValue: 'UTTARKASHI'},
    {value: 'RUDRAPRAYAG', viewValue: 'RUDRAPRAYAG'},
    {value: 'BAGESHWAR', viewValue: 'BAGESHWAR'},
  ];
  ofcDetails = false;
  selectLendmark: string = '';
  poleNumber: string= '';
  contractedLoad: string= '';
  plotSize: string= '';
  buildUpArea: string= '';
  applicantName: string= '';
  applicantDendName: string= '';
  ownerName: string= '';
  sameAddress:boolean = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      requestType: ['', Validators.required],
      service: ['', Validators.required],
      ofcDetail: ['', Validators.required],
      lendmark: ['', Validators.required],
      poleNo: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      mainCategory: ['', Validators.required],
      suplyCategory: ['', Validators.required],
      contractedLoad: ['', Validators.required],
      unit: ['', Validators.required],
      dateOfApplicant: ['', Validators.required],
      voltAmount: ['', Validators.required],
      plotSize: ['', Validators.required],
      buildUpArea: ['', Validators.required],
      purpose: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      applicantName: ['', Validators.required],
      applicantDendName: ['', Validators.required],
      title: ['', Validators.required],
      contractedLoad: ['', Validators.required],
      dendOfApplicant: ['', Validators.required],
      dendOf: ['', Validators.required],
      ownerName: ['', Validators.required],
      ownerTitle: ['', Validators.required],
      houseOrPlot: ['', Validators.required],
      streetName: ['', Validators.required],
      colonyName: ['', Validators.required],
      district: ['', Validators.required],
      residancePhone: ['', Validators.required],
      faxnumber: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      pincode: ['', Validators.required],
      pan: ['', Validators.required],
      sameAddress: [''],
    });
  }

}
