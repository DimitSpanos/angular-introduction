import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-update',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-update.component.html',
  styleUrl: './crud-update.component.css'
})
export class CrudUpdateComponent {

}
