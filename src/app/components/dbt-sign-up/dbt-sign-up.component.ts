import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

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
    console.log(GlobalService.stateLoggedIn);
    GlobalService.stateLoggedIn = true;
    console.log(GlobalService.stateLoggedIn);
  }

  public Reset() {
    console.log('Clicked reset');
  }

}
