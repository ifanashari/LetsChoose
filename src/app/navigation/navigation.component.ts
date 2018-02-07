import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  img = "../../assets/image/logoproject2.png";
  public useradmin:string;
  constructor(private router: Router , private dashClass:DashboardComponent) {
    this.useradmin = sessionStorage.getItem('admin-name');
  }

  ngOnInit() {
  }

  setDash(){
    sessionStorage.setItem('link' , 'dash');
    this.router.navigate(['/dashboard']);
  }

  changeSt(){
    this.dashClass.changeSt();
  }
  closepop(){
    this.dashClass.closepop();
  }


}
