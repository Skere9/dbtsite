import { Component, OnInit } from '@angular/core';

import { UserAccount } from '../../models/userAccount';

@Component({
  selector: 'app-dbt-user-profile',
  templateUrl: './dbt-user-profile.component.html',
  styleUrls: ['./dbt-user-profile.component.css']
})
export class DbtUserProfileComponent implements OnInit {

  userAccount: UserAccount;

  constructor() {
    this.userAccount = UserAccount.createBlankUserAccount();
  }

  ngOnInit() {
  }

  registerUser() {
    console.log('Register User');
  }

}
