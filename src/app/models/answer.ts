export class Answer {
    public answerId: number;
    public questionId: number;
    public answerText: string;
    public isCorrect: Boolean;
    public rationale: string;
    public vid: Number;
    public status: string;
    constructor(
        pAnswerId: number,
        pQuestionId: number,
        pAnswerText: string,
        pIsCorrect: Boolean,
        pRationale: string,
        pVid: number,
        pStatus: string) {
        this.answerId = pAnswerId;
        this.questionId = pQuestionId;
        this.answerText = pAnswerText;
        this.isCorrect = pIsCorrect;
        this.rationale = pRationale;
        this.vid = pVid;
        this.status = pStatus;
    }

    public static createBlankAnswer() {
        return new Answer(
            -1 // answerId
            , 0 // questionId
            , '' // ansnwerText
            , false // isCorrect
            , '' // rationale
            , 0 // vid
            , '' // status
        );
    }

    public static createFourBlankAnswers(): Answer[] {
        let fourAnswers: Answer[];
        fourAnswers = [
            {
                'answerId': 1,
                'questionId': 0,
                'answerText': '',
                'isCorrect': false,
                'rationale': '',
                'vid': 0,
                'status': ''
            },
            {
                'answerId': 2,
                'questionId': 0,
                'answerText': '',
                'isCorrect': false,
                'rationale': '',
                'vid': 0,
                'status': ''
            },
            {
                'answerId': 3,
                'questionId': 0,
                'answerText': '',
                'isCorrect': false,
                'rationale': '',
                'vid': 0,
                'status': ''
            },
            {
                'answerId': 4,
                'questionId': 0,
                'answerText': '',
                'isCorrect': false,
                'rationale': '',
                'vid': 0,
                'status': ''
            }
        ];
        return fourAnswers;
    }

    public static answerFromJSON(obj: any): Answer {
        return new Answer(
            obj.pAnswerId //
            , obj.pQuestionId //
            , obj.pAnswerText //
            , obj.pIsCorrect //
            , obj.pRationale //
            , obj.pVid //
            , obj.stsatus //
        );
    }
}

