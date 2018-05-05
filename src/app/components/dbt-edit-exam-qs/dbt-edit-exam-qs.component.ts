import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgModule } from '@angular/core';

import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  selector: 'app-dbt-edit-exam-qs',
  templateUrl: './dbt-edit-exam-qs.component.html',
  styleUrls: ['./dbt-edit-exam-qs.component.css']
})
export class DbtEditExamQsComponent implements OnInit {

  // @Input() examSelected: Exam;
  @Input() examId: number;
  @Input() questionId: number;

  public vExamId: number;
  public vQuestionId: number;
  public exam: Exam;
  public theQuestion: Question;
  public theExamAnswers: Answer[];
  public pointToExamService;

  constructor(private examService: ExamService,
    private router: Router,
    private route: ActivatedRoute) {
    this.vExamId = -1;
    this.theQuestion = examService.createBlankQuestion();
    this.pointToExamService = examService.createBlankQuestion;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.vExamId = parseInt(params.get('exam_id'), 10);
      this.vQuestionId = parseInt(params.get('question_id'), 10);
    });

    // console.log('Results of the call:')
    // console.log(this.vExamId);
    // console.log(this.vQuestionId);

    if (this.vExamId !== -1) {
      // console.log('vExamId is not -1');
      this.exam = this.examService.getExam(this.vExamId);
      if (this.vQuestionId === -1) {
        // This is a new question
        // console.log('vQuestionId is -1');
        this.theQuestion = this.pointToExamService();
        this.theExamAnswers = this.theQuestion.answers;
        // console.log('theExamAnswers:');
        // console.log(this.theExamAnswers);
      } else {
        // console.log('vQuestionId is not -1');
        this.theQuestion = this.findQuestionById(this.vExamId, this.vQuestionId);
        this.theExamAnswers = this.theQuestion.answers;
        // console.log('theExamAnswers:');
        // console.log(this.theExamAnswers);
      }
    }

  }

  public findQuestionById(pExamId: number, pQuestionId: number): Question {
    // When an initial call to this component
    // passes in an question id, use this function
    // to query that question and populate the form 
    // for editing that question
    const returnQuestion = this.examService.getQuestion(pExamId, pQuestionId);
    return returnQuestion;
  }

  public cancelEditQuestion() {
    // console.log('In cancelEditQuestion');
    this.router.navigate(['/', 'exam-qlist', this.exam.id]);
  }

  public saveQuestion() {
    // console.log('Saving the question');
    this.examService.setExamQuestion(this.vExamId, this.theQuestion);
    this.router.navigate(['/', 'exam-qlist', this.exam.id]);
  }

  editExamInfo() {
    this.router.navigate(['/', 'exam', this.exam.id]);
  }
  
}
