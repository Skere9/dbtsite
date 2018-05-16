import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dbt-sign-up',
  templateUrl: './dbt-sign-up.component.html',
  styleUrls: ['./dbt-sign-up.component.css']
})
export class DbtSignUpComponent implements OnInit {

  public user: User;
  public emailAddressNotUnique: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.user = User.createBlankUser();
  }

  public SignUp() {
    const uniqueEmail = GlobalService.checkForUniqueEmail(this.user.email);
    if (!uniqueEmail) {
      console.log('emailAddressNotUnique!!');
      this.emailAddressNotUnique = true;
    } else {
      console.log('Keep going.');
    }

    GlobalService.stateLoggedIn = true;

  }

  public Reset() {
    console.log('Clicked reset');
  }

}
