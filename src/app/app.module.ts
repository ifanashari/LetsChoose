import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { navRoute } from './router';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BuatComponent } from './buat/buat.component';
import { BuatAdminComponent } from './buat-admin/buat-admin.component';
import { PortalComponent } from './portal/portal.component';
import { RuangComponent } from './ruang/ruang.component';
import { Profile } from 'selenium-webdriver/firefox';
import { PemilihanComponent } from './pemilihan/pemilihan.component';
import { HasilComponent } from './hasil/hasil.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { CalonComponent } from './calon/calon.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("122417077830-470l9t8q7k8i9hif7us2c3d7b5sevp4e.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("382786512163998")
  }
])

export function provideConfig() {
  return config;
}

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    PemilihanComponent,
    HasilComponent,
    DashboardComponent,NavigationComponent,MainComponent,LoginComponent,DaftarComponent,
    BuatComponent,BuatAdminComponent,PortalComponent,RuangComponent, DashHomeComponent, CalonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(navRoute),
    SocialLoginModule
  ],
  providers: [
    {provide:DataService , useClass:DataService},AuthGuard,AuthService,
    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
