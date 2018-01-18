import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//page componen
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';

export const navRoute:Routes = [
    {path: '', component: MainComponent},
<<<<<<< HEAD
    {path: 'dashboard', component: DashboardComponent}
=======
    {path: 'login' , component: LoginComponent},
    {path: 'daftar' , component: DaftarComponent}
>>>>>>> 3ab8a4edd139d13f2e79ca0b3d499c92381dad37
]
