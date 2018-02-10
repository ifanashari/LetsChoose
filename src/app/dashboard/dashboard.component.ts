import { NavigationComponent } from './../navigation/navigation.component';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs/operators/window';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  empty = true;
  check:string;
  constructor(private tilSer:Title) {
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

}
