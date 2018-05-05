import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Exam } from '../../models/exam';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { ExamService } from '../../services/exam.service';
import { Router } from '@angular/router';

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

  public exam: Exam;
  public title: string;
  public description: string;
  public showQuestionFields: Boolean;
  public showAnswerFields: Boolean;

  public answerRows: Answer[] = new Array();
  public answerBlank: Answer;

  public theExamService;
  public examQuestionCount: number;

  // Assume a new exam, but change based on incoming parameter
  public updatingExam: Boolean = false;

  // If updating an existing exam, display the number of questions
  // If the number is 1, show "question".  Otherwise show
  // "questions".  Believe it or not, that's all this
  // string variable is used for.
  public textForQuestionOrQuestions = 'questions';

  constructor(private examService: ExamService,
    private router: Router,
    private route: ActivatedRoute) {
    this.theExamService = examService;
  }

  ngOnInit(): void {
    this.updatingExam = false;
    // this.exam = this.examSelected;
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (parseInt(params.get('exam_id'), 10) === -1) {
        // The exam id value of zero (0) indicates the user is
        // creating a new exam, not querying an existing exam.
        // Set up the memory structures required to create a new exam:
        // One blank question with one set of four blank answers
        this.initializeNewBlankExam();
      } else {
        // The first paramater is a non-zero.
        // Presumably this is an exam ID.
        // Query for the exam ID.
        this.exam = this.findExamById(parseInt(params.get('exam_id'), 10));
        // Set the flag to show that we are updating an
        // existing exam, so show associated queried
        // data - such as a count of existing questions.
        this.updatingExam = true;
      };
    })
    // console.log('From within dbt-edit-exam');
    // console.log(this.exam);

    // Get the number of questions in this exam so far.
    if (this.exam != undefined) {
      this.examQuestionCount = this.theExamService.getExamQuestionCount(this.exam.id);
    }
    // Next, this is simple - determine if the right text
    // for the display is singular or plural.  This is
    // used on this particualr web page at this time.
    if (this.examQuestionCount == 1) {
      this.textForQuestionOrQuestions = 'question';
    } else {
      this.textForQuestionOrQuestions = 'questions';
    }
  }

  public findExamById(pExamId: number): Exam {
    // When an initial call to this component
    // passes in an exam id, use this function
    // to query that exam and populate the form 
    // for editing that exam
    const returnExam = this.examService.getExam(pExamId);
    return returnExam;
  }

  public Reset() {
    // console.log('Reset');
  }

  public CancelEditExam() {
    this.router.navigate(['/', 'list']);
  }

  public SaveExam() {
    // Save the exam
    // console.log('Entering save exam:');
    // console.log(this.exam);
    this.examService.addExam(this.exam);
    this.router.navigate(['/', 'exam-qlist', this.exam.id]);

    // TEMP - SKERE - REMOVE THIS UPON TESTING
    // Confirm the exam was saved
    this.examService.getAllExams()
      .then(
        (examsReturned) => {
          // console.log('Data returned');
          // console.log(examsReturned);
        }
      );
  }

  public initializeNewBlankExam() {
    // Set up the set of new exam objects
    // Set up a blank exam
    this.exam = Exam.createBlankExam();
  }

  public AddQuestionFields(): void {
    // Toggle the switch to show the question fields.
    this.showQuestionFields = true;
    return null;
  }

  public initializeBlankAnswersArray(): void {
    console.log('Intializing blank answers');
    let i: number;
    for (i = 0; i <= 4; i++) {
      console.log(i);
      this.answerRows.push(this.answerBlank);
    };
  }

}
