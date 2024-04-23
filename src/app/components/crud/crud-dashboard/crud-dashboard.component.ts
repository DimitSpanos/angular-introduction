import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [CrudNavbarComponent, RouterLink],
  templateUrl: './crud-dashboard.component.html',
  styleUrl: './crud-dashboard.component.css'
})
export class CrudDashboardComponent {

}
