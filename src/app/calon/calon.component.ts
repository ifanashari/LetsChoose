import { Component, OnInit , ElementRef , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ruang, calon , photo } from '../hen-data';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { error } from 'util';

@Component({
  selector: 'app-calon',
  templateUrl: './calon.component.html',
  styleUrls: ['./calon.component.scss']
})
export class CalonComponent implements OnInit {
  form: FormGroup;
  empty = true;
  Token: string;
   check:boolean;
   edit:boolean;
   plusCalon:boolean;
   photo:string;
   checkUrl:boolean;
  url:any;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private router: Router , private route: ActivatedRoute , private datSer: DataService,
    private elem: ElementRef, private fB: FormBuilder
  ) { 
    this.createForm();
    this.edit = false;
    this.plusCalon = false;
    this.check = false;
    this.checkUrl = false;

    this.calon.id_ruang = this.id;

  }

  createForm() {
    this.form = this.fB.group({
      avatar: null
    });
  }


  private id = this.route.snapshot.params['id'];
  fileToUpload: File = null;
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
    this.datSer.addCalon(this.calon).subscribe(() => {
      this.check = true;
    });
  }

  getToken(){
    var text = "";
    var psble =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 12; i++) {
      text += psble.charAt(Math.floor(Math.random() * psble.length));
    }

    return text;
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = event.target.result;
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit(id_calon) {
    const formModel = this.form.value;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    this.datSer.upPhoto(formModel , id_calon).subscribe(() => {
      this.getCalon();
    })

  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


  genToken(){
    this.Token = this.getToken();
    this.ruang.token_ruang = this.Token;
  }

  uploadPhoto(){

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
