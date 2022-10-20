import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
//import { clear } from 'console';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class userDetailsComponent implements OnInit {

  currentuser: user = {
    username: '',
    email: '',
    password:'',
    published: false,
    role:false
   
  };
   pwdUpdated=false;
  message = '';

  constructor(
    private userService: userService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getuser(this.route.snapshot.params.id);
  }

  getuser(id: string): void {
    this.userService.get(id)
      .subscribe(
         response => {
        //data.role[0].user_roles.roleId 
        
         this.currentuser = response.user;
         this.currentuser.role=response.role[0].user_roles.roleId == '1'? false:true;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }


  clear(){

    this.currentuser.password="";
    this.pwdUpdated=true;
  }
  
  updatePublished(status: boolean): void {
    const data = {
      username: this.currentuser.username,
      email: this.currentuser.email,
      published: status,
      //pwdUpdated:this.pwdUpdated
    };

    this.message = '';

    this.userService.update(this.currentuser.id, data)
      .subscribe(
        response => {
          this.currentuser.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateuser(): void {
    this.message = '';
    const data = {
      username: this.currentuser.username,
      content: this.currentuser.content,
      password: this.currentuser.password,
      pwdUpdated:this.pwdUpdated,
      
    };
    this.userService.update(this.currentuser.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This screen was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteuser(): void {
    this.userService.delete(this.currentuser.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
  }

}
