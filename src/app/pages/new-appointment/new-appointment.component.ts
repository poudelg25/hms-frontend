import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-new-appointment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.scss'
})
export class NewAppointmentComponent implements OnInit {

  newAppointmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.newAppointmentForm = this.formBuilder.group({
      dateTime: [''],
      doctorId: [''],
      patientId: ['']
    })
  }
  saveAppointment(): void {
    console.log(this.newAppointmentForm.value);
    const appointmentData = this.newAppointmentForm.value;
  //this.appointmentService.saveAppointment(appointmentData).subscribe((result: string) => {
      
  //   })
   }
}
