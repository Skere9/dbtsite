import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';
import { User } from '../models/user';

@Injectable()
export class GlobalService {

  // Global variables
  public static stateLoggedIn: Boolean = false;
  public static loggedInStatus: Boolean;

  public static users: User[];
  public theSelectedUser: User;
  public plans: Plan[];
  public theSelectedPlan: Plan;

  constructor() {
    GlobalService.loggedInStatus = false;

    GlobalService.users = [
      {
        'id': 1,
        'firstName': 'Fred',
        'lastName': 'Smith',
        'email': 'any@one.com',
        'userName': 'skere',
        'pword': '1523',
        'bio': 'A Java developer',
        'keywords': []
      }, {
        'id': 2,
        'firstName': 'Alice',
        'lastName': 'Jones',
        'email': 'ajones@whatsup.com',
        'userName': 'wow',
        'pword': 'fa2352',
        'bio': 'An Oracle developer',
        'keywords': []
      }
    ];

    this.plans = [
      {
        'id': 1,
        'title': 'Plan 1',
        'exams': 'one',
        'duration': 'month',
        'price': 0.00
      }, {
        'id': 2,
        'title': 'Plan 2',
        'exams': 'all',
        'duration': 'month',
        'price': 0.00
      }, {
        'id': 3,
        'title': 'Plan 3',
        'exams': 'all',
        'duration': 'year',
        'price': 0.00
      }
    ];

  }

  static checkForUniqueEmail(pEmailAddress: string): Boolean {
    // Check to see if the incoming email is unique
    // with regard to existing email addresses in the
    // user database.  If it is unique - which is to say
    // that it is not already used by a user -
    // then return true.
    // If the email address is already used,
    // return false
    const theSelectedUser = GlobalService.users.find(user => user.email === pEmailAddress);
    console.log('From within checkForUniqueEmail');
    console.log(theSelectedUser);
    if (!theSelectedUser) {
      // there is no existing user with this email
      // address, therefore, the new email address
      // is unique
      return true;
    } else {
      // The new user has provided an email address
      // associated with an existing user in the
      // user database.  This isn't a unique
      // email address.
      return false;
    };
  }

  static getLoggedInStatus(): Boolean {
    // TODO: SKERE - CHECK THIS - IT IS GETTING INVOKED WAYYYYY TOO MANY TIMES
    // console.log('Getting logged in status');
    return GlobalService.loggedInStatus;
  }

  setLoggedInStatus(status: Boolean) {
    console.log('Setting logged in status');
    GlobalService.loggedInStatus = status;
  }

  getUser(pUserId: number): Promise<User> {
    this.theSelectedUser = GlobalService.users.find(user => user.id === pUserId);
    return new Promise((resolve, reject) => {
      resolve(this.theSelectedUser);
    });
  }

  getUserByUserName(pUserName: string): Promise<User> {
    this.theSelectedUser = GlobalService.users.find(user => user.userName === pUserName);
    if (this.theSelectedUser !== undefined) {
      return new Promise((resolve, reject) => {
        resolve(this.theSelectedUser);
      });
    } else {
      return null;
    }
  }

  getAllUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(GlobalService.users);
      }, 2); // TODO: Remove this setTimeOut function entirely, or set to 2000 for testing of promises
    });
  }

  getPlan(pPlanId: number): Promise<Plan> {
    this.theSelectedPlan = this.plans.find(plan => plan.id === pPlanId);
    return new Promise((resolve, reject) => {
      resolve(this.theSelectedPlan);
    });
  }

  getAllPlans(): Promise<Plan[]> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      resolve(this.plans);
      // }, 2); // TODO: Remove this setTimeOut function entirely, or set to 2000 for testing of promises
    });
  }

}
