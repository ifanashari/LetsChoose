import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ruang, calon } from '../hen-data';

@Component({
  selector: 'app-pemilihan',
  templateUrl: './pemilihan.component.html',
  styleUrls: ['./pemilihan.component.scss']
})
export class PemilihanComponent implements OnInit {

  ruang = new ruang();
  calon = new calon();
  cabalon:any;
  private id_ruang = sessionStorage.getItem('ruang');
  id:string;
  constructor(private datSer: DataService) {
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

}
