import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//page componen
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BuatComponent } from './buat/buat.component';
import { BuatAdminComponent } from './buat-admin/buat-admin.component';

export const navRoute:Routes = [
<<<<<<< HEAD
    {path: '', component: MainComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'daftar' , component: DaftarComponent}
=======
    {path: '' , component: MainComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'daftar' , component: DaftarComponent},
    {path: 'buat' , component:BuatComponent},
    {path: 'buatAdmin' , component:BuatAdminComponent}
>>>>>>> baa9a293f2d1b17788e382169097999969e61af1
]
