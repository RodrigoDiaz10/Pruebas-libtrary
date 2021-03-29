import { FormsComponent } from './../dialogs/forms/forms.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  apartado:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',apartado:'si'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',apartado:'si'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',apartado:'no'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',apartado:'si'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',apartado:'si'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',apartado:'no'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',apartado:'no'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',apartado:'no'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',apartado:'no'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',apartado:'si'},
];

export interface Element {
  name: string;
  position: number;
  weight: number;
}
const breaking: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994},
  {position: 9, name: 'Fluorine', weight: 18.9984},
  {position: 10, name: 'Neon', weight: 20.1797},
];

interface Food {
  value: string;
  viewValue: string;
}

interface pregunta{
  nombre: string;
  type:string;
  numero:number;
}

@Component({
  selector: 'app-librarian-home',
  templateUrl: './librarian-home.component.html',
  styleUrls: ['./librarian-home.component.scss']
})
export class LibrarianHomeComponent implements OnInit {

  selectedValue: string;
  animal: string;
  name: string;

  ngOnInit(): void {
  }

  preguntas: pregunta[]=[
    {nombre:"jashja", type:"input",numero:1},
    {nombre:"FECHA", type:"date",numero:2},
    {nombre:"jashja", type:"date",numero:3},
    {nombre:"jashja", type:"date",numero:1},
    {nombre:"FECHA", type:"date",numero:2},
];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Materia1'},
    {value: 'pizza-1', viewValue: 'Materia2'},
    {value: 'tacos-2', viewValue: 'Materia3'}
  ];

  showFiller = false;
  typesOfShoes: string[] = ['Inicio', 'Listado','hoa'];

  
    displayedColumns: string[] = ['position','name','weight','symbol','actions','apartado'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    data = new MatTableDataSource(breaking);


    @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {}


  /**
   * inicio del modal
   */

  openDialog(): void {
    const dialogRef = this.dialog.open(FormsComponent, {
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



}
