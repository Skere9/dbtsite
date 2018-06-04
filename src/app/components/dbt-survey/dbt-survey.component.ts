import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbt-survey',
  templateUrl: './dbt-survey.component.html',
  styleUrls: ['./dbt-survey.component.css']
})
export class DbtSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    convertToMobile() {
      const x = document.getElementById('myTopnav_2');
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
      console.log('convertToMobile()');
      console.log(x);
    }


}
