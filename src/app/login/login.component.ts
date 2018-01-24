import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { login } from '../hen-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router , private datSer: DataService) { }
  perLog:any;
  model = new login();
  baseAse = "../../assets";
  ngOnInit() {
  }

  login(){
    this.datSer.loginPerson(this.model.username , this.model.password)
    .subscribe(perLog => {
      this.perLog = perLog;

      if (perLog.id_user) {
        sessionStorage.setItem('nama' , perLog.username);
        this.route.navigate(['/portal']);
      }else{
        return false;
      }

    })
  }

}
