import { Injectable } from '@angular/core';

@Injectable()
export class AppWideService {

  // Global variables
  public static stateLoggedIn: Boolean = false;

  constructor() {
  }

}
