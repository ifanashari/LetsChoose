import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { user } from './hen-data';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  checkMe:any;

  constructor(private _http:Http) { }

  getAlldata(){
    return this._http.get("http://localhost/LetsApi/select.php")
    .map(res => {

      this.checkMe = res;

      if (this.checkMe._body !== "0") {
        return res.json();
      }
      
    });
  }

  addPerson(data , table){
    return this._http.post("http://localhost/LetsApi/insert.php" , data , table)
    .map(() => "");
  }

  loginPerson(username : string , password:string){
    return this._http.post("http://localhost/LetsApi/login.php" , { username: username, password: password })
    .map(res =>{
      if (res) {
        return res.json();
      }
    });
  }

  //admin Hendler
  loginAdmin(username : string , password:string){
    return this._http.post("http://localhost/LetsApi/Admin/login.php" , { username: username, password: password })
    .map(res =>{
      if (res) {
        return res.json();
      }
    });
  }

  addAdmin(data){
    return this._http.post("http://localhost/LetsApi/Admin/insert.php" , data)
    .map(() => "");
  }

}
