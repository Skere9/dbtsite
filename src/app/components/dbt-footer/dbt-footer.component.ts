import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbt-footer',
  templateUrl: './dbt-footer.component.html',
  styleUrls: ['./dbt-footer.component.css']
})
export class DbtFooterComponent implements OnInit {

  constructor() {
    let currentYear;
    currentYear = new Date().getFullYear();
   }

  ngOnInit() {
  }

}
