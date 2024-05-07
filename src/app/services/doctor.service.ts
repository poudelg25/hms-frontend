import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  api: string = 'http://localhost:8082/api/v1/doctors';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: {
      'Content-Type':'application/json'
    }
  }
  getDoctorList(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.api, this.httpOptions);
  }
}
