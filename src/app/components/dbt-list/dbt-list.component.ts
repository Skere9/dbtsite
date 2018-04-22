import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-dbt-list',
  templateUrl: './dbt-list.component.html',
  styleUrls: ['./dbt-list.component.css']
})
export class DbtListComponent implements OnInit {

  exams: Exam[];
  exams_loaded: Boolean;

  @Output()
  examSelected: EventEmitter<number> = new EventEmitter();

  constructor(private examService: ExamService) {

    console.log('In the constructor.');
    console.log('Before call to service:');
    console.log(this.exams);

    this.exams_loaded = false;

    this.examService.getAllExams()
      .then((exams) => {
        this.exams = exams;
        this.exams_loaded = true;
        console.log('After call to service:');
        console.log(this.exams);
      }
      );

  }

  ngOnInit() {
  }

  public examClicked(examId: number): void {
    console.log('Hi from ExamClicked! Number selected: ');
    console.log(examId);
    // this.examSelected.emit(examId);
    this.examSelected.emit(77);
  }

}
