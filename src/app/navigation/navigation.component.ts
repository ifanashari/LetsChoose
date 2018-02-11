import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  img = "../../assets/image/logoproject2.png";
  public useradmin:string;
  private id_admin:string;
  constructor(private router: Router , private dashClass:DashboardComponent , private datSer: DataService) {
    this.useradmin = sessionStorage.getItem('admin-name');
    this.id_admin = sessionStorage.getItem('admin-id');
  }

  ngOnInit() {
  }

  setDash(){
    sessionStorage.setItem('link' , 'dash');
    this.router.navigate(['/dashboard']);
  }

  deleteAdmin(){
    let warn = confirm("Anda yakin ingin menghapus admin ini? Data akan hilang semua !");

    if (warn == true) {
      this.datSer.deletedAdmin(this.id_admin).subscribe(() => {
        sessionStorage.removeItem('admin-id');
        sessionStorage.removeItem('admin-name');
        sessionStorage.clear();
        this.router.navigate(['/loginAdmin']);
      })
    } else {
      return false;
    }
  }

  changeSt(){
    this.dashClass.changeSt();
  }
  closepop(){
    this.dashClass.closepop();
  }


}
