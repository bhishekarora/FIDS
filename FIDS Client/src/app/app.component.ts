import { Component } from '@angular/core';
import {JwtService} from 'src/app/services/jwt.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Admin Console';
  loggedin: boolean;
  kiosk:boolean = false;
  currentuser:any;
  isAdmin: boolean;

  constructor(private jwtService: JwtService) {
    this.loggedin= jwtService.loggedIn();
    this.currentuser=localStorage.getItem('username');
    this.isAdmin = jwtService.isAdmin();
    this.kiosk=true;
}

logout(){
  this.jwtService.logout();
  window.location.reload();

}

}