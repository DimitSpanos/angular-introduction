import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/user`

@Injectable({
  providedIn: 'root' //we are registering the service in the root injector so that it can be injected anywhere in the application
})
export class UserService {

  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router); //inject the Router service to navigate to different routes

                              //null is the initial value of the signal
  user = signal<LoggedInUser | null>(null) //when the user is logged in, the signal will emit the user object, otherwise it will emit null
  // signal is a reactive variable that can be subscribed to and updated

  constructor() {
    const access_token = localStorage.getItem('access_token') //get the access_token from the local storage    

    if(access_token) {  //in case you refresh the page its used to check if the user is logged in 

      const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser //if there is an access_token, decode it and get the subject

      this.user.set({   //check if the access_token is in the local storage and set the user signal to the user object
        fullname: decodedTokenSubject.fullname,
        email: decodedTokenSubject.email
      })
    }
    effect(() => { //we use the effect function to subscribe to the signal and log the user object to the console
      if (this.user()){
        console.log('User logged in', this.user().fullname)
      } else {
        console.log('User not logged in')
      }
    })
  }

  registerUser(user: User) { //it takes a user object type of User as an argument
    return this.http.post<{msg: string}>(`${API_URL}/register`, user) // POST /users/register
  
  }

  check_duplicate_email(email: string) {
    return this.http.get<{msg: string}>(`${API_URL}/check_duplicate_email/${email}`)
    // check if the email is already in use - with the GET /users/check_duplicate_email/:email endpoint
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{access_token: string}>(`${API_URL}/login`, credentials)
  }

  logoutUser() {
    this.user.set(null) //set the user signal to null
    localStorage.removeItem('access_token') //remove the access_token from the local storage
    this.router.navigate(['/login']) //navigate to the login route
  }

}
