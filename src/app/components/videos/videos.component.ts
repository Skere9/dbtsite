import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUpNow() {
    this.router.navigateByUrl('/signUp');
  }

  pricingInfo() {
    this.router.navigateByUrl('/pricing');
  }

}
