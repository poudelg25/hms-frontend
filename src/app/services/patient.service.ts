import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  api: string = 'http://localhost:8082/api/v1/patients';
  constructor(private http: HttpClient) { }

  httpOption = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  savePatient(patient: Patient): Observable<String>{
    return this.http.post<string>(this.api, patient, {responseType: 'text' as 'json'});
  }

  getPatientList(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.api, this.httpOption);
  }

  updatePatient(pid: number, patient: Patient): Observable<String>{
    return this.http.put<string>(this.api.concat('/').concat(pid+''), patient, {responseType: 'text' as 'json'});
  }

  getPatientById(id: number): Observable<Patient>{
    return this.http.get<Patient>(this.api.concat('/').concat(id + ''));
  }
}
