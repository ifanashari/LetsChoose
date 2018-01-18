import { Component, OnInit } from '@angular/core';
import { user } from '../hen-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {

  protected logic:boolean;
  constructor(private datSer:DataService) { 
    this.logic = false;
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
