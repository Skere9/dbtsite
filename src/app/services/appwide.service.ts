import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';

@Injectable()
export class AppWideService {

  // Global variables
  public static stateLoggedIn: Boolean = false;

  loggedInStatus: Boolean;

  public plans: Plan[];

  constructor() {
    this.loggedInStatus = false;


    this.plans = [
      {
        'id': 1,
        'title': 'Plan 1',
        'exams' : 'one',
        'duration': 'month',
        'price' : 19.95
      },{
        'id': 2,
        'title': 'Plan 2',
        'exams' : 'all',
        'duration': 'month',
        'price' : 29.95
      },{
        'id': 3,
        'title': 'Plan 3',
        'exams' : 'all',
        'duration': 'year',
        'price' : 39.95
      }
    ];

  }

  getLoggedInStatus(): Boolean {
    console.log('Getting logged in status');
    return this.loggedInStatus;
  }

  setLoggedInStatus(status: Boolean) {
    console.log('Setting logged in status');
    this.loggedInStatus = status;
  }

  getAllPlans(): Promise<Plan[]> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.plans);
      // }, 2); // TODO: Remove this setTimeOut function entirely, or set to 2000 for testing of promises
    });
  }

}
