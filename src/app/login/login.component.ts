import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { login, user} from '../hen-data';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

//login with google API
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider , FacebookLoginProvider } from 'angularx-social-login';
import { AuthServiceGuard } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: SocialUser;
  loggedin:boolean;

  public logic: string;

  constructor(private route: Router , private datSer: DataService
     , private authSer: AuthService , private tilSer:Title , private openG: AuthServiceGuard) { 
    this.logic = "noLog";
    this.tilSer.setTitle('Login Ruangan');
  }
  perLog:any;
  model = new login();
  peserta = new user();
  yname:string;
  baseUrl = "../../assets";
  ngOnInit() {

  }

  signInGoogle(): void{
    this.showLoad();
    this.authSer.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(() => {
        this.peserta.username = "user-google";
        this.datSer.addPerson(this.peserta , 'peserta').subscribe(() => {
          sessionStorage.setItem('status' , 'logged');
          this.openG.openGuard();
          this.route.navigate(['/portal']);
        })
    })
  }
  
  signInFacebook(): void{
    this.authSer.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(() => {
      this.peserta.username = "user-facebook";
      this.datSer.addPerson(this.peserta , 'peserta').subscribe(() => {
        sessionStorage.setItem('status' , 'logged');
        this.openG.openGuard();
        this.route.navigate(['/portal']);
      })
  })
  }

  signOut(): void{
    this.authSer.signOut();
  }

  clearOn(){
    this.logic = "noLog";
  }

  login(){
    this.showLoad();

    this.datSer.loginPerson(this.model.username , this.model.password)
    .subscribe(perLog => {
      this.perLog = perLog;

      if (perLog.id_user) {
        sessionStorage.setItem('nama' , perLog.username);
        sessionStorage.setItem('status' , 'logged');
        this.openG.openGuard();
        this.route.navigate(['/portal']);
      }
      else if(perLog == "Fname"){
        this.logic = "Wname";
        return true;
      }
      else if(perLog == "Fpass"){
        this.logic = "Wpass";
        return true;
      }

    })

    //if connect error
    // TimerObservable.create(8000)
    //     .subscribe(() => {
    //       this.logic = "ErrConn";
    // });


  }

  showLoad(){
    this.logic = "load";
  }

}
