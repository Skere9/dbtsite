export class Answer {
    public answerId: number;
    public answerText: string;

    constructor(
        pAnswerId: number,
        pAnswerText: string) {
        this.answerId = pAnswerId;
        this.answerText = pAnswerText;
    }

    public static createBlankAnswer() {
        return new Answer(-1, '');
    }

    public static answerFromJSON(obj: any): Answer {
        return new Answer(obj.pAnswerId, obj.pAnswerText);
    }
}

