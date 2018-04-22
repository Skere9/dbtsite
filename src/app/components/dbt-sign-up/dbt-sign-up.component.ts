import { Component, OnInit } from '@angular/core';
import { AppWideService } from '../../services/appwide.service';

@Component({
  selector: 'app-dbt-sign-up',
  templateUrl: './dbt-sign-up.component.html',
  styleUrls: ['./dbt-sign-up.component.css']
})
export class DbtSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public SignUp() {
    console.log('Clicked Sign Up');
    console.log(AppWideService.stateLoggedIn);
    AppWideService.stateLoggedIn = true;
    console.log(AppWideService.stateLoggedIn);
  }

  public Reset() {
    console.log('Clicked reset');
  }

}
