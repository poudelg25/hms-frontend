import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  //We define loginForm below to reactive form
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //Form fields
      userName: [''],
      password: ['']
      
    })
  }

  login(): void {
    const user = this.loginForm.value;
    //console.log(user)
    this.userService.login(user).subscribe((user: User) => {
      if (user.userId) {
        console.log('login success!!');
        alert('login success!!');
      } else {
        console.log('Invalid username or password');
        alert('Invalid username or password');
        //Just commented
      }
    })
  }
}