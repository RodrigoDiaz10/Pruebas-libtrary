import { FormsComponent } from './librarian/dialogs/forms/forms.component';
//import { LibraryRoutes } from './library.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LibraryRoutes } from './library.routing';
import { LibrarianHomeComponent } from './librarian/librarian-home/librarian-home.component';
import { AdministrationHomeComponent } from './administration/administration-home/administration-home.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { QuestionComponent } from './administration/dialogs/question/question.component';
import { ArchiveComponent } from './administration/dialogs/archive/archive.component';





@NgModule({
  declarations: [LibrarianHomeComponent, AdministrationHomeComponent, QuestionComponent, ArchiveComponent, FormsComponent],
  imports: [ 
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(LibraryRoutes),
    CommonModule
  ]
 })
export class LibraryModule {

 }
