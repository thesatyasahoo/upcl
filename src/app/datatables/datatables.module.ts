import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { DemoMaterialModule } from '../demo-material-module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTablesRoutes } from './datatables.routing';
import { DataTableComponent } from './data-table/data-table.component';
import { MaterialTableComponent } from './materialtable/materialtable.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TotalConnectionsComponent } from './totalConnections/totalConnections.component';
import { PendingConnectionsComponent } from './pendingConnections/pendingConnectionscomponent';
import { PaidConnectionsComponent } from './paidConnections/paidConnections.component';
import { DisconConnectionsComponent } from './dissConnections/dissConnections.component';
import { DetailsConnectionsComponent } from './detailsConnections/detailsConnections.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataTablesRoutes),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule,
  ],
  declarations: [
    DataTableComponent,
    TableEditingComponent,
    TableFilterComponent,
    MaterialTableComponent,
    TotalConnectionsComponent,
    PendingConnectionsComponent,
    PaidConnectionsComponent,
    DisconConnectionsComponent,
    DetailsConnectionsComponent,
  ],
})
export class DataTablesModule {}
