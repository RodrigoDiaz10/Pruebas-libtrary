import { StudentHomeComponent } from './student-home/student-home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const StudentRoutes: Routes = [{
  path: '',
    children: [
        {
            path: 'details',
            component: BookDetailsComponent
            //,canActivate: [AuthGuard]
        },
        {
            path: 'home',
            component: StudentHomeComponent
            //,canActivate: [AuthGuard]
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(StudentRoutes)],
  exports: [RouterModule]
})
export class StudentRouting { }
