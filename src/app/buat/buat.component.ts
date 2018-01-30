import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { login } from '../hen-data';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buat',
  templateUrl: './buat.component.html',
  styleUrls: ['./buat.component.scss']
})
export class BuatComponent implements OnInit {

  constructor(private datSer:DataService , private route:Router , private tilSer:Title) {
    this.tilSer.setTitle('Login Admin');
   }
  perLog:any;
  model = new login();
  baseAse = "../../assets";

  ngOnInit() {

  }

  loginAdmin(){
    this.datSer.loginAdmin(this.model.username , this.model.password)
    .subscribe(perLog => {
      this.perLog = perLog;

      if (perLog.id_admin) {
        sessionStorage.setItem('admin' , 'good');
        sessionStorage.setItem('admin-name' , perLog.username);
        sessionStorage.setItem('admin-id' , perLog.id_admin);
        window.alert("Success Login. Ayo milih");
        this.route.navigate(['/dashboard']);
      }else{
        return false;
      }

    })
  }

}
