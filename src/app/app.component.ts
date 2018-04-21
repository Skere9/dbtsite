import { Component } from '@angular/core';
import { AppWideService } from './services/appwide.service';

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

  constructor() {
    this.stateLoggedIn = AppWideService.stateLoggedIn;
    this.currentYear = new Date().getFullYear();
    this.siteURL = 'http://www.databasetraining.com';
    this.siteName = 'DATABASETRAINING.COM';
  }
}


