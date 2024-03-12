import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private isAuthed: BehaviorSubject<boolean>;

  constructor() {
    this.isAuthed = new BehaviorSubject<boolean>(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthed.asObservable();
  }

  logIn() {
    this.setValue(true);
  }
  logOut() {
    this.setValue(false);
  }

  private setValue(newValue: boolean): void {
    this.isAuthed.next(newValue);
  }
}
