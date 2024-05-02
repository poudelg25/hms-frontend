import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }
  
  ngOnInit(): void{
    this.signUpForm = this.formBuilder.group({
      fullName: [''],
      userName: [''],
      password: ['']
    })
  }

  signUp(): void{
    const user = this.signUpForm.value;
    this.userService.signUp(user).subscribe((result: string) => {
      console.log(result);
      if (result === 'success') {
        alert('success!!');
        //Redirecting to login page after user is registered
        this.router.navigate(['']);
      } else {
        alert("Unable to register user!!");
      }

  })
  }
}
