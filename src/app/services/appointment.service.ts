import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  api: string = 'http://localhost:8082/api/v1/appointments';
  constructor(private http: HttpClient) { }

  httpOption = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  saveAppointment(appointment: Appointment): Observable<String> {
    return this.http.post<string>(this.api, appointment, { responseType: 'text' as 'json' });
  }

  getAppointmentList(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.api, this.httpOption);
  }
  deleteAppointment(id: number): Observable<string>{
    //return this.http.delete<string>(this.api.concat('/').concat(String((id))));
        return this.http.delete<string>(this.api.concat('/').concat(id+''), {responseType: 'text' as 'json'});
  }

  getAppointmentById(id: number): Observable<Appointment>{
    return this.http.get<Appointment>(this.api.concat('/').concat(id + ''));
  }

  updateAppointment(appointmentId: number, appointment: Appointment): Observable<String> {
    return this.http.put<string>(this.api.concat('/').concat(appointmentId+''), appointment, { responseType: 'text' as 'json' });
  }
}
