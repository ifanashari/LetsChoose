import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ruang, calon } from '../hen-data';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-calon',
  templateUrl: './calon.component.html',
  styleUrls: ['./calon.component.scss']
})
export class CalonComponent implements OnInit {
  empty = true;
  Token: string;
   check:boolean;
   edit:boolean;
   plusCalon:boolean;
   photo:string;
   checkUrl:boolean;
  url:any;

  constructor(
    private router: Router , private route: ActivatedRoute , private datSer: DataService
  ) { 
    this.edit = false;
    this.plusCalon = false;
    this.check = false;
    this.checkUrl = false;

    this.calon.id_ruang = this.id;
  }

  private id = this.route.snapshot.params['id'];
  ruang = new ruang();
  calon = new calon();
  cabalon:any;
  ngOnInit() {
    this.getOne();
    this.getCalon();
  }

  getOne(){
    this.datSer.showRuangOne(this.id).subscribe(data => {
      this.ruang = data[0];
    })
  }

  addCalon(){
    console.log(this.calon);
    // this.datSer.addCalon(this.calon).subscribe(() => {
    //   this.check = true;
    // });
  }

  getToken(){
    var text = "";
    var psble =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 12; i++) {
      text += psble.charAt(Math.floor(Math.random() * psble.length));
    }

    return text;
  }

  genToken(){
    this.Token = this.getToken();
    this.ruang.token_ruang = this.Token;
  }

  getPhoto(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      let fD = new FormData()
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.checkUrl = true;
      }
  
      reader.readAsDataURL(event.target.files[0]);
      this.calon.photo = fD.append('file' , event.target.files[0]);
    }
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

  deleteCalon(id_calon){
    this.datSer.deletedCalon(id_calon).subscribe(() => {
      this.getCalon();
    })
  }

  deleteRuang(id_ruang){
    var r = confirm("Yakin mau hapus?");
    if (r == true) {
      this.datSer.deletedRuang(id_ruang).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }else{
      
    }
  }

  //other
  openEdit(){
    this.edit = true;
    this.plusCalon = false;
  }

  backOn(){
    this.edit = false;
  }
  openPlus(){
    this.plusCalon = true;
  }
  closePlus(){
    this.getCalon();
    this.plusCalon = false;
  }
  

}
