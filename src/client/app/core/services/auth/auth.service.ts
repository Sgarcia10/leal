import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {}

  login(): Observable<boolean> {
    return of(true).pipe();
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
