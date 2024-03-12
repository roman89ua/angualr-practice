import { Injectable } from '@angular/core';
import { PostModel } from './post.model';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { RawPosts } from '../types/RawPost';
import { PostCreateResponseModel } from './post-create-response.model';
import { Subscription, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  cretePostSubscription: Subscription;
  constructor(private http: HttpClient) {}

  onPostCreate(formData: Omit<PostModel, 'id'>) {
    if (!!this.cretePostSubscription) {
      this.cretePostSubscription.unsubscribe();
    }

    this.cretePostSubscription = this.http
      .post<PostCreateResponseModel>(
        'https://angular-practice-9ff9d-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        formData,
        {
          observe: 'events',
        },
      )
      .subscribe((events) => {
        console.log(events.type);
        console.log(HttpEventType[events.type]);
      });
  }
  onPostsFetch() {
    return this.http
      .get<RawPosts>(
        'https://angular-practice-9ff9d-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        },
      )
      .pipe(
        map((responseData) => {
          const result: PostModel[] = [];
          for (let key in responseData) {
            result.push({ ...responseData[key], id: key });
          }
          return result;
        }),
        catchError((newError: HttpErrorResponse) => {
          return throwError(newError);
        }),
      );
  }

  onAllPostsDelete() {
    return this.http.delete<null>(
      'https://angular-practice-9ff9d-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
    );
  }
}
