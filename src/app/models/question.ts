import { Answer } from '../models/answer';

export class Question {
    public questionId: number;
    public questionText: string;
    public answers: Answer[];

    constructor(
        pQuestionId: number,
        pQuestionText: string,
        pAnswers: Answer[]) {
        this.questionId = pQuestionId;
        this.questionText = pQuestionText;
        this.answers = pAnswers;
    }

    public static questionFromJSON(obj: any): Question {
        return new Question(
            obj.pQuestionId // questionId
            , obj.pQuestionText // questionText
            , [] // answers
        );
    }
}

