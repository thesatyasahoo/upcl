import { Routes } from '@angular/router';

import { AppBlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { HomePageComponent } from './rootPages/home-page/home-page.component';
import { LoginComponent } from './rootPages/login/login.component';
import { SignupComponent } from './rootPages/signup/signup.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AppBlankComponent,
    // outlet: "home",
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  },
  {
    path: 'pages',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard1',
        pathMatch: 'full',
      },
      {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      
      {
        path: 'dashboard1',
        loadChildren: () =>
          import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
      },
      {
        path: 'material',
        loadChildren: () =>
          import('./material-component/material.module').then((m) => m.MaterialComponentsModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then((m) => m.FormModule),
      },
      {
        path: 'Basictables',
        loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'tree',
        loadChildren: () => import('./tree/tree.module').then((m) => m.TreeModule),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./datatables/datatables.module').then((m) => m.DataTablesModule),
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/chartslib.module').then((m) => m.ChartslibModule),
      },
      {
        path: 'multi',
        loadChildren: () => import('./multi-dropdown/multi-dd.module').then((m) => m.MultiModule),
      },
    ],
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/authentication/404',
  },
];
