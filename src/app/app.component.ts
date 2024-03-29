import { Component, Input } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Dimitris"
  
  person0 = {
    givenName: 'Dimitris',
    surName: 'Spanos',
    age: 33,
    email: 'dimitrispanos21@hotmail.com',
    address: 'Athens,Greece'
  }

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 20,
    email: 'johndoe@hotmail.com',
    address: 'New York,U.S.A.'
  }
}
