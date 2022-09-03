import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  name: string = 'Karian Mash';
  isLoggedIn: string = 'true';

  constructor(private http: HttpClient) {}

  getLogInStatus() {
    return this.isLoggedIn;
  }

  logout(): string {
    return (this.isLoggedIn = 'false');
  }

  // create user
  createUser(user: { user_name: string; email: string; password: string }): void {
    this.http
      .post('http://127.0.0.1:8000/api/users/register', user)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
