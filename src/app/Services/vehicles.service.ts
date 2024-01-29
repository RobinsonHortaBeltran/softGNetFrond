import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/enviroments';
@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  private apiUrl = environment.apiUrl;
  headers = new HttpHeaders().set('Accept', 'application/json');
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.http.get(`${this.apiUrl}Vehicles`);
  }

  postVehicle(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Vehicles`, form);
  }

  updateVehicle(form: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}Vehicles/${id}`, form);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}Vehicles/${id}`);
  }
  
}
