import { Component, OnInit } from '@angular/core';
import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-dbt-edit-exam',
  templateUrl: './dbt-edit-exam.component.html',
  styleUrls: ['./dbt-edit-exam.component.css']
})
export class DbtEditExamComponent implements OnInit {

  exam: Exam;
  public title: string;
  public description: string;

  constructor(private examService: ExamService) {
    this.exam = Exam.createBlankExam();
  }

  ngOnInit() {
  }

  public Reset() {
    console.log('Reset');
  }

  public SaveExam() {
    console.log('Save exam');
    console.log(this.exam);
    this.exam.id = 10;
    this.exam.keywords = ['new', 'from user'];
    this.examService.addExam(this.exam);
    this.examService.addExam({ 'id': 11, 'title': 'This is the title', 'description': 'The most amazing exam ever.', 'keywords': ['new'] });

    this.examService.getAllExams()
      .then(
        (examsReturned) => {
          console.log("Data returned");
          console.log(examsReturned)
        }
      );
  }

}
