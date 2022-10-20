import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import {JwtService} from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private jwtService: JwtService,public jwtHelper: JwtHelperService
  ) { }


  canActivate(){
    if (!this.jwtService.loggedIn()||this.jwtHelper.isTokenExpired()) {
      
      this.router.navigate(['login']);
      return false;
    } else {

      if(this.jwtService.isAdmin())
      return true;
      else{
      this.router.navigate(['dashboard']);
        return false;
      }
    }
  }
  
}
