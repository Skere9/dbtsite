import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stateLoggedIn: Boolean;
  title = 'app';
  currentYear: number;
  siteURL: string;
  siteName: string;

  constructor(private globalService: GlobalService) {
    // this.stateLoggedIn = this.globalService.getLoggedInStatus();
    this.stateLoggedIn = false;
    this.currentYear = new Date().getFullYear();
    this.siteURL = 'http://www.databasetraining.com';
    this.siteName = 'DATABASETRAINING.COM';
  }

  userSignedIn(number): void {
    console.log('Emit captured!');
  }
}


