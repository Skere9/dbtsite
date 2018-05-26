import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dbt-user-list',
  templateUrl: './dbt-user-list.component.html',
  styleUrls: ['./dbt-user-list.component.css']
})
export class DbtUserListComponent implements OnInit {

  public user: User;
  public users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .then(
      res => {
        this.users = res;
      }
    );
  }

}
