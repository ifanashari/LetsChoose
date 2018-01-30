import { NavigationComponent } from './../navigation/navigation.component';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

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
    $('.try').on('click', function(){
      $('.try').css({'color':'red'});
    });
  }

}
