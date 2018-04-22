import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppWideService } from '../../services/appwide.service';

@Component({
  selector: 'app-dbt-sign-in',
  templateUrl: './dbt-sign-in.component.html',
  styleUrls: ['./dbt-sign-in.component.css']
})
export class DbtSignInComponent implements OnInit {

  @Output() userSignInClickEmitter: EventEmitter<number> = new EventEmitter();

  userName: string;
  userPassword: string;

  constructor( private appWideService: AppWideService) { 
    this.userName = '';
    this.userPassword = '';
  }

  ngOnInit() {
  }

  public SignIn() {
    console.log('Clicked Sign In');
    console.log(AppWideService.stateLoggedIn);
    console.log(this.userName);
    console.log(this.userPassword);

    AppWideService.stateLoggedIn = true;
    console.log(AppWideService.stateLoggedIn);
    // Send event to ...?
    this.userSignInClickEmitter.emit(17);
    console.log('About to set logged in status via service.');
    this.appWideService.setLoggedInStatus(true);
    console.log('Back from service.  Did the service say anything?');
  }

  public Reset() {
    console.log('Clicked reset');
  }

}
