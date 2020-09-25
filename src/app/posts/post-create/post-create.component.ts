import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


 @Output() postCreated = new EventEmitter<Post>();
 

  constructor(private postService: PostsService) { }

  ngOnInit() {

  }

  onAddPost(form: NgForm) {

 if(form.invalid){
   return;
 }
 const post: Post={
  title: form.value.title, 
  content: form.value.content
};  
  this.postService.addPost(post);
}

}

