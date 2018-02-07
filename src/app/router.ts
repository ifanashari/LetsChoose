import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//page componen
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BuatComponent } from './buat/buat.component';
import { BuatAdminComponent } from './buat-admin/buat-admin.component';
import { PortalComponent } from './portal/portal.component';
import { PemilihanComponent } from './pemilihan/pemilihan.component';
import { AuthGuard } from './auth-guard';
import { RuangComponent } from './ruang/ruang.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
<<<<<<< HEAD
import { HasilComponent } from './hasil/hasil.component';
=======
import { CalonComponent } from './calon/calon.component';
>>>>>>> ec12626ee75a21c4c48cdc134f7af6de9f37942a


export const navRoute:Routes = [
    {path: '' , component: MainComponent},
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: '' , component:DashHomeComponent },
            {path: 'tambahruang' , component:RuangComponent },
            {path: 'isiruangan/:id' , component:CalonComponent }
        ]
    },
    {path: 'login' , component: LoginComponent},
    {path: 'daftar' , component: DaftarComponent},
    {path: 'loginAdmin' , component:BuatComponent},      
    {path: 'buatAdmin' , component:BuatAdminComponent},
<<<<<<< HEAD
    {path: 'hasil' , component:HasilComponent},
    {path: 'portal' , component:PortalComponent , canActivate: [AuthGuard]}
=======
    {path: 'portal' , component:PortalComponent , canActivate: [AuthGuard]},
    {path: '**', component: MainComponent }
>>>>>>> ec12626ee75a21c4c48cdc134f7af6de9f37942a
]
