import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl: string = environment.baseApi;
  constructor(private http: HttpClient) {}

  async getDashboardTiles(data: Object) {
    return await this.http.post(`${this.baseUrl}/wss/api/v1/consumerDashboardDetails?loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`, data);
  }

  async getTotalPendingConnection() {
    return await this.http.get(`${this.baseUrl}/wss/api/v1/billPendingConnectionsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async getTotalDomesticConnection() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/domesticConnectionsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async commercialConnection() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/commercialConnectionsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async getTotalNumberOfConnection() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/totalConnectionDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async getTotalPaidConnection() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/billPaidConnectionsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async getPendingComplaints() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/pendingComplaintsDetails?mobileNumber=9760348743&loginServiceKey=WSS-LG-ABC-123&userKey=WSS-USR-123`);
  }

  async getPendingServiceRequests() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/pendingServiceRequestsDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async createServiceConnectionStatus(data: NgForm) {
    return await this.http.post( `${this.baseUrl}/wss/api/v1/pendingServiceRequestsDetails`, data);
  }
}
