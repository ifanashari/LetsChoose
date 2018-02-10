import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-hasilruang',
  templateUrl: './hasilruang.component.html',
  styleUrls: ['./hasilruang.component.scss']
})
export class HasilruangComponent implements OnInit {
  empty = true;
  ruang: any;
  randColor = [
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510',
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510',
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510',
    '#1153aa', '#11aa1e', '#f13737', '#bc37f1', '#c27510'
  ];
  private id_admin:string;
  constructor(private datSer: DataService) { 
    this.id_admin = sessionStorage.getItem('admin-id');
  }

  ngOnInit() {
    this.getRuang();
  }

  getRuang() {
    this.datSer.showRuang(this.id_admin).subscribe(ruang => {
      if (ruang.id_ruang == "error") {
        this.empty = true;
      } else if (ruang) {
        this.ruang = ruang;
        this.empty = false;
      } else {
        this.empty = true;
      }
    })
  }

  getColor(sam) {
    return this.randColor[sam];
  }

}
