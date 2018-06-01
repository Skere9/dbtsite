import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { GlobalService } from '../services/global.service';

import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  addUser(user: User): Promise<string> {
    console.log('Inside UserService.addUser');
    console.log(user);
    console.log('That was the user to be added.');
    return this.http
    .post(GlobalService.DBT_SERVER + '/users', user)
    .toPromise()
    .then(
      response => response.json()
    );
  }

  getAllUsers(): Promise<User[]> {
    console.log('In globalService.getAllUsers');
    return this.http
      .get(GlobalService.DBT_SERVER + '/users')
      .toPromise()
      .then(
        response => response.json()
      );
  }

  getUser(p_Id: number): Promise<User> {
    console.log('Get user from server');
    return this.http
    .get(GlobalService.DBT_SERVER + '/user/' + p_Id)
    .toPromise()
    .then(
      response => response.json()
    );
  }

  getUserCount(): Promise<number> {
    // Return the total number of posts
    return this.http
      .get(GlobalService.DBT_SERVER + '/users/count')
      .toPromise()
      .then(
        response => response.json()
      );
  }

  updateUser(user: User): void {
    console.log('Updating user');
    this.http
      .put(GlobalService.DBT_SERVER + '/user/' + user._id, user)
      .toPromise()
      .then(
        response => response.json()
      );
  }

  deleteUser(p_Id: string): Promise<string> {
    return this.http
      .delete(GlobalService.DBT_SERVER + '/user/' + p_Id)
      .toPromise()
      .then(
        response => response.json()
      );
  }
}
