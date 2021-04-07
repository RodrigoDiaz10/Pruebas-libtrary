import { state } from '@angular/animations';
import { LibraryService } from './../../../../../services/library/library.service';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../question/question.component';
import { LibraryFieldService } from 'app/services/library/library-field.service';





@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

 
  value = '';
  ngOnInit(): void {
  }

  formArchive: FormGroup;

  constructor(public dialogRef: MatDialogRef<ArchiveComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, 
              public dialog: MatDialog,
              public _libraryServices: LibraryFieldService,
              private formBuilder: FormBuilder
              ) { 
                this.buildFormArchive();
                this.formArchive.patchValue(this._libraryServices.selectedField)
                /*
                  this.formArchive.patchValue({//si no tiene la misma estructura
                  id:this._libraryServices.selectedField.id, //llenando el fomrulario
                  decription:this._libraryServices.selectedField.description
                })
                */
              }


  onNoClick(): void {
    this.dialogRef.close();
  }

  buildFormArchive(){
    this.formArchive=this.formBuilder.group({
      id:[null],//valor por defecto, 
      description:['',Validators.required, Validators.maxLength(20)],
      state:['',[Validators.required, Validators.minLength]]//si es una validacicion tener un Validators
    });
  }

  onSaveArchive(): void{
    console.log(this.formArchive.value)
    if(this.formArchive.valid){// is es valido da true
      //nuevo
      if(this.formArchive.controls['id'].value== null){
       this._libraryServices.postField(this.formArchive.value);
      }
      
    } else{
      //actualizar
      //this._libraryServices.editField(formarchive.value.id, formarchive.value);
      this.formArchive.markAllAsTouched()//activar los errores que hay
    }

  }

  


}
