import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

import { DatePipe } from '@angular/common';
import { DateTimePostsPipe } from '../../pipes/date-time-posts.pipe';

@Component({
  selector: 'app-dbt-post-list',
  templateUrl: './dbt-post-list.component.html',
  styleUrls: ['./dbt-post-list.component.css'],
  providers: [DatePipe, DateTimePostsPipe]
})
export class DbtPostListComponent implements OnInit {

  public post: Post;
  public posts: Post[];

  public updateThisPost: Post;

  public flagInsertingPost: Boolean;

  public flagUpdatingPost: Boolean;
  public displayUpdatePostFlag_Id: string;

  public displayEditForCommentFlag: Boolean;
  public displayEditForCommentFlag_Id: string;
  public editComment: Boolean;

  constructor(
    private router: Router,
    private postService: PostService,
    private dateTimePostsPipe: DateTimePostsPipe
  ) {
    this.flagInsertingPost = false;
    this.flagUpdatingPost = false;
    this.displayEditForCommentFlag = false;
    // Assign a negative number to the following
    // flag so it at least has some value
    this.displayEditForCommentFlag_Id = '-1';
    this.post = Post.createBlankPost();
  }

  ngOnInit() {
    this.refreshPostList();
  }

  displayInsertPostForm(): void {
    console.log('display insert post form');
    this.flagInsertingPost = true;
    // this.router.navigateByUrl('/post-new');
  }

  displayUpdatePostForm(p_Id: string): void {
    console.log('display update post form');
    this.flagUpdatingPost = true;
    this.displayUpdatePostFlag_Id = p_Id;
    // Get the post to edit
    console.log('Posts object: ');
    console.log(this.posts);
    this.updateThisPost = this.posts.find(o => o._id === p_Id);
    console.log('Now posts is: ');
    console.log(this.posts);
    console.log(this.updateThisPost);

  }

  deletePost(p_Id: number): void {
    // Delete the post
    console.log('Delete the post');
    console.log(p_Id);
    this.postService.deletePost(p_Id)
      .then(
        res => {
          console.log(res);
          this.refreshPostList();
        });
    // console.log(this.books);
  }

  displayEditComment(pId: string): void {
    // This is to display the "edit comment"
    // section, but only for the post
    // for which the "edit" was clicked
    this.displayEditForCommentFlag = true;
    this.displayEditForCommentFlag_Id = pId;
    console.log('Inside displayEditComment');
    console.log(this.displayEditForCommentFlag);
    console.log(this.displayEditForCommentFlag_Id);
  }

  refreshPostList(): void {
    this.postService.getAllPosts()
      .then(
        res => {
          this.posts = res;
          console.log(res);
        }
      );
    console.log('refreshPostList');
  }

  cancelEditComment(pId: number): void {
    // cancel the "edit comment" action
    // and go back to the display of
    // posts with the edit comment field
    console.log('Cancelling edit comment');
    this.displayEditForCommentFlag = false;
  }

  saveComment(pId: number): void {
    // Save comment for a particular post
    console.log('Saving comment');
  }

  cancelNewPost(theForm: NgForm): void {
    theForm.reset();
    // this.refreshPostList();
    this.flagInsertingPost = false;
  }

  cancelUpdatePost(theForm: NgForm): void {
    console.log('This is inside of cancelUpdatePost');
    // theForm.reset();
    this.flagUpdatingPost = false;
  }

  insertPost(theForm: NgForm): void {
    this.postService.addPost(this.post)
      .then(
        res => {
          this.refreshPostList();
        }
      );
    theForm.reset();
    this.refreshPostList();
    this.flagInsertingPost = false;
  }

  updatePost(theForm: NgForm): void {
    console.log('Update this post');
    this.postService.updatePost(this.updateThisPost);
    this.flagUpdatingPost = false;
  }

}
