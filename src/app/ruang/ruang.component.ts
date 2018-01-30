import { Component, OnInit } from '@angular/core';
import { ruang } from '../hen-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ruang',
  templateUrl: './ruang.component.html',
  styleUrls: ['./ruang.component.scss']
})
export class RuangComponent implements OnInit {
  protected Token: string;
  protected check:boolean;
  ruang = new ruang();
  constructor(private datSer: DataService) {
    this.check = false;
   }

  ngOnInit() {
  }

  getToken(){
    var text = "";
    var psble =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 12; i++) {
      text += psble.charAt(Math.floor(Math.random() * psble.length));
    }

    return text;
  }

  genToken(){
    this.Token = this.getToken();
  }

  sendRuang(){
    this.datSer.addRuang(this.ruang).subscribe(() => {
      this.check = true;
    });
  }

}
