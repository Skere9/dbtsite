import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbt-home',
  templateUrl: './dbt-home.component.html',
  styleUrls: ['./dbt-home.component.css']
})
export class DbtHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) {

    // SKERE
    // let vX: string = 'hi';
    // const { a, b } = vX;

  }

  ngOnInit() {
  }

  comparePlans() {
    this.router.navigateByUrl('/pricing');
  }

  watchOurVideos() {
    this.router.navigateByUrl('/videos');
  }

  registerNow() {
    this.router.navigateByUrl('/signUp');
  }


}
