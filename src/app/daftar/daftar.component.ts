import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { user } from '../hen-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {

  logic:boolean;
  constructor(private datSer:DataService , private tilSer:Title) { 
    this.logic = false;
    this.tilSer.setTitle('Daftar Peserta');
  }
  model = new user();

  ngOnInit() {
  }

  addPeserta(){
    this.datSer.addPerson(this.model , 'peserta')
    .subscribe(() => {
      this.logic = true;
    });
  }

}
