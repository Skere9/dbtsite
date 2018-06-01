import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dbt-user-list',
  templateUrl: './dbt-user-list.component.html',
  styleUrls: ['./dbt-user-list.component.css']
})
export class DbtUserListComponent implements OnInit {

  public user: User;
  public users: User[];

  public flagAreYouSure: Boolean;
  public flagAreYouSure_UserId: string;

  constructor(
    private userService: UserService
  ) {
    this.flagAreYouSure = false;
  }

  ngOnInit() {
    this.refreshUserList();
  }

  refreshUserList() {
    this.userService.getAllUsers()
      .then(
        res => {
          this.users = res;
        }
      );
  }

  areYouSure(pId: string): void {
    this.flagAreYouSure = true;
    this.flagAreYouSure_UserId = pId;
  }

  resetDelete(): void {
    this.flagAreYouSure = false;
  }

  deleteUser(p_Id: string): void {

    // Reset "are you sure" which had to precede this
    this.flagAreYouSure = false;
    // Delete the user
    console.log('Delete the user');
    console.log(p_Id);
    this.userService.deleteUser(p_Id)
      .then(
        res => {
          console.log(res);
          this.refreshUserList();
        });
  }

}
