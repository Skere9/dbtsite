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
    if (result !== null) {
      GlobalService.stateLoggedIn = true;
    } else {
      GlobalService.stateLoggedIn = false;
    }
    // Send event to ...?
    this.globalService.setLoggedInStatus(true);
    this.router.navigate(['/', 'userProfile']);
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
