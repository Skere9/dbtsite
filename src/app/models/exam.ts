import { Question } from '../models/question';

export class Exam {
    public id: number;
    public title: string;
    public description: string;
    public questions: Question[];
    public keywords: string[];

    constructor(
        id: number,
        t: string,
        d: string,
        keywords: string[]) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.keywords = keywords;
    }

    public static createBlankExam() {
        return new Exam(-1, '', '', []);
    }

    public static examFromJSON(obj: any): Exam {
        return new Exam(obj.id, obj.title, obj.description, obj.keywords);
    }
}

