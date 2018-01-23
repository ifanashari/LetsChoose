import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { navRoute } from './router';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BuatComponent } from './buat/buat.component';
import { BuatAdminComponent } from './buat-admin/buat-admin.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    MainComponent,
    LoginComponent,
    DaftarComponent,
    BuatComponent,
    BuatAdminComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(navRoute)
  ],
  providers: [{provide:DataService , useClass:DataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
