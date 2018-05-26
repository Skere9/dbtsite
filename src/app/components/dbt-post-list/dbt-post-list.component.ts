import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dbt-post-list',
  templateUrl: './dbt-post-list.component.html',
  styleUrls: ['./dbt-post-list.component.css']
})
export class DbtPostListComponent implements OnInit {

  public post: Post;
  public posts: Post[];

  constructor(
    private postService: PostService
  ){
  }

  ngOnInit() {
    this.postService.getAllPosts()
    .then(
      res => {
        this.posts = res;
      }
    );
  }


}
