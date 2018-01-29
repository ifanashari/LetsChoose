import { Component, OnInit } from '@angular/core';
import { tokCho } from '../hen-data';
import { Router } from '@angular/router';

//api service
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider ,FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  user: SocialUser;
  private loggedin:boolean;

  constructor(private authSer: AuthService , private router: Router) { }

  model = new tokCho();

  ngOnInit() {
    this.authSer.authState.subscribe((user) => {
      this.user = user;
    });
  }

  matchTok(){
    
  }

  logOutSocial(){
    this.authSer.signOut();
    this.router.navigate(['/login']);
  }

}
