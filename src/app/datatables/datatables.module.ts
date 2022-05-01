import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { DemoMaterialModule } from '../demo-material-module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTablesRoutes } from './datatables.routing';
import { DataTableComponent } from './data-table/data-table.component';
import { MaterialTableComponent } from './materialtable/materialtable.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { OverDueConnectionsComponent } from './overDueConnections/overDueConnections.component';
import { PaidConnectionsComponent } from './paidConnections/paidConnections.component';
import { DisconConnectionsComponent } from './dissConnections/dissConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';
import { DomesticConnectionsComponent } from './domesticConnections/domesticConnections.component';
import { CommercialConnectionsComponent } from './commercialConnections/commercialConnections.component';
import { PendingComplaintsComponent } from './pendingComplaints/pendingComplaints.component';
import { PendingServiceRequestComponent } from './pendingServiceRequest/pendingServiceRequest.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComplaintRegistrationComponent } from './complaintRegistration/complaintRegistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuillModule } from 'ngx-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ServiceRequestComponent } from './serviceRequest/serviceRequest.component';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(DataTablesRoutes),
    NgxDatatableModule,
    DemoMaterialModule,
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
    DataTableComponent,
    TableEditingComponent,
    TableFilterComponent,
    MaterialTableComponent,
    TotalConnectionsComponent,
    OverDueConnectionsComponent,
    PaidConnectionsComponent,
    DisconConnectionsComponent,
    DetailsConnectionsComponent,
    DomesticConnectionsComponent,
    CommercialConnectionsComponent,
    PendingComplaintsComponent,
    PendingServiceRequestComponent,
    ComplaintRegistrationComponent,
    ServiceRequestComponent,
    UpdateProfileComponent,
  ],
})
export class DataTablesModule {}
