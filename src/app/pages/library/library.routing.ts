import { LibrarianHomeComponent } from './librarian/librarian-home/librarian-home.component';
import { AdministrationHomeComponent } from './administration/administration-home/administration-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const LibraryRoutes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'librarian',
            component: LibrarianHomeComponent
            //,canActivate: [AuthGuard]
        },
        {
            path: 'administration',
            component: AdministrationHomeComponent
            //,canActivate: [AuthGuard]
        },
        {
          path: 'student',
          loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
          //component: StudentHomeComponent
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(LibraryRoutes)],
  exports: [RouterModule]
})
export class LibraryRouting { }
