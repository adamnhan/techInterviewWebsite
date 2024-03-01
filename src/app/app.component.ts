
import { Component } from '@angular/core';
import { Person } from './card-display/card-display.component'; // Update the path accordingly

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: Person[] = [];

  addPerson(newPerson: Person) {
    this.people.push(newPerson);
  }
}
