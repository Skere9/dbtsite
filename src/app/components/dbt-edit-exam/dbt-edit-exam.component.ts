import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dbt-edit-exam',
  templateUrl: './dbt-edit-exam.component.html',
  styleUrls: ['./dbt-edit-exam.component.css']
})
export class DbtEditExamComponent implements OnInit {

  // Form for editing an exam
  // One parameter
  //    0 = create a new exam
  //    non-zero: query the exam whose id matches
  //              the non-zero identifier and
  //              present the form to edit the exam
  //

  // @Input() examSelected: Exam;
  @Input() examSelected: number;

  exam: Exam;
  public title: string;
  public description: string;

  constructor(private examService: ExamService, private route: ActivatedRoute) {
    this.exam = Exam.createBlankExam();
  }

  ngOnInit(): void {
    // this.exam = this.examSelected;
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (parseInt(params.get('exam_id'), 10) !== 0) {
        // The first paramater is a non-zero.
        // Presumably this is an exam ID.
        // Query for the exam ID.
        this.exam = this.findExamById(parseInt(params.get('exam_id'), 10));
      };
    })
  }

  public findExamById(pExamId: number): Exam {
    const returnExam = this.examService.getExam(pExamId);
    console.log('returnExam is: ');
    console.log(returnExam);
    return returnExam;
  }

  public Reset() {
    console.log('Reset');
  }

  public SaveExam() {
    // Save the exam
    this.examService.addExam(this.exam);
    // Confirm the exam was saved
    this.examService.getAllExams()
      .then(
        (examsReturned) => {
          console.log('Data returned');
          console.log(examsReturned)
        }
      );
  }

}
