import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dbt-sign-up',
  templateUrl: './dbt-sign-up.component.html',
  styleUrls: ['./dbt-sign-up.component.css']
})
export class DbtSignUpComponent implements OnInit {

  public user: User;
  public flagShowPassword: Boolean = false;
  public flagEmailAddressNotUnique: Boolean = false;
  public flagUserNameNotUnique: Boolean = false;

  public theShowOrHideMessage: string;
  public SHOW_PASSWORD_MESSAGE = 'Show Password';
  public HIDE_PASSWORD_MESSAGE = 'Hide Password';
  
  constructor(
    private router: Router,
    private userService: UserService,
    private globalService: GlobalService
  ) {
    this.theShowOrHideMessage = this.SHOW_PASSWORD_MESSAGE;
  }

  ngOnInit() {
    this.user = User.createBlankUser();
  }

  public SignUp() {
    // reset the flags
    this.flagEmailAddressNotUnique = false;
    this.flagUserNameNotUnique = false;
    this.userService.addUser(this.user)
      .then(
        res => {
          console.log('in dbt-sign-up.component.SignUp(). Just before the JSON.parse:');
          console.log(res);
          const newData = JSON.stringify(res);
          if (JSON.parse(newData).code === 50) {
            // STOP!  This email address is
            // already registered in the database.
            // This error code indicates the
            // email address was not unique
            // For more details, see the code
            // in the server
            // Setting the flagEmailAddressNotUnique
            // to TRUE to trigger an error message
            // display in the view
            this.flagEmailAddressNotUnique = true;
            // Stop processing here.
          } else if (JSON.parse(newData).code === 51) {
            this.flagUserNameNotUnique = true;
          } else {
            // KEEP GOING.  This email address
            // is unique.
            // Just in case the "not unique"
            // flag had been set to display
            // the "not unique" message,
            // turn it off.
            // this.flagEmailAddressNotUnique = false;
            // Register with the database
            GlobalService.loggedInUser = this.user;
            // Registration complete.
            // Set session state variable accordingly.
            this.globalService.setLoggedInStatus(true);
            // Signup has completed this stage.  Move to the next page.
            this.router.navigateByUrl('/thank-you-check-email');
          }
        }
      );
  }

  public Reset() {
    console.log('Clicked reset');
    // Reset this value, which turns off warning messages in the form.
    this.flagEmailAddressNotUnique = false;
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
