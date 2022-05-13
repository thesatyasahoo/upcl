import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: ErrorComponent,
      }
    ],
  },
];
