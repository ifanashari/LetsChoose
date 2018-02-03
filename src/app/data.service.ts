import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { user } from './hen-data';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  checkMe:any;

  constructor(private _http:Http) { }

  getAlldata(){
    return this._http.get("http://turnuphbodiez.000webhostapp.com/LetsApi/select.php")
    .map(res => {

      this.checkMe = res;

      if (this.checkMe._body !== "0") {
        return res.json();
      }
      
    });
  }

  addPerson(data , table){
    return this._http.post("http://turnuphbodiez.000webhostapp.com/LetsApi/insert.php" , data , table)
    .map(() => "");
  }

  loginPerson(username : string , password:string){
    return this._http.post("http://turnuphbodiez.000webhostapp.com/LetsApi/login.php" , { username: username, password: password })
    .map(res =>{
      if (res) {
        return res.json();
      }
    });
  }

  //admin Hendler
  loginAdmin(username : string , password:string){
    return this._http.post("http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/login.php" , { username: username, password: password })
    .map(res =>{
      if (res) {
        return res.json();
      }
    });
  }

  addAdmin(data){
    return this._http.post("http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/insert.php" , data)
    .map(() => "");
  }

  //addruang
  addRuang(data){
    return this._http.post('http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/addruang.php' , data)
      .map(() => "");
  }
  showRuang(){
    return this._http.get('http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/showruang.php')
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
    return this._http.post('http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/showoner.php' , {'id' : id })
      .map(res => res.json());
  }

  addCalon(data){
    return this._http.post('http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/addcalon.php' , data)
      .map(() => "");
  }

  showCalon(id){
    return this._http.post('http://turnuphbodiez.000webhostapp.com/LetsApi/Admin/showCalon.php' , {'id': id})
    .map(res => res.json());
  }

}
