import { Routes } from '@angular/router';

import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';
import { ComplaintRegistrationComponent } from './complaintRegistration/complaintRegistration.component';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ServiceRequestComponent } from './serviceRequest/serviceRequest.component';
import { ConsumptionbillHistoryComponent } from './consumptionbillHistory/consumptionbillHistory.component';
import { PaymentHistoryComponent } from './paymentHistory/paymentHistory.component';
import { ViewStatusComponent } from './viewStatus/viewStatus.component';

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
        path: 'viewStatus/',
        component: ViewStatusComponent,
        data: {
          title: 'View Status',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'View Status' }],
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
        path: 'consumptionbillHistory/:id',
        component: ConsumptionbillHistoryComponent,
        data: {
          title: 'Consumption & Bill History',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Consumption & Bill History' }],
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
        path: 'paymentHistory/:id',
        component: PaymentHistoryComponent,
        data: {
          title: 'Payment History',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Payment History' }],
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
        path: 'changePassword',
        component: ChangePasswordComponent,
        data: {
          title: 'Change Password',
          urls: [{ title: 'Dashboard', url: '/pages' }, { title: 'Change Password' }],
        },
      },
    ],
  },
];
