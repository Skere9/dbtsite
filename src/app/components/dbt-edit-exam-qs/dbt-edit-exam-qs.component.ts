import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';

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

  constructor(private examService: ExamService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.vExamId = parseInt(params.get('exam_id'), 10);
      this.vQuestionId = parseInt(params.get('question_id'), 10);
    })

    console.log('Results of the call:')
    console.log(this.vExamId);
    console.log(this.vQuestionId);

    this.exam = this.findExamById(this.vExamId);

  }

  public findExamById(pExamId: number): Exam {
    // When an initial call to this component
    // passes in an exam id, use this function
    // to query that exam and populate the form 
    // for editing that exam
    const returnExam = this.examService.getExam(pExamId);
    return returnExam;
  }

}
