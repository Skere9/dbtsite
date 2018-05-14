import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-dbt-user-profile',
  templateUrl: './dbt-user-profile.component.html',
  styleUrls: ['./dbt-user-profile.component.css']
})
export class DbtUserProfileComponent implements OnInit {

  user: User;

  constructor() {
    this.user = User.createBlankUser();
  }

  ngOnInit() {
  }

  registerUser() {
    console.log('Register User');
  }

}
