import { Injectable } from '@angular/core';
import { Router , ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth-guard';

@Injectable()
export class AuthService {
  public guards:boolean;
  public Gadmin:boolean;
  constructor() {
      if(sessionStorage.getItem('status')){
        this.guards = true;
      }else if(sessionStorage.getItem('admin')){
        this.Gadmin = true;
      }else {
        this.guards = false;
      }
  }
  
  openGuard(){
    this.guards = true;
  }
  openGadmin(){
    this.Gadmin = true;
  }

}
@Injectable()
export class AuthServiceOpenGuards {
  public guards:boolean;
  openGuard(){
    this.guards = true;
  }
}
