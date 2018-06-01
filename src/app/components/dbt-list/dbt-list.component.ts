import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-dbt-list',
  templateUrl: './dbt-list.component.html',
  styleUrls: ['./dbt-list.component.css']
})
export class DbtListComponent implements OnInit {

  exams: Exam[];
  exams_loaded: Boolean;

  @Output() examSelected: EventEmitter<number> = new EventEmitter();

  constructor(private examService: ExamService,
    private globalService: GlobalService,
    private router: Router) {

    console.log('In the constructor.');
    console.log('Before call to service:');
    console.log(this.exams);

    this.exams_loaded = false;
    // this.examQuestionCount = 0;

    this.examService.getAllExams()
      .then((exams) => {
        this.exams = exams;
        this.exams_loaded = true;
        // Get the number of questions in this exam so far.
        // this.examQuestionCount = this.theExamService.getExamQuestionCount(this.exam.id);

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
    // this.examSelected.emit(examId);

    this.router.navigate(['/', 'exam', examId]);

  }

  public showEditExam(): Boolean {
    return true;
  }

  public gotIt(id: number): void {
    console.log('Got it');
  }

  public addNewExam() {
    this.router.navigate(['/', 'exam', -1]);
  }

  getLoggedInStatus(): Boolean {
    return GlobalService.getLoggedInStatus();
  }

}
