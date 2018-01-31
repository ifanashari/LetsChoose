import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ruang } from '../hen-data';

@Component({
  selector: 'app-calon',
  templateUrl: './calon.component.html',
  styleUrls: ['./calon.component.scss']
})
export class CalonComponent implements OnInit {
  protected Token: string;
  protected check:boolean;
  protected edit:boolean;
  constructor(private router: Router , private route: ActivatedRoute , private datSer: DataService) { 
    this.edit = false;
  }

  private id = this.route.snapshot.params['id'];
  ruang = new ruang();
  ngOnInit() {
    this.getOne();
  }

  getOne(){
    this.datSer.showRuangOne(this.id).subscribe(data => {
      this.ruang = data[0];
    })
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
    this.ruang.token_ruang = this.Token;
  }

}
