// Angular Modules
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

// Angular Components
//import {AppMainComponent} from './shared/app.main.component';
//import {AppBlankComponent} from './shared/app.blank.component';

// AuthGuard
//import {AuthGuard} from './shared/auth.guard';
//import {AppCrudComponent} from './pages/crud/app.crud.component';
//import {AppUnderMaintenanceComponent} from './pages/auth/app.under-maintenance.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path      : '**',
                redirectTo: 'sample'
            },
            /*{
                //path: 'auth',
                //component: AppBlankComponent,
                //loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
            },*/
            {
                path: 'library',
                loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule),
                //canActivate: [AuthGuard]
            },
            {
                path: 'students',
                loadChildren: () => import('./pages/library/student/student.module').then(m => m.StudentModule)
                //canActivate: [AuthGuard]
            },
            {path: '**', redirectTo: '/auth/not-found'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
