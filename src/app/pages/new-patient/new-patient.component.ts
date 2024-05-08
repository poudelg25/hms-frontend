import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-new-patient',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.scss'
})
export class NewPatientComponent implements OnInit{

  newPatientForm: FormGroup;
  pid: number;

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private router: Router,
              private route: ActivatedRoute) { }
  
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
    });
    this.pid = parseInt(this.route.snapshot.paramMap.get('id'));
    //alert(this.pid);
    if (this.pid) {
      this.patientService.getPatientById(this.pid).subscribe((patientData: Patient) => {
        this.newPatientForm.patchValue(patientData);
      })
    }
  }

  savePatient(): void{
    //console.log(this.newPatientForm.value);
    const patientData = this.newPatientForm.value;

    if (this.pid) {
      const confirmUpdate = confirm("Are you sure you want to update this patient?");
      if (confirmUpdate) {
        this.patientService.updatePatient(this.pid, patientData).subscribe((result: string) => {
          if (result === 'success') {
            alert(`Patient record (id: ${this.pid}, name: ${patientData.name}) updated successfully!!`);
            this.router.navigate(['patient-list']);
          } else {
            alert(result);
          }
        })
      }
    } else {
      this.patientService.savePatient(patientData).subscribe((result: string) => {
        if (result === 'success') {
          alert(`Patient record (name: ${patientData.name}) created successfully!!`);
          //Redirecting to home page after patient record is created
          this.router.navigate(['patient-list']);
        } else {
          alert(result);
        }
      })
    }
  }
}
