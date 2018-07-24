import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ExamService } from '../../../services/exam.service';
import { Exam } from '../../../models/exam';

@Component({
  selector: 'app-launch-exam-start',
  templateUrl: './launch-exam-start.component.html',
  styleUrls: ['./launch-exam-start.component.css']
})
export class LaunchExamStartComponent implements OnInit {

  // @Input() examSelected: Exam;
  @Input() examSelected: number;
  public exam: Exam;

  constructor(
    private examService: ExamService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (parseInt(params.get('exam_Id'), 10) === -1) {
        // The exam id value of negative one (-1) indicates the
        // call came in with no exam ID.  We can't process
        // that.
      } else {
        // The first paramater is not negative one.
        // Presumably this is an exam ID.
        // Query for the exam ID.
        this.exam = this.examService.findExamById(parseInt(params.get('exam_id'), 10));
      };
    })
  }

  public enterExam(): void {
    this.router.navigate(['/', 'theexam', 0]);
  }

}
