import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/user`

@Injectable({
  providedIn: 'root' //we are registering the service in the root injector so that it can be injected anywhere in the application
})
export class UserService {

  http: HttpClient = inject(HttpClient);
                              //null is the initial value of the signal
  user = signal<LoggedInUser | null>(null) //when the user is logged in, the signal will emit the user object, otherwise it will emit null
  // signal is a reactive variable that can be subscribed to and updated

  constructor() {
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

}
