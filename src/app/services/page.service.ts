import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  baseUrl: string = environment.baseApi;
  constructor(private http: HttpClient) {}

  async loadCalculator() {
    return await this.http.get(`${this.baseUrl}/wss/api/v1/loadCalculator?serviceKey=${environment.serviceKey}`);
  }

  async fixedCostEstimation() {
    return await this.http.get(`${this.baseUrl}/wss/api/v1/fixedCostEstimation?serviceKey=${environment.serviceKey}`);
  }

  async ShowDemandCalculation(data: Object) {
    return await this.http.post( `${this.baseUrl}/wss/api/v1/ShowDemandCalculation?serviceKey=${environment.serviceKey}`, data);
  }

  async viewStatusComplaintStatus() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/totalComplaintsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async viewStatusServiceReqStatus() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/totalServiceRequestsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }
}
