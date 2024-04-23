import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userService = inject(UserService)

  user = this.userService.user // get the user signal from the UserService class - logged in user or null

  logout() {
    console.log('Logging out')
    this.userService.logoutUser() // call the logoutUser method from the UserService class
  }
}
