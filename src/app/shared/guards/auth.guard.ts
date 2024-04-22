import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

  //the guard function checks if the user is logged in by calling the user method of the UserService class

export const authGuard: CanActivateFn = (route, state) => { // create a function called authGuard that takes two arguments: route and state
  const userService = inject(UserService) // create an instance of the UserService class
  const router = inject(Router) // create an instance of the Router class
  
  if (userService.user()) { // if the user is logged in, return true 
    return true;
  }
  return router.navigate(['login']) // if the user is not logged in, redirect them to the login page
  
};
