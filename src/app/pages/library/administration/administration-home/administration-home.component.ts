import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Structure } from 'app/models/library/structure';
import { LibraryStructureService } from 'app/services/library/library-structure.service';
import { QuestionComponent } from '../dialogs/question/question.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium heña', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-administration-home',
  templateUrl: './administration-home.component.html',
  styleUrls: ['./administration-home.component.scss']
})
export class AdministrationHomeComponent implements OnInit {

  animal: string;
  name: string;

  
  showFiller = false;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  displayedColumns: string[]=['position','name','weight','symbol','actions'];
  dataSource=new MatTableDataSource<PeriodicElement>(ELEMENT_DATA );

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
              public dialog: MatDialog,
              public _libraryServices: LibraryStructureService) {  }

  ngOnInit(): void {
    this.dataSource.paginator=this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    /**
   * inicio del modal
   */
   /**CAMBIAR AL CMPONENTE DE MODALONE
  openDialog(): void {
    const dialogRef = this.dialog.open(AdministradorModalarchivoComponent, {
      data: {name: this.name, animal: this.animal}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/
   

 /**
  * fin del Modal 
  */


    /**
   * inicio del modal
   */

  openModalPreguntas(): void {
    const dialogRef = this.dialog.open(QuestionComponent, {
      data: {name: this.name, animal: this.animal}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  } 
  
 /**
  * fin del Modal 
  */

  onPreUpdateField(datas: Structure): void {
    const dialogRef = this.dialog.open(QuestionComponent);
    this._libraryServices.selectedStructure = Object.assign({}, datas);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  resetForm(fieldForm?: NgForm): void {
    const dialogRef = this.dialog.open(QuestionComponent);
    
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
  }

}
