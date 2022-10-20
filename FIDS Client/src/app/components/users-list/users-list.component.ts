import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class usersListComponent implements OnInit {

  users?: user[];
  currentuser: user = {};
  currentIndex = -1;
  username = '';

  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.retrieveusers();
  }

  retrieveusers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveusers();
    this.currentuser = {};
    this.currentIndex = -1;
  }

  setActiveuser(user: user, index: number): void {
    this.currentuser = user;
    this.currentIndex = index;
  }

  removeAllusers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentuser = {};
    this.currentIndex = -1;

    this.userService.findByTitle(this.username)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
