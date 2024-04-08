import { Component, Input } from '@angular/core';
import { EPerson, Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() person: Person | EPerson | undefined //dhlwnoume apla oti einai input xwris na exoume perasei - orisei data  

  isPerson() {
    return this.person && 'address' in this.person //elegxoume an to object exei to key address
  }

  isEPerson() {
    return this.person && 'education' in this.person //elegxoume an to object exei to key education
  }
}
