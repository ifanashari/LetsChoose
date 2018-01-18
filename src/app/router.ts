import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//page componen
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';

export const navRoute:Routes = [
    {path: '', component: MainComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'daftar' , component: DaftarComponent}
]
