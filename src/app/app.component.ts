import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  currentYear: number;
  siteURL: string;
  siteName: string;

  constructor(private globalService: GlobalService,
    private router: Router) {
    this.currentYear = new Date().getFullYear();
    this.siteURL = 'http://www.databasetraining.com';
    this.siteName = 'DATABASETRAINING.COM';
  }

  userSignedIn(number): void {
    console.log('Emit captured!');
  }

  getLoggedInStatus(): Boolean {
    return GlobalService.getLoggedInStatus();
  }

  logOff(): void {
    this.globalService.setLoggedInStatus(false);
    this.router.navigate(['/', 'home']);
  }
}


