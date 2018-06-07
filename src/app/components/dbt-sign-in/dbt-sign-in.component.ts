import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-dbt-sign-in',
  templateUrl: './dbt-sign-in.component.html',
  styleUrls: ['./dbt-sign-in.component.css']
})
export class DbtSignInComponent implements OnInit {

  userName: string;
  passWord: string;
  public signInAttemptFailed: Boolean = false;

  public flagShowPassword: Boolean = false;
  public theShowOrHideMessage: string;
  public SHOW_PASSWORD_MESSAGE = 'Show Password';
  public HIDE_PASSWORD_MESSAGE = 'Hide Password';

  constructor(private globalService: GlobalService,
    private router: Router) {
    this.userName = '';
    this.passWord = '';
    this.flagShowPassword = false;
    this.theShowOrHideMessage = this.SHOW_PASSWORD_MESSAGE;
  }

  ngOnInit() {
  }

  public SignIn() {
    console.log('Signing in ...');
    // Check if the username already exists
    // let resultingUser = User.createBlankUser();
    this.globalService.signIn(this.userName, this.passWord)
      .then(
        res => {
          console.log('In res');
          // If the server finds the
          // userName and passWord, it will
          // return the user object, with the
          // _id value of about 26 characters.
          // But if no userName / passWord is
          // found, the server returns a single
          // digit answer for the _id.
          if (JSON.stringify(res._id).length !== 1) {
            // console.log('Found it');
            // Successful sign in
            this.signInAttemptFailed = false;
            this.globalService.setLoggedInStatus(true);
            this.globalService.setLoggedInUser(res);
            // console.log(GlobalService.loggedInUser);
            this.router.navigate(['/', 'userProfile']);
          } else {
            console.log('Not there');
            this.signInAttemptFailed = true;
            this.globalService.setLoggedInStatus(false);
          }
        }
      );
  }

  public Reset() {
    console.log('Clicked reset');
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
