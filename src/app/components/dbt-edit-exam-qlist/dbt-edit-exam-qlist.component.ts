import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgModule } from '@angular/core';

import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  selector: 'app-dbt-edit-exam-qlist',
  templateUrl: './dbt-edit-exam-qlist.component.html',
  styleUrls: ['./dbt-edit-exam-qlist.component.css']
})
export class DbtEditExamQlistComponent implements OnInit {

  @Input() examId: number;

  public vExamId: number;
  public vQuestionId: number;
  public exam: Exam;
  public theExamQuestions: Question[];
  public theExamAnswers: Answer[];
  public pointToExamService;

  constructor(private examService: ExamService,
    private route: ActivatedRoute) {
    this.vExamId = 0;
    this.pointToExamService = examService.createBlankQuestion;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.vExamId = parseInt(params.get('exam_id'), 10);
    });

    if (this.vExamId !== 0) {
      console.log('vExamId is not zero');
      this.exam = this.examService.getExam(this.vExamId);
      this.theExamQuestions = this.examService.getExamQuestions(this.exam.id);
    }
  }

}
