import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardsRoutes } from './dashboards.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Dashboard1Component } from './dashboard1/dashboard1.component';

import {
  TopCardComponent,
} from './dashboard-components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    NgApexchartsModule,
    TranslateModule.forChild(),
    RouterModule.forChild(DashboardsRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Dashboard1Component,
    TopCardComponent,
  ],
  entryComponents: [],
})
export class DashboardsModule {}
