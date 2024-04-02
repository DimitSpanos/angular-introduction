import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EPerson } from 'src/app/shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[]
  //dhlwnoume oti ta data tha einai enas pinakas EPerson[]
  //ta pername san input sto data pinakopoihmena giati de thelw na exw ola ta data edw mesa

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none',
  }

  sortData(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc'
      this.data = sortBy(this.data, sortKey).reverse()
    } else {
      this.sortOrder[sortKey] = 'asc'
      this.data = sortBy(this.data, sortKey)
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none'
      }
    }
  }

  sortSign(sortKey: string) {
    return this.sortOrder[sortKey] === 'asc' ? '▲' : '▼'
  }
}
