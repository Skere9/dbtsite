import { Answer } from '../models/answer';

export class Question {
    public questionId: number;
    public questionText: string;
    public possibleAnswer: Answer[];

    constructor(
        pQuestionId: number,
        pQuestionText: string) {
        this.questionId = pQuestionId;
        this.questionText = pQuestionText;
    }

    public static createBlankQuestion() {
        return new Question(-1, '');
    }

    public static questionFromJSON(obj: any): Question {
        return new Question(obj.pQuestionId, obj.pQuestionText);
    }
}

