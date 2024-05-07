import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent implements OnInit{
  
  doctorList: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }
  
  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe((doctorList: Doctor[]) => {
      console.log(doctorList);
      this.doctorList = doctorList;
    })
  }

}
