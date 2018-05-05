export class UserAccount {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public bio: string;
    public keywords: string[];

    constructor(
        id: number,
        fn: string,
        ln: string,
        em: string,
        bio: string,
        keywords: string[]) {
        this.id = id;
        this.firstName = fn;
        this.lastName = ln;
        this.email = em;
        this.bio = bio;
        this.keywords = keywords;
    }

    public static createBlankUserAccount() {
        return new UserAccount(-1, '', '', '', '', []);
    }

    public static userAccountFromJSON(obj: any): UserAccount {
        return new UserAccount(obj.id, obj.fn, obj.ln, obj.em, obj.bio, obj.keywords);
    }
}

