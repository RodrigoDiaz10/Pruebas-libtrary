import { Component, OnInit } from '@angular/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor() { }

 
  typesOfShoes: string[] = ['Inicio', 'Listado'];

  ngOnInit(): void {
  }


  vegetables: Vegetable[] = [
    {name: 'Fecha'}
  ];


}
