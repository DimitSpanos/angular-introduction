import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-delete',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-delete.component.html',
  styleUrl: './crud-delete.component.css'
})
export class CrudDeleteComponent {

}
