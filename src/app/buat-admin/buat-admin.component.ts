import { Component, OnInit } from '@angular/core';
import { admin } from '../hen-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buat-admin',
  templateUrl: './buat-admin.component.html',
  styleUrls: ['./buat-admin.component.scss']
})
export class BuatAdminComponent implements OnInit {
  public logic:boolean;
  constructor(private datSer:DataService) {
    this.logic = false;  
  }
  model = new admin();

  ngOnInit() {
  }

  addAdmin(){
    this.datSer.addAdmin(this.model)
    .subscribe(() => {
      this.logic = true;
    });
  }



}
