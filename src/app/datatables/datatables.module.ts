import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTablesRoutes } from './datatables.routing';
import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComplaintRegistrationComponent } from './complaintRegistration/complaintRegistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuillModule } from 'ngx-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';
import {CdkColumnDef} from '@angular/cdk/table';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { PassowordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';
import { ServiceRequestComponent } from './serviceRequest/serviceRequest.component';
import { ConsumptionbillHistoryComponent } from './consumptionbillHistory/consumptionbillHistory.component';
import { PaymentHistoryComponent } from './paymentHistory/paymentHistory.component';
import { ViewStatusComponent } from './viewStatus/viewStatus.component';
import { MaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(DataTablesRoutes),
    NgxDatatableModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
    TotalConnectionsComponent,
    DetailsConnectionsComponent,
    ComplaintRegistrationComponent,
    UpdateProfileComponent,
    ChangePasswordComponent,
    PassowordStrengthBarComponent,
    ServiceRequestComponent,
    ConsumptionbillHistoryComponent,
    PaymentHistoryComponent,
    ViewStatusComponent,
  ],
  providers:[CdkColumnDef]
})
export class DataTablesModule {}
