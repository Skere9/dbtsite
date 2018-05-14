export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public userName: string;
    public pword: string;
    public bio: string;
    public keywords: string[];

    constructor(
        pId: number,
        pFirstName: string,
        pLastName: string,
        pEmail: string,
        pUserName: string,
        pPword: string,
        pBio: string,
        pKeywords: string[]) {
        this.id = pId;
        this.firstName = pFirstName;
        this.lastName = pLastName;
        this.email = pEmail;
        this.pword = pPword;
        this.bio = pBio;
        this.keywords = pKeywords;
    }

    public static createBlankUser() {
        return new User(-1, '', '', '', '', '', '', []);
    }

    public static userFromJSON(obj: any): User {
        return new User(obj.id, obj.firstName, obj.lastName, obj.email, obj.userName, obj.pword, obj.bio, obj.keywords);
    }
}

