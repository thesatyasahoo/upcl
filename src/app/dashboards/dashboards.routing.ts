import { Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';


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
    ],
  },
];
