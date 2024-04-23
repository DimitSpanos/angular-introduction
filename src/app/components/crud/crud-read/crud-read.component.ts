import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-read',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-read.component.html',
  styleUrl: './crud-read.component.css'
})
export class CrudReadComponent {

}
