import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { MaterialTableComponent } from './materialtable/materialtable.component';
import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';
import { ComplaintRegistrationComponent } from './complaintRegistration/complaintRegistration.component';
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
          title: 'Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Connections' }],
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
