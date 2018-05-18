import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbt-sign-in',
  templateUrl: './dbt-sign-in.component.html',
  styleUrls: ['./dbt-sign-in.component.css']
})
export class DbtSignInComponent implements OnInit {

  userName: string;
  userPassword: string;
  public signInAttemptFailed: Boolean = false;

  constructor(private globalService: GlobalService,
    private router: Router) {
    this.userName = '';
    this.userPassword = '';
  }

  ngOnInit() {
  }

  public SignIn() {
    // Check if the username already exists
    const result = this.globalService.getUserByUserName(this.userName);
    console.log('Log in result:');
    console.log(result);
    if (result) {
      console.log('result is true');
      // GlobalService.stateLoggedIn = true;
      // Send event to ...?
      this.globalService.setLoggedInStatus(true);
      this.router.navigate(['/', 'userProfile']);
      this.signInAttemptFailed = false;
    } else {
      console.log('result is false');
      this.globalService.setLoggedInStatus(false);
      // GlobalService.stateLoggedIn = false;
      this.signInAttemptFailed = true;
    }
  }

  public Reset() {
    console.log('Clicked reset');
  }

  /*
    public testThenDelete() {
      if (this.myform.valid) {
        console.log('Valid');
      } else {
        console.log('Invalid');
      }
      console.log('It worked!');
    }
  */


}
