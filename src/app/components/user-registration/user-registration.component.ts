import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService : UserService = inject(UserService) // create an instance of the UserService class

  // create a registrationStatus object with a success property set to false and a message property set to an empty string
  registrationStatus: {success: boolean, message: string} = {success: false, message: 'Not attempted yet'} 
  //its an object with two properties, success and message - the default value of success is false and the default value of message is 'Not attempted yet'

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),  // empty string is the default value for the form control
    surName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
  },
  this.passwordConfirmValidator, // add a custom validator function to the form group
)

  passwordConfirmValidator(form: FormGroup) { // create a method called passwordConfirmValidator that takes a form group as an argument
    if (form.get('password').value !== form.get('confirmPassword').value) {
      form.get('confirmPassword').setErrors({passwordMismatch: true}) //we name the error passwordMismatch
      return { passwordMismatch: true } // return an object with a passwordMismatch property if the passwords do not match
    }
    return {} // return an empty object if the passwords match
  }

  onSubmit(value: any) {
    console.log(value)

    const user = this.form.value as User // create a user object from the form value
    delete user['confirmPassword'] // delete the confirmPassword property from the user object
    
    this.userService.registerUser(user).subscribe({
      next: (response) => {
        console.log('User registered: ', response.msg)
        this.registrationStatus = {success: true, message: response.msg} // if the user is registered successfully, set the success property to true and the message property to 'User registered successfully'
      },
      error: (response) => { // if i get an http error, i will display an error message to the user 
        const message = response.error.msg
        console.log('Error in registration: ', message)
        this.registrationStatus = {success: false, message}
      } 
    })
    }

    registerAnotherUser() {
      this.form.reset() // reset the form
      this.registrationStatus = {success: false, message: 'Not attempted yet'} // reset the registrationStatus object
      //in the form first we check through the message and after registering the user we check through the response
    }

    check_duplicate_email() { //we dont pass any arguments to this method because we are going to get the email value from the form
      const email = this.form.get('email').value // get the email value from the form

      this.userService.check_duplicate_email(email).subscribe({ //subscribe to the check_duplicate_email method of the UserService class
        next: (response) => {
          console.log(response.msg)
          this.form.get('email').setErrors(null) // if the email is not a duplicate, set the email form control error to null  
        },
        error: (response) => {
          const message = response.error.msg
          console.log(message)
          this.form.get('email').setErrors({duplicateEmail: true})
        }

      })
    }
  
}


//emailControl = new FormControl();
// ngOnInit() {
//   this.emailControl.valueChanges.pipe(
//     debounceTime(400), // wait for 400ms pause in events
//     switchMap(email => this.userService.check_duplicate_email(email))
//   ).subscribe({
//     next: (response) => {
//       console.log(response.msg);
//       this.emailControl.setErrors(null);
//     },
//     error: (response) => {
//       const message = response.error.msg;
//       console.log(message);
//       this.emailControl.setErrors({duplicateEmail: true});
//     }
//   });
// }
