import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dbt-user-profile',
  templateUrl: './dbt-user-profile.component.html',
  styleUrls: ['./dbt-user-profile.component.css']
})
export class DbtUserProfileComponent implements OnInit {

  @Input() userId: number;

  user: User;
  updateThisUser: User;
  // pointerToUserToUpdate: User;

  flagEditProfile: Boolean;
  flagShowPassword: Boolean;

  public theShowOrHideMessage: string;
  public SHOW_PASSWORD_MESSAGE = 'Show Password';
  public HIDE_PASSWORD_MESSAGE = 'Hide Password';

  public roles = GlobalService.roles;

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
  }

  ngOnInit() {
    // This page access requires logged-in status
    // If user is not logged in, automatically
    // send user to home page
    console.log('ngOnInit');
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
    console.log(this.updateThisUser);
  }

  updateProfile() {
    this.userService.updateUser(this.updateThisUser);
    this.globalService.setLoggedInUser(this.updateThisUser);
    this.user = Object.assign(this.user, this.updateThisUser);
    this.flagEditProfile = !this.flagEditProfile;
  }

}
