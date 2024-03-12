import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
export interface AuthData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = new BehaviorSubject<UserModel>(null);
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}
  signup(useData: { email: string; password: string }) {
    return this.http
      .post<AuthData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAKghnUhykSNOtaTR7oRppPLq2o6YhtWA',
        {
          ...useData,
          returnSecureToken: true,
        },
      )
      .pipe(catchError(this.errorHandler));
  }

  login(useData: { email: string; password: string }) {
    return this.http
      .post<AuthData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAKghnUhykSNOtaTR7oRppPLq2o6YhtWA',
        {
          ...useData,
          returnSecureToken: true,
        },
      )
      .pipe(
        tap((response) => {
          console.log('TAP');
          const { email, localId, idToken, expiresIn } = response;
          this.authHandler(email, localId, idToken, +expiresIn);
        }),
        catchError(this.errorHandler),
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private authHandler(
    email: string,
    userId: string,
    token: string,
    expiresIn: number,
  ) {
    const expirationDate = new Date(new Date().getMinutes() + expiresIn * 1000);
    const user = new UserModel(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private errorHandler(error: HttpErrorResponse) {
    let errorMessage: string;
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already registered';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Wrong email or password!';
        break;
      default:
        errorMessage = 'Unknown error occurred!';
    }
    return throwError(errorMessage);
  }
}
