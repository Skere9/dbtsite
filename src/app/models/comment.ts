export class Comment {
    public id: number;
    public postId: number;
    public userId: number;
    public commentDate: Date;
    public title: string;
    public commentContent: string;
    public keywords: string[];
    constructor(
        pId: number,
        pPostId: number,
        pUserId: number,
        pCommentDate: Date,
        pTitle: string,
        pCommentContent: string,
        pKeywords: string[],
        ) {
        this.id = pId;
        this.postId = pPostId;
        this.userId = pUserId;
        this.commentDate = pCommentDate;
        this.title = pTitle;
        this.commentContent = pCommentContent;
        this.keywords = pKeywords;
    }

    public static createBlankComment() {
        return new Comment(
            null // id
            , null // postId
            , null // userId
            , null // commentDate
            , '' // title
            , '' // commentContent
            , [] // keywords
        );
    }

    public static commentFromJSON(obj: any): Comment {
        return new Comment(
            obj.id // id
            , obj.postId // postId
            , obj.userId // userId
            , obj.commentDate // commentDate
            , obj.title // title
            , obj.commentContent // commentContent
            , obj.keywords // keywords
        );
    }
}

