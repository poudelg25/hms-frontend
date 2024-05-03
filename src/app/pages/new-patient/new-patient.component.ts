import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';

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
              private patientService: PatientService) { }
  
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
      alert(result);
    })
  }

}
