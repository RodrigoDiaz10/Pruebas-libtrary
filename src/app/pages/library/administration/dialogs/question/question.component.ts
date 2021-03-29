
//import { User } from './../../../../../models/auth/user';
import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArchiveComponent } from '../archive/archive.component';
import { Field } from 'app/models/library/field';
import { NgForm } from '@angular/forms';
import { LibraryStructureService } from 'app/services/library/library-structure.service';
import { LibraryFieldService } from 'app/services/library/library-field.service';

/**       DIALOGO      */
export interface DialogData {
  animal: string;
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}
export interface Vegetable {
  name: string;
  tipo:string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  //user: User;
  //users: User[];
  //usersActivities: User[];
  public archives=[];
  public datas:any;
  selectedDate: Date;
  

  vegetables: Vegetable[] = [
    {name: 'Fecha',tipo: 'pregunta1'},
    {name: 'Autor',tipo: 'pregunta2'},
    {name: 'Materia',tipo: 'pregunta3'},
    {name: 'orange',tipo: 'pregunta4'},
    {name: 'kiwi',tipo: 'pregunta5'},
    {name: 'cherry',tipo: 'ptrgunta6'},
  ];
  
  
  animal: string;
  name: string;
  value:string;
  ngOnInit(): void {
  }
/**       DIALOGO      */
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, 
              public dialogRef: MatDialogRef<QuestionComponent>,
              public dialog: MatDialog,
              private _libraryServices: LibraryStructureService, 
              private library: LibraryFieldService){


              //this.role = JSON.parse(localStorage.getItem('role')) as Role;
              //this.user = JSON.parse(localStorage.getItem('user')) as User;
             //this.institution = JSON.parse(localStorage.getItem('institution')) as Institution;
             this.selectedDate = new Date();
              }

  onNoClick(): void {
    this.dialogRef.close();
  }
/**       DIALOGO   Fin   */


  /**
   * inicio del modal
   */

   onPreUpdateField(datas: Field): void {
    const dialogRef = this.dialog.open(ArchiveComponent);
    this._libraryServices.selectedStructure = Object.assign({}, datas);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  

 /**
  * fin del Modal 
  */


    foods: Food[] = [
    {value: 'steak-0', viewValue: 'Texto'},
    {value: 'pizza-1', viewValue: 'Numero'},
    {value: 'tacos-2', viewValue: 'Fecha'},
    {value: 'tacos-3', viewValue: 'Texto Largo'}
  ];


  /*getQuestions() {
    const params = '?user_id=' + this.user.id ;
    //this._spinner.show();
    this._libraryServices.post('attendances/current_day' + params, {date: this.selectedDate.toDateString()}).subscribe(response => {
        //this._spinner.hide();
        this.users = response['data'];
        this.users = this.users.filter(element => element.institutions.length > 0);
        this.usersActivities = response['data'];
        this.usersActivities = this.usersActivities.filter(element => element.institutions.length > 0);
        
        
        //this.fillChartAttendances();
        //this.selectFilter();
    }, error => {
        //this._spinner.hide();
        //this.msgsErrors = [{
        //   severity: 'error',
        //   summary: error.error.msg.summary,
        //   detail: error.error.msg.detail,
        //}];
    });
}*/

async getAllArchives(){
  //this.blogs=JSON.parse(await this.blogService.obtenerBlog())
  //traer el bog arreglar lo que traigo y lo que muestro
  this.archives.push(await this._libraryServices.getField());
  for (let b of this.archives){
    this.datas = b.blog;
  }   
  //this.blog= await this.blogService.obtenerBlog();
  console.log(this.archives); 
  //this.dataSend.emit(this.blog)
}

resetForm(fieldForm?: NgForm): void {
  const dialogRef = this.dialog.open(ArchiveComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result; 
    })
  this._libraryServices.selectedStructure = {
    id: null,
    description: '',
    name:'',
    state: ''
  };
  this.library.selectedField ={
    id: null,
    description: '',
    state: ''
  }
}



}



