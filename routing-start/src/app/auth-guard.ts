import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGard: CanActivateFn = (): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let isAuthed: boolean;
  authService.isLoggedIn().subscribe((is: boolean) => {
    isAuthed = is;
  });
  if (isAuthed) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
