import { Injectable } from '@angular/core';

import { GlobalService } from '../services/global.service';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from '../models/post';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable()
export class PostService {

  public post: Post;
  public posts: Post[];
  public theSelectedPost: Post;

  constructor(
    private http: Http
  ) {

  }

  addPost(post: Post): void {
    console.log('Inside PostService.addPost');
    console.log(post);
    console.log('That was the post to be added.');
    this.http
    .post(GlobalService.DBT_SERVER + '/posts', post)
    .toPromise()
    .then(
      response => response.json()
    );
  }

  getAllPosts(): Promise<Post[]> {
    return this.http
      .get(GlobalService.DBT_SERVER + '/posts')
      .toPromise()
      .then(
        response => response.json()
      );
  }

  getPost(p_Id: number): Promise<Post> {
    console.log('Get post from server');
    return this.http
    .get(GlobalService.DBT_SERVER + '/post/' + p_Id)
    .toPromise()
    .then(
      response => response.json()
    );
  }

  getPostCount(): Promise<number> {
    // Return the total number of posts
    return this.http
      .get(GlobalService.DBT_SERVER + '/posts/count')
      .toPromise()
      .then(
        response => response.json()
      );
  }

  updatePost(post: Post): void {
    console.log('Updating post');
    this.http
      .put(GlobalService.DBT_SERVER + '/post/' + post._id, post)
      .toPromise()
      .then(
        response => response.json()
      );
  }

  deletePost(p_Id: number): Promise<string> {
    return this.http
      .delete(GlobalService.DBT_SERVER + '/post/' + p_Id)
      .toPromise()
      .then(
        response => response.json()
      );
  }

}
