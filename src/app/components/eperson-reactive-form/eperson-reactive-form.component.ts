import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-eperson-reactive-form',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatSelectModule, MatButtonModule,ReactiveFormsModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>();

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [Validators.required, Validators.min(18),Validators.max(100),Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required),

  });

  onSubmit(value: any) {
    this.person.emit(value as EPerson);
    this.form.reset();
  }
}
