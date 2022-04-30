import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { MaterialTableComponent } from './materialtable/materialtable.component';
import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { PendingConnectionsComponent } from './pendingConnections/pendingConnectionscomponent';
import { PaidConnectionsComponent } from './paidConnections/paidConnections.component';
import { DisconConnectionsComponent } from './dissConnections/dissConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';
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
        path: 'pending',
        component: PendingConnectionsComponent,
        data: {
          title: 'Pending Connections',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Pending Connections' }],
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
        path: 'detail/:id',
        component: DetailsConnectionsComponent,
        data: {
          title: 'Account Summary',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Account Summary' }],
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
