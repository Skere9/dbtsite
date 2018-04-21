import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbt-contact',
  templateUrl: './dbt-contact.component.html',
  styleUrls: ['./dbt-contact.component.css']
})
export class DbtContactComponent implements OnInit {

  vEmail: string;
  vURL: string;
  vAddress: string;

  constructor() {
    this.vEmail   = 'info@databasetraining.com';
    this.vURL     = 'http://www.databasetraining.com';
    this.vAddress = 'Maryland, United States';
  }

  ngOnInit() {
  }

}
