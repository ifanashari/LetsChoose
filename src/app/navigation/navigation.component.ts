import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  img = "../../assets/image/logoproject2.png";
  public useradmin:string;
  constructor(private router: Router) {
    this.useradmin = sessionStorage.getItem('admin-name');
  }

  ngOnInit() {
  }

  setDash(){
    sessionStorage.setItem('link' , 'dash');
    this.router.navigate(['/dashboard']);
  }

  logOut(){
    sessionStorage.removeItem('admin-name');
    sessionStorage.removeItem('admin-id');
    sessionStorage.removeItem('admin');
    sessionStorage.clear();
    this.router.navigate(['/loginAdmin']);
  }

}
