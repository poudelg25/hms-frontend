import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.scss'
})
export class NewPatientComponent implements OnInit{

  newPatientForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.newPatientForm = this.formBuilder.group({
      name: [''],
      gender: [''],
      dateOfBirth: [''],
      address: [''],
      phoneNumber: [''],
      email: [''],
      medicalHistory: [''],
      ssn: [''],
    })
  }

  savePatient(): void{
    //console.log(this.newPatientForm.value);
    const patientData = this.newPatientForm.value;
    this.patientService.savePatient(patientData).subscribe((result: string) => {

      if (result === 'success') {
        alert('Patient record created successfully!!');
        //Redirecting to home page after patient record is created
        this.router.navigate(['homepage']);
      } else {
        alert(result);
      }
    })
  }
}
