import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [ 
    {
      "givenName": "Christopher",
      "surName": "Green",
      "email": "ccgreen@aol.com",
      "age": 60,
      "address": "Toano"
    },
    {
      "givenName": "Eleanor",
      "surName": "Cox",
      "email": "eleanor_marie_cox95@live.com",
      "age": 62,
      "address": "Towanda"
    },
    {
      "givenName": "Jonathan",
      "surName": "Powell",
      "email": "japowell@ymail.com",
      "age": 65,
      "address": "Coolidge"
    },
    {
      "givenName": "Patrick",
      "surName": "Evans",
      "email": "patrickevans@gmail.com",
      "age": 42,
      "address": "Newton"
    },
    {
      "givenName": "Michael",
      "surName": "Davis",
      "email": "michael.eugene.davis19@yahoo.com",
      "age": 66,
      "address": "Orrum"
    },
    {
      "givenName": "Oliver",
      "surName": "Ramirez",
      "email": "oramirez@ymail.com",
      "age": 38,
      "address": "Orchard"
    },
    {
      "givenName": "Charles",
      "surName": "Lee",
      "email": "charleslee@ymail.com",
      "age": 73,
      "address": "Prattsburgh"
    },
    {
      "givenName": "Jack",
      "surName": "Henderson",
      "email": "j_henderson@yahoo.com",
      "age": 60,
      "address": "Portland"
    },
    {
      "givenName": "Stephanie",
      "surName": "Powell",
      "email": "s.powell@rocketmail.com",
      "age": 27,
      "address": "Saint Petersburg"
    },
    {
      "givenName": "Aubrey",
      "surName": "Gonzales",
      "email": "aubrey.jane@yahoo.com",
      "age": 44,
      "address": "Wrightsville Beach"
    }
  ]
}
