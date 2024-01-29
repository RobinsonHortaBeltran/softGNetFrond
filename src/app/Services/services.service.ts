import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = environment.apiUrl;
  headers = new HttpHeaders().set('Accept', 'application/json');
  constructor(private http: HttpClient) {}

  getLoginToken(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}Auth/login`, credentials);
  }

  getDrivers(): Observable<any> {
    return this.http.get(`${this.apiUrl}Drivers`);
  }

  postDriver(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Drivers`, form);
  }

  updateDriver(form: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}Drivers/${id}`, form);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}Drivers/${id}`);
  }
}
