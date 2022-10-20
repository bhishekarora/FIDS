import { Component, OnInit } from '@angular/core';
import {DashboardService} from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router'
import {io} from 'socket.io-client';

import {userService} from 'src/app/services/user.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  screenId: any;
 //i ntervalId=1;
 private socket: any;
 public socketdata: any;
  type: any;
 
  constructor(private dashboardService: DashboardService,private activateRoute: ActivatedRoute,private userService: userService) {
    this.socket = io('http://localhost:3000');
   }
data:any = [];
time = "";
ad ="";


//console.log(todayDate);


  ngOnInit(): void {
    

    this.socket.on('notification', (res: any) => {
      this.socketdata = res.data;

      console.log('socket data received'+res.data);
    });

    this.activateRoute.queryParams
      .subscribe(params => {
        console.log(params); 
        this.screenId= params.screenid;
        console.log(this.screenId); 
      }

      
    );

    this.userService.get(this.screenId).subscribe(
      response => {
     //data.role[0].user_roles.roleId 
     this.ad = response.user.ad;
         console.log('dash response '+response.user.ad);
     },
     error => {
       console.log(error);
     });;


    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);

setInterval(() => {
      this.getData();
    }, 5000);


}

getData(){

  this.dashboardService.getAPIData(localStorage.getItem('access_token'),this.screenId).subscribe(
    response => {
      console.log(response);
  this.data=response.flights;
  this.type=response.type;
     },
    error => {
      console.log(error);
      alert(error.error.message);
     
    });
}

}
