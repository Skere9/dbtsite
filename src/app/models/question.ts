import { Answer } from '../models/answer';

export class Question {
    public questionId: number;
    public examId: number;
    public topicId: number;
    public questionText: string;
    public explanationIfWrong: string;
    public answers: Answer[];

    constructor(
        pQuestionId: number,
        pExamId: number,
        pTopicId: number,
        pQuestionText: string,
        pExplanationIfWrong: string,
        pAnswers: Answer[]) {
        this.questionId = pQuestionId;
        this.examId = pExamId;
        this.topicId = pTopicId;
        this.questionText = pQuestionText;
        this.explanationIfWrong = pExplanationIfWrong;
        this.answers = pAnswers;
    }

    public static questionFromJSON(obj: any): Question {
        return new Question(
              obj.pQuestionId // questionId
            , obj.pExamId // examId
            , obj.pTopicId // topicId
            , obj.pQuestionText // questionText
            , obj.pExplanationIfWrong // explanationIfWrong
            , [] // answers
        );
    }
}

