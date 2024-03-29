import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Dimitris',
    surName: 'Spanos',
    age: 33,
    email: 'dimitrispanos21@hotmail.com'
  }
}
