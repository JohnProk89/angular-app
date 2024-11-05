import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-template-driven-forms',
  standalone: true,
  imports: [TemplateFormComponent,SimpleDatatableComponent, PersonTableComponent],
  templateUrl: './component-template-driven-forms.component.html',
  styleUrl: './component-template-driven-forms.component.css'
})
export class ComponentTemplateDrivenFormsComponent {
    currentPerson: EPerson | undefined;

  onPerson(person: EPerson) {
      console.log("From Parent>>>>",person);
      this.currentPerson = person;
      ManyPerson.push(person)
      console.log("CurrentPerson", this.currentPerson)
  }
}
