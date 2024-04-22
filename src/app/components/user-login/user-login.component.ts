import { Component, inject } from '@angular/core';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  userService = inject(UserService) // create an instance of the UserService class
  router = inject(Router) // create an instance of the Router class

  invalidLogin = false 

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    const credentials = this.form.value as Credentials // create a credentials object from the form value

    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        const access_token = response.access_token                                  
        localStorage.setItem('access_token', access_token) // store the access token in the local storage of the browser
        const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser // decode the access token and get the subject
        this.userService.user.set({
          fullname: decodedTokenSubject.fullname,
          email: decodedTokenSubject.email
        })
        this.router.navigate(['restricted-content-example']) // redirect the user to the restricted content page (restricted-content-example.component.ts
      },                           
      error: (response) => {  //http error from the server - backend
        console.error('Login Error', response)
        this.invalidLogin = true 
      }
    })
  }
}
