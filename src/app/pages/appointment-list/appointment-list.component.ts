import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit{

  appointmentList: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }
  
  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments(): void{
    this.appointmentService.getAppointmentList().subscribe((appointementList: Appointment[]) => {
      this.appointmentList = appointementList;
      console.log(appointementList);
    })
  }

  deleteAppointment(appointmentId: number): void {
    const confirmDelete = confirm("Are you sure you want to delete this appointment?");
    if (confirmDelete) {
      this.appointmentService.deleteAppointment(appointmentId).subscribe((result: string) => {
        if (result === 'success') {
          alert('Appointment deleted successfully!!');
          this.getAllAppointments();
        }
      });
    }
  }
  
}
