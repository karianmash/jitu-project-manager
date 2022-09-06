import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/api/api';
import { UserResponce } from 'src/app/interface/user-responce';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: string = 'false';
  name: string =
    JSON.parse(localStorage.getItem('userInfo'))?.user.user_name || '';

  constructor(private http: HttpClient) {}

  // create user
  createUser(user: User): void {
    this.http.post<User>(`${API_URL}/users/register`, user).subscribe((res) => {
      console.log(res);
    });
  }

  // login user
  loginUser(user: User): Observable<UserResponce> {
    return this.http.post<UserResponce>(`${API_URL}/users/login`, user);
  }

  // logout
  logout() {
    localStorage.removeItem('userInfo');
    return (this.isLoggedIn = 'false');
  }

  setLoginStatus(status: string) {
    this.isLoggedIn = status;
  }
}
