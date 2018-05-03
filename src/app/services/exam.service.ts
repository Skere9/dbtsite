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
  public nextQuestionId: number;

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
          'answers': [
            {
              'answerId': 1,
              'answerText': 'Do',
              'correctOrNot': false
            },
            {
              'answerId': 2,
              'answerText': 'Re',
              'correctOrNot': false
            }, {
              'answerId': 3,
              'answerText': 'Mi',
              'correctOrNot': true
            }, {
              'answerId': 4,
              'answerText': 'Fa',
              'correctOrNot': false
            }
          ]
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
        'answerText': '',
        'correctOrNot': false
      },
      {
        'answerId': 2,
        'answerText': '',
        'correctOrNot': false
      },
      {
        'answerId': 3,
        'answerText': '',
        'correctOrNot': false
      },
      {
        'answerId': 4,
        'answerText': '',
        'correctOrNot': false
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

    // Get today's date and time
    // let d = new Date();

    console.log('In the exam service: saving the question.');
    if (this.theSelectedExam.id === pExamId) {
      // Determine if we are updating an existing question,
      // or adding a new question.
      if (this.isThisAnExistingQuestion(pExamId, pQuestion.questionId)) {
        console.log('This ia an update to an existing question.');
        // This is an update to an existing question
        // Update the existing element in the array
        var questionIndex = this.theSelectedExam.questions.indexOf(pQuestion);
        if (questionIndex !== -1) {
          this.theSelectedExam.questions[questionIndex] = pQuestion;
        } else {
          // This is a new question.  Add it to the end of the array
          // But first, get the next available questionId number
          this.nextQuestionId = this.nextAvailableQuestionId();
          pQuestion.questionId = this.nextQuestionId;
          this.theSelectedExam.questions.push(pQuestion);
        }
      }
    } else {
      console.log('Something went wrong');
    }
    console.log(this.theSelectedExam);
  }

  nextAvailableQuestionId(): number {
    return -7;
  }

  isThisAnExistingQuestion(pExamId: number, pQuestionId: number): Boolean {
    // This function  determines if an incoming pQuestionId already
    // exists, or represents a new question.
    // First, get the exam
    if (pQuestionId === -1) {
      return false;
    }
    for (let exam of this.exams) {
      if (exam.id === pExamId) {
        // OK, found the exam, now let's look for the question
        for (let question of exam.questions) {
          if (question.questionId === pQuestionId) {
            return true;
          }
        }
      }
    }
    return false;
  }

  createBlankQuestion() {
    return new Question(
      -1,
      '',
      [
        {
          'answerId': 1,
          'answerText': '',
          'correctOrNot': false
        },
        {
          'answerId': 2,
          'answerText': '',
          'correctOrNot': false
        },
        {
          'answerId': 3,
          'answerText': '',
          'correctOrNot': false
        },
        {
          'answerId': 4,
          'answerText': '',
          'correctOrNot': false
        }
      ]
    );
  }

  deleteQuestion(pExamId: number, pQuestionId: number): void {
    console.log('In deleteQuestion()');
    console.log(pExamId);
    console.log(pQuestionId);

  }

  getAnswerCountForGivenQuestion(pExamId: number, pQuestionId: number): number {
    for (let examFor of this.exams) {
      if (examFor.id === pExamId) {
        for (let questionFor of examFor.questions) {
          if (questionFor.questionId === pQuestionId) {
            // console.log(exam.description);
            let vCount: number = 0;
            for (let questionFor of examFor.questions) {
              vCount = vCount + 1;
            }
            // Found the question, return the count
            return vCount;
          }
        }
      }
    };
    // Never found the question, return a -1 flag to
    // convey that no question was identified
    return -1;
  }

}
