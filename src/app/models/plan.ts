export class Plan {
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
        return new Plan(-1, '', '', '', -1);
    }

    public static planFromJSON(obj: any): Plan {
        return new Plan(obj.id, obj.title, obj.exams, obj.duration, obj.price);
    }
}

