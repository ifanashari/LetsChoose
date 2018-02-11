import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ruang, calon } from '../hen-data';
import { PortalComponent } from '../portal/portal.component';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

declare var $:any;
@Component({
  selector: 'app-pemilihan',
  templateUrl: './pemilihan.component.html',
  styleUrls: ['./pemilihan.component.scss']
})
export class PemilihanComponent implements OnInit {

  orang: SocialUser;
  ruang = new ruang();
  calon = new calon();
  cabalon: any;
  randColor = [
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510',
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510',
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510',
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510'
  ];
  private id_ruang = sessionStorage.getItem('ruang');
  id: string;
  jumlahpoling: any;
  pointbertambah: number;
  jumlahpesertapemilihan:any;
  presentase:any;
  constructor(private datSer: DataService, private authSer: AuthService, private router: Router) {
    this.id = this.id_ruang;

  }

  ngOnInit() {
    this.getOneRuang();
    this.getCalon();
    this.getTotalJumlahPeserta();
  }

  getOneRuang() {
    this.datSer.showRuangOne(this.id_ruang).subscribe(ruang => {
      this.ruang = ruang[0];
    })
  }
  getCalon() {
    this.datSer.showCalon(this.id).subscribe(cabalon => {
      this.cabalon = cabalon;
    })
  }
  getColor(sam) {
    this.randColor[sam];
  }
  setPemilihan(pointplus , persen , id_calon , jumpers) {
    let confm = confirm("Anda yakin memilih ini?. Anda hanya dapat memilih sekali. Pertimbangkan!!")

    if (confm == true) {
      pointplus ++;
      persen =+ (pointplus / jumpers * 100);
      this.datSer.pemolingan(pointplus, persen , id_calon).subscribe(() => {
        this.getCalon();
      });
      this.changeSt();
    } else {
      return false;
    }

  }

  getTotalJumlahPeserta(){
    this.datSer.getAlldataPeserta().subscribe(jumlahpesertapemilihan => {
      this.jumlahpesertapemilihan = jumlahpesertapemilihan;
    })
  }

  
  changeSt(){
    $('.popup').css({
      "display": "block"
    });
    $('.popup-is').css({
      "transform": "scale(1 , 1)"
    });
  }
  closepop(){
    $('.popup').css({
      "display": "none"
    });
    $('.popup-is').css({
      "transform": "scale(0 , 0)"
    });
  }

  logOut() {
    sessionStorage.removeItem('status');
    sessionStorage.removeItem('nama');

    //if else e
    if (this.orang) {
      this.authSer.signOut().then(() => {
        this.router.navigate(['/login']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }


}
