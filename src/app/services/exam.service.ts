import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';
import { Question } from '../models/question';

@Injectable()
export class ExamService {

  public exam: Exam;
  public exams: Exam[];

  constructor() {

    // this.exam = Exam.createBlankExam();
    this.exams = [
      {
        'id': 1,
        'title': 'SQL Certification',
        'description': 'Mock exam for 1Z0-071.',
        'questions': [{
          'questionId': 1,
          'questionText' : 'How much wood'
        },
        {
          'questionId': 2,
          'questionText' : 'The other thing is ...'
        }
      ],
        'keywords': ['oracle', 'certification', 'sql']
      }, {
        'id': 2,
        'title': 'Java Certification',
        'description': 'Mock exam for 1Z0-088.',
        'questions': [{
          'questionId': 1,
          'questionText' : 'Who is Duke?'
        }],
        'keywords': ['oracle', 'certification', 'java']
      }, {
        'id': 3,
        'title': 'SQL Expert Certification',
        'description': 'Mock exam for 1Z0-047.',
        'questions': [{
          'questionId': 1,
          'questionText' : 'Let us discuss analytics'
        }],
        'keywords': ['oracle', 'certification', 'sql', 'expert', 'deprecated']
      }, {
        'id': 4,
        'title': 'PL/SQL Program Units Certification',
        'description': 'Mock exam for 1Z0-147.',
        'questions': [{
          'questionId': 1,
          'questionText' : 'If you were to create a program unit, ... '
        }],
        'keywords': ['oracle', 'certification', 'plsql', 'PL/SQL', 'Program Units']
      }
    ];
  }

  addExam(exam: Exam): void {
    console.log('addExam');
    console.log(exam);
    this.exams.push(exam);
    console.log(this.exams);
  }

  getAllExams(): Promise<Exam[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.exams);
      }, 2000);
    });
  }

  getExam(pExamId: number): Exam {
    console.log("Running service getExam() ...");
    let selectedExam = this.exams.find(exam => exam.id === pExamId);
    console.log(selectedExam);
    return selectedExam;
  }

}
