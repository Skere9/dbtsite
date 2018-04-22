import { Injectable } from '@angular/core';

@Injectable()
export class AppWideService {

  // Global variables
  public static stateLoggedIn: Boolean = false;

  loggedInStatus: Boolean;

  constructor() {
    this.loggedInStatus = false;
  }

  getLoggedInStatus(): Boolean {
    console.log('Getting logged in status');
    return this.loggedInStatus;
  }

  setLoggedInStatus(status: Boolean) {
    console.log('Setting logged in status');
    this.loggedInStatus = status;
  }

}
