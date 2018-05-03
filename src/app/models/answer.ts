export class Answer {
    public answerId: number;
    public answerText: string;
    public correctOrNot: Boolean;

    constructor(
        pAnswerId: number,
        pAnswerText: string,
        pCorrectOrNot: Boolean) {
        this.answerId = pAnswerId;
        this.answerText = pAnswerText;
        this.correctOrNot = pCorrectOrNot;
    }

    public static createBlankAnswer() {
        return new Answer(-1, '', false);
    }

    public static createFourBlankAnswers(): Answer[] {
        let fourAnswers: Answer[];
        fourAnswers = [
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
        return fourAnswers;
    }

    public static answerFromJSON(obj: any): Answer {
        return new Answer(obj.pAnswerId, obj.pAnswerText, obj.pCorrectOrNot);
    }
}

