import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const navRoute:Routes = [
    {path: '', component: DashboardComponent}
]
