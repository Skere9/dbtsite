import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class GlobalService {

  // Global variables
  public static DBT_SERVER = 'http://localhost:3001';
  public static loggedInStatus: Boolean;
  public static loggedInUser: User;
  public static loggedInUserName: string;

  public static users: User[];
  public theSelectedUser: User;

  public plans: Plan[];
  public theSelectedPlan: Plan;

  public appIcons;

  constructor(
    private http: Http
  ) {
    // GlobalService.users = User.createBlankUser();

    this.plans = [
      {
        '_id': '',
        'id': 1,
        'title': 'Plan 1',
        'exams': 'one',
        'duration': 'month',
        'price': 0.00
      }, {
        '_id': '',
        'id': 2,
        'title': 'Plan 2',
        'exams': 'all',
        'duration': 'month',
        'price': 0.00
      }, {
        '_id': '',
        'id': 3,
        'title': 'Plan 3',
        'exams': 'all',
        'duration': 'year',
        'price': 0.00
      }
    ];
  }

  static sendValidationEmail(pUser: User): Boolean {
    // Once a user has registered initially,
    // send the user an email message.
    console.log(pUser.email);

    return false;
  }

  static checkForUniqueEmail(pEmailAddress: string): Boolean {
    // Check to see if the incoming email is unique
    // with regard to existing email addresses in the
    // user database.  If it is unique - which is to say
    // that it is not already used by a user -
    // then return true.
    // If the email address is already used,
    // return false
    console.log('About to check for unique email against the database.');
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

  static getLoggedInUser(): User {
    return GlobalService.loggedInUser;
  }

  static getLoggedInUserDisplayMessageStatus(): Boolean {
    // Return the value of the particular user's selection
    // specifying if he/she wants the "You are logged in as"
    // message displayed.
    return GlobalService.loggedInUser.displayLoggedInMessage;
  }

  setLoggedInUser(pUser: User): void {
    GlobalService.loggedInUser = pUser;
    GlobalService.loggedInUserName = pUser.userName;
  }

  setLoggedInStatus(status: Boolean) {
    // GlobalService.loggedInUser = pUser;
    console.log('Setting logged in status');
    GlobalService.loggedInStatus = status;
  }

  getUser(pUser_Id: string): Promise<User> {
    this.theSelectedUser = GlobalService.users.find(user => user._id === pUser_Id);
    return new Promise((resolve, reject) => {
      resolve(this.theSelectedUser);
    });
  }

  signIn(pUserName: string, pPassWord: string): Promise<User> {

    return this.http
      .get(GlobalService.DBT_SERVER + '/signIn/' + pUserName + '/' + pPassWord)
      .toPromise()
      .then(
        response => response.json()
      );

    // this.theSelectedUser = GlobalService.users.find(user => user.userName === pUserName);
    // if (this.theSelectedUser !== undefined) {
    //   return new Promise((resolve, reject) => {
    //     resolve(this.theSelectedUser);
    //   });
    // } else {
    //   return null;
    // }
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
