import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { MaterialTableComponent } from './materialtable/materialtable.component';
import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { OverDueConnectionsComponent } from './overDueConnections/overDueConnections.component';
import { PaidConnectionsComponent } from './paidConnections/paidConnections.component';
import { DisconConnectionsComponent } from './dissConnections/dissConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';
import { DomesticConnectionsComponent } from './domesticConnections/domesticConnections.component';
import { CommercialConnectionsComponent } from './commercialConnections/commercialConnections.component';
import { PendingServiceRequestComponent } from './pendingServiceRequest/pendingServiceRequest.component';
import { PendingComplaintsComponent } from './pendingComplaints/pendingComplaints.component';
import { ComplaintRegistrationComponent } from './complaintRegistration/complaintRegistration.component';
import { ServiceRequestComponent } from './serviceRequest/serviceRequest.component';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';
export const DataTablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'accountSummery/',
        pathMatch: 'full',
      },
      {
        path: 'accountSummery/',
        component: TotalConnectionsComponent,
        data: {
          title: 'Total Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Total Connections' }],
        },
      },
      {
        path: 'overDue',
        component: OverDueConnectionsComponent,
        data: {
          title: 'Over Due Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Over Due Connections' }],
        },
      },
      {
        path: 'paid',
        component: PaidConnectionsComponent,
        data: {
          title: 'Paid Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Paid Connections' }],
        },
      },
      {
        path: 'disconnected',
        component: DisconConnectionsComponent,
        data: {
          title: 'Disconnected Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Disconnected Connections' }],
        },
      },
      {
        path: 'domestic',
        component: DomesticConnectionsComponent,
        data: {
          title: 'Domestic Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Domestic Connections' }],
        },
      },
      {
        path: 'commercial',
        component: CommercialConnectionsComponent,
        data: {
          title: 'Commercial Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Commercial Connections' }],
        },
      },
      {
        path: 'pendingComplaints',
        component: PendingComplaintsComponent,
        data: {
          title: 'Pending Complaints',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Pending Complaints' }],
        },
      },
      {
        path: 'pendingSR',
        component: PendingServiceRequestComponent,
        data: {
          title: 'Pending Service Request',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Pending Service Request' }],
        },
      },
      {
        path: 'detail/:id',
        component: DetailsConnectionsComponent,
        data: {
          title: 'Account Summary',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Account Summary' }],
        },
      },
      {
        path: 'complaintRegistration/:id',
        component: ComplaintRegistrationComponent,
        data: {
          title: 'Complaint Registration',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Complaint Registration' }],
        },
      },
      {
        path: 'serviceRequest/:id',
        component: ServiceRequestComponent,
        data: {
          title: 'Service Request',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Service Request' }],
        },
      },
      {
        path: 'updateProfile',
        component: UpdateProfileComponent,
        data: {
          title: 'Update Profile',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Update Profile' }],
        },
      },
      {
        path: 'table1',
        component: DataTableComponent,
        data: {
          title: 'Total Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Total Connections' }],
        },
      },
      {
        path: 'editing',
        component: TableEditingComponent,
        data: {
          title: 'Editing Table',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Editing Table' }],
        },
      },
      {
        path: 'filter',
        component: TableFilterComponent,
        data: {
          title: 'Filter Table',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Filter Table' }],
        },
      },
      {
        path: 'materialtable',
        component: MaterialTableComponent,
        data: {
          title: 'Material Table',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Material Table' }],
        },
      },
    ],
  },
];
