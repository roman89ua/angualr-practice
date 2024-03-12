import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostModel } from './services/post.model';
import { PostService } from './services/post.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  posts: PostModel[] = [];
  isLoading: boolean = false;
  error: HttpErrorResponse | null = null;

  fetchSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Omit<PostModel, 'id'>) {
    this.postService.onPostCreate(postData);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.fetchSubscription = this.postService.onPostsFetch().subscribe({
      next: (posts) => {
        this.error = null;
        this.posts = posts;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.error = error;
      },
      complete: () => {},
    });
    this.isLoading = false;
  }

  onClearPosts() {
    this.postService.onAllPostsDelete().subscribe(() => {
      this.posts = [];
    });
  }

  ngOnDestroy() {
    this.fetchSubscription.unsubscribe();
  }
}
