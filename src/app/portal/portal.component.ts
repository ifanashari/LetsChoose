import { Component, OnInit } from '@angular/core';
import { tokCho } from '../hen-data';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() { }
  model = new tokCho();

  ngOnInit() {
  }

  matchTok(){
    
  }

}
