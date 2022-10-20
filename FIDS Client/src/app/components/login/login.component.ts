import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { userService } from 'src/app/services/user.service';
import {JwtService} from 'src/app/services/jwt.service';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  user: user = {
    username: '',
    email: '',
    password:'',
    published: false
  };
  submitted = false;
 
  constructor(private JwtService : JwtService ,private userService: userService,private router : Router) { }

  ngOnInit(): void {

    if(this.JwtService.loggedIn()){
      this.router.navigate(['users']);
    }
  }

  loginuser(): void {
    const data = {
      username: this.user.username,
   
      password:this.user.password
    };

    this.JwtService.login(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          if(localStorage.getItem('role')=='ROLE_ADMIN'){
          this.router.navigate(['users']);
          window.location.reload();
          
          }
          else{
          this.router.navigate(['dashboard']);
          window.location.reload();
          
        }
        },
        error => {
          console.log(error);
          alert('Not Authenticated');
          this.router.navigate(['']);

        });
  }



}
