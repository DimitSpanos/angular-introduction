import { Component } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [PersonTableComponent,SimpleDatatableComponent,EpersonReactiveFormComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  currentPerson : EPerson; //to current person einai tupou EPerson
  persons: EPerson[] = [];

  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
