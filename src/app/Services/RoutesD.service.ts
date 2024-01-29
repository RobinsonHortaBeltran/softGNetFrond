import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class RoutesDService {
  private apiUrl = environment.apiUrl;
  headers = new HttpHeaders().set('Accept', 'application/json');
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<any> {
    return this.http.get(`${this.apiUrl}Routes`);
  }

  postRoute(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Routes`, form);
  } 

  updateRoute(form: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}Routes/${id}`, form);
  }

  deleteRoute(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}Routes/${id}`);
  }
  
}
