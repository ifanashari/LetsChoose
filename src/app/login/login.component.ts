import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { login} from '../hen-data';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

//login with google API
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider , FacebookLoginProvider } from 'angularx-social-login';

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
     , private authSer: AuthService , private tilSer:Title) { 
    this.logic = "noLog";
    this.tilSer.setTitle('Login Ruangan');
  }
  perLog:any;
  model = new login();
  yname:string;
  baseUrl = "../../assets";
  ngOnInit() {
    this.authSer.authState.subscribe(user => {
      this.user = user;
    });
    TimerObservable.create(0 , 2000).subscribe(() => {  
    if (this.user != null) {
      sessionStorage.setItem('status' , 'logged');
      this.route.navigate(['/portal']);
    }
  })
  }

  signInGoogle(): void{
    this.authSer.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInFacebook(): void{
    this.authSer.signIn(FacebookLoginProvider.PROVIDER_ID)
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
