export class Post {
    public _id: string; // Auto generarted by MongoDB
    public userId: number;
    public postDate: Date;
    public title: string;
    public postContent: string;
    public keywords: string[];
    constructor(
        p_Id: string,
        pUserId: number,
        pPostDate: Date,
        pTitle: string,
        pPostContent: string,
        pKeywords: string[],
        ) {
        this.userId = pUserId;
        this.postDate = pPostDate;
        this.title = pTitle;
        this.postContent = pPostContent;
        this.keywords = pKeywords;
    }

    public static createBlankPost() {
        return new Post(
            null // _id
            , 0 // userId
            , undefined // postDate
            , '' // title
            , '' // postContent
            , [] // keywords
        );
    }

    public static postFromJSON(obj: any): Post {
        return new Post(
            obj._id // _id
            , obj.userId // userId
            , obj.postDate // postDate
            , obj.title // title
            , obj.postContent // postContent
            , obj.keywords // keywords
        );
    }
}

