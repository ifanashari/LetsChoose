import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const navRoute:Routes = [
    {path: '', component: MainComponent},
    {path: 'dashboard', component: DashboardComponent}
]
