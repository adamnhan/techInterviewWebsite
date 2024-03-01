import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from '../card-display/card-display.component';
@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.scss']
})
export class UserInputFormComponent implements OnInit {
  @Output() newPerson = new EventEmitter<Person>();


  form!: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(125)]),
      isStudent: new FormControl('no', Validators.required),
      ageUnit: new FormControl('years', Validators.required),
      school: new FormControl({value: '', disabled: true}, Validators.maxLength(200))
    });

    this.handleStudentStatusChange();
  }

  handleStudentStatusChange() {
    this.form.get('isStudent')!.valueChanges.subscribe((value) => {
      const schoolControl = this.form.get('school');
      if (schoolControl) {
        if (value === 'yes') {
          schoolControl.enable();
        } else {
          schoolControl.disable();
        }
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
  
    if (this.form.valid) {
      const person: Person = {
        name: this.form.value.name,
        age: this.form.value.age,
        isStudent: this.form.value.isStudent === 'yes',
        school: this.form.value.school,
        ageUnit: this.form.value.ageUnit
      };
  
      this.newPerson.emit(person);
    }
  }
}
