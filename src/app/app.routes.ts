import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { FormComponent } from './pages/form/form.component';
import { C404Component } from './pages/c404/c404.component';
import { UserViewComponent } from './pages/user-view/user-view.component';


export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "home"},
    {path: "home", component: UsersListComponent},
    {path: "newuser", component: FormComponent}, 
    {path: "user/edit/:_id", component: FormComponent },
    {path: 'user/:_id', component: UserViewComponent},
    {path: '**', component: C404Component}
];
