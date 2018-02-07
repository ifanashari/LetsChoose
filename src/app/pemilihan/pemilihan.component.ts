import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ruang, calon } from '../hen-data';
import { PortalComponent } from '../portal/portal.component';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-pemilihan',
  templateUrl: './pemilihan.component.html',
  styleUrls: ['./pemilihan.component.scss']
})
export class PemilihanComponent implements OnInit{

  orang : SocialUser;
  ruang = new ruang();
  calon = new calon();
  cabalon:any;
  private id_ruang = sessionStorage.getItem('ruang');
  id:string;
  constructor(private datSer: DataService , private authSer: AuthService , private router: Router) {
    this.id = this.id_ruang;
  }

  ngOnInit() {
    this.getOneRuang();
    this.getCalon();
  }

  getOneRuang(){
    this.datSer.showRuangOne(this.id_ruang).subscribe(ruang => {
      this.ruang = ruang[0];
    })
  }
  getCalon(){
    this.datSer.showCalon(this.id).subscribe(cabalon => {
      this.cabalon = cabalon;
    })
  }

  logOut(){
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

}
