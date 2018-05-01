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

    public static createFourBlankAnswers(): Answer[] {
        let fourAnswers: Answer[];
        fourAnswers = [
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
        return fourAnswers;
    }

    public static answerFromJSON(obj: any): Answer {
        return new Answer(obj.pAnswerId, obj.pAnswerText);
    }
}

