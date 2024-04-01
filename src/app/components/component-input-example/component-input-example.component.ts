import { Component } from '@angular/core';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {
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
