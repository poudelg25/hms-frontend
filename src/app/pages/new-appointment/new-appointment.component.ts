import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-new-appointment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.scss'
})
export class NewAppointmentComponent implements OnInit {

  newAppointmentForm: FormGroup;
  appointmentId: number;

  constructor(private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newAppointmentForm = this.formBuilder.group({
      dateTime: [''],
      doctorId: [''],
      patientId: ['']
    })
    //alert(this.route.snapshot.paramMap.get('id'));
    this.appointmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    //alert(this.appointmentId);
    if (this.appointmentId) { //only for edit action
      //alert();
      this.appointmentService.getAppointmentById(this.appointmentId).subscribe((appointmentData: Appointment) => {
        this.newAppointmentForm.patchValue(appointmentData);
      })
    }


  }
  saveAppointment(): void {
    const appointmentData = this.newAppointmentForm.value;
    if (this.appointmentId) {
      const confirmUpdate = confirm("Are you sure you want to update this appointment?");
      if (confirmUpdate) {
        this.appointmentService.updateAppointment(this.appointmentId, appointmentData).subscribe((result: string) => {
          if (result === 'success') {
            alert(`Appointed record (id: ${this.appointmentId}) updated successfully!!`);
            this.router.navigate(['appointment-list']);
          } else {
            alert(result);
          }
        });
      }
    } else {
      this.appointmentService.saveAppointment(appointmentData).subscribe((result: string) => {
        if (result === 'success') {
          alert(`Appointment on (time: ${appointmentData.dateTime}) created successfully!!`);
          //Redirecting to home page after Appointment is created
          this.router.navigate(['appointment-list']);
        } else {
          alert(result);
        }
      })
    }
  }
}
