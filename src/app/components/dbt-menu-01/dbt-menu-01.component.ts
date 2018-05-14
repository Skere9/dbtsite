import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbt-menu-01',
  templateUrl: './dbt-menu-01.component.html',
  styleUrls: ['./dbt-menu-01.component.css']
})
export class DbtMenu01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userSignedIn(number): void {
    console.log('Emit captured!');
  }
  
}
