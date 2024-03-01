import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  @Input() people: Person[] = []; // Assume data is passed as an input from the parent component

  constructor() { }

  ngOnInit(): void {
  }
}
// card-display.component.ts or in a separate models file

export interface Person {
  name: string;
  age: number;
  isStudent: boolean;
  school?: string; // Optional since it's not required when the person is not a student
  ageUnit: 'years' | 'months';
}

