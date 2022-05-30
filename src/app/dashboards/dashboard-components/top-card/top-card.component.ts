import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from 'src/app/services/dasboard.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent implements OnInit {
  overdueConnectionCount: number = 0;
  domesticConnectionCount: number = 0;
  commercialConnectionCount: number = 0;
  totalConnectionCount: number = 0;
  billPaidConnectionCount: number = 0;
  pendingComplaintCount: number = 0;
  pendingServiceRequestCount: number = 0;
  constructor(private translate: TranslateService, private service: DashboardService) {}

  ngOnInit(): void {
    this.getDashboardTiles();
  }

  setTable(e: string) {
    localStorage.removeItem('tableName');
    localStorage.setItem('tableName', e);
  }

  async getDashboardTiles() {
    let tilesObj = {
      mobileNumber: '9760348743',
      userId: 'testing_user',
      userRegistered: 'N',
    };
    return (await this.service.getDashboardTiles(tilesObj)).subscribe((e: any) => {
      console.log(e);
      this.commercialConnectionCount = e.totalCommercialConnections;
      this.totalConnectionCount = e.totalConnections;
      this.domesticConnectionCount = e.totalDomesticConnections;
      this.billPaidConnectionCount = e.totalPaidConnections;
      this.pendingComplaintCount = e.totalPendingComplaints;
      this.overdueConnectionCount = e.totalPendingConnections;
      this.pendingServiceRequestCount = e.totalPendingServiceRequests;
    });
  }
}
