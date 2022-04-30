import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard ',
          urls: [{ title: 'Dashboard', url: '/dashboard' }],
        },
      },
      {
        path: 'dashboard1',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }],
        },
      },
    ],
  },
];
