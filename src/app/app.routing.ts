import { Routes } from '@angular/router';

import { AppBlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { SelfServiceFAQComponent } from './pages/selfServiceFAQ/selfServiceFAQ.component';
import { AdminLoginComponent } from './rootPages/adminLogin/adminLogin.component';
import { BillPaymentReceiptComponent } from './rootPages/component/billPaymentReceipt/billPaymentReceipt.component';
import { FixedCosEstimatorCalculatorComponent } from './rootPages/component/fixedCosEstimatorCalculator/fixedCosEstimatorCalculator.component';
import { ForgotPasswordComponent } from './rootPages/component/forgotPassword/forgotPassword.component';
import { LoadCalculatorComponent } from './rootPages/component/load-calculator/load-calculator.component';
import { NewConnectionComponent } from './rootPages/component/new-connection/new-connection.component';
import { RegisterForBillAlertComponent } from './rootPages/component/register-for-bill-alert/register-for-bill-alert.component';
import { ViewBillOrPaymentComponent } from './rootPages/component/viewBillOrPayment/viewBillOrPayment.component';
import { ViewStatusComponent } from './rootPages/component/viewStatus/viewStatus.component';
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
        path: 'LoginAdmin',
        component: AdminLoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'newConnection',
        component: NewConnectionComponent,
      },
      {
        path: 'viewBill',
        component: ViewBillOrPaymentComponent,
      },
      {
        path: 'billPaymentReceipt',
        component: BillPaymentReceiptComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'view-status',
        component: ViewStatusComponent,
      },
      {
        path: 'fixed-cost-estimator-calculator',
        component: FixedCosEstimatorCalculatorComponent,
      },
      {
        path: 'load-calculator',
        component: LoadCalculatorComponent,
      },
      {
        path: 'register-for-bill-alert',
        component: RegisterForBillAlertComponent,
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
        path: 'selfServiceFAQ',
        component: SelfServiceFAQComponent,
        data: {
          title: 'Self Service FAQs',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Self Service FAQs' }],
        },
      },
      {
        path: 'dashboard1',
        loadChildren: () =>
          import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
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
