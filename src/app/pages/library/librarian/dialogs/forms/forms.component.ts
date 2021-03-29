import { LibrarianHomeComponent } from './../../librarian-home/librarian-home.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'app/pages/library/administration/dialogs/question/question.component';

interface pregunta{
  nombre: string;
  type:string;
  numero:number;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LibrarianHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    preguntas: pregunta[]=[
      {nombre:"jashja", type:"input",numero:1},
      {nombre:"FECHA", type:"date",numero:2},
      {nombre:"jashja", type:"date",numero:3},
      {nombre:"jashja", type:"date",numero:1},
      {nombre:"FECHA", type:"date",numero:0},
  ];

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
