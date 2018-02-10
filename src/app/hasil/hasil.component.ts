import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ruang, calon } from '../hen-data';

@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.scss']
})
export class HasilComponent implements OnInit {
  empty:boolean;
  jumlahdatapeserta:number;
  jumlahpolinh:number;
  presentasehasilakhir:any;
  constructor(private router: Router , private route: ActivatedRoute , private datSer: DataService) {

  }

  private id = this.route.snapshot.params['id'];
  fileToUpload: File = null;
  ruang = new ruang();
  calon = new calon();
  cabalon:any;
  ngOnInit() {
    this.getCalon();
    this.getTotalJumlahPeserta();
  }
  

  getCalon() {
    this.datSer.showCalon(this.id).subscribe(cabalon => {
      if (cabalon.id_ruang == "error") {
        this.empty = true;
      } else if (cabalon) {
        this.cabalon = cabalon;
        this.empty = false;
      } else {
        this.empty = true;
      }
    })
  }
  getTotalJumlahPeserta(){
    this.datSer.getAlldataPeserta().subscribe(jumlahdatapeserta => {
      this.jumlahdatapeserta = jumlahdatapeserta;
    })
  }
  setPresentase(poling , jumpes){
    this.presentasehasilakhir = (poling / jumpes * 100);
  }
  presentase():string{
    return this.presentasehasilakhir+"%";
  }
}
