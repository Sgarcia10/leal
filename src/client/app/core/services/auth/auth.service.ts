import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../models/loginDTO';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { map, tap } from 'rxjs/operators';
import { UserDTO } from '../../models/userDTO';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<User> {
    return this.http.post<UserDTO>('/api/user/login', loginDTO).pipe(
      tap(userDto => {
        if (userDto && userDto.token) {
          localStorage.setItem('currentUser', JSON.stringify(userDto));
        }
      }),
      map(userDto => userDto.user)
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (isNullOrUndefined(currentUser)) return false;
    else return true;
  }
}
