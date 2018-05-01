import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';
import { Question } from '../models/question';
import { Answer } from '../models/answer';}

@Injectable()
export class ExamService {

  public exam: Exam;
  public exams: Exam[];
  // public question: Question;

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
    const selectedExam = this.exams.find(exam => exam.id === pExamId);
    console.log(selectedExam);
    return selectedExam;
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
