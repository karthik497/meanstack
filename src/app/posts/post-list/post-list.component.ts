import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

 posts: Post[] =[];
 postsUnSub: Subscription;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts=  this.postService.getPosts();
    this.postsUnSub = this.postService.getUpdatedPosts()
    .subscribe(
(post)=>{
  this.posts=post;
}
    );
  }

  ngOnDestroy(){
    this.postsUnSub.unsubscribe();
  }

}
