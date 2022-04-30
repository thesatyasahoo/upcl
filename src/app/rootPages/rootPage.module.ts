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


@NgModule({
  declarations: [HomePageComponent, RootPagesComponent, HeaderComponent,
    FooterComponent, LoginComponent, SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes1, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [
    HomePageComponent, RootPagesComponent, HeaderComponent,
    FooterComponent, LoginComponent, SignupComponent
  ]
})
export class RootPagesModule {}
