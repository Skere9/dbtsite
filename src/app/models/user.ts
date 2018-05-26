export class User {
    public  _id: string; // This is assigned by MongoDB automatically upon saving.
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
        this.userName = pUserName;
        this.pword = pPword;
        this.bio = pBio;
        this.keywords = pKeywords;
    }

    public static createBlankUser() {
        return new User(
            -1 // id
            , '' // firstName
            , '' // lastName
            , '' // email
            , '' // userName
            , '' // pword
            , '' // bio
            , [] // keywords
        );
    }

    public static userFromJSON(obj: any): User {
        return new User(
            obj.id // id
            , obj.firstName // firstName
            , obj.lastName // lastName
            , obj.email // email
            , obj.userName // userName
            , obj.pword // pword
            , obj.bio //  bio
            , obj.keywords // keywords
        );
    }
}

