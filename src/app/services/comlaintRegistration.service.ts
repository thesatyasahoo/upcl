import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  baseUrl: string = environment.baseApi;
  constructor(private http: HttpClient) {}

  async complaintTypeDetails() {
    return await this.http.get(`${this.baseUrl}/wss/api/v1/complaintTypeDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async complaintDetails() {
    return await this.http.get(`${this.baseUrl}/wss/api/v1/complaintDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async substationDetails() {
    return await this.http.get( `${this.baseUrl}/wss/api/v1/substationDetails?mobileNumber=9634468929&loginServiceKey=${environment.loginServiceKey}&userKey=${environment.userKey}`);
  }

  async complaintRegistration(data: Object) {
    return await this.http.post( `${this.baseUrl}/wss/api/v1/complaintRegistration`, data);
  }
}
