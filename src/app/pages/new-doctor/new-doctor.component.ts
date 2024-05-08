import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-new-doctor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-doctor.component.html',
  styleUrl: './new-doctor.component.scss'
})
export class NewDoctorComponent implements OnInit {
  newDoctorForm: FormGroup;
  doctorId: number;

  constructor(private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newDoctorForm = this.formBuilder.group({
      name: [''],
      gender: [''],
      specialization: ['other'],
      phoneNumber: [''],
      email: ['']
    });
    //alert(this.route.snapshot.paramMap.get('id'));
    this.doctorId = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.doctorId) {
      this.doctorService.getDoctorById(this.doctorId).subscribe((doctorData: Doctor) => {
        //console.log(doctorData);
        this.newDoctorForm.patchValue(doctorData);
      })
    }
  }
  saveDoctor(): void {
    //console.log(this.newDoctorForm.value);
    const doctorData = this.newDoctorForm.value;

    if (this.doctorId) {
      const confirmUpdate = confirm('Are you sure you want to update this doctor?');
      if (confirmUpdate) {
        this.doctorService.updateDoctor(this.doctorId, doctorData).subscribe((result: any) => {
          if (result === 'success') {
            alert(`Doctor record (id: ${this.doctorId}, name: ${doctorData.name}) updated successfully!!`);
            this.router.navigate(['doctor-list']);
          } else {
            alert(result);
          }
        });
      }
    } else {
      this.doctorService.saveDoctor(doctorData).subscribe((result: string) => {
        if (result === 'success') {
          alert(`Doctor record (name: ${doctorData.name}) created successfully!!`);
          this.router.navigate(['doctor-list']);
        } else {
          alert(result);
        }
      })
    }
  }
}
