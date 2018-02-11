import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { user } from './hen-data';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  checkMe:any;

  constructor(private _http:Http) { }

  getAlldataPeserta(){
    return this._http.get("http://localhost:100/LetsApi/selectAll.php")
    .map(res => {

      this.checkMe = res;

      if (this.checkMe._body !== "0") {
        return res.json();
      }
      
    });
  }

  addPerson(data , table){
    return this._http.post("http://localhost:100/LetsApi/insert.php" , data , table)
    .map(() => "");
  }

  loginPerson(username : string , password:string){
    return this._http.post("http://localhost:100/LetsApi/login.php" , { username: username, password: password })
    .map(res =>{
      if (res) {
        return res.json();
      }
    });
  }

  //admin Hendler
  loginAdmin(username : string , password:string){
    return this._http.post("http://localhost:100/LetsApi/Admin/login.php" , { username: username, password: password })
    .map(res =>{
      if (res) {
        return res.json();
      }
    });
  }

  addAdmin(data){
    return this._http.post("http://localhost:100/LetsApi/Admin/insert.php" , data)
    .map(() => "");
  }

  //addruang
  addRuang(data){
    return this._http.post('http://localhost:100/LetsApi/Admin/addruang.php' , data)
      .map(() => "");
  }
  showRuang(id){
    return this._http.post('http://localhost:100/LetsApi/Admin/showruang.php', {'id':id})
      .map(res =>{

        this.checkMe = res;

        if (this.checkMe._body !== "0") {
          return res.json();
        }else{
          return false;
        }

      });
  }

  showRuangOne(id){
    return this._http.post('http://localhost:100/LetsApi/Admin/showoner.php' , {'id' : id })
      .map(res => res.json());
  }

  addCalon(data){
    return this._http.post('http://localhost:100/LetsApi/Admin/addcalon.php' , data)
      .map(() => "");
  }

  showCalon(id){
    return this._http.post('http://localhost:100/LetsApi/Admin/showCalon.php' , {'id': id})
    .map(res => res.json());
  }

  enterRuang(token: string){
    return this._http.post('http://localhost:100/LetsApi/enter.php' , {'token' : token})
    .map(res =>{
      if (res) {
        return res.json();
      }
    })
  }

  deletedCalon(id){
    return this._http.post('http://localhost:100/LetsApi/Admin/dCalon.php' , {'id': id})
    .map(() => this.showCalon(id));
  }

  deletedRuang(id){
    return this._http.post('http://localhost:100/LetsApi/Admin/dRuang.php' , {'id': id})
    .map(() => this.showRuang(id));
  }

  deletedAdmin(id){
    return this._http.post('http://localhost:100/LetsApi/Admin/dAdmin.php' , {'id': id})
      .map(() => "");
  }

  upPhoto(filename , id){
    return this._http.post('http://localhost:100/LetsApi/Admin/uploadImg.php' , {'filename':filename , 'id':id})
    .map(() => "");
  }

  pemolingan(poling , persen , id){
    return this._http.post('http://localhost:100/LetsApi/pilih.php' , { poling,'persen':persen ,'id':id})
      .map(() => "");
  }

}
