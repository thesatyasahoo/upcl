import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dasboard.service';

// declare var require: any;

// Start For 1
export interface UserData {
  id: string;
  accountNumber: string;
  serviceConnNumber: string;
  billDate: string;
  units: string;
  billMonth: string;
  arrear: string;
  billAmount: string;
  tcsAmount: string;
  name: string;
  address: string;
  serviceStatus: string;
  dueDate: string;
  netPaybleAmount: string;
  paymentStatus: string;
  connectionType: string;
}
// const Data: UserData[] = require('./total.json');
@Component({
  selector: 'app-totalConnections',
  templateUrl: './totalConnections.component.html',
  styleUrls: ['./totalConnections.component.scss'],
})
export class TotalConnectionsComponent {
  title: any = localStorage.getItem('tableName');
  nameData: string[] = []
  displayedColumns: string[] = [
    'accountNumber',
    'serviceConnectionNumber',
    'consumerName',
    'consumerAddress',
    'serviceStatus',
    'category',
    'billDueDate',
    'netPayableAmount',
    'paymentStatus',
    "billLink"
  ];
  filteredData: any[] = [];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private route: Router, private service: DashboardService) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(Data);
  }
  ngOnInit(): void {
    this.getData();
    // throw new Error('Method not implemented.');
  }

  getData() {
    
    // Data.map(e => {
      if(this.title === 'Paid Connections') {
        this.getTotalPaidConnection()
        // this.dataSource = new MatTableDataSource(this.filteredData);
      }else if(this.title === 'Over Dues Connections') {
        this.getTotalPendingConnection()
        // this.dataSource = new MatTableDataSource(this.filteredData);  
      }else if(this.title === 'Total Connections') {
        this.getTotalDataConnection()
        // this.dataSource = new MatTableDataSource(this.filteredData);  
      }else if(this.title === 'Domestic Connections') {
        this.getTotalDomesticConnection()
        // this.dataSource = new MatTableDataSource(this.filteredData);  
      }else if(this.title === 'Commercial Connections') {
        this.getTotalCommercialConnection()
        // this.dataSource = new MatTableDataSource(this.filteredData);  
      }else if(this.title === 'Pending Service Request') {
        this.getPendingServiceRequests()
        // this.dataSource = new MatTableDataSource(this.filteredData);  
      }else if(this.title === 'Pending Complaints') {
        this.getPendingComplaints()
        // this.dataSource = new MatTableDataSource(this.filteredData);  
      }
    // })
  }

  ngAfterViewInit() {
    
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(filterValue)
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  valuesIn(e: any) {
    if(e.value === 'Paid') {
      return ' text-ctmclr';
     } else if(e.value === 'Disconnected') {
      return ' text-danger';
     } else if(e.value === 'Over Due') {
      return ' text-warning';
     }
  }
  onRowClick(event: any) {
    // console.log(event.row);
    this.route.navigate([`pages/table/detail/${event.accountNumber}`])
  }

  async getTotalDataConnection() {
    return (await this.service.getTotalNumberOfConnection()).subscribe((e: any) => {
      console.log(e)
      e.accountsDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  async getTotalPendingConnection() {
    return (await this.service.getTotalPendingConnection()).subscribe((e: any) => {
      console.log(e)
      e.accountsDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  async getTotalPaidConnection() {
    return (await this.service.getTotalPaidConnection()).subscribe((e: any) => {
      console.log(e)
      e.accountsDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  async getTotalDomesticConnection() {
    return (await this.service.getTotalDomesticConnection()).subscribe((e: any) => {
      console.log(e)
      e.accountsDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  async getTotalCommercialConnection() {
    return (await this.service.commercialConnection()).subscribe((e: any) => {
      console.log(e)
      e.accountsDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  async getPendingComplaints() {
    return (await this.service.getPendingComplaints()).subscribe((e: any) => {
      console.log(e)
      e.complaintDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  async getPendingServiceRequests() {
    return (await this.service.getPendingServiceRequests()).subscribe((e: any) => {
      console.log(e)
      e.serviceRequestDetails.map((r: any) => {
        this.filteredData.push(r);
      })
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  // async getTotalDataConnection() {
  //   return (await this.service.getTotalNumberOfConnection()).subscribe((e) => {
  //     this.filteredData.push(e);
  //   })
  // }
}
