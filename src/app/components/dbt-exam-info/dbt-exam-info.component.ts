import { Component, OnInit } from '@angular/core';
import { DbtListComponent } from '../../components/dbt-list/dbt-list.component';

@Component({
  selector: 'app-dbt-exam-info',
  templateUrl: './dbt-exam-info.component.html',
  styleUrls: ['./dbt-exam-info.component.css']
})
export class DbtExamInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public examSelectedEvent(examId: number) {
    console.log('Selected! Made it!');
    // console.log(examId);
  }

  public examSelected(examId: number){
    console.log('Selected!  Made it to the examSelected()');
  }

}
