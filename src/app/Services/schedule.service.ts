import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private apiUrl = environment.apiUrl;
  headers = new HttpHeaders().set('Accept', 'application/json');
  constructor(private http: HttpClient) {}

  getSchedules(): Observable<any> {
    return this.http.get(`${this.apiUrl}Schedules`);
  }

  postSchedule(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Schedules`, form);
  }

  updateSchedule(form: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}Schedules/${id}`, form);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}Schedules/${id}`);
  }
  
}
