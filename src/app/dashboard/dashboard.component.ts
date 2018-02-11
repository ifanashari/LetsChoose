import { NavigationComponent } from './../navigation/navigation.component';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs/operators/window';
import { Router } from '@angular/router';
import { CalonComponent } from '../calon/calon.component';
import { DashHomeComponent } from '../dash-home/dash-home.component';
import { DataService } from '../data.service';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  empty = true;
  check:string;
  ruang:any;
  constructor(private tilSer:Title , private router:Router) {
    this.tilSer.setTitle('Dashboard Admin');
   }

  ngOnInit() {
    $('.fa-bars').on('click', function(){
      $('#main-nav').css({'transform':'translateX(0)'});
      $('.fa-close').css({'display':'block'});
      $('.fa-bars').css({'display':'none'});
    });
    $('.fa-close').on('click', function(){
      $('#main-nav').css({'transform':'translateX(-100%)'});
      $('.fa-close').css({'display':'none'});
      $('.fa-bars').css({'display':'block'});

  });
}


  changeSt(){
    $('.popup').css({
      "display": "block"
    });
    $('.popup-is').css({
      "transform": "scale(1 , 1)"
    });
  }
  closepop(){
    $('.popup').css({
      "display": "none"
    });
    $('.popup-is').css({
      "transform": "scale(0 , 0)"
    });
  }

  
  logOut(){
    sessionStorage.removeItem('admin-name');
    sessionStorage.removeItem('admin-id');
    sessionStorage.removeItem('admin');
    sessionStorage.clear();
    this.router.navigate(['/loginAdmin']);
  }


}

