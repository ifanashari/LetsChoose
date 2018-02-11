import { Component, OnInit , ElementRef , ViewChild, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ruang, calon , photo } from '../hen-data';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { error } from 'util';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-calon',
  templateUrl: './calon.component.html',
  styleUrls: ['./calon.component.scss'],
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

  //local hp upload
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private router: Router , private route: ActivatedRoute , private datSer: DataService,
    private elem: ElementRef, private fB: FormBuilder
  ) { 
    this.edit = false;
    this.plusCalon = false;
    this.check = false;
    this.checkUrl = false;

    this.calon.id_ruang = this.id;
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
    this.createForm();

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
  img = new photo();
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

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') { 

    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  fileEvent(fileInput , id_calon){
    let file = fileInput.target.files[0];
    let fileName = file.name;
    console.log(fileName , id_calon);
    this.datSer.upPhoto(fileName,id_calon).subscribe(() => {
      this.startUpload(id_calon);
    });
}
  

  startUpload(id_calon): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://localhost:100/LetsApi/Admin/uploadImg.php',
      method: 'POST',
      data: { foo: 'bar' },
    };
    this.uploadInput.emit(event);
    this.getCalon();
    
  }

}
