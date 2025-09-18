import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { FormComponent } from './pages/form/form.component';
import { UsersViewComponent } from './pages/users-view/users-view.component';
import { C404Component } from './pages/c404/c404.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "home"},
    {path: "home", component: UsersListComponent},
    {path: "newuser", component: FormComponent}, 
    {path: "user/edit/:id", component: UsersViewComponent},
    {path: 'user/:id', component: FormComponent},
    {path: '**', component: C404Component}
];
