import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { GlobalService } from '../../services/global.service';
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

  // Post objects
  public post: Post;
  public posts: Post[];
  public pointerToPostToUpdate: Post;
  public updateThisPost: Post;

  // Comment objects
  public comment: Comment;
  public comments: Comment[];
  public pointerToCommentToUpdate: Comment;
  public updateThisComment: Comment;

  // Flags
  public flagInsertingPost: Boolean;
  public flagUpdatingPost: Boolean;

  public flagEnableAdminFeature: Boolean;

  public flagEnableComments = false;
  public flagDisplayEditForComment: Boolean;

  public flagAreYouSure: Boolean;
  public flagAreYouSure_UserId: string;

  // IDs for Flags
  public flagDisplayUpdatePost_Id: string;
  public flagDisplayEditForComment_Id: string;

  // Check for form conditions
  public hasFormBeenTouched: Boolean;

  // public editComment: Boolean;

  constructor(
    private router: Router,
    private postService: PostService,
    private dateTimePostsPipe: DateTimePostsPipe
  ) {
    this.flagEnableAdminFeature = true;
    this.flagInsertingPost = false;
    this.flagUpdatingPost = false;
    this.flagDisplayEditForComment = false;
    // Assign a negative number to the following
    // flag so it at least has some value
    this.flagDisplayEditForComment_Id = '-1';
    this.post = Post.createBlankPost();

    this.flagAreYouSure = false;
  }

  ngOnInit() {
    this.refreshPostList();
  }

  displayInsertPostForm(): void {
    console.log('display insert post form');
    this.flagInsertingPost = true;

    // When one display flag is true, set others to false
    this.flagUpdatingPost = false;
    this.flagDisplayEditForComment = false;
  }

  displayUpdatePostForm(p_Id: string): void {
    console.log('display update post form');
    this.flagUpdatingPost = true;
    this.flagDisplayUpdatePost_Id = p_Id;

    // When one flag is true, set others to false
    this.flagInsertingPost = false;
    this.flagDisplayEditForComment = false;

    // Get the post to edit
    console.log('Posts object: ');
    console.log(this.posts);
    this.pointerToPostToUpdate = this.posts.find(o => o._id === p_Id);
    this.updateThisPost = Post.createBlankPost();
    this.updateThisPost = Object.assign(this.updateThisPost, this.pointerToPostToUpdate);
    console.log('Now posts is: ');
    console.log(this.posts);
    console.log('New updateThisPost: ');
    console.log(this.updateThisPost);

  }

  areYouSure(pId: string): void {
    this.flagAreYouSure = true;
    this.flagAreYouSure_UserId = pId;
  }

  resetDelete(): void {
    this.flagAreYouSure = false;
  }

  deletePost(p_Id: number): void {
    // Reset "are you sure" which had to precede this
    this.flagAreYouSure = false;
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
    this.flagDisplayEditForComment = true;
    this.flagDisplayEditForComment_Id = pId;

    // When one flag is true, set others to false
    this.flagInsertingPost = false;
    this.flagUpdatingPost = false;

    console.log('Inside displayEditComment');
    console.log(this.flagDisplayEditForComment);
    console.log(this.flagDisplayEditForComment_Id);
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
    this.flagDisplayEditForComment = false;
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
    console.log('Update this post:');
    console.log(this.updateThisPost);
    this.pointerToPostToUpdate = Object.assign(this.pointerToPostToUpdate, this.updateThisPost);
    this.postService.updatePost(this.pointerToPostToUpdate);
    this.flagUpdatingPost = false;
  }

  getLoggedInStatus(): Boolean {
    return GlobalService.getLoggedInStatus();
  }

  

}
