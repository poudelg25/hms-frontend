import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent implements OnInit{

  patientList: Patient[] = [];

  constructor(private patientService: PatientService) { }
  
  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((patientList: Patient[]) => {
      console.log(patientList);
      this.patientList = patientList;
    })
  }

}
