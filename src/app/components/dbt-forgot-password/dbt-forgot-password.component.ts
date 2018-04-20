import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbt-forgot-password',
  templateUrl: './dbt-forgot-password.component.html',
  styleUrls: ['./dbt-forgot-password.component.css']
})
export class DbtForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendEmail(): void {
    console.log('sending email to: ');
  }

}
