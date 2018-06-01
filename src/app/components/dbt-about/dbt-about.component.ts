import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbt-about',
  templateUrl: './dbt-about.component.html',
  styleUrls: ['./dbt-about.component.css']
})
export class DbtAboutComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  goToComparePlans():void {
    this.router.navigateByUrl('/pricing');
  }

  goToWatchOurVideos(): void {
    this.router.navigateByUrl('/videos');
  }

  goToRegisterNow(): void{
    this.router.navigateByUrl('/signUp');
  }

}
