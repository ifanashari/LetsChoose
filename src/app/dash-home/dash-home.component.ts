import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit {
  empty = true;
  ruang: any;
  randColor = [
    '#1153aa' , '#11aa1e' , '#f13737' , '#bc37f1' , '#c27510',
    '#1153aa' , '#11aa1e' , '#f13737' , '#bc37f1' , '#c27510',
    '#1153aa' , '#11aa1e' , '#f13737' , '#bc37f1' , '#c27510',
    '#1153aa' , '#11aa1e' , '#f13737' , '#bc37f1' , '#c27510'
  ];
  constructor(private datSer:DataService) { }

  ngOnInit() {
    this.getRuang();
  }

  getRuang(){
    this.datSer.showRuang().subscribe(ruang => {
      if (ruang.id_ruang == "error") {
        this.empty = true;
      }else if(ruang){
        this.ruang = ruang;
        this.empty = false;
      }else{
        this.empty = true;
      }
    })
  }

  getColor(sam){
    return this.randColor[sam];
  }

}
