import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../../services/global.service';

// SKERE
// import { Observable } from 'rxjs/Observable'; // For use in method SignIn()
//

@Component({
  selector: 'app-dbt-sign-in',
  templateUrl: './dbt-sign-in.component.html',
  styleUrls: ['./dbt-sign-in.component.css']
})
export class DbtSignInComponent implements OnInit {

  @Output() userSignInClickEmitter: EventEmitter<number> = new EventEmitter();

  userName: string;
  userPassword: string;

  constructor(private globalService: GlobalService) {
    this.userName = '';
    this.userPassword = '';
  }

  ngOnInit() {
  }

  public SignIn() {
    // console.log('Clicked Sign In');
    // console.log(GlobalService.stateLoggedIn);
    // console.log(this.userName);
    // console.log(this.userPassword);

    // Check if the username already exists
    const result = this.globalService.getUserByUserName(this.userName);
    // console.log(result);
    if (result !== null) {
      // console.log('Got it!');
      GlobalService.stateLoggedIn = true;
      console.log('Logged in');
    } else {
      // console.log('Nothing returned');
      console.log('Login failed');
      GlobalService.stateLoggedIn = false;
    }


    // console.log(GlobalService.stateLoggedIn);
    // Send event to ...?
    this.userSignInClickEmitter.emit(17);
    // console.log('About to set logged in status via service.');
    this.globalService.setLoggedInStatus(true);
    // console.log('Back from service.  Did the service say anything?');

    // SKERE 
    // let x = new Observable<Boolean>();
    // x.
    // 

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
