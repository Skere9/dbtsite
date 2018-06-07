export class User {
    public  _id: string; // This is assigned by MongoDB automatically upon saving.
    public firstName: string;
    public lastName: string;
    public email: string;
    public userName: string;
    public passWord: string;
    public bio: string; //
    public emailValidated: Boolean; // defaults to false;
    public displayLoggedInMessage: Boolean; // defaults to false;
    public role: string;
    constructor(
        pFirstName: string,
        pLastName: string,
        pEmail: string,
        pUserName: string,
        pPassWord: string,
        pBio: string,
        pEmailValidated: Boolean,
        pRole: string) {
        this.firstName = pFirstName;
        this.lastName = pLastName;
        this.email = pEmail;
        this.userName = pUserName;
        this.passWord = pPassWord;
        this.bio = pBio;
        this.emailValidated = pEmailValidated;
        this.role = pRole;
    }

    public static createBlankUser() {
        return new User(
              '' // firstName
            , '' // lastName
            , '' // email
            , '' // userName
            , '' // passWord
            , '' // bio
            , false // emailValidated
            , '' // role
        );
    }

    public static userFromJSON(obj: any): User {
        return new User(
              obj.firstName // firstName
            , obj.lastName // lastName
            , obj.email // email
            , obj.userName // userName
            , obj.passWord // passWord
            , obj.bio // bio
            , obj.emailValidated // emailValidated
            , obj.role // role
        );
    }
}

