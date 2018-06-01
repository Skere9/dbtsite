import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user'
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-dbt-user-profile',
  templateUrl: './dbt-user-profile.component.html',
  styleUrls: ['./dbt-user-profile.component.css']
})
export class DbtUserProfileComponent implements OnInit {

  user: User;

  flagEditProfile: Boolean;
  flagShowPassword: Boolean;

  public theShowOrHideMessage: string;
  public SHOW_PASSWORD_MESSAGE = 'Show Password';
  public HIDE_PASSWORD_MESSAGE = 'Hide Password';

  constructor(
    private globalService: GlobalService
  ) {
    this.user = GlobalService.getLoggedInUser();
    this.flagEditProfile = false;
    this.flagShowPassword = false;
    console.log(GlobalService.loggedInUser);
    this.theShowOrHideMessage = this.SHOW_PASSWORD_MESSAGE;
  }

  ngOnInit() {
  }

  toggleEdit() {
    this.flagEditProfile = !this.flagEditProfile;
  }

  togglePassword() {
    this.flagShowPassword = !this.flagShowPassword;
    if (this.flagShowPassword) {
      this.theShowOrHideMessage = this.HIDE_PASSWORD_MESSAGE;
    } else {
      this.theShowOrHideMessage = this.SHOW_PASSWORD_MESSAGE;
    };
  }

}
