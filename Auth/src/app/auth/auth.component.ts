import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData, AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  form: FormGroup;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup<{
      email: FormControl<string | null>;
      password: FormControl<string | null>;
    }>({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onModeSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    let observable: Observable<AuthData>;

    this.isLoading = true;
    this.isLoginMode
      ? (observable = this.authService.login(this.form.value))
      : (observable = this.authService.signup(this.form.value));

    observable.subscribe({
      next: (response) => {
        this.error = null;
        // console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (error: string) => {
        this.isLoading = false;
        this.error = error;
        console.error({ error });
      },
    });

    this.form.reset();
  }
}
