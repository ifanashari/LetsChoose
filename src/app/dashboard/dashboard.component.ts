import { NavigationComponent } from './../navigation/navigation.component';
import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  empty = false;
  constructor() { }

  ngOnInit() {
    $('.try').on('click', function(){
      $('.try').css({'color':'red'});
    });
  }

}
