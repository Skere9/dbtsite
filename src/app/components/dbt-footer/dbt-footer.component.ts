import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbt-footer',
  templateUrl: './dbt-footer.component.html',
  styleUrls: ['./dbt-footer.component.css']
})
export class DbtFooterComponent implements OnInit {


  currentYear: number;
  siteURL: string;
  siteName: string;

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.siteURL = 'http://www.databasetraining.com';
    this.siteName = 'DATABASETRAINING.COM';
   }

  ngOnInit() {
  }

}
