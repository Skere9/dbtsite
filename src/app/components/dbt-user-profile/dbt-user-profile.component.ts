import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';

enum UserRoles {
  VISITOR,
  USER,
  ADMIN
};

@Component({
  selector: 'app-dbt-user-profile',
  templateUrl: './dbt-user-profile.component.html',
  styleUrls: ['./dbt-user-profile.component.css']
})
export class DbtUserProfileComponent implements OnInit {

  user: User;
  updateThisUser: User;
  // pointerToUserToUpdate: User;

  flagEditProfile: Boolean;
  flagShowPassword: Boolean;

  public theShowOrHideMessage: string;
  public SHOW_PASSWORD_MESSAGE = 'Show Password';
  public HIDE_PASSWORD_MESSAGE = 'Hide Password';

  public roles: UserRoles;

  constructor(
    private globalService: GlobalService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = GlobalService.getLoggedInUser();
    this.flagEditProfile = false;
    this.flagShowPassword = false;
    console.log(GlobalService.loggedInUser);
    this.theShowOrHideMessage = this.SHOW_PASSWORD_MESSAGE;
    console.log(this.roles);
  }

  ngOnInit() {
    // This page access requires logged-in status
    // If user is not logged in, automatically
    // send user to home page
    if (!GlobalService.getLoggedInStatus()) {
      this.router.navigate(['/', 'mustBeLoggedIn']);
    }
  }

  togglePassword() {
    this.flagShowPassword = !this.flagShowPassword;
    if (this.flagShowPassword) {
      this.theShowOrHideMessage = this.HIDE_PASSWORD_MESSAGE;
    } else {
      this.theShowOrHideMessage = this.SHOW_PASSWORD_MESSAGE;
    };
  }

  editProfile() {
    // Get a copy of the profile to edit
    // This is in cae we choose later to reject
    // our changes and return to the original

    // this.pointerToUserToUpdate = this.user;
    this.updateThisUser = User.createBlankUser();
    this.updateThisUser = Object.assign(this.updateThisUser, this.user);

    // Set flat to change visual display
    this.flagEditProfile = !this.flagEditProfile;
  }

  cancelUpdate() {
    this.resetUpdate();
    this.flagEditProfile = !this.flagEditProfile;
  }

  resetUpdate() {
    console.log('Reset update');
    this.updateThisUser = Object.assign(this.updateThisUser, this.user);
  }

  updateProfile() {
    console.log('Update profile');
    // this.pointerToUserToUpdate = Object.assign(this.pointerToUserToUpdate, this.updateThisUser);
    this.userService.updateUser(this.updateThisUser);
    this.user = Object.assign(this.user, this.updateThisUser);
    this.flagEditProfile = !this.flagEditProfile;
  }

}
