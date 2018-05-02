import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable()
export class ExamService {

  public exam: Exam;
  public exams: Exam[];
  // public question: Question;
  public theSelectedExam: Exam;

  constructor() {

    // this.exam = Exam.createBlankExam();
    this.exams = [
      {
        'id': 1,
        'title': 'SQL Certification',
        'description': 'Mock exam for 1Z0-071.',
        'questions': [{
          'questionId': 1,
          'questionText': 'How much wood',
          'answers': this.getAnswerBlanks()
        },
        {
          'questionId': 2,
          'questionText': 'The other thing is ...',
          'answers': this.getAnswerBlanks()
        }
        ],
        'keywords': ['oracle', 'certification', 'sql']
      }, {
        'id': 2,
        'title': 'Java Certification',
        'description': 'Mock exam for 1Z0-088.',
        'questions': [{
          'questionId': 1,
          'questionText': 'Who is Duke?',
          'answers': this.getAnswerBlanks()
        }],
        'keywords': ['oracle', 'certification', 'java']
      }, {
        'id': 3,
        'title': 'SQL Expert Certification',
        'description': 'Mock exam for 1Z0-047.',
        'questions': [{
          'questionId': 1,
          'questionText': 'Let us discuss analytics',
          'answers': this.getAnswerBlanks()
        }],
        'keywords': ['oracle', 'certification', 'sql', 'expert', 'deprecated']
      }, {
        'id': 4,
        'title': 'PL/SQL Program Units Certification',
        'description': 'Mock exam for 1Z0-147.',
        'questions': [{
          'questionId': 1,
          'questionText': 'If you were to create a program unit, ... ',
          'answers': this.getAnswerBlanks()
        }],
        'keywords': ['oracle', 'certification', 'plsql', 'PL/SQL', 'Program Units']
      }
    ];
  }

  getAnswerBlanks(): Answer[] {

    return [
      {
        'answerId': 1,
        'answerText': ''
      },
      {
        'answerId': 2,
        'answerText': ''
      },
      {
        'answerId': 3,
        'answerText': ''
      },
      {
        'answerId': 4,
        'answerText': ''
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
      }, 2); // TODO: Remove this setTimeOut function entirely, or set to 2000 for testing of promises
    });
  }

  getExam(pExamId: number): Exam {
    console.log('Running service getExam() ...');
    this.theSelectedExam = this.exams.find(exam => exam.id === pExamId);
    console.log(this.theSelectedExam);
    return this.theSelectedExam;
  }

  getExamQuestionCount(pExamId: number): number {
    let vCounter = 0;
    // console.log('Within the getExamQuestionCount() function');
    // console.log(pExamId);
    for (let exam of this.exams) {
      // console.log(exam.id);
      if (exam.id === pExamId) {
        // console.log('Found it:');
        // console.log(exam.description);
        // let vCounter = 0;
        for (let question of exam.questions) {
          vCounter = vCounter + 1;
        }
        // console.log('Total questions:');
        // console.log(vCounter);
        break; // Found the exam, break out of the loop
      } else {
        // console.log('Never found the exam.');
      }
      // console.log(exam);
    }
    return vCounter;
  }

  getQuestion(pExamId: number, pQuestionId): Question {
    console.log('Running service getQuestion() ...');
    console.log('pExamId:');
    console.log(pExamId)
    console.log('pQuestionId:');
    console.log(pQuestionId);
    // Get the question from the exam
    const selectedExam = this.getExam(pExamId);
    const selectedQuestion = selectedExam.questions.find(question => question.questionId === pQuestionId);
    return selectedQuestion;
  }

  getExamQuestions(pExamId: number): Question[] {
    // Get all the questions for a given exam
    const selectedExam = this.getExam(pExamId);
    const selectedExamQuestions = selectedExam.questions;
    return selectedExamQuestions;
  }

  setExamQuestion(pExamId: number, pQuestion: Question): void {

    console.log('In the exam service: saving the question.');
    if (this.theSelectedExam.id === pExamId) {
      this.theSelectedExam.questions.push(pQuestion);
    } else {
      console.log('Something went wrong');
    }
    console.log(this.theSelectedExam);
  }

  createBlankQuestion() {
    return new Question(
      -1,
      '',
      [
        {
          'answerId': 1,
          'answerText': ''
        },
        {
          'answerId': 2,
          'answerText': ''
        },
        {
          'answerId': 3,
          'answerText': ''
        },
        {
          'answerId': 4,
          'answerText': ''
        }
      ]
    );
  }

}
