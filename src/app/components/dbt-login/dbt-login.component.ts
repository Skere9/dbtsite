import { Component, OnInit } from '@angular/core';
import { AppWideService } from '../../services/appwide.service';

@Component({
  selector: 'app-dbt-login',
  templateUrl: './dbt-login.component.html',
  styleUrls: ['./dbt-login.component.css']
})
export class DbtLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public Login() {
    console.log('Clicked login');
    console.log(AppWideService.stateLoggedIn);
    AppWideService.stateLoggedIn = true;
    console.log(AppWideService.stateLoggedIn);
  }

  public Reset() {
    console.log('Clicked reset');
  }

}
