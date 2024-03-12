import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const updatedRequest = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(updatedRequest);
      }),
    );
  }
}
