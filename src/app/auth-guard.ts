import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthServiceGuard } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private ats: AuthServiceGuard , private route:Router){ }

    canActivate():boolean{
        if (this.ats.guards) {
            return true;
        }
        else{
            window.alert("Sorry You dont have Permision. Login First");
            this.route.navigate(['/login']);
            return false;
        }
    }
}

@Injectable()
export class AuthGuardAdmin implements CanActivate {
    constructor(private ats: AuthServiceGuard , private route:Router){ }

    canActivate():boolean{
        if (this.ats.Gadmin) {
            return true;
        }
        else{
            window.alert("Sorry You dont have Permision to Admin. Login First");
            this.route.navigate(['/loginAdmin']);
            return false;
        }
    }
}
