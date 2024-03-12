import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  private isLoggedInSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.isLoggedInSubscription = this.authService
      .isLoggedIn()
      .subscribe((isLoggedIn: boolean) => (this.isLoggedIn = isLoggedIn));
  }
  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe();
  }

  onLogin() {
    this.authService.logIn();
    this.location.back();
  }

  onLogout() {
    this.authService.logOut();
    this.location.back();
  }
}
