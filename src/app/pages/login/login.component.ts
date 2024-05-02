import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //Form fields
      userName: [''],
      password: ['']
      
    })
  }
}
