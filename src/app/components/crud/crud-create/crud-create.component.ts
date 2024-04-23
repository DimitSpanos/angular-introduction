import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-create',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-create.component.html',
  styleUrl: './crud-create.component.css'
})
export class CrudCreateComponent {

}
