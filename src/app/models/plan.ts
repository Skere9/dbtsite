export class Plan {
    public _id: string;
    public id: number;
    public title: string;
    public exams: string;
    public duration: string;
    public price: number;

    constructor(
        pId: number,
        pTitle: string,
        pExams: string,
        pDuration: string,
        pPrice: number) {
        this.id = pId;
        this.title = pTitle;
        this.exams = pExams;
        this.duration = pDuration;
        this.price = pPrice;
    }

    public static createBlankPlan() {
        return new Plan(
            -1 // id
            , '' // title
            , '' // exams
            , '' // duration
            , -1 // price
        );
    }

    public static planFromJSON(obj: any): Plan {
        return new Plan(
            obj.id // id
            , obj.title // title
            , obj.exams // exams
            , obj.duration // duration
            , obj.price // price
        );
    }
}

