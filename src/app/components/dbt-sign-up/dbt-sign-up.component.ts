import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbt-sign-up',
  templateUrl: './dbt-sign-up.component.html',
  styleUrls: ['./dbt-sign-up.component.css']
})
export class DbtSignUpComponent implements OnInit {

  public user: User;
  public emailAddressNotUnique: Boolean = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.user = User.createBlankUser();
  }

  public SignUp() {
    const uniqueEmail = GlobalService.checkForUniqueEmail(this.user.email);
    if (!uniqueEmail) {
      console.log('emailAddressNotUnique!!');
      this.emailAddressNotUnique = true;
    } else {
      this.emailAddressNotUnique = false;
      console.log('Keep going.');
    }

    GlobalService.stateLoggedIn = true;

    // Signup has completed this stage.  Move to the next page.
    this.router.navigateByUrl('/thank-you-check-email');

  }

  public Reset() {
    console.log('Clicked reset');
    // Reset this value, which turns off warning messages in the form.
    this.emailAddressNotUnique = false;
  }

}
