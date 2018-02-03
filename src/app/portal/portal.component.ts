import { Component, OnInit } from '@angular/core';
import { tokCho } from '../hen-data';
import { Router } from '@angular/router';

//api service
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider ,FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  orang: SocialUser;
  private loggedin:boolean;
  public logic: string;
  baseUrl = "../../assets";
  status:boolean;
  username:string;

  constructor(private authSer: AuthService , private router: Router) { 
    this.username = sessionStorage.getItem('nama');
  }

  model = new tokCho();

  ngOnInit() {
    
    if (this.username) {
      this.status = false;
    }else{
      this.authSer.authState.subscribe(orang => {
        this.orang = orang;
        this.status = true;
      });
    }
  }

  matchTok(){

  }

  logOutSocial(){
    this.showLoad();
    sessionStorage.removeItem('status');
    sessionStorage.removeItem('nama');

    //if else e
    if (this.orang) {
      this.authSer.signOut().then(() => {
        this.router.navigate(['/login']);
      });
    }else{
      this.router.navigate(['/login']);
    }
  }

  showLoad(){
    this.logic = "load";
  }

}
