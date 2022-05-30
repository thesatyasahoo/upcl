import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RootPagesComponent
} from './rootPage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes1 } from './rootPage-routing.module';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from './component/component.module';
import { ViewBillOrPaymentComponent } from './component/viewBillOrPayment/viewBillOrPayment.component';
import { MaterialModule } from '../material-module';
import { BillPaymentReceiptComponent } from './component/billPaymentReceipt/billPaymentReceipt.component';
import { ForgotPasswordComponent } from './component/forgotPassword/forgotPassword.component';
import { ViewStatusComponent } from './component/viewStatus/viewStatus.component';
import { FixedCosEstimatorCalculatorComponent } from './component/fixedCosEstimatorCalculator/fixedCosEstimatorCalculator.component';
import { LoadCalculatorComponent } from './component/load-calculator/load-calculator.component';
import { RegisterForBillAlertComponent } from './component/register-for-bill-alert/register-for-bill-alert.component';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { ViewSRStatusComponent } from './component/viewSRStatus/viewSRStatus.component';

@NgModule({
  declarations: [HomePageComponent, RootPagesComponent, HeaderComponent,
    FooterComponent, LoginComponent, SignupComponent,ViewBillOrPaymentComponent,
    BillPaymentReceiptComponent,ForgotPasswordComponent,ViewStatusComponent,
    FixedCosEstimatorCalculatorComponent,LoadCalculatorComponent,
    RegisterForBillAlertComponent,AdminLoginComponent,ViewSRStatusComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    MaterialModule,
    MomentDateModule,
    TranslateModule.forChild(),
    RouterModule.forRoot(routes1, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [
    HomePageComponent, RootPagesComponent, HeaderComponent,
    FooterComponent, LoginComponent, SignupComponent,ViewBillOrPaymentComponent,
    BillPaymentReceiptComponent,ForgotPasswordComponent,ViewStatusComponent,
    FixedCosEstimatorCalculatorComponent,LoadCalculatorComponent,
    RegisterForBillAlertComponent,AdminLoginComponent,ViewSRStatusComponent,
  ]
})
export class RootPagesModule {}
