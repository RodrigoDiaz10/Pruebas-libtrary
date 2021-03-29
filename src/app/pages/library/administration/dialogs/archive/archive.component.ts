import { LibraryService } from './../../../../../services/library/library.service';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../question/question.component';
import { LibraryFieldService } from 'app/services/library/library-field.service';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

 
  value = '';
  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<ArchiveComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, 
              public dialog: MatDialog,
              public _libraryServices: LibraryFieldService) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

    foods: Food[] = [
    {value: 'text', viewValue: 'Texto'},
    {value: 'number', viewValue: 'Numero'},
    {value: 'date', viewValue: 'Fecha'},
    {value: 'longText', viewValue: 'Texto Largo'}
  ];


  onSaveArchive(archiveForm: NgForm): void{
    if(archiveForm.value.id == null){
      //nuevo
      this._libraryServices.postField(archiveForm.value);
    } else{
      //actualizar
      this._libraryServices.editField(archiveForm.value.id, archiveForm.value);
    }

  }


}
