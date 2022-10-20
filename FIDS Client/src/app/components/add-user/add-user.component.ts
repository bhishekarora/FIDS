import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AdduserComponent implements OnInit {

  user: user = {
    username: '',
    email: '',
    password:'',
    published: false,
    role:false
  };
  submitted = false;

  constructor(private userService: userService) { }

  ngOnInit(): void {
  }

  saveuser(): void {
    const data = {
      username: this.user.username,
      email: this.user.email,
      password:this.user.password,
      role:this.user.role
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  setAdmin(){
    this.user.role=true;
  }

  newuser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      email: '',
      password: '',
      published: false,
      role:this.user.role

    };
  }

}
