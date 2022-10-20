import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';


const authurl = 'http://localhost:8080/api/auth/signin';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

currentuser ="";

 
 
  login(data: any): Observable<any> {
    return this.httpClient.post<{accessToken:  string,username:string,roles:any}>(authurl, data).pipe(tap(res => {
      localStorage.setItem('access_token', res.accessToken);
      localStorage.setItem('username', res.username);
      localStorage.setItem('role', res.roles[0]);
      this.currentuser= res.username;
  }))
   
  }
  logout() {
    localStorage.removeItem('access_token');
    
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  isAdmin(){return localStorage.getItem('role')=='ROLE_ADMIN'}
  loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
  constructor(private httpClient: HttpClient) { }
}
