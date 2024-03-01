import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  @Input() people: Person[] = []; 

  constructor() { }

  ngOnInit(): void {
  }
}


export interface Person {
  name: string;
  age: number;
  isStudent: boolean;
  school?: string; 
  ageUnit: 'years' | 'months';
}

