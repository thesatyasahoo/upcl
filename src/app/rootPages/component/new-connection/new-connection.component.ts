import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ReCaptchaV3Service } from 'ngx-captcha';
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
  selector: 'app-new-connection',
  templateUrl: './new-connection.component.html',
  styleUrls: ['./new-connection.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
})
export class NewConnectionComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  requestType: any[] = [
    { value: '1000-1', viewValue: 'NEW CONNECTION' },
    { value: '1000-2', viewValue: 'TEMPORARY' },
    { value: '1000-3', viewValue: 'LOAD ENHANCEMENT' },
    { value: '1000-4', viewValue: 'TEMPORARY TO PERMANENT' },
    { value: '1000-5', viewValue: 'OFFGRID CONNECTION' },
    { value: '1000-6', viewValue: 'TATKAL' },
  ];
  services: any[] = [
    { value: '000-1', viewValue: 'INDIVIDUAL' },
    { value: '000-2', viewValue: 'ORGANIZATION' },
    { value: '000-3', viewValue: 'OTHERS' },
  ];
  lendmarks: any[] = [
    { value: 'POLE', viewValue: 'Pole No' },
    { value: 'DTR', viewValue: 'DTR No' },
    { value: 'NEIGHBOURNO', viewValue: 'Nearest Neighbour No' },
  ];
  category: any[] = [
    { value: '100-1', viewValue: 'DOMESTIC' },
    { value: '100-2', viewValue: 'NON DOMESTIC' },
    { value: '100-3', viewValue: 'PUBLIC LIGHTING' },
    { value: '100-4', viewValue: 'SNOWBOUND' },
    { value: '100-5', viewValue: 'PRIVATE TUBE WELLS/PUMPING SETS' },
    { value: '100-6', viewValue: 'GOVERNMENT IRRIGATION SYSTEM' },
    { value: '100-7', viewValue: 'PUBLIC WATER WORKS' },
    { value: '100-8', viewValue: 'NEW RTS-6 MIXED  LOAD' },
    { value: '100-9', viewValue: 'NEW RTS-7 RAILWAY TRACTION' },
    { value: '100-10', viewValue: 'NEW RTS-5 INDUSTRIAL SUPPLY' },
    { value: '100-11', viewValue: 'NEW RTS-8 ELECTRIC VEHICLE' },
  ];
  suplyCategory: any[] = [
    { value: '100-34', viewValue: 'OTHER DOMESTIC LOAD ABOVE 4KW' },
    { value: '100-47', viewValue: 'SINGLE POINT BULK SUPPLY ABOVE 75 KW' },
    { value: '100-138', viewValue: 'TOD OTHER DOMESTIC LOAD ABOVE 4KW' },
  ];
  unit: any[] = [
    { value: '100-1', viewValue: 'KW' },
    { value: '100-2', viewValue: 'HP' },
    { value: '100-3', viewValue: 'KVA' },
  ];
  voltzAmount: any[] = [
    { value: '100-12', viewValue: '11KV' },
    { value: '100-14', viewValue: '33KV' },
    { value: '100-19', viewValue: '132KV' },
    { value: '100-20', viewValue: '220KV' },
  ];
  purpose: any[] = [
    { value: '100-158', viewValue: 'HILL AREA' },
    { value: '100-392', viewValue: 'INDIVIDUAL CONSUMER' },
    { value: '100-157', viewValue: 'PLAIN AREA' },
    { value: '100-2', viewValue: 'SINGLE PONT BULK SUPPLY' },
  ];
  title: any[] = [
    { value: 'Mr', viewValue: 'Mr' },
    { value: 'Ms', viewValue: 'Ms' },
    { value: 'Mrs', viewValue: 'Mrs' },
  ];
  ownerTitle: any[] = [
    { value: 'Mr', viewValue: 'Mr' },
    { value: 'Ms', viewValue: 'Ms' },
    { value: 'Mrs', viewValue: 'Mrs' },
  ];
  dend: any[] = [
    { value: 'S/O', viewValue: 'S/O' },
    { value: 'D/O', viewValue: 'D/O' },
    { value: 'W/O', viewValue: 'W/O' },
    { value: 'C/O', viewValue: 'C/O' },
  ];
  dendOf: any[] = [
    { value: 'Owner', viewValue: 'Owner' },
    { value: 'Director', viewValue: 'Director' },
    { value: 'Prop.', viewValue: 'Prop.' },
  ];
  district: any[] = [
    { value: 'DEHRADUN', viewValue: 'DEHRADUN' },
    { value: 'U.S NAGAR', viewValue: 'U.S NAGAR' },
    { value: 'ALMORA', viewValue: 'ALMORA' },
    { value: 'TEHRI', viewValue: 'TEHRI' },
    { value: 'PAURI', viewValue: 'PAURI' },
    { value: 'NAINITAL', viewValue: 'NAINITAL' },
    { value: 'PITHORAGARH', viewValue: 'PITHORAGARH' },
    { value: 'CHAMPAWAT', viewValue: 'CHAMPAWAT' },
    { value: 'CHAMOLI', viewValue: 'CHAMOLI' },
    { value: 'HARIDWAR', viewValue: 'HARIDWAR' },
    { value: 'UTTARKASHI', viewValue: 'UTTARKASHI' },
    { value: 'RUDRAPRAYAG', viewValue: 'RUDRAPRAYAG' },
    { value: 'BAGESHWAR', viewValue: 'BAGESHWAR' },
  ];
  ofcDetails = false;
  contactPersonWith = false;
  billingAddress = false;
  selectLendmark: string = '';
  poleNumber: string = '';
  contractedLoad: string = '';
  plotSize: string = '';
  buildUpArea: string = '';
  applicantName: string = '';
  applicantDendName: string = '';
  ownerName: string = '';
  sameAddress: boolean = false;
  tenantOrOccu: string = 'No';
  existElectricityConnection: string = 'No';
  consumerName: string = '';
  contactPersonName: string = '';
  fatherOrHusbandName: string = '';
  nocPolutionCtrlBoard: string = 'No';
  houseOrPlot3: string = '';
  siteKey: string = "";
  drpValue: string | any = "";
  url: any = "../../../../assets/img/user.png" ;
  constructor(private _formBuilder: FormBuilder, private reCaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      requestType: ["", Validators.required],
      service: ['', Validators.required],
      ofcDetail: ['', Validators.required],
      lendmark: [''],
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
      applicantName: [''],
      applicantName1: [''],
      applicantDendName: [''],
      title: [''],
      title1: [''],
      title2: [''],
      title3: [''],
      contractedLoad: [''],
      dendOfApplicant: [''],
      dendOf: [''],
      ownerName: [''],
      ownerTitle: [''],
      houseOrPlot: [''],
      streetName: [''],
      colonyName: [''],
      district: [''],
      residancePhone: [''],
      faxnumber: [''],
      email: [''],
      mobileNumber: [''],
      pincode: [''],
      pan: [''],
      sameAddress: [''],
      houseOrPlot1: [''],
      streetName1: [''],
      colonyName1: [''],
      district1: [''],
      residancePhone1: [''],
      mobileNumber1: [''],
      email1: [''],
      dob: [''],
      pincode1: [''],
      tenantOrOccu: [''],
      houseOrPlot2: [''],
      streetName2: [''],
      colonyName2: [''],
      district2: [''],
      existElectricityConnection: [''],
      srvNo: [''],
      connectionDate: [''],
      consumerName: [''],
      consumertitle: [''],
      fatherOrHusband: [''],
      fatherOrHusbandName: [''],
      nocPolutionCtrlBoard: [''],
      nocOrAppNo: [''],
      nocOrAppName: [''],
      nocOrAppDate: [''],
      contactPersonWith: [''],
      contactPersonName: [''],
      contactPersonDesignation: [''],
      contactPersonResPhone: [''],
      contactPersonResPhone1: [''],
      contactPersonResEmail: [''],
      contactPersonResWebsite: [''],
      contactPersonFaxNo: [''],
      billingAddress: [''],
      houseOrPlot3: [''],
      district3: [''],
      residancePhone2: [''],
      officePhone: [''],
      mobileNumber2: [''],
      faxNumber: [''],
      streetName3: [''],
      applicantName3: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({
      registrationOffice: [''],
      recaptcha: [''],
    });
    // this.reCaptchaV3Service.execute(
    //   this.siteKey,
    //   'newConnection',
    //   (token) => {
    //     console.log('This is your token: ', token);
    //   },
    //   { useGlobalDomain: false },
    // );
    this.drpValue = localStorage.getItem('drpValue');
    console.log(this.drpValue, "this.drpValue")
    if(this.drpValue === "LOAD ENHANCEMENT") {
      this.firstFormGroup.patchValue({requestType: 'LOAD ENHANCEMENT'})
    }
  }

  ngOnDestroy () {
    localStorage.removeItem('drpValue');
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
    }
  }

  onSubmit() {
    console.log(this.fourthFormGroup.value);
    localStorage.removeItem('drpValue');
  }
}
