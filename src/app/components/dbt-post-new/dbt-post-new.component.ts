import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

import { PostService} from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-dbt-post-new',
  templateUrl: './dbt-post-new.component.html',
  styleUrls: ['./dbt-post-new.component.css']
})
export class DbtPostNewComponent implements OnInit {

  public post: Post;
  public posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { 
  }

  ngOnInit() {
    this.post = Post.createBlankPost();
  }

  savePost() {
    console.log('Saving post');
    this.post.id = 1;
    this.post.userId = 10;

    if (!this.post._id) {
      // There is no GUID.
      // Therefore this is
      // a database INSERT.
      console.log('Adding new post');
      this.postService.addPost(this.post);
    } else {
      // There is a GUID
      // Therefore this is
      // a database UPDATE.
      console.log('Updating existing post.');
      this.postService.updatePost(this.post);
    }
  }
}
