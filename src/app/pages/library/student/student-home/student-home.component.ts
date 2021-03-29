import { Component, OnInit } from '@angular/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  
  vegetables: Vegetable[] = [
    {name: 'Fecha'},
    {name: 'Autor'},
    {name: 'Materia'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
